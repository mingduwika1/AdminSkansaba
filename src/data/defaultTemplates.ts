import { AdminDocument, DocTypeOption } from '../types';

export const DOC_TYPE_OPTIONS: DocTypeOption[] = [
  {
    type: 'modul_ajar',
    label: 'Modul Ajar / RPP Deep Learning',
    subtitle: 'Rencana Pelaksanaan Pembelajaran Mendalam Lengkap',
    badge: 'Populer & Wajib',
    color: 'from-blue-600 to-indigo-700',
    iconName: 'FileText',
    description: 'Format komprehensif mengintegrasikan Mindful, Meaningful, & Joyful Learning dengan studi kasus industri SMK dan asesmen autentik.',
  },
  {
    type: 'atp',
    label: 'Alur Tujuan Pembelajaran (ATP)',
    subtitle: 'Pemetaan Capaian Pembelajaran Fase E/F',
    badge: 'Kurikulum Resmi',
    color: 'from-teal-600 to-emerald-700',
    iconName: 'GitFork',
    description: 'Struktur alur pembelajaran teratur per elemen, alokasi JP, kriteria ketercapaian, dan integrasi pilar pembelajaran mendalam.',
  },
  {
    type: 'prota_promes',
    label: 'Prota & Promes 2026/2027',
    subtitle: 'Program Tahunan & Program Semester',
    badge: 'Perencanaan Kalender',
    color: 'from-sky-600 to-cyan-700',
    iconName: 'Calendar',
    description: 'Distribusi pekan efektif semester ganjil/genap 2026/2027 di Bali, alokasi jam per materi pokok, cadangan, dan asesmen sumatif.',
  },
  {
    type: 'asesmen_rubrik',
    label: 'Asesmen Autentik & Rubrik Kinerja',
    subtitle: 'Diagnostik, Formatif, & Sumatif Portofolio',
    badge: 'Penilaian Nyata',
    color: 'from-amber-600 to-orange-700',
    iconName: 'CheckSquare',
    description: 'Rubrik kinerja 4 tingkat (Baru Berkembang, Layak, Cakap, Mahir), lembar observasi sikap kerja industri (5R/5S), dan penilaian rekan.',
  },
  {
    type: 'jurnal_refleksi',
    label: 'Jurnal & Refleksi Guru Mendalam',
    subtitle: 'Continuous Improvement & Metakognisi Siswa',
    badge: 'Evaluasi Pembelajaran',
    color: 'from-purple-600 to-pink-700',
    iconName: 'BookOpen',
    description: 'Catatan pelaksanaan KBM, analisis ketercapaian Mindful-Meaningful-Joyful, kendala belajar siswa, dan aksi tindak lanjut guru.',
  },
  {
    type: 'remedial_pengayaan',
    label: 'Program Remedial & Pengayaan',
    subtitle: 'Analisis Miskonsepsi & Tantangan Riil',
    badge: 'Diferensiasi Belajar',
    color: 'from-rose-600 to-red-700',
    iconName: 'Award',
    description: 'Pemetaan miskonsepsi konsep kunci, strategi bimbingan konseptual mendalam, dan proyek pengayaan mandiri berbasis tantangan industri.',
  },
  {
    type: 'lkpd',
    label: 'Lembar Kerja Peserta Didik (LKPD)',
    subtitle: 'Panduan Praktik Eksploratif & Kolaboratif',
    badge: 'Siap Pakai Siswa',
    color: 'from-emerald-600 to-teal-800',
    iconName: 'Layers',
    description: 'Lembar kerja berbasis aktivitas riil, instruksi SOP industri, studi kasus lokal Bali, dan refleksi 3-2-1.',
  },
];

export const INITIAL_DOCUMENTS: AdminDocument[] = [
  {
    id: 'skansaba-modul-pplg-01',
    title: 'Modul Ajar Deep Learning: Desain Web Responsif & Integrasi API Industri',
    docType: 'modul_ajar',
    topic: 'Pemrograman Web Responsif Berbasis Modern Framework dan RESTful API',
    timeAllocation: '4 JP x 45 Menit (Pertemuan 1 - 2)',
    createdAt: '2026-07-20T08:00:00Z',
    updatedAt: '2026-07-20T08:00:00Z',
    summary: 'Modul Ajar Pembelajaran Mendalam (Mindful, Meaningful, Joyful) untuk Konsentrasi Keahlian PPLG SMK Negeri 1 Bebandem mengacu pada Kepmendikdasmen No. 126/P/2025.',
    teacherProfile: {
      name: 'I Made Suartana, S.Kom.',
      nip: '19840215 201001 1 012',
      subject: 'Konsentrasi Keahlian Pengembangan Perangkat Lunak dan Gim (PPLG)',
      gradePhase: 'Fase F - Kelas XI',
      major: 'Rekayasa Perangkat Lunak / PPLG',
      semester: 'Ganjil',
      academicYear: '2026/2027',
      dateStr: '20 Juli 2026',
      isVerified: true,
    },
    markdownBody: `# MODUL AJAR PEMBELAJARAN MENDALAM (DEEP LEARNING)\n\n**Mata Pelajaran:** Pengembangan Perangkat Lunak dan Gim\n**Fase/Kelas:** Fase F / XI\n**Topik:** Desain Web Responsif & Integrasi API Industri\n\n...`,
    htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">MODUL AJAR PEMBELAJARAN MENDALAM (DEEP LEARNING)</h1>
    <p class="text-sm font-semibold text-gray-600 mt-1">Acuan Resmi: Permendikdasmen No. 13/2025 & Kepmendikdasmen No. 126/P/2025</p>
  </div>

  <!-- Identitas Modul -->
  <div class="bg-slate-50 border border-slate-300 rounded-lg p-4">
    <h3 class="text-base font-bold text-[#0d3b66] border-b pb-2 mb-3">I. IDENTITAS UMUM</h3>
    <table class="w-full text-sm border-collapse">
      <tbody>
        <tr class="border-b border-slate-200"><td class="w-1/3 py-1 font-semibold text-gray-700">Satuan Pendidikan</td><td class="py-1">: SMK Negeri 1 Bebandem</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">Mata Pelajaran</td><td class="py-1">: Konsentrasi Keahlian PPLG</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">Konsentrasi Keahlian</td><td class="py-1">: Rekayasa Perangkat Lunak</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">Fase / Kelas / Semester</td><td class="py-1">: Fase F / Kelas XI / Ganjil</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">Elemen Capaian Pembelajaran</td><td class="py-1">: Pemrograman Web dan Perangkat Bergerak</td></tr>
        <tr class="border-b border-slate-200"><td class="py-1 font-semibold text-gray-700">Alokasi Waktu</td><td class="py-1">: 4 JP x 45 Menit (Pertemuan ke-1)</td></tr>
        <tr><td class="py-1 font-semibold text-gray-700">Profil Pelajar Pancasila & Budaya Kerja</td><td class="py-1">: Bernalar Kritis, Gotong Royong, Integritas, Standar Kerja 5R/5S Industri</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Capaian & Tujuan Pembelajaran -->
  <div>
    <h3 class="text-base font-bold text-[#0d3b66] mb-2">II. CAPAIAN & TUJUAN PEMBELAJARAN (DEEP LEARNING ORIENTED)</h3>
    <div class="p-3 bg-blue-50/70 border-l-4 border-[#0d3b66] text-sm text-gray-800 mb-3 rounded-r">
      <strong>Capaian Pembelajaran (Elemen):</strong> Peserta didik mampu merancang, mengkodekan, menguji, dan menerapkan antarmuka web responsif yang terhubung dengan API backend sesuai standar industri perangkat lunak.
    </div>
    
    <div class="overflow-x-auto">
      <table class="w-full text-sm border border-slate-400 border-collapse">
        <thead>
          <tr class="bg-[#0d3b66] text-white">
            <th class="p-2 border border-slate-400 text-left w-12">No</th>
            <th class="p-2 border border-slate-400 text-left">Tujuan Pembelajaran (TP)</th>
            <th class="p-2 border border-slate-400 text-left w-48">Dimensi Deep Learning</th>
            <th class="p-2 border border-slate-400 text-left w-36">Indikator Ketercapaian</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white hover:bg-slate-50">
            <td class="p-2 border border-slate-300 text-center font-bold">1</td>
            <td class="p-2 border border-slate-300">Menganalisis prinsip arsitektur antarmuka responsif dan konsumsi data REST API pada sistem informasi pariwisata/ekonomi lokal Karangasem.</td>
            <td class="p-2 border border-slate-300 font-medium text-emerald-800 bg-emerald-50/50">Mindful Learning (Kesadaran struktur & logika mendalam)</td>
            <td class="p-2 border border-slate-300">Menjelaskan alur data client-server tanpa miskonsepsi async</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100">
            <td class="p-2 border border-slate-300 text-center font-bold">2</td>
            <td class="p-2 border border-slate-300">Mengembangkan prototipe antarmuka responsif nyata yang menyelesaikan kebutuhan katalog UMKM buah salak Sibetan/Bebandem.</td>
            <td class="p-2 border border-slate-300 font-medium text-blue-800 bg-blue-50/50">Meaningful Learning (Konteks DUDIKA & Kearifan Lokal)</td>
            <td class="p-2 border border-slate-300">Halaman adaptif pada desktop & mobile (Lighthouse > 90)</td>
          </tr>
          <tr class="bg-white hover:bg-slate-50">
            <td class="p-2 border border-slate-300 text-center font-bold">3</td>
            <td class="p-2 border border-slate-300">Melakukan eksplorasi kode bersama tim (pair programming) dengan rasa ingin tahu tinggi serta mempresentasikan solusi kreatif.</td>
            <td class="p-2 border border-slate-300 font-medium text-purple-800 bg-purple-50/50">Joyful Learning (Pengalaman eksploratif & apresiatif)</td>
            <td class="p-2 border border-slate-300">Antusiasme tim, saling review kode tanpa rasa takut salah</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Pertanyaan Pemantik (Mindful) -->
  <div class="bg-amber-50 border border-amber-300 rounded-lg p-4">
    <h4 class="text-sm font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-2">
      <span>💡</span> PERTANYAAN PEMANTIK NALAR KRITIS (MINDFUL LEARNING)
    </h4>
    <ul class="list-disc list-inside space-y-1 text-sm text-gray-800">
      <li><em>"Mengapa situs web yang cepat dan mudah diakses di ponsel warga bisa melipatgandakan omset petani salak di lereng Gunung Agung?"</em></li>
      <li><em>"Apa yang sebenarnya terjadi di balik layar peramban ketika pengguna menekan tombol 'Pesan Tiket' pada aplikasi pariwisata?"</em></li>
      <li><em>"Bagaimana seorang software engineer memastikan antarmukanya ramah bagi pengguna lansia maupun pengguna koneksi lambat?"</em></li>
    </ul>
  </div>

  <!-- Kegiatan Pembelajaran Berbasis Deep Learning -->
  <div>
    <h3 class="text-base font-bold text-[#0d3b66] mb-3">III. KEGIATAN PEMBELAJARAN (DEEP LEARNING MODEL)</h3>
    <div class="overflow-x-auto">
      <table class="w-full text-sm border border-slate-400 border-collapse">
        <thead>
          <tr class="bg-[#0f766e] text-white">
            <th class="p-2 border border-slate-400 w-32 text-left">Tahapan</th>
            <th class="p-2 border border-slate-400 text-left">Aktivitas Guru dan Peserta Didik</th>
            <th class="p-2 border border-slate-400 w-44 text-left">Fokus Pembelajaran Mendalam</th>
            <th class="p-2 border border-slate-400 w-20 text-center">Waktu</th>
          </tr>
        </thead>
        <tbody>
          <!-- Pendahuluan -->
          <tr class="bg-teal-50/40">
            <td class="p-3 border border-slate-300 font-bold text-teal-950 align-top">
              A. Pendahuluan<br/>
              <span class="text-xs font-normal text-gray-600">(Conditioning & Mindful)</span>
            </td>
            <td class="p-3 border border-slate-300 space-y-2">
              <p>1. <strong>Mindful Breathing & Kehadiran Penuh:</strong> Guru mengajak peserta didik hening sejenak (1 menit mindfulness) menyadari pernafasan dan memusatkan konsentrasi sebelum memulai pembelajaran di Lab Komputer.</p>
              <p>2. <strong>Apersepsi Kontekstual:</strong> Menampilkan perbandingan 2 aplikasi web (satu responsif cepat, satu lagi lambat dan rusak saat dibuka di HP). Memantik diskusi singkat.</p>
              <p>3. <strong>Asesmen Diagnostik Awal:</strong> Kuis visual 3 soal cepat untuk mengecek pemahaman dasar HTML/CSS.</p>
            </td>
            <td class="p-3 border border-slate-300 text-xs font-semibold text-teal-800 align-top">
              <span class="inline-block bg-teal-100 text-teal-800 px-2 py-0.5 rounded">Mindful Learning</span><br/>
              Kesiapan mental, kehadiran utuh, & pemetaan pemahaman awal.
            </td>
            <td class="p-3 border border-slate-300 text-center align-top font-semibold">20 Menit</td>
          </tr>
          <!-- Inti -->
          <tr class="bg-white">
            <td class="p-3 border border-slate-300 font-bold text-blue-950 align-top">
              B. Kegiatan Inti<br/>
              <span class="text-xs font-normal text-gray-600">(Meaningful & Joyful)</span>
            </td>
            <td class="p-3 border border-slate-300 space-y-2">
              <p>1. <strong>Meaningful - Studi Kasus Industri Nyata:</strong> Guru memaparkan brief proyek dari Software House mitra DUDIKA SMKN 1 Bebandem: Membuat modul etalase digital responsif produk kerajinan/agrowisata Karangasem.</p>
              <p>2. <strong>Eksplorasi Konsep Mendalam:</strong> Peserta didik membedah konsep Flexbox/Grid dan Fetch API bukan sekadar menyalin rumus, melainkan memahami logika aliran data.</p>
              <p>3. <strong>Joyful - Pair Coding Challenge:</strong> Peserta didik berpasangan merancang kode antarmuka. Disediakan tantangan "Bug Hunt" interaktif yang seru di mana pasangan bertukar kode untuk mencari kelemahan tata letak.</p>
              <p>4. <strong>Scaffolding & Konsultasi:</strong> Guru berkeliling memberikan pendampingan personal bagi peserta didik yang membutuhkan penguatan konseptual.</p>
            </td>
            <td class="p-3 border border-slate-300 text-xs font-semibold text-blue-800 align-top">
              <span class="inline-block bg-blue-100 text-blue-800 px-2 py-0.5 rounded mb-1">Meaningful Learning</span><br/>
              Koneksi DUDIKA & Problem Based Learning.<br/><br/>
              <span class="inline-block bg-purple-100 text-purple-800 px-2 py-0.5 rounded">Joyful Learning</span><br/>
              Kolaborasi aktif & eksplorasi tanpa rasa takut salah.
            </td>
            <td class="p-3 border border-slate-300 text-center align-top font-semibold">140 Menit</td>
          </tr>
          <!-- Penutup -->
          <tr class="bg-slate-50">
            <td class="p-3 border border-slate-300 font-bold text-slate-800 align-top">
              C. Penutup<br/>
              <span class="text-xs font-normal text-gray-600">(Metakognisi)</span>
            </td>
            <td class="p-3 border border-slate-300 space-y-2">
              <p>1. <strong>Refleksi 3-2-1 Metakognitif:</strong> Setiap siswa menuliskan 3 hal baru yang dipahami, 2 tantangan yang berhasil diatasi, dan 1 pertanyaan yang masih ingin dieksplorasi.</p>
              <p>2. <strong>Apresiasi & Umpan Balik:</strong> Rekan sejawat saling memberikan stiker apresiasi atas kerapian kode dan komunikasi tim.</p>
              <p>3. <strong>Penguatan Nilai Kerja:</strong> Merapikan tempat duduk, membersihkan periferal komputer sesuai budaya kerja 5R/5S.</p>
            </td>
            <td class="p-3 border border-slate-300 text-xs font-semibold text-purple-800 align-top">
              <span class="inline-block bg-purple-100 text-purple-800 px-2 py-0.5 rounded">Joyful Metacognition</span><br/>
              Kesadaran atas proses belajar sendiri.
            </td>
            <td class="p-3 border border-slate-300 text-center align-top font-semibold">20 Menit</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Asesmen Autentik & Rubrik Kinerja -->
  <div>
    <h3 class="text-base font-bold text-[#0d3b66] mb-3">IV. ASESMEN AUTENTIK & RUBRIK KINERJA (KEPMENDIKDASMEN NO. 126/P/2025)</h3>
    <div class="overflow-x-auto">
      <table class="w-full text-xs border border-slate-400 border-collapse">
        <thead>
          <tr class="bg-[#0d3b66] text-white">
            <th class="p-2 border border-slate-400 w-32 text-left">Kriteria Penilaian</th>
            <th class="p-2 border border-slate-400 text-left bg-red-900/40">Baru Berkembang (1)</th>
            <th class="p-2 border border-slate-400 text-left bg-amber-900/40">Layak (2)</th>
            <th class="p-2 border border-slate-400 text-left bg-teal-900/40">Cakap (3)</th>
            <th class="p-2 border border-slate-400 text-left bg-emerald-900/40">Mahir (4)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white">
            <td class="p-2 border border-slate-300 font-bold">1. Responsivitas Antarmuka</td>
            <td class="p-2 border border-slate-300">Tampilan berantakan saat ukuran layar diubah; elemen saling tumpuk tindih.</td>
            <td class="p-2 border border-slate-300">Tampilan beradaptasi pada 2 ukuran layar, namun masih terdapat overflow horizontal.</td>
            <td class="p-2 border border-slate-300">Responsif mulus di mobile, tablet, dan desktop tanpa layout breaking.</td>
            <td class="p-2 border border-slate-300 font-medium text-emerald-900">Sangat fluid dengan micro-interaction dan optimasi UX kelas profesional.</td>
          </tr>
          <tr class="bg-slate-50">
            <td class="p-2 border border-slate-300 font-bold">2. Logika Integrasi Data API</td>
            <td class="p-2 border border-slate-300">Tidak mampu memanggil data API atau terjadi error runtime tanpa penanganan.</td>
            <td class="p-2 border border-slate-300">Mampu menampilkan data API, namun belum ada handling state 'loading' dan 'error'.</td>
            <td class="p-2 border border-slate-300">Data API tampil bersih dengan penanganan loading dan error yang tepat.</td>
            <td class="p-2 border border-slate-300 font-medium text-emerald-900">Menerapkan caching, debounce, dan validasi data secara tangguh.</td>
          </tr>
          <tr class="bg-white">
            <td class="p-2 border border-slate-300 font-bold">3. Sikap & Budaya Kerja 5R/5S</td>
            <td class="p-2 border border-slate-300">Periferal ditinggalkan berantakan; tidak mematuhi SOP lab.</td>
            <td class="p-2 border border-slate-300">Mengikuti SOP jika diingatkan guru; lab cukup rapi.</td>
            <td class="p-2 border border-slate-300">Disiplin menerapkan SOP dan 5R/5S secara mandiri tanpa disuruh.</td>
            <td class="p-2 border border-slate-300 font-medium text-emerald-900">Menjadi teladan standar industri dan aktif membantu merapikan lab.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Analisis Miskonsepsi & Rencana Tindak Lanjut -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-rose-50 border border-rose-300 rounded-lg p-3">
      <h4 class="text-xs font-bold text-rose-900 uppercase tracking-wider mb-1">ANALISIS POTENSI MISKONSEPSI</h4>
      <p class="text-xs text-gray-700 leading-relaxed">
        Siswa sering mengira "responsif" hanya sekadar mengecilkan font dengan CSS media queries, bukan merancang layout adaptif fleksibel. Guru menyiapkan visualisasi interaktif box-model untuk meluruskan pemahaman dasar.
      </p>
    </div>
    <div class="bg-emerald-50 border border-emerald-300 rounded-lg p-3">
      <h4 class="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">PROGRAM REMEDIAL & PENGAYAAN</h4>
      <p class="text-xs text-gray-700 leading-relaxed">
        <strong>Remedial:</strong> Bimbingan terpandu rekonsiliasi konsep Grid/Flexbox menggunakan puzzle coding.<br/>
        <strong>Pengayaan:</strong> Implementasi Progressive Web App (PWA) offline-first untuk siswa kategori Mahir.
      </p>
    </div>
  </div>
</div>
    `,
  },
  {
    id: 'skansaba-atp-dkv-02',
    title: 'Alur Tujuan Pembelajaran (ATP) Deep Learning: Desain Komunikasi Visual (DKV)',
    docType: 'atp',
    topic: 'Pemetaan Elemen Desain, Nirmana, Tipografi, & Branding Pariwisata Bali',
    timeAllocation: '108 JP (1 Tahun Ajaran)',
    createdAt: '2026-07-22T09:00:00Z',
    updatedAt: '2026-07-22T09:00:00Z',
    summary: 'ATP Resmi SMK Negeri 1 Bebandem untuk Konsentrasi Keahlian DKV Fase E berdasarkan Permendikdasmen No. 13 Tahun 2025 dan Kepmendikdasmen No. 126/P/2025.',
    teacherProfile: {
      name: 'Ni Kadek Ayu Kusuma, S.Pd.',
      nip: '19890412 201502 2 004',
      subject: 'Dasar-Dasar Desain Komunikasi Visual',
      gradePhase: 'Fase E - Kelas X',
      major: 'Desain Komunikasi Visual (DKV)',
      semester: 'Ganjil',
      academicYear: '2026/2027',
      dateStr: '22 Juli 2026',
      isVerified: true,
    },
    markdownBody: `# ALUR TUJUAN PEMBELAJARAN (ATP)\n\n**Mata Pelajaran:** Dasar-dasar DKV\n**Fase:** E (Kelas X)\n...`,
    htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">ALUR TUJUAN PEMBELAJARAN (ATP)</h1>
    <h2 class="text-lg font-semibold text-gray-700 mt-1">Mata Pelajaran: Dasar-Dasar Desain Komunikasi Visual (Fase E)</h2>
    <p class="text-xs text-gray-500 mt-1">Tahun Ajaran 2026/2027 | Berdasarkan Permendikdasmen No. 13/2025 & Kepmendikdasmen No. 126/P/2025</p>
  </div>

  <div class="bg-teal-50/70 border-l-4 border-teal-700 p-4 text-sm text-gray-800 rounded-r">
    <strong>Rasionalisasi Pembelajaran Mendalam:</strong> Dasar-dasar DKV dirancang menumbuhkan kesadaran visual estetis (Mindful), keterkaitan erat dengan promosi industri kreatif dan pelestarian budaya Bali (Meaningful), serta atmosfer eksplorasi media seni digital yang membahagiakan (Joyful).
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0f766e] text-white">
          <th class="p-2 border border-slate-400 w-10 text-center">No</th>
          <th class="p-2 border border-slate-400 w-28 text-left">Elemen CP</th>
          <th class="p-2 border border-slate-400 text-left">Tujuan Pembelajaran (Alur Terurut)</th>
          <th class="p-2 border border-slate-400 w-16 text-center">Alokasi JP</th>
          <th class="p-2 border border-slate-400 w-44 text-left">Integrasi Deep Learning</th>
          <th class="p-2 border border-slate-400 w-36 text-left">Penilaian Autentik</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center font-bold">1</td>
          <td class="p-2 border border-slate-300 font-semibold">Technopreneur & Perkembangan Industri DKV</td>
          <td class="p-2 border border-slate-300">1.1 Menjelaskan profil technopreneur lokal Bali di bidang animasi/desain dan peluang kerja masa depan.<br/>1.2 Mengidentifikasi etika HKI (Hak Kekayaan Intelektual).</td>
          <td class="p-2 border border-slate-300 text-center font-bold text-teal-800">12 JP</td>
          <td class="p-2 border border-slate-300"><strong>Meaningful:</strong> Studi kasus agensi kreatif di Denpasar & Ubud.</td>
          <td class="p-2 border border-slate-300">Portofolio telaah profil industri kreatif DUDIKA.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 text-center font-bold">2</td>
          <td class="p-2 border border-slate-300 font-semibold">Sketsa & Ilustrasi Konseptual</td>
          <td class="p-2 border border-slate-300">2.1 Menerapkan teknik sketsa manual bebas garis, bentuk, dan perspektif alam Karangasem.<br/>2.2 Mentransformasikan objek visual menjadi stilasi karakter.</td>
          <td class="p-2 border border-slate-300 text-center font-bold text-teal-800">24 JP</td>
          <td class="p-2 border border-slate-300"><strong>Joyful & Mindful:</strong> Praktik live-sketching di area taman sekolah SKANSABA.</td>
          <td class="p-2 border border-slate-300">Rubrik anatomi & proporsi gambar sketsa manual.</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 text-center font-bold">3</td>
          <td class="p-2 border border-slate-300 font-semibold">Komposisi Tipografi & Nirmana</td>
          <td class="p-2 border border-slate-300">3.1 Menganalisis anatomi huruf, hierarki visual, dan psikologi warna dalam periklanan.<br/>3.2 Merancang karya nirmana dwimatra kombinasi ornamen Bali.</td>
          <td class="p-2 border border-slate-300 text-center font-bold text-teal-800">24 JP</td>
          <td class="p-2 border border-slate-300"><strong>Mindful:</strong> Kepekaan harmoni rasa warna (Aesthetical mindfulness).</td>
          <td class="p-2 border border-slate-300">Pameran mini kelas (peer assessment).</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 text-center font-bold">4</td>
          <td class="p-2 border border-slate-300 font-semibold">Perangkat Lunak Desain Grafis Vektor & Bitmap</td>
          <td class="p-2 border border-slate-300">4.1 Mengoperasikan tools software vektor standar industri untuk membuat identitas visual.<br/>4.2 Memproduksi mockup kemasan produk pangan lokal Bebandem.</td>
          <td class="p-2 border border-slate-300 text-center font-bold text-teal-800">48 JP</td>
          <td class="p-2 border border-slate-300"><strong>Meaningful & Joyful:</strong> Mockup branding nyata untuk UMKM salak/arak Sibetan berizin resmi.</td>
          <td class="p-2 border border-slate-300">Uji kelayakan cetak (print ready) & presentasi karya.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    `,
  },
  {
    id: 'skansaba-asesmen-perhotelan-03',
    title: 'Instrumen Asesmen Autentik & Rubrik Front Office Berbasis Standar Industri Bintang 4',
    docType: 'asesmen_rubrik',
    topic: 'Check-In/Check-Out, Handling Complaint, & Service Excellence Hospitality',
    timeAllocation: '2 Pertemuan Asesmen Kinerja',
    createdAt: '2026-07-24T10:00:00Z',
    updatedAt: '2026-07-24T10:00:00Z',
    summary: 'Rubrik asesmen autentik berstandar DUDIKA industri pariwisata internasional di Bali untuk Konsentrasi Keahlian Perhotelan SMKN 1 Bebandem.',
    teacherProfile: {
      name: 'I Gusti Ngurah Agung, S.Pd., M.Par.',
      nip: '19790805 200801 1 015',
      subject: 'Konsentrasi Keahlian Perhotelan (Front Office)',
      gradePhase: 'Fase F - Kelas XI',
      major: 'Perhotelan',
      semester: 'Ganjil',
      academicYear: '2026/2027',
      dateStr: '24 Juli 2026',
      isVerified: true,
    },
    markdownBody: `# ASESMEN AUTENTIK PERHOTELAN\n...`,
    htmlBody: `
<div class="space-y-6 text-gray-900 leading-relaxed">
  <div class="text-center pb-4 border-b border-gray-300">
    <h1 class="text-2xl font-bold text-[#0d3b66] uppercase tracking-wide">INSTRUMEN ASESMEN AUTENTIK & RUBRIK KINERJA</h1>
    <h2 class="text-base font-semibold text-gray-700 mt-1">Layanan Kantor Depan (Front Office Service Excellence)</h2>
    <p class="text-xs text-gray-500 mt-1">Sesuai Kepmendikdasmen No. 126/P/2025 (Meaningful Learning & Standar Kinerja Industri)</p>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-xs border border-slate-400 border-collapse">
      <thead>
        <tr class="bg-[#0d3b66] text-white">
          <th class="p-2 border border-slate-400 text-left w-36">Aspek Pengamatan Kinerja</th>
          <th class="p-2 border border-slate-400 text-left">Baru Berkembang (1)</th>
          <th class="p-2 border border-slate-400 text-left">Layak (2)</th>
          <th class="p-2 border border-slate-400 text-left">Cakap (3)</th>
          <th class="p-2 border border-slate-400 text-left">Mahir (4 - Standar Industri)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold">1. Grooming & Personal Hygiene (Standar 5S)</td>
          <td class="p-2 border border-slate-300">Pakaian seragam tidak rapi, tanpa nametag, tidak mematuhi standar grooming hotel.</td>
          <td class="p-2 border border-slate-300">Seragam lengkap namun tatanan rambut/sepatu belum memenuhi SOP industri.</td>
          <td class="p-2 border border-slate-300">Grooming rapi, bersih, postur tubuh tegak dan wangi sesuai standar hotel berbintang.</td>
          <td class="p-2 border border-slate-300 font-medium text-emerald-900">Sangat prima, merepresentasikan citra hospitality bintang 5 dengan keanggunan alami Bali.</td>
        </tr>
        <tr class="bg-slate-50">
          <td class="p-2 border border-slate-300 font-bold">2. Komunikasi Bahasa Inggris & Hospitalitas (Joyful)</td>
          <td class="p-2 border border-slate-300">Ragu berbicara; terbata-bata dan tidak ada kontak mata dengan tamu.</td>
          <td class="p-2 border border-slate-300">Mampu menyapa tamu namun pilihan frasa masih kaku seperti terjemahan harfiah.</td>
          <td class="p-2 border border-slate-300">Komunikasi lancar, ramah (warm smile), artikulasi jelas dalam melayani proses check-in.</td>
          <td class="p-2 border border-slate-300 font-medium text-emerald-900">Fasih, luwes, mampu membangun obrolan menyenangkan (small talk) yang membuat tamu terkesan.</td>
        </tr>
        <tr class="bg-white">
          <td class="p-2 border border-slate-300 font-bold">3. Penanganan Keluhan Tamu (Mindful & Meaningful)</td>
          <td class="p-2 border border-slate-300">Panik atau membantah ketika tamu menyampaikan ketidakpuasan kamar.</td>
          <td class="p-2 border border-slate-300">Mendengarkan keluhan tetapi belum menunjukkan empati tulus dan lambat bertindak.</td>
          <td class="p-2 border border-slate-300">Menerapkan formula LAST (Listen, Apologize, Solve, Thank) dengan tenang dan solutif.</td>
          <td class="p-2 border border-slate-300 font-medium text-emerald-900">Sangat empatik, mengubah pengalaman negatif tamu menjadi loyalitas kepuasan yang tinggi.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    `,
  },
];
