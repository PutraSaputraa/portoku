import React, { useState, useEffect } from 'react';

// Custom SVG Icons
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

function Dashboard() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Full-stack online store with React.js and payment integration",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=250&fit=crop",
            link: "#"
        },
        {
            title: "Portfolio CMS",
            description: "Content management system for creative professionals",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
            link: "#"
        },
        {
            title: "Task Manager App",
            description: "Collaborative productivity tool with real-time updates",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop",
            link: "#"
        },
        {
            title: "Restaurant Booking",
            description: "Reservation system with menu showcase and table management",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
            link: "#"
        },
        {
            title: "Fitness Tracker",
            description: "Health monitoring dashboard with progress visualization",
            image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=250&fit=crop",
            link: "#"
        },
        {
            title: "Blog Platform",
            description: "Modern blogging system with markdown support",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop",
            link: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans relative">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');

                * {
                    font-family: 'Inter', sans-serif;
                    scroll-behavior: smooth;
                }

                .fade-in {
                    animation: fadeIn 1s ease-in;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .slide-in-left {
                    animation: slideInLeft 0.8s ease-out;
                }

                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                .slide-in-right {
                    animation: slideInRight 0.8s ease-out;
                }

                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
            `}</style>

            {/* ===== Navbar ===== */}
            <nav className="top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
                <div className="container mx-auto py-4 flex justify-center gap-8">
                    <button
                        onClick={() => scrollToSection('profile')}
                        className="text-blue-600 font-semibold hover:text-blue-800 transition"
                    >
                        Profile
                    </button>
                    <button
                        onClick={() => scrollToSection('portfolio')}
                        className="text-blue-600 font-semibold hover:text-blue-800 transition"
                    >
                        Portfolio
                    </button>
                    <button
                        onClick={() => scrollToSection('sosmed')}
                        className="text-blue-600 font-semibold hover:text-blue-800 transition"
                    >
                        Sosmed
                    </button>
                </div>
            </nav>

            {/* ===== Hero / Profile Section ===== */}
            <section id="profile" className="relative flex items-center pt-32 pb-12" style={{
                background: 'linear-gradient(to bottom, #EAF3FF 0%, #ffffff 100%)'
            }}>
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className={`${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight" style={{ color: '#007BFF' }}>
                                <div>Anugraha</div>
                                <div>Galih</div>
                                <div>Saputra</div>
                            </h1>
                            <p className="text-2xl md:text-3xl font-light text-gray-700 mt-2">
                                Web Developer
                            </p>
                        </div>

                        <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'} flex justify-center md:justify-end`}>
                            <img
                                src="/images/fotogua.png"
                                alt="Anugraha Galih Saputra"
                                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Sosmed Section ===== */}
            <section id="sosmed" className="py-10 bg-gray-50">
                <div className={`${isVisible ? 'fade-in' : 'opacity-0'} container mx-auto px-6`}>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <a href="https://www.instagram.com/anugraha_gs?igsh=MWR5d2Q5eXd5aW53NA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                            style={{ border: '2px solid #007BFF' }}>
                            <Instagram className="w-6 h-6" style={{ color: '#007BFF' }} />
                            <span className="font-medium" style={{ color: '#007BFF' }}>Instagram</span>
                        </a>

                        <a href="https://wa.me/085702055011"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                            style={{ border: '2px solid #007BFF' }}>
                            <MessageCircle className="w-6 h-6" style={{ color: '#007BFF' }} />
                            <span className="font-medium" style={{ color: '#007BFF' }}>WhatsApp</span>
                        </a>

                        <a href="https://www.linkedin.com/in/Anugraha-Galih-Saputra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                            style={{ border: '2px solid #007BFF' }}>
                            <Linkedin className="w-6 h-6" style={{ color: '#007BFF' }} />
                            <span className="font-medium" style={{ color: '#007BFF' }}>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* ===== Portfolio Section ===== */}
            <section id="portfolio" className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#007BFF' }}>
                        Portfolio
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2" style={{ color: '#007BFF' }}>
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {project.description}
                                    </p>
                                    <a href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-all duration-300 hover:shadow-lg"
                                        style={{ backgroundColor: '#007BFF' }}>
                                        <span>View Project</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Footer ===== */}
            <footer className="py-8 bg-white border-t border-gray-200">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm" style={{ color: '#007BFF' }}>
                        © 2025 Anugraha Galih Saputra. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Dashboard;
