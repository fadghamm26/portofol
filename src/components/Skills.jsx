const skillsData = {
  Frontend: ['React', 'Tailwind CSS', 'JavaScript', 'HTML & CSS', 'TypeScript'],
  'Tools & Lainnya': ['Git & GitHub', 'Figma', 'VS Code', 'Vite'],
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
          Skills
        </span>
        <h2 className="font-display font-bold text-4xl text-slate-900 tracking-tight mb-12">
          Keahlian Saya
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="bg-slate-50 rounded-2xl border border-slate-100 p-6"
            >
              <h3 className="font-display font-semibold text-sm text-blue-600 uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
