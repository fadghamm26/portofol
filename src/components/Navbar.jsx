export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display font-bold text-lg tracking-tight">
          fadghamm<span className="text-blue-400">.</span>
        </span>
        <div className="flex items-center gap-8">
          {['About', 'Pendidikan', 'Skills', 'Projects'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
