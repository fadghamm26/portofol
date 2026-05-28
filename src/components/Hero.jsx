export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-12">


           {/* Photo */}
          <div className="flex-1  justify-center md:justify-start">
            <img 
              src="poto.png" 
              alt="Muhammad Vito Fadgham" 
              className="w-full max-w-md rounded-lg"
            />
          </div>
          {/* Text */}
          <div className="flex-1">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
              Frontend Developer
            </span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-slate-900 leading-tight tracking-tight mb-4">
              Hello, I'am<br />
              <span className="text-blue-500">Muhammad Vito Fadgham</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-xl mb-8">
              Saya adalah mahasiswa Teknologi Informasi yang berfokus pada pengembangan Front-End & UI/UX Designer. 
              Saya berfokus pada penciptaan pengalaman digital yang menarik 
              dan selalu berupaya memberikan solusi terbaik dalam setiap proyek yang saya kerjakan.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors"
              >
                Lihat Projects
              </a>
              <a
                href="mailto:fadghamm26@gmail.com"
                className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors"
              >
                Hubungi Saya
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
