const projects = [
    {
        title: "Web Dusun Tegalurung",
        description: "Website profil Desa Tegalurung, Legonkulon, Subang.",
        url: "https://desategalurung.id/",
        tag: "Website Desa",
    },
    {
        title: "Duat Duit",
        description: "Aplikasi web untuk kebutuhan pencatatan dan pengelolaan duit.",
        url: "https://duatduit.netlify.app/",
        tag: "Web App",
    },
    {
        title: "Findives",
        description: "Aplikasi web Findives yang dipublikasikan melalui Netlify.",
        url: "https://findives.netlify.app/",
        tag: "Web App",
    },
];

function Dashboard() {
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

                <div className="bg-white px-4 py-16">
                    <div className="mx-auto max-w-5xl">
                        <h1 className="font-poppins text-4xl font-bold text-blue-600">My Portfolio</h1>
                        <div className="mt-8 grid gap-5 md:grid-cols-3">
                            {projects.map((project) => (
                                <a
                                    key={project.url}
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group block rounded-lg border border-blue-100 bg-blue-50 p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg"
                                >
                                    <span className="font-poppins text-sm font-semibold text-blue-500">{project.tag}</span>
                                    <h2 className="mt-3 font-poppins text-2xl font-bold text-blue-700">{project.title}</h2>
                                    <p className="mt-3 font-poppins text-sm leading-6 text-slate-600">{project.description}</p>
                                    <p className="mt-5 font-poppins text-sm font-semibold text-blue-600 group-hover:text-blue-800">Kunjungi website</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Dashboard;
