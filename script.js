/**
 * script.js — Referensi Logika Interaksi Portofolio Balthasar Hamonangan Adi Wibowo
 *
 * Proyek utama berjalan menggunakan React + Vite (lihat folder /src).
 * File ini merangkum kalkulasi inti yang digunakan pada komponen:
 * 1. Interactive Cursor Spotlight pada potret HeroSection
 * 2. Pinned Horizontal Scroll (1:1 Linear Scrubbing tanpa dead-zone) pada Milestones
 * 3. Copy-to-Clipboard Email pada ContactFooter
 */

// 1. Kalkulasi Jarak Pinned Horizontal Scroll (tanpa dead-zone di awal/akhir)
export function calculateHorizontalScrollDistance(trackElement) {
  if (!trackElement) return 0;
  const vw = window.innerWidth;
  return Math.max(0, trackElement.scrollWidth - vw);
}

// 2. Interpolasi Halus (Lerp) untuk Spotlight Cursor pada Hero Portrait
export function lerp(start, end, factor) {
  return start + (end - start) * factor;
}
