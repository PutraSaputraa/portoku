import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Icon from "./components/Icon";
import ImageGallery from "./components/ImageGallery";
import usePageMotion from "./hooks/usePageMotion";
import useProjectDeck from "./hooks/useProjectDeck";
import { achievements, certifications, contactEmail, getProjectAnchor, getProjectPath, projects, socials } from "./data/portfolio";

const SECTION_IDS = ["profile", "portfolio", "contact"];
const PROJECT_IDS = projects.map(getProjectAnchor);
const SITE_TITLE = "Anugraha Galih Saputra | Web Developer";
const shortTitle = (project) => project.slug === "Skripsi" ? "Klasifikasi usia dengan CNN dan PSO" : project.title;
const hasWebsite = (project) => /^https?:\/\//.test(project.link);
const number = (value) => String(value).padStart(2, "0");

function Header({ activeSection, returnTo }) {
  const navItems = [["profile", "Profil"], ["portfolio", "Portfolio"], ["contact", "Kontak"]];

  return (
    <>
      <a className="skip-link" href="#main-content">Lewati ke konten</a>
      <header className="site-header">
        <div className="content-shell header-inner">
          {returnTo ? <Link className="brand" to="/">Saputra<span>.</span></Link> : <a className="brand" href="#profile">Saputra<span>.</span></a>}
          {returnTo ? (
            <Link className="back-link" to={returnTo}><Icon name="arrowLeft" />Kembali ke portofolio</Link>
          ) : (
            <nav className="main-navigation" aria-label="Navigasi utama">
              <span className="nav-pill" aria-hidden="true" style={{ "--active-index": Math.max(0, navItems.findIndex(([id]) => id === activeSection)) }} />
              {navItems.map(([id, label]) => (
                <a key={id} href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>{label}</a>
              ))}
            </nav>
          )}
        </div>
        <div className="page-progress" aria-hidden="true" />
      </header>
    </>
  );
}

function ProjectNavigation({ currentIndex, progress }) {
  const previous = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  function step(project, direction) {
    const label = direction === "previous" ? "Proyek sebelumnya" : "Proyek berikutnya";
    const icon = <Icon name={direction === "previous" ? "arrowLeft" : "arrowRight"} />;
    return project ? <a className="icon-button" href={`#${getProjectAnchor(project)}`} aria-label={`${label}: ${shortTitle(project)}`}>{icon}</a> : <button className="icon-button" type="button" aria-label={label} disabled>{icon}</button>;
  }

  return (
    <nav className="project-navigation" aria-label="Navigasi proyek">
      <div className="content-shell project-navigation-inner">
        <div className="project-current" aria-live="polite" aria-atomic="true">
          <span className="project-current-number">{number(currentIndex + 1)}<span> / {number(projects.length)}</span></span>
          <span className="project-current-title">{shortTitle(projects[currentIndex])}</span>
        </div>
        <div className="project-navigation-arrows">{step(previous, "previous")}{step(next, "next")}</div>
      </div>
      <div className="project-deck-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
    </nav>
  );
}

function ProjectShowcase({ project, index, isCurrent, pinned, isVisible }) {
  const id = getProjectAnchor(project);
  const navigate = useNavigate();

  function openDetail(event) {
    if (!document.startViewTransition) return;
    event.preventDefault();
    const image = event.currentTarget.closest(".project-showcase").querySelector(".gallery-image-current");
    image?.style.setProperty("view-transition-name", "project-hero");
    document.startViewTransition(() => {
      navigate(getProjectPath(project));
    });
  }

  return (
    <article id={`${id}-panel`} className={`project-showcase ${isCurrent ? "is-current" : ""}`} aria-labelledby={`${id}-title`}>
      <span className="project-ghost-number" aria-hidden="true">{number(index + 1)}</span>
      <div className="project-layout">
        <div className="project-visual">
          <ImageGallery images={project.images} title={project.title} eager={isCurrent} autoPlay autoPlayActive={isCurrent && isVisible} />
        </div>
        <div className="project-info">
          <p className="project-index"><span>{number(index + 1)}</span><span className="project-index-line" />{project.year}</p>
          <p className="project-category">{project.label}</p>
          <h3 id={`${id}-title`}>{shortTitle(project)}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="project-stack" aria-label="Teknologi dan fitur">
            {project.stack.map((item, stackIndex) => <li key={item} style={{ "--stack-index": stackIndex }}>{item}</li>)}
          </ul>
          <div className="project-actions">
            <Link className="button button-primary" to={getProjectPath(project)} onClick={openDetail}>Lihat detail proyek<Icon name="arrowRight" /></Link>
            {hasWebsite(project) && <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">Lihat website<Icon name="external" /></a>}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectDeck() {
  const { trackRef, stageRef, panelsRef, pinned, index, visible, progress } = useProjectDeck(PROJECT_IDS);

  useEffect(() => {
    if (!visible || !projects[index + 1]) return;
    const image = new Image();
    image.src = projects[index + 1].image;
  }, [index, visible]);

  return (
    <div className={`project-deck ${pinned ? "is-pinned" : ""}`} ref={trackRef}>
      <div className="project-scroll-markers" aria-hidden="true">
        {PROJECT_IDS.map((id) => <span key={id} id={id} className="project-scroll-marker" />)}
      </div>
      <div className="project-deck-stage" ref={stageRef}>
        <ProjectNavigation currentIndex={index} progress={progress} />
        <div className="project-panels" ref={panelsRef}>
          {projects.map((project, projectIndex) => <ProjectShowcase key={project.slug} project={project} index={projectIndex} isCurrent={index === projectIndex} pinned={pinned} isVisible={visible} />)}
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    if (!copyStatus) return undefined;
    const timeout = window.setTimeout(() => setCopyStatus(""), 3500);
    return () => window.clearTimeout(timeout);
  }, [copyStatus]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopyStatus("Email disalin");
    } catch {
      setCopyStatus("Klik alamat email untuk menghubungi saya.");
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="content-shell contact-layout" data-reveal>
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Mari terhubung.</h2>
          <div className="contact-email-row">
            <a className="contact-email" href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <button className="icon-button copy-button" type="button" onClick={copyEmail} aria-label="Salin alamat email"><Icon name={copyStatus === "Email disalin" ? "check" : "copy"} /></button>
          </div>
          <p className="copy-status" aria-live="polite">{copyStatus}</p>
        </div>
        <div className="contact-socials">
          {socials.filter((social) => social.icon !== "mail").map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"><Icon name={social.icon} />{social.label}<Icon name="external" /></a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-shell footer-inner">
        <p>&copy; {new Date().getFullYear()} Anugraha Galih Saputra</p>
        <a href="#profile">Kembali ke atas<Icon name="arrowUp" /></a>
      </div>
    </footer>
  );
}

function Dashboard() {
  const { pageRef, activeSection } = usePageMotion(SECTION_IDS);

  useEffect(() => { document.title = SITE_TITLE; }, []);

  return (
    <div className="site-page" ref={pageRef}>
      <Header activeSection={activeSection} />
      <main id="main-content" tabIndex={-1}>
        <section id="profile" className="profile-section">
          <div className="profile-blobs" aria-hidden="true"><span /><span /><span /></div>
          <div className="content-shell profile-layout">
            <div className="profile-copy" data-reveal>
              <p className="section-kicker">Web Developer</p>
              <h1><span className="hero-line"><span>Anugraha</span></span><span className="hero-line"><span>Galih Saputra</span></span></h1>
              <p className="profile-intro">Saya membangun website yang rapi, responsif, dan mudah digunakan. Fokus saya ada di pengalaman pengguna, visual yang bersih, serta detail kecil yang membuat website terasa matang.</p>
              <div className="profile-actions">
                <a className="button button-primary" href="#portfolio">Lihat Portfolio<Icon name="arrowRight" /></a>
                <a className="button button-secondary" href="#contact">Hubungi Saya</a>
              </div>
              <dl className="profile-facts">
                <div><dt>Universitas</dt><dd>UPN "Veteran" Yogyakarta</dd></div>
                <div><dt>Fokus</dt><dd>Web, Mobile App,<br />Machine Learning</dd></div>
              </dl>
            </div>
            <figure className="profile-portrait" data-reveal data-reveal-delay="100">
              <div className="portrait-image-wrap">
                <img src="/images/optimized/fotogua.webp" alt="Anugraha Galih Saputra" width="2883" height="2883" fetchPriority="high" className="portrait-image" />
              </div>
              <figcaption><span>Web Developer</span><span>Yogyakarta, Indonesia</span></figcaption>
            </figure>
          </div>
          <div className="profile-marquee" aria-hidden="true">
            <div className="profile-marquee-track">
              {Array.from({ length: 2 }, (_, copy) => (
                <span key={copy} className="profile-marquee-content">
                  {["Web Development", "Mobile App", "Machine Learning", "UI Engineering", "Clean Code"].map((item) => (
                    <span key={item} className="profile-marquee-item">{item}<i /></span>
                  ))}
                </span>
              ))}
            </div>
          </div>
          <div className="content-shell profile-bottom"><a href="#portfolio">Jelajahi Proyek<Icon name="arrowRight" /></a><span>Web &middot; Mobile &middot; Machine Learning</span></div>
        </section>

        <section id="portfolio" className="portfolio-section" aria-labelledby="portfolio-heading">
          <div className="content-shell section-heading portfolio-heading" data-reveal>
            <div><p className="section-kicker">Selected Work</p><h2 id="portfolio-heading">Portfolio</h2></div>
            <p>Aplikasi web dan machine learning yang saya kerjakan.</p>
          </div>
          <ProjectDeck />
        </section>

        <section id="certification" className="credentials-section" aria-labelledby="certification-heading">
          <div className="content-shell">
            <div className="section-heading" data-reveal><div><p className="section-kicker">Certification</p><h2 id="certification-heading">Sertifikasi</h2></div></div>
            {certifications.map((item) => (
              <article className="credential-row" key={item.title}>
                <div className="credential-copy" data-reveal>
                  <h3>{item.title}</h3><p>{item.summary}</p>
                  <details className="learning-details"><summary>Yang saya pelajari<Icon name="plus" /></summary><p>{item.personalImpact}</p></details>
                </div>
                <div className="credential-media" data-reveal data-reveal-delay="80"><ImageGallery images={item.images} title={item.title} className="document-gallery" /></div>
              </article>
            ))}
          </div>
        </section>

        <section id="achievement" className="credentials-section achievement-section" aria-labelledby="achievement-heading">
          <div className="content-shell">
            <div className="section-heading" data-reveal><div><p className="section-kicker">Achievement</p><h2 id="achievement-heading">Penghargaan dan prestasi</h2></div></div>
            {achievements.map((item) => (
              <article className="credential-row" key={item.title}>
                <div className="credential-copy" data-reveal>
                  <h3>{item.title}</h3><p>{item.summary}</p>
                  <details className="learning-details"><summary>Pengalaman saya<Icon name="plus" /></summary><p>{item.personalImpact}</p></details>
                </div>
                <div className="credential-media" data-reveal data-reveal-delay="80"><ImageGallery images={[item.image]} title={item.title} className="document-gallery" /></div>
              </article>
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const { pageRef } = usePageMotion();

  useEffect(() => {
    document.title = project ? `${project.title} | Anugraha Galih Saputra` : `Proyek tidak ditemukan | Anugraha Galih Saputra`;
  }, [project]);

  if (!project) {
    return (
      <div className="site-page" ref={pageRef}>
        <Header returnTo="/#portfolio" />
        <main id="main-content" className="content-shell not-found" tabIndex={-1}>
          <p className="section-kicker">Project</p><h1>Proyek tidak ditemukan.</h1>
          <Link className="button button-primary" to="/#portfolio"><Icon name="arrowLeft" />Kembali ke portofolio</Link>
        </main>
      </div>
    );
  }

  const nextProject = projects[projects.indexOf(project) + 1];
  const returnTo = `/#${getProjectAnchor(project)}`;

  return (
    <div className="site-page detail-page" ref={pageRef}>
      <Header returnTo={returnTo} />
      <main id="main-content" tabIndex={-1}>
        <header className="content-shell detail-heading" data-reveal>
          <p className="section-kicker">{project.label}</p><h1>{project.title}</h1>
          <p className="detail-intro">{project.description}</p>
          <ul className="project-stack" aria-label="Teknologi dan fitur">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
        </header>
        <div className="content-shell detail-layout">
          <div className="detail-gallery" data-reveal><ImageGallery key={project.slug} images={project.images} title={project.title} eager heroTransition /></div>
          <div className="detail-story" data-reveal data-reveal-delay="80">
            <dl className="detail-metadata"><div><dt>Tahun</dt><dd>{project.year}</dd></div><div><dt>Jenis proyek</dt><dd>{project.type}</dd></div></dl>
            <section><h2>Tentang proyek</h2><p>{project.summary}</p></section>
            <section><h2>Manfaat</h2><p>{project.impact}</p></section>
            <section><h2>Pengalaman saya</h2><p>{project.personalImpact}</p></section>
            {hasWebsite(project) && <a className="button button-primary" href={project.link} target="_blank" rel="noopener noreferrer">Buka website proyek<Icon name="external" /></a>}
          </div>
        </div>
        <nav className="content-shell detail-next" aria-label="Lanjut menjelajahi proyek">
          <Link className="back-link" to={returnTo}><Icon name="arrowLeft" />Semua proyek</Link>
          {nextProject && <Link className="next-project-link" to={getProjectPath(nextProject)}><span>Proyek berikutnya<strong>{shortTitle(nextProject)}</strong></span><Icon name="arrowRight" /></Link>}
        </nav>
      </main>
    </div>
  );
}

export default Dashboard;
export { ProjectDetail };
