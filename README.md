# Portfolio Website — Balthasar Hamonangan Adi Wibowo

Website portofolio personal bergaya *Luxury Minimalist* untuk **Balthasar Hamonangan Adi Wibowo** (Applied Mathematics — Institut Teknologi Sepuluh Nopember / ITS Surabaya).

Dibangun menggunakan:
- **React 19 + TypeScript + Vite**
- **Tailwind CSS v4**
- **Motion (Framer Motion)** untuk pinned horizontal scroll & transisi kapsul navigasi
- **Lenis** untuk *smooth inertial scrolling*
- **Lucide React** untuk ikonografi

---

## Struktur Folder

```text
portfolio-website/
├── index.html                  # Entry point HTML utama
├── style.css                   # Salinan stylesheet global & animasi marquee/spotlight
├── script.js                   # Dokumentasi & referensi logika interaksi scroll/spotlight
├── package.json                # Daftar dependencies & script npm
├── vite.config.ts              # Konfigurasi bundler Vite + Tailwind v4
├── tsconfig.json               # Konfigurasi TypeScript
├── public/
│   ├── assets/aistudio/        # Aset potret cutout & logo marquee teknologi
│   └── images/milestones/      # Folder tempat menaruh foto dokumentasi milestones
└── src/
    ├── main.tsx                # Bootstrap React DOM
    ├── App.tsx                 # Integrasi Lenis smooth scroll & struktur halaman
    ├── index.css               # Konfigurasi tema Tailwind CSS v4 & keyframes
    ├── context/
    │   └── ThemeContext.tsx    # Pengelola mode Light / Dark
    ├── data/
    │   └── milestonesData.ts   # Data pengalaman & Chronological Milestones (01 - 06)
    └── components/
        ├── Navbar.tsx          # Floating capsule dock (Desktop & Mobile)
        ├── HeroSection.tsx     # Hero split layout, interactive spotlight portrait & marquee
        ├── AboutSection.tsx    # Seksi Kaizen ("1% better every day.") & narasi profil
        ├── InterestsSection.tsx# Pinned horizontal scroll "Journey / Milestones."
        └── ContactFooter.tsx   # Seksi kontak magnetic email & copy-to-clipboard
```

---

## Cara Menjalankan Secara Lokal

1. **Pastikan Node.js sudah terinstal** (disarankan Node.js v18+ atau v20+).
2. **Ekstrak file `portfolio-website.zip`** ke folder pilihan Anda, lalu buka terminal di dalam folder tersebut.
3. **Instal seluruh dependencies**:
   ```bash
   npm install
   ```
4. **Jalankan server development**:
   ```bash
   npm run dev
   ```
5. **Buka di browser**:
   Akses `http://localhost:3000` pada browser Anda.

---

## Cara Build untuk Production (Deploy ke Vercel / Netlify / GitHub Pages)

```bash
npm run build
```
Hasil build statis yang siap di-deploy akan berada di dalam folder `dist/`.
