const educationData = [
  {
    year: '2024 — 2027',
    degree: 'D3 Teknologi Informasi',
    school: 'Universitas Brawijaya',
    desc: 'Fokus pada pengembangan frontend dan UI/UX design',
  },
  {
    year: '2021 — 2024',
    degree: 'Multimedia',
    school: 'SMK Modern Al-Rifaie 2',
    desc: 'Lulus dengan nilai rata-rata 92.',
  },
]

export default function Education() {
  return (
    <section id="pendidikan" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
          Pendidikan
        </span>
        <h2 className="font-display font-bold text-4xl text-slate-900 tracking-tight mb-12">
          Riwayat Pendidikan
        </h2>

        <div className="space-y-6">
          {educationData.map((item, i) => (
            <div
              key={i}
              className="flex gap-6 bg-white rounded-2xl border border-slate-100 p-6 hover:border-blue-100 transition-colors"
            >
              <div className="flex-shrink-0 w-32 pt-1">
                <span className="text-xs font-medium text-slate-400">{item.year}</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-slate-900 mb-1">
                  {item.degree}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-2">{item.school}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
