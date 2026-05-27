import { useEffect, useState } from "react";

const Instagram = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const Linkedin = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const MessageCircle = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

const ExternalLink = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

const projects = [
    {
        title: "Web Dusun Tegalurung",
        description: "Website profil dusun dengan informasi utama, dokumentasi, dan tampilan publik yang mudah dibaca.",
        image: "/images/webtegalurung.png",
        link: "https://dusuntegalurung.netlify.app/",
        accent: "border-emerald-200",
        label: "Community Web",
    },
    {
        title: "Findive",
        description: "Website perusahaan dengan presentasi layanan yang bersih, visual, dan langsung ke kebutuhan pengunjung.",
        image: "/images/webfindive.png",
        link: "https://findives.netlify.app/",
        accent: "border-blue-200",
        label: "Company Profile",
    },
    {
        title: "Duat Duit",
        description: "Aplikasi web finansial dengan fokus pada pengalaman yang ringkas dan mudah dipahami.",
        image: "/images/webduatduit.png",
        link: "https://duatduit.netlify.app/",
        accent: "border-amber-200",
        label: "Web App",
    },
];

const socials = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/anugraha_gs?igsh=MWR5d2Q5eXd5aW53NA==",
        Icon: Instagram,
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/6285702055011",
        Icon: MessageCircle,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/Anugraha-Galih-Saputra",
        Icon: Linkedin,
    },
];

function Dashboard() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
                    <button onClick={() => scrollToSection("profile")} className="font-poppins text-sm font-bold text-slate-950 sm:text-base">
                        Anugraha GS
                    </button>
                    <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
                        {["profile", "portfolio", "contact"].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="rounded-full px-3 py-2 text-xs font-semibold capitalize text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 sm:px-4 sm:text-sm"
                            >
                                {item === "contact" ? "kontak" : item}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            <main>
                <section id="profile" className="overflow-hidden bg-white">
                    <div className="mx-auto grid min-h-[calc(100vh-65px)] max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
                        <div className={`${isVisible ? "fade-in-up" : "opacity-0"} order-2 lg:order-1`}>
                            <p className="font-poppins text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">Web Developer</p>
                            <h1 className="mt-4 font-poppins text-5xl font-bold leading-[0.98] text-slate-950 sm:text-6xl lg:text-7xl">
                                Anugraha Galih Saputra
                            </h1>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                                Saya membangun website yang rapi, responsif, dan mudah digunakan. Fokus saya ada di pengalaman pengguna,
                                visual yang bersih, serta detail kecil yang membuat website terasa matang.
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <button
                                    onClick={() => scrollToSection("portfolio")}
                                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                                >
                                    Lihat Portfolio
                                </button>
                                <button
                                    onClick={() => scrollToSection("contact")}
                                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
                                >
                                    Hubungi Saya
                                </button>
                            </div>
                            <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
                                {["Responsive", "React", "Tailwind"].map((skill) => (
                                    <div key={skill} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-center text-xs font-bold text-slate-700 sm:text-sm">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`${isVisible ? "fade-in-up delay-short" : "opacity-0"} order-1 lg:order-2`}>
                            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm sm:max-w-md lg:max-w-lg">
                                <div className="absolute inset-0 rounded-lg bg-blue-100"></div>
                                <img
                                    src="/images/fotogua.png"
                                    alt="Anugraha Galih Saputra"
                                    className="absolute inset-x-4 bottom-0 z-10 h-[92%] w-[calc(100%-2rem)] object-contain fade-mask sm:inset-x-8 sm:w-[calc(100%-4rem)]"
                                />
                                <div className="absolute left-0 top-6 z-20 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-xl">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Based in</p>
                                    <p className="font-poppins text-lg font-bold text-slate-950">Yogyakarta</p>
                                </div>
                                <div className="absolute bottom-8 right-0 z-20 rounded-lg border border-blue-100 bg-white px-4 py-3 shadow-xl">
                                    <p className="font-poppins text-2xl font-bold text-blue-600">3</p>
                                    <p className="text-xs font-semibold text-slate-500">Featured Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-950 px-4 py-14 text-white sm:px-6">
                    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                        <div>
                            <p className="font-poppins text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Tentang Saya</p>
                            <h2 className="mt-3 font-poppins text-3xl font-bold sm:text-4xl">Membuat interface yang enak dipakai, bukan cuma enak dilihat.</h2>
                        </div>
                        <p className="text-base leading-8 text-slate-300 sm:text-lg">
                            Saya mahasiswa UPN "Veteran" Yogyakarta yang tertarik pada web development dan mobile development.
                            Dalam project, saya suka membuat struktur yang jelas, tampilan yang konsisten, dan halaman yang tetap nyaman
                            dipakai di layar kecil maupun besar.
                        </p>
                    </div>
                </section>

                <section className="bg-white px-4 py-16 sm:px-6">
                    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                            <p className="font-poppins text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Academy</p>
                            <h2 className="mt-3 font-poppins text-4xl font-bold text-slate-950">SMAN 7 Yogyakarta</h2>
                            <p className="mt-5 text-base leading-8 text-slate-600">
                                Bagian pendidikan dibuat lebih sederhana agar tetap terbaca jelas dan tidak menabrak elemen lain di mobile.
                            </p>
                        </div>
                        <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
                            <img src="/images/fotosma7.png" alt="SMAN 7 Yogyakarta" className="aspect-[16/10] w-full object-cover" />
                        </div>
                    </div>
                </section>

                <section id="portfolio" className="bg-slate-50 px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="font-poppins text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">Selected Work</p>
                                <h2 className="mt-3 font-poppins text-4xl font-bold text-slate-950 sm:text-5xl">Portfolio</h2>
                            </div>
                            <p className="max-w-xl text-base leading-7 text-slate-600">
                                Tiga project utama yang ditampilkan tanpa dummy content, lengkap dengan preview dan link langsung.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-6 lg:grid-cols-3">
                            {projects.map((project) => (
                                <article key={project.link} className={`overflow-hidden rounded-lg border ${project.accent} bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
                                        <div className="overflow-hidden bg-slate-100">
                                            <img src={project.image} alt={project.title} className="aspect-[16/11] w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center justify-between gap-3">
                                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{project.label}</span>
                                                <ExternalLink className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <h3 className="mt-4 font-poppins text-2xl font-bold text-slate-950">{project.title}</h3>
                                            <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
                                            <p className="mt-5 text-sm font-bold text-blue-600">Buka project</p>
                                        </div>
                                    </a>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="bg-white px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <div className="rounded-lg border border-slate-200 bg-slate-950 px-5 py-8 text-white sm:px-8 md:flex md:items-center md:justify-between">
                            <div>
                                <p className="font-poppins text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Contact</p>
                                <h2 className="mt-3 font-poppins text-3xl font-bold">Mari terhubung</h2>
                            </div>
                            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0">
                                {socials.map(({ label, href, Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50 hover:text-blue-700"
                                    >
                                        <Icon className="h-5 w-5" />
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-slate-200 bg-white px-4 py-6 text-center text-sm text-slate-500">
                &copy; 2025 Anugraha Galih Saputra. All rights reserved.
            </footer>
        </div>
    );
}

export default Dashboard;
