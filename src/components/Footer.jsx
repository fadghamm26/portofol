export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-slate-900">
          Fadghamm<span className="text-blue-400">.</span>
        </span>
        <p className="text-sm text-slate-400">
          © 2025 Fadghamm — Dibangun dengan React & Tailwind CSS
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/fadghamm26" target="_blank" rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-slate-700 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/muhammad-vito-fadgham-41a955403?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-slate-700 transition-colors">
            LinkedIn
          </a>
          <a href="mailto:fadghamm26@gmail.com" target="_blank" rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-slate-700 transition-colors">
            Email
          </a>
           <a href="https://www.instagram.com/fadghamm" target="_blank" rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-slate-700 transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
