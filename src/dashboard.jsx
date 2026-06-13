import { Link, useNavigate, useParams } from "react-router-dom";
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

const ArrowLeft = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);

const projects = [
    {
        slug: "findive",
        title: "Findive",
        description: "Website perusahaan dengan presentasi layanan yang bersih, visual, dan langsung ke kebutuhan pengunjung.",
        image: "/images/Findive1.png",
        images: ["/images/Findive1.png", "/images/Findive2.png", "/images/Findive3.png"],
        link: "https://findives.netlify.app/",
        accent: "border-blue-200",
        label: "Company Profile",
        year: "2026",
        type: "Company Profile",
        stack: ["React", "Tailwind CSS", "Netlify"],
        summary: "Findive dibuat sebagai website company profile yang menampilkan identitas, layanan, dan nilai perusahaan dengan alur baca yang jelas. Halamannya dirancang agar pengunjung cepat memahami fokus bisnis dan mudah menuju informasi penting.",
        impact: "Website ini membantu presentasi layanan terlihat lebih profesional, mengurangi kebingungan pengunjung baru, dan memberi kanal digital yang siap dibagikan ke calon klien maupun partner.",
        personalImpact: "Proyek ini menjadi pengalaman pertama saya dalam mendapatkan klien secara langsung. Melalui proses ini, saya belajar berinteraksi dengan klien, menggali keluhan serta kebutuhan mereka, kemudian menerjemahkannya menjadi solusi website yang lebih jelas, terarah, dan sesuai dengan masalah yang ingin diselesaikan.",
    },
    {
        slug: "open-cave-trip",
        title: "Open Cave Trip",
        description: "Website open trip dengan katalog perjalanan yang rapi, informatif, dan memudahkan pengunjung melihat destinasi, jadwal, harga, serta melakukan pendaftaran secara online.",
        image: "/images/OpenCaveTrip1.png",
        images: ["/images/OpenCaveTrip1.png", "/images/OpenCaveTrip2.png", "/images/OpenCaveTrip3.png"],
        link: "https://opentripzaza.netlify.app/",
        accent: "border-amber-200",
        label: "Open Trip Web Application",
        year: "2026",
        type: "Open Trip Web Application",
        stack: ["React", "Tailwind CSS", "Admin Page", "Worker Page", "Netlify"],
        summary: "Open Cave Trip berisi katalog perjalanan yang menampilkan destinasi, informasi jadwal, harga, dan alur pendaftaran secara ringkas. Project ini juga memiliki page admin untuk mengelola data trip serta page worker untuk membantu proses operasional di sisi petugas.",
        impact: "Pengalaman pemesanan menjadi lebih tertata karena informasi utama tersedia dalam satu tempat. Adanya page admin dan worker membantu pengelolaan trip lebih rapi, mempercepat proses operasional, dan membuat layanan open trip lebih siap menerima peserta.",
        personalImpact: "Proyek ini memberikan saya pengalaman dalam menangani kebutuhan klien yang lebih kompleks. Dalam proyek ini, saya belajar merancang sistem pemesanan online langsung melalui website, membuat halaman worker untuk mengambil job pada setiap open trip, serta mengembangkan halaman admin untuk membuat jadwal, menyetujui pelanggan yang dapat mengikuti trip, dan membagikan job kepada para worker.",
    },
    {
        slug: "duatduit",
        title: "DuatDuit",
        description: "Aplikasi web finansial dengan fokus pada pengalaman yang ringkas dan mudah dipahami.",
        image: "/images/duatduit1.png",
        images: ["/images/duatduit1.png", "/images/duatduit2.png", "/images/duatduit3.png"],
        link: "https://duatduit.netlify.app/",
        accent: "border-blue-200",
        label: "Web App",
        year: "2025",
        type: "Financial Web App",
        stack: ["React", "Tailwind CSS", "Dashboard UI", "Netlify"],
        summary: "DuatDuit adalah aplikasi web finansial yang menekankan tampilan sederhana dan informasi yang mudah dipindai. Struktur antarmukanya dibuat agar pengguna bisa memahami kondisi finansial tanpa merasa terbebani oleh tampilan yang terlalu rumit.",
        impact: "Aplikasi ini membantu pengguna membaca informasi finansial dengan lebih cepat, menjaga fokus pada data penting, dan memberi pengalaman dashboard yang ringan untuk penggunaan berulang.",
        personalImpact: "Melalui proyek ini, saya belajar proses deployment website serta memahami cara mengintegrasikan aplikasi web dengan database Firebase. Pengalaman ini membantu saya memahami bagaimana data, tampilan, dan hosting saling terhubung dalam sebuah produk web yang dapat digunakan secara nyata.",
    },
    {
        slug: "Skripsi",
        title: "Klasifikasi Usia Berbasis Citra Wajah dengan CNN dan PSO",
        description: "Model machine learning untuk mengklasifikasikan kelompok usia dari citra wajah menggunakan CNN yang dioptimasi dengan Particle Swarm Optimization.",
        image: "/images/skripsi1.png",
        images: ["/images/skripsi1.png", "/images/skripsi2.png", "/images/skripsi3.png"],
        link: "-",
        accent: "border-blue-200",
        label: "Machine Learning",
        year: "2026",
        type: "Machine Learning",
        stack: ["Python", "TensorFlow", "OpenCV"],
        summary: "Penelitian ini mengembangkan model klasifikasi usia berbasis citra wajah menggunakan Convolutional Neural Network (CNN) yang dioptimasi dengan Particle Swarm Optimization (PSO). Model diuji pada dua skenario klasifikasi, yaitu 4 kelas dan 5 kelas usia, menggunakan dataset UTKFace Cropped. Optimasi dilakukan pada hyperparameter seperti learning rate, dropout cnn, dropout dense, dan dense units untuk meningkatkan performa model, kemudian hasil model diterapkan ke dalam aplikasi deteksi usia secara realtime.",
        impact: "Penelitian ini menunjukkan bagaimana optimasi hyperparameter dengan PSO dapat membantu meningkatkan performa model CNN dalam tugas klasifikasi usia. Hasilnya dapat menjadi dasar pengembangan sistem deteksi usia berbasis citra wajah yang lebih adaptif untuk kebutuhan analisis demografi, sistem layanan digital, dan aplikasi berbasis computer vision.",
        personalImpact: "Melalui proyek ini, saya mempelajari proses pengembangan sistem machine learning secara end-to-end, mulai dari preprocessing citra wajah, perancangan arsitektur CNN, optimasi hyperparameter menggunakan PSO, evaluasi model, hingga implementasi deteksi usia secara realtime. Pengalaman ini memperkuat pemahaman saya tentang hubungan antara data, algoritma, evaluasi, dan penerapan model AI dalam kasus nyata."
    },
    {
        slug: "aplikasi-bus-antar-provinsi",
        title: "Aplikasi Bus Antar Provinsi",
        description: "Aplikasi mobile untuk pemesanan tiket bus antar provinsi dengan fitur jadwal keberangkatan, peta stasiun bus, pembayaran QR code, dan tiket digital.",
        image: "/images/aplikasi1.png",
        images: ["/images/aplikasi1.png",],
        link: "-",
        accent: "border-green-200",
        label: "Mobile App",
        year: "2026",
        type: "Frontend Mobile App",
        stack: ["Flutter", "Dart", "MockAPI.io", "REST API"],
        summary: "Aplikasi Bus Antar Provinsi merupakan aplikasi mobile yang dibuat menggunakan Flutter dan Dart untuk mempermudah pengguna dalam melakukan pemesanan tiket bus antar provinsi. Aplikasi ini mencakup fitur login, register, profile, dashboard, jadwal bus, daftar stasiun bus, checkout, lintas bus, saldo, cetak tiket, serta laporan bug. Selain itu, aplikasi juga terintegrasi dengan API berbasis MockAPI.io untuk menampilkan data koordinat stasiun bus dan daftar tiket yang tersedia.",
        impact: "Aplikasi ini membantu mendigitalisasi proses pemesanan tiket bus yang sebelumnya dapat dilakukan secara manual. Dengan adanya fitur jadwal keberangkatan, peta stasiun bus, pembayaran melalui QR code, dan tiket digital, pengguna dapat memperoleh pengalaman pemesanan yang lebih praktis, cepat, dan terstruktur melalui perangkat mobile.",
        personalImpact: "Melalui proyek ini, saya mempelajari proses pengembangan aplikasi mobile menggunakan Flutter dan Dart, mulai dari pembuatan antarmuka pengguna, pengelolaan navigasi halaman, integrasi API, hingga penerapan fitur pemesanan dan cetak tiket. Proyek ini juga membantu saya memahami bagaimana aplikasi mobile dapat dirancang agar memiliki alur penggunaan yang jelas dan mendukung kebutuhan transportasi digital."
}
];

const socials = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/anugraha_gs?igsh=MWR5d2Q5eXd5aW53NA==",
        Icon: Instagram,
    },
    {
        label: "Gmail",
        href: "mailto:anugrahags04@gmail.com@gmail.com",
        Icon: MessageCircle,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/Anugraha-Galih-Saputra",
        Icon: Linkedin,
    },
];

const certifications = [
    {
        title: "Sertifikasi Kompetensi Sains Data",
        images: ["/images/Sertifikasi Kompetensi Sains Data1.jpeg", "/images/Sertifikasi Kompetensi Sains Data2.jpeg"],
        summary: "Sertifikasi ini berfokus pada kompetensi dasar hingga praktik dalam bidang sains data. Materinya mencakup tahapan kerja data science, pengolahan data, pemodelan, dan evaluasi hasil agar data dapat digunakan sebagai dasar pengambilan keputusan yang lebih terukur.",
        personalImpact: "Sertifikasi Data Science ini membantu saya mempelajari proses pengolahan data secara menyeluruh, mulai dari mengumpulkan, menelaah, memvalidasi, menentukan objek data, membersihkan data, mengonstruksi data, menentukan label data, membangun model, hingga mengevaluasi hasil pemodelan. Dalam prosesnya, saya juga menggunakan Python sebagai tools utama untuk mengolah dan menganalisis data secara lebih terstruktur.",
    },
];

const achievements = [
    {
        title: "Lomba Desain Rancangan Aplikasi",
        image: "/images/Lomba Desain Rancangan Aplikasi 2021.jpeg",
        summary: "Kompetisi ini berfokus pada penyusunan konsep dan rancangan aplikasi, mulai dari identifikasi masalah, perancangan solusi, desain alur penggunaan, hingga penyampaian ide dalam bentuk presentasi. Kegiatan ini menjadi ruang untuk menguji kemampuan berpikir produk dan komunikasi visual.",
        personalImpact: "Lomba desain/rancangan aplikasi ini merupakan kompetisi pertama yang saya ikuti. Melalui lomba ini, saya belajar mendesain dan merancang aplikasi, bekerja sama dalam tim yang terdiri dari tiga orang, serta mengasah kemampuan presentasi dalam menyampaikan ide dan konsep aplikasi secara jelas.",
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
                        Saputra
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
                            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
                                <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Universitas</p>
                                    <p className="mt-1 text-sm font-bold text-slate-800 sm:text-base">UPN "Veteran" Yogyakarta</p>
                                </div>
                                <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Focus</p>
                                    <p className="mt-1 text-sm font-bold text-slate-800 sm:text-base">Web, Mobile App, Machine Learning</p>
                                </div>
                                <a
                                    href="mailto:anugrahags04@gmail.com"
                                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-blue-300 hover:bg-blue-50"
                                >
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Email</p>
                                    <p className="mt-1 break-words text-sm font-bold text-slate-800 sm:text-base">anugrahags04@gmail.com</p>
                                </a>
                                <a
                                    href="https://portofoliosaputra.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-blue-300 hover:bg-blue-50"
                                >
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Link</p>
                                    <p className="mt-1 break-words text-sm font-bold text-slate-800 sm:text-base">portofoliosaputra.netlify.app</p>
                                </a>
                            </div>
                        </div>

                        <div className={`${isVisible ? "fade-in-up delay-short" : "opacity-0"} order-1 lg:order-2 lg:-mt-8`}>
                            <div className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
                                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/70">
                                    <div className="relative overflow-hidden rounded-md bg-gradient-to-b from-slate-100 to-blue-50">
                                        <img
                                            src="/images/fotogua.png"
                                            alt="Anugraha Galih Saputra"
                                            className="mx-auto aspect-[4/4.6] w-full object-cover object-bottom fade-mask"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3 px-1 pt-4 sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <p className="font-poppins text-lg font-bold text-slate-950">Anugraha Galih Saputra</p>
                                            <p className="text-sm font-medium text-slate-500">Web Developer from Yogyakarta</p>
                                        </div>
                                        <div className="flex gap-2">
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            </p>
                        </div>

                        <div className="mt-10 grid gap-6 lg:grid-cols-3">
                            {projects.map((project) => (
                                <article key={project.link} className={`overflow-hidden rounded-lg border ${project.accent} bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}>
                                    <Link to={`/project/${project.slug}`} className="group block">
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
                                            <p className="mt-5 text-sm font-bold text-blue-600">Lihat detail project</p>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="certification" className="bg-white px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <div>
                            <p className="font-poppins text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">Certification</p>
                            <h2 className="mt-3 font-poppins text-4xl font-bold text-slate-950 sm:text-5xl">Sertifikasi</h2>
                        </div>

                        <div className="mt-10 grid gap-8">
                            {certifications.map((item) => (
                                <article key={item.title} className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {item.images.map((image, index) => (
                                            <div key={image} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                                                <img
                                                    src={image}
                                                    alt={`${item.title} ${index + 1}`}
                                                    className="aspect-[4/3] w-full object-cover object-top"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-1 lg:p-3">
                                        <h3 className="font-poppins text-2xl font-bold text-slate-950">{item.title}</h3>
                                        <div className="mt-5">
                                            <h4 className="font-poppins text-lg font-bold text-slate-950">Summary</h4>
                                            <p className="mt-2 text-base leading-8 text-slate-600">{item.summary}</p>
                                        </div>
                                        <div className="mt-5">
                                            <h4 className="font-poppins text-lg font-bold text-slate-950">Impact kepada saya</h4>
                                            <p className="mt-2 text-base leading-8 text-slate-600">{item.personalImpact}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="achievement" className="bg-slate-50 px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <div>
                            <p className="font-poppins text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">Achievement</p>
                            <h2 className="mt-3 font-poppins text-4xl font-bold text-slate-950 sm:text-5xl">Penghargaan dan Prestasi</h2>
                        </div>

                        <div className="mt-10 grid gap-8">
                            {achievements.map((item) => (
                                <article key={item.title} className="grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-start">
                                    <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="aspect-[4/3] w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="p-1 lg:p-3">
                                        <h3 className="font-poppins text-2xl font-bold text-slate-950">{item.title}</h3>
                                        <div className="mt-5">
                                            <h4 className="font-poppins text-lg font-bold text-slate-950">Summary</h4>
                                            <p className="mt-2 text-base leading-8 text-slate-600">{item.summary}</p>
                                        </div>
                                        <div className="mt-5">
                                            <h4 className="font-poppins text-lg font-bold text-slate-950">Impact kepada saya</h4>
                                            <p className="mt-2 text-base leading-8 text-slate-600">{item.personalImpact}</p>
                                        </div>
                                    </div>
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

function ProjectDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 text-slate-900">
                <div className="max-w-md text-center">
                    <p className="font-poppins text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">Project</p>
                    <h1 className="mt-3 font-poppins text-4xl font-bold text-slate-950">Project tidak ditemukan</h1>
                    <button
                        onClick={() => navigate("/")}
                        className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Kembali ke dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
                    <button onClick={() => navigate("/")} className="font-poppins text-sm font-bold text-slate-950 sm:text-base">
                        Saputra
                    </button>
                    <button
                        onClick={() => navigate("/")}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Dashboard
                    </button>
                </div>
            </nav>

            <main className="px-4 py-10 sm:px-6 lg:py-14">
                <section className="mx-auto max-w-6xl">
                    <p className="font-poppins text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">{project.label}</p>
                    <h1 className="mt-3 font-poppins text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">{project.title}</h1>
                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                            <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600 shadow-sm">
                                {item}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
                    <div className="grid gap-4">
                        {project.images.map((image, index) => (
                            <div key={image} className={`overflow-hidden rounded-lg border ${project.accent} bg-white shadow-sm`}>
                                <img
                                    src={image}
                                    alt={`${project.title} tampilan ${index + 1}`}
                                    className="aspect-[16/10] w-full object-cover object-top"
                                />
                            </div>
                        ))}
                    </div>

                    <aside className="lg:sticky lg:top-24">
                        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="rounded-lg bg-slate-50 p-4">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Tahun Project</p>
                                    <p className="mt-2 font-poppins text-2xl font-bold text-slate-950">{project.year}</p>
                                </div>
                                <div className="rounded-lg bg-slate-50 p-4">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Type</p>
                                    <p className="mt-2 font-poppins text-xl font-bold text-slate-950">{project.type}</p>
                                </div>
                            </div>

                            <div className="mt-7">
                                <h2 className="font-poppins text-2xl font-bold text-slate-950">Summary</h2>
                                <p className="mt-3 text-base leading-8 text-slate-600">{project.summary}</p>
                            </div>

                            <div className="mt-7">
                                <h2 className="font-poppins text-2xl font-bold text-slate-950">Impact</h2>
                                <p className="mt-3 text-base leading-8 text-slate-600">{project.impact}</p>
                            </div>

                            <div className="mt-7">
                                <h2 className="font-poppins text-2xl font-bold text-slate-950">Impact kepada saya</h2>
                                <p className="mt-3 text-base leading-8 text-slate-600">{project.personalImpact}</p>
                            </div>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                                >
                                    Buka link project
                                    <ExternalLink className="h-5 w-5" />
                                </a>
                                <button
                                    onClick={() => navigate("/")}
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
                                >
                                    <ArrowLeft className="h-5 w-5" />
                                    Kembali ke dashboard
                                </button>
                            </div>
                        </div>
                    </aside>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
export { ProjectDetail };
