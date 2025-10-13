import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, MessageCircle, ExternalLink } from 'lucide-react';

function Dashboard() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

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
        <div className="min-h-screen bg-white font-sans">
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

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center" style={{
                background: 'linear-gradient(to bottom, #EAF3FF 0%, #ffffff 100%)'
            }}>
                <div className="container mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className={`${isVisible ? 'slide-in-left' : 'opacity-0'} space-y-6`}>
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight" style={{ color: '#007BFF' }}>
                                <div>Anugraha</div>
                                <div>Galih</div>
                                <div>Saputra</div>
                            </h1>
                            <p className="text-2xl md:text-3xl font-light text-gray-700">
                                Web Developer
                            </p>
                        </div>

                        {/* Profile Image */}
                        <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'} flex justify-center md:justify-end`}>
                            <div className="relative">
                                <img 
                                    src="/images/fotogua.png" 
                                    alt="Anugraha Galih Saputra"
                                    className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className={`${isVisible ? 'fade-in' : 'opacity-0'} flex items-center justify-center gap-6`}>
                        <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-transparent via-blue-300 to-blue-500"></div>
                        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed px-4">
                            I am a web developer specializing in building dynamic websites using React.js for both frontend and backend.
                        </p>
                        <div className="hidden md:block h-px flex-1 bg-gradient-to-l from-transparent via-blue-300 to-blue-500"></div>
                    </div>
                </div>
            </section>

            {/* Social Links Section */}
            <section className="py-16 bg-gray-50">
                <div className={`${isVisible ? 'fade-in' : 'opacity-0'} container mx-auto px-6`}>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <a 
                            href="https://instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                            style={{ border: '2px solid #007BFF' }}
                        >
                            <Instagram className="w-6 h-6" style={{ color: '#007BFF' }} />
                            <span className="font-medium" style={{ color: '#007BFF' }}>Instagram</span>
                        </a>
                        
                        <a 
                            href="https://wa.me/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                            style={{ border: '2px solid #007BFF' }}
                        >
                            <MessageCircle className="w-6 h-6" style={{ color: '#007BFF' }} />
                            <span className="font-medium" style={{ color: '#007BFF' }}>WhatsApp</span>
                        </a>
                        
                        <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                            style={{ border: '2px solid #007BFF' }}
                        >
                            <Linkedin className="w-6 h-6" style={{ color: '#007BFF' }} />
                            <span className="font-medium" style={{ color: '#007BFF' }}>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Portfolio Gallery Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#007BFF' }}>
                        Portfolio
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                            >
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
                                    <a 
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-all duration-300 hover:shadow-lg"
                                        style={{ backgroundColor: '#007BFF' }}
                                    >
                                        <span>View Project</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
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