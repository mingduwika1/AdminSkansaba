import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_ADMIN_PROMPT = `
Anda adalah Asisten Ahli Pembuat Administrasi Guru di SMK Negeri 1 Bebandem untuk Tahun Ajaran 2026/2027.
Tugas utama Anda adalah menyusun dokumen administrasi pembelajaran lengkap, mendalam, dan terstruktur yang patuh pada regulasi resmi serta mengintegrasikan prinsip Pembelajaran Mendalam (Deep Learning).

ACUAN REGULASI WAJIB:
1. Permendikdasmen Nomor 13 Tahun 2025 tentang Standar Sarana, Prasarana, dan Kurikulum.
2. Kepmendikdasmen Nomor 126/P/2025 tentang Pedoman Implementasi Pembelajaran Mendalam (Deep Learning: Mindful, Meaningful, & Joyful Learning).

IDENTITAS SEKOLAH RESMI:
- Satuan Pendidikan: SMK Negeri 1 Bebandem (SKANSABA)
- Alamat: Jl. Kuncara Giri, Sibetan, Bebandem, Karangasem, Bali.
- Tahun Ajaran: 2026/2027
- Kepala Sekolah: I Wayan Darmayasa, S.T.,M.Si
- NIP Kepala Sekolah: 19730522 200501 1 009
- URL Logo: https://i.imgur.com/kx40xIV.png

PRINSIP DEEP LEARNING YANG WAJIB DIINTEGRASIKAN:
- Mindful Learning: Kesadaran penuh, kehadiran utuh, pemahaman konsep mendalam (bukan hafalan dangkal), dan pertanyaan pemantik filosofis-kritis.
- Meaningful Learning: Keterkaitan materi dengan konteks riil kehidupan, dunia kerja dan industri (DUDIKA), kearifan lokal Bali (Tri Hita Karana/Desa Kala Patra bila relevan), studi kasus kontekstual, dan Problem/Project-Based Learning.
- Joyful Learning: Suasana belajar yang menggugah motivasi intrinsik, rasa ingin tahu, eksperimentasi kolaboratif, minim rasa takut salah, serta refleksi metakognitif yang apresiatif.
- Asesmen Autentik: Asesmen diagnostik awal, asesmen formatif berkala dengan rubrik kinerja berjenjang, analisis miskonsepsi peserta didik, serta rencana tindak lanjut (remedial konseptual dan pengayaan aplikatif).

DESAIN TABEL:
Gunakan tabel dengan styling elegan, header berwarna profesional (Navy #0d3b66 atau Teal #0f766e dengan teks putih #ffffff), batas sel yang rapi, dan tata letak yang siap cetak.
`;

// API to generate full administrative document
app.post('/api/generate-document', async (req: Request, res: Response) => {
  try {
    const { teacherInfo, docType, topic, timeAllocation, customNotes, additionalPrompt } = req.body;

    const teacherName = teacherInfo?.name || '[Nama Guru]';
    const teacherNip = teacherInfo?.nip || '[NIP Guru]';
    const subject = teacherInfo?.subject || '[Mata Pelajaran]';
    const gradePhase = teacherInfo?.gradePhase || '[Fase/Kelas]';
    const major = teacherInfo?.major || '[Konsentrasi Keahlian]';
    const semester = teacherInfo?.semester || 'Ganjil';
    const dateStr = teacherInfo?.dateStr || 'Juli 2026';

    const prompt = `
Susun dokumen administrasi pembelajaran resmi untuk guru SMK Negeri 1 Bebandem:

DATA IDENTITAS GURU & MAPEL:
- Nama Guru: ${teacherName}
- NIP Guru: ${teacherNip}
- Mata Pelajaran: ${subject}
- Kelas / Fase / Konsentrasi Keahlian: ${gradePhase} / ${major}
- Semester: ${semester}
- Alokasi Waktu: ${timeAllocation || '4 JP x 45 Menit (Disesuaikan)'}
- Topik / Materi Pokok: ${topic || 'Pengenalan dan Penguasaan Kompetensi Keahlian'}
- Catatan Tambahan / Fokus Industri: ${customNotes || '-'}
- Jenis Dokumen: ${docType}
- Instruksi Spesifik: ${additionalPrompt || 'Lengkap, detail, siap cetak'}

PANDUAN STRUKTUR DOKUMEN MENURUT JENIS:
1. Jika "modul_ajar":
   - Identitas Umum (Nama, Sekolah, Fase/Kelas, Elemen, Alokasi Waktu)
   - Acuan Regulasi: Permendikdasmen No. 13/2025 & Kepmendikdasmen No. 126/P/2025
   - Capaian Pembelajaran & Tujuan Pembelajaran (Kognitif, Psikomotor, Afektif)
   - Profil Pelajar Pancasila & Budaya Kerja Industri (5R/5S, SOP, K3LH)
   - Pertanyaan Pemantik Kritis (Mindful Learning)
   - Rencana Pembelajaran Deep Learning:
     * Kegiatan Pendahuluan (Mindful conditioning, apersepsi kontekstual, asesmen diagnostik non-kognitif/kognitif)
     * Kegiatan Inti (Meaningful: Eksplorasi materi, studi kasus industri DUDIKA; Joyful: Praktik eksploratif, kolaborasi, gamifikasi edukatif / roleplay)
     * Kegiatan Penutup (Refleksi metakognisi 3-2-1, apresiasi, tindak lanjut)
   - Asesmen Autentik (Tabel Rubrik Kinerja dengan 4 kriteria: Baru Berkembang, Layak, Cakap, Mahir)
   - Analisis Potensi Miskonsepsi & Rencana Remedial/Pengayaan
   - Lembar Kerja Peserta Didik (LKPD) ringkas
   - Bahan Bacaan & Glosarium

2. Jika "atp" (Alur Tujuan Pembelajaran):
   - Rasional, Capaian Pembelajaran Elemen, Tabel Alur Tujuan Pembelajaran per Semester, Alokasi JP, Indikator Ketercapaian, Integrasi Deep Learning (Mindful, Meaningful, Joyful), Asesmen.

3. Jika "prota_promes":
   - Program Tahunan & Program Semester 2026/2027, Distribusi Alokasi Waktu per TP, Pekan Efektif Semester Ganjil & Genap, Jadwal Asesmen Sumatif & Cadangan.

4. Jika "asesmen_rubrik":
   - Kisi-kisi Asesmen Autentik, Rubrik Kinerja Praktik/Proyek SMK, Rubrik Penilaian Sikap Kerja Industri, Lembar Observasi Formatif, dan Pedoman Konversi Nilai.

5. Jika "jurnal_refleksi":
   - Jurnal Pembelajaran Guru, Analisis Ketercapaian Pembelajaran Mendalam (Mindful-Meaningful-Joyful), Catatan Refleksi Siswa, serta Rencana Perbaikan Pengajaran (Continuous Improvement).

6. Jika "remedial_pengayaan":
   - Program Diagnostik Miskonsepsi, Modul Remedial Konseptual Berbasis Pemahaman Bermakna, dan Modul Pengayaan Berbasis Proyek Mandiri/Tantangan Industri.

FORMAT OUTPUT WAJIB:
Kembalikan respon dalam format JSON murni tanpa markdown pembungkus di luar JSON (atau di dalam blok json) dengan struktur:
{
  "title": "Judul Dokumen Lengkap",
  "docType": "${docType}",
  "summary": "Ringkasan dokumen dalam 2-3 kalimat",
  "htmlBody": "Isi dokumen dalam HTML semantik yang rapi. Jangan masukkan KOP dan Tanda Tangan ke dalam htmlBody, karena aplikasi frontend akan otomatis merender Kop Resmi SMKN 1 Bebandem berlogo dan Blok Tanda Tangan 2 Kolom resmi. Fokuskan htmlBody pada konten materi, tabel warna-warni berkelas (gunakan inline style atau class seperti table, th, td, border, p-3, bg-[#0d3b66], text-white, rounded, dll.), callout box untuk Mindful/Meaningful/Joyful Learning, dan rubrik asesmen.",
  "markdownBody": "Isi dokumen versi Markdown lengkap dengan tabel dan pemformatan yang rapi."
}
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_ADMIN_PROMPT,
        temperature: 0.7,
        responseMimeType: 'application/json',
      },
    });

    const text = response.text || '{}';
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      // In case of slight formatting, try cleaning json block
      const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
      data = JSON.parse(cleanJson);
    }

    res.json({
      success: true,
      document: data,
    });
  } catch (error: any) {
    console.error('Error generating document:', error);
    res.status(500).json({
      success: false,
      error: error?.message || 'Gagal menyusun dokumen administrasi pembelajaran.',
    });
  }
});

// Interactive Consultation & Chat
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { messages, teacherInfo } = req.body;

    const teacherIdentityStatus =
      teacherInfo?.name && teacherInfo?.nip && teacherInfo?.subject && teacherInfo?.gradePhase
        ? `Guru Terverifikasi: ${teacherInfo.name} | NIP: ${teacherInfo.nip} | Mapel: ${teacherInfo.subject} | Kelas: ${teacherInfo.gradePhase} - ${teacherInfo.major || ''}`
        : `DATA GURU BELUM LENGKAP: Nama: ${teacherInfo?.name || '(Belum)'}, NIP: ${teacherInfo?.nip || '(Belum)'}, Mapel: ${teacherInfo?.subject || '(Belum)'}, Kelas/Fase: ${teacherInfo?.gradePhase || '(Belum)'}`;

    const contextInstruction = `
${SYSTEM_ADMIN_PROMPT}

STATUS DATA IDENTITAS GURU SAAT INI:
${teacherIdentityStatus}

PROTOKOL AWAL (WAJIB DIIKUTI):
Setiap kali guru meminta bantuan pembuatan dokumen baru atau belum melengkapi data identitas di atas, Anda WAJIB dengan ramah mengingatkan dan menanyakan 4 data penting:
1. Nama Lengkap Guru
2. NIP Guru
3. Mata Pelajaran yang Diampu
4. Kelas / Fase / Konsentrasi Keahlian

Jika guru sudah memberikan data identitas atau data sudah terverifikasi, langsung berikan panduan, ide pembelajaran mendalam (Mindful, Meaningful, Joyful), draft administrasi, perumusan Tujuan Pembelajaran, atau asesmen autentik yang diminta dengan standar tertinggi.

Selalu sertakan salam khas Bali jika sesuai ("Om Swastiastu" / "Salam hangat bapak/ibu guru hebat SKANSABA").
`;

    const chatContents = (messages || []).map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: chatContents,
      config: {
        systemInstruction: contextInstruction,
        temperature: 0.7,
      },
    });

    res.json({
      success: true,
      reply: response.text || 'Mohon maaf, respon tidak dapat dihasilkan.',
    });
  } catch (error: any) {
    console.error('Error in chat:', error);
    res.status(500).json({
      success: false,
      error: error?.message || 'Gagal memproses pesan konsultasi.',
    });
  }
});

// Quick Enhance / Revise Document Section
app.post('/api/enhance-document', async (req: Request, res: Response) => {
  try {
    const { currentContent, instruction } = req.body;
    const prompt = `
Sebagai Asisten Ahli Administrasi Guru SMK Negeri 1 Bebandem TA 2026/2027 (Permendikdasmen No 13/2025 & Kepmendikdasmen No 126/P/2025):
Lakukan penyesuaian/revisi pada konten dokumen berikut:

KONTEN SEBELUMNYA:
${currentContent}

INSTRUKSI PENYESUAIAN:
${instruction}

Berikan hasil revisi dalam format JSON:
{
  "updatedHtml": "HTML semantik yang telah direvisi dengan tetap mempertahankan gaya tabel profesional dan prinsip Mindful, Meaningful, Joyful",
  "updatedMarkdown": "Markdown yang telah direvisi",
  "changeSummary": "Penjelasan singkat mengenai perbaikan yang dilakukan"
}
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_ADMIN_PROMPT,
        temperature: 0.7,
        responseMimeType: 'application/json',
      },
    });

    const text = response.text || '{}';
    const data = JSON.parse(text);
    res.json({ success: true, result: data });
  } catch (error: any) {
    console.error('Error enhancing document:', error);
    res.status(500).json({
      success: false,
      error: error?.message || 'Gagal merevisi dokumen.',
    });
  }
});

// Start server with Vite middleware in development or static in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(process.cwd(), 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(process.cwd(), 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server admin-guru-skansaba running on http://localhost:${PORT}`);
  });
}

startServer();
