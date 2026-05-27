import { useEffect, useState } from "react";

const Instagram = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const Linkedin = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const MessageCircle = ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        description: "Static website untuk profil Dusun Tegalurung.",
        image: "/images/webtegalurung.png",
        link: "https://dusuntegalurung.netlify.app/",
    },
    {
        title: "Duat Duit",
        description: "Aplikasi web untuk kebutuhan pencatatan dan pengelolaan duit.",
        image: null,
        link: "https://duatduit.netlify.app/",
    },
    {
        title: "Findives",
        description: "Aplikasi web Findives yang dipublikasikan melalui Netlify.",
        image: null,
        link: "https://findives.netlify.app/",
    },
];

function Dashboard() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div>
            <div className="h-16 flex items-center bg-blue-100">
                <h1 className="text-blue-600 font-poppins text-xl pt-2 font-semibold ml-4">About Saputra</h1>
            </div>

            <section className="min-h-screen">
                <div className="h-[50vh] relative bg-gradient-to-b from-blue-100 to-white">
                    <img
                        src="/images/fotogua.png"
                        alt="Foto Closeup Wajah"
                        className="absolute fade-mask z-10"
                    />
                    <h1 className="absolute bottom-40 left-2 font-poppins text-7xl font-bold text-blue-600 tracking-wider z-0">Anugraha</h1>
                    <h1 className="absolute bottom-20 left-8 font-poppins text-7xl font-bold text-blue-500 tracking-wider z-0">Galih</h1>
                    <h1 className="absolute bottom-3 left-4 font-poppins text-7xl font-bold text-blue-600 tracking-wider z-20">Saputra</h1>
                </div>

                <div className="h-60 relative">
                    <h1 className="absolute top-16 left-4 font-poppins text-2xl font-bold text-blue-600">"Aku adalah spiderman, pelindung masyarakat dan tetangga yang ramah"</h1>
                </div>

                <div className="min-h-[75vh] relative bg-blue-500 flex justify-center">
                    <h1 className="font-poppins text-4xl font-bold text-white mt-16">My academy</h1>
                    <img
                        src="/images/fotosma7.png"
                        alt="SMA7"
                        className="h-[380px] absolute top-44 z-10 rounded-tl-[80px] rounded-br-[80px]"
                    />
                    <h1 className="font-poppins text-3xl font-bold text-white mt-6 absolute bottom-12 left-5">SMAN 7 Yogyakarta</h1>
                </div>
            </section>

            <section id="portfolio" className="bg-white px-4 py-16">
                <div className={`${isVisible ? "fade-in" : "opacity-0"} mx-auto max-w-5xl`}>
                    <h1 className="font-poppins text-4xl font-bold text-blue-600">My Portfolio</h1>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {projects.map((project) => (
                            <a
                                key={project.link}
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="group block overflow-hidden rounded-lg border border-blue-100 bg-blue-50 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg"
                            >
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
                                ) : (
                                    <div className="flex h-44 items-center justify-center bg-blue-600">
                                        <span className="font-poppins text-3xl font-bold text-white">{project.title}</span>
                                    </div>
                                )}
                                <div className="p-5">
                                    <h2 className="font-poppins text-2xl font-bold text-blue-700">{project.title}</h2>
                                    <p className="mt-3 font-poppins text-sm leading-6 text-slate-600">{project.description}</p>
                                    <p className="mt-5 inline-flex items-center gap-2 font-poppins text-sm font-semibold text-blue-600 group-hover:text-blue-800">
                                        Kunjungi website
                                        <ExternalLink className="h-4 w-4" />
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section id="sosmed" className="py-10 bg-gray-50">
                <div className={`${isVisible ? "fade-in" : "opacity-0"} container mx-auto px-6`}>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <a
                            href="https://www.instagram.com/anugraha_gs?igsh=MWR5d2Q5eXd5aW53NA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                            style={{ border: "2px solid #007BFF" }}
                        >
                            <Instagram className="w-6 h-6" style={{ color: "#007BFF" }} />
                            <span className="font-medium" style={{ color: "#007BFF" }}>Instagram</span>
                        </a>

                        <a
                            href="https://wa.me/6285702055011"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                            style={{ border: "2px solid #007BFF" }}
                        >
                            <MessageCircle className="w-6 h-6" style={{ color: "#007BFF" }} />
                            <span className="font-medium" style={{ color: "#007BFF" }}>WhatsApp</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/Anugraha-Galih-Saputra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                            style={{ border: "2px solid #007BFF" }}
                        >
                            <Linkedin className="w-6 h-6" style={{ color: "#007BFF" }} />
                            <span className="font-medium" style={{ color: "#007BFF" }}>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </section>

            <footer className="py-8 bg-white border-t border-gray-200">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm" style={{ color: "#007BFF" }}>
                        &copy; 2025 Anugraha Galih Saputra. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Dashboard;
