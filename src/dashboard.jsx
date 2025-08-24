function Dashboard() {
    return (
        <div>
            <div className="h-16 flex items-center bg-blue-100">
                <h1 className="text-blue-600 font-poppins text-xl pt-2 font-semibold ml-4">About Saputra</h1>
            </div>
            <section className="h-screen">
                
                <div className="h-1/2 relative bg-gradient-to-b from-blue-100 to-white">
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

                <div className="h-3/4 relative bg-blue-500 flex justify-center">
                    <h1 className="font-poppins text-4xl font-bold text-white mt-16">My academy</h1>

                    <img 
                        src="/images/fotosma7.png" 
                        alt="SMA7" 
                        className="h-[380px] absolute top-44 z-10 rounded-tl-[80px] rounded-br-[80px]"
                    />
                    <h1 className="font-poppins text-3xl font-bold text-white mt-6 absolute bottom-12 left-5">SMAN 7 Yogyakarta</h1>
                </div>

            </section>
        </div>
    )
}

export default Dashboard;
