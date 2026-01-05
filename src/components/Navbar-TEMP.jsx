export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-[1512px] px-8">
        <div className="h-[101px] rounded-2xl border border-white/30 bg-white/40 backdrop-blur-md shadow-sm flex items-center justify-between px-8">
          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-neutral-900">
              projects<span className="text-orange-500">.</span>
            </span>
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-800">
            <a href="#" className="text-orange-500 hover:opacity-80">
              Cari Proyek
            </a>
            <a href="#" className="hover:text-neutral-900 hover:opacity-80">
              Buat Proyek
            </a>
            <a href="#" className="hover:text-neutral-900 hover:opacity-80">
              Servis
            </a>
            <a href="#" className="hover:text-neutral-900 hover:opacity-80">
              Produk
            </a>
            <a href="#" className="hover:text-neutral-900 hover:opacity-80">
              Komunitas
            </a>
            <a href="#" className="hover:text-neutral-900 hover:opacity-80">
              Afiliasi
            </a>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button className="h-10 rounded-full border border-neutral-200/70 bg-white/70 px-5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-white">
              Daftar
            </button>
            <button className="h-10 rounded-full bg-orange-400 px-5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500">
              Masuk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
