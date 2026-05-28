const projects = [
  {
    title: 'E-Commerce web',
    desc: 'website e-commerce dengan fitur keranjang, autentikasi pengguna, dan integrasi payment gateway.',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    emoji: '🛒',
    link: 'https://github.com/fadghamm26/debora_craft',
  },
  {
    title: 'Flood monitoring',
    desc: 'Website untuk monitoring ketinggian air sungai dengan integrasi IoT dan integrasi REST API.',
    tags: ['React', 'IoT', 'REST API', 'Tailwind CSS'],
    emoji: '📊',
    link: 'https://github.com/fadghamm26/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
          Projects
        </span>
        <h2 className="font-display font-bold text-4xl text-slate-900 tracking-tight mb-12">
          Proyek Saya
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col hover:border-blue-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl mb-4">
                {project.emoji}
              </div>
              <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Lihat di GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
