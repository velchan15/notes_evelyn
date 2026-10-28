/* =====================================================
   FILE INI ISI CATATANMU. Tambah entri baru di PALING ATAS
   daftar RENUNGAN, simpan, lalu git push.
   (Atau pakai form: buka index.html dengan akhiran /#tulis,
   isi, klik "Buat kode", lalu tempel hasilnya di sini.)

   bacaan   : bebas, apa yang kamu baca hari itu.
              Contoh: "Matius 5–7", "Mazmur 23; Amsal 3", "Kejadian 1–3"
   teks     : (opsional) satu ayat yang paling kena di hati
   kunci    : (opsional) alamat ayat itu, contoh "Matius 6:33"
   renungan : daftar paragraf
   catatan  : daftar poin catatan pribadi
   Isi di bawah hanya CONTOH, ganti dengan tulisanmu sendiri.
   ===================================================== */
const SITE = { pemilik: "Elin" };

const TEMA = {
  Kasih:       { c: "#d92b50", k: "#fff" },
  Iman:        { c: "#2f6df6", k: "#fff" },
  Harapan:     { c: "#0b8a68", k: "#fff" },
  Syukur:      { c: "#ffb020", k: "#2a1a00" },
  Pengampunan: { c: "#7b3ff0", k: "#fff" },
  Damai:       { c: "#ff7eb6", k: "#3a0620" }
};

const RENUNGAN = [
  {
    tanggal: "2026-10-27", tema: "Damai",
    bacaan: "Filipi 4",
    kunci: "Filipi 4:6", teks: "Janganlah hendaknya kamu kuatir tentang apapun juga.",
    judul: "Khawatir yang diubah jadi doa",
    renungan: [
      "Hari ini banyak hal yang belum selesai, dan kepala rasanya penuh. Pasal ini tidak bilang khawatir itu salah, tapi mengajak kita membawanya ke tempat yang tepat.",
      "Doa bukan cara pura-pura tenang. Doa adalah tempat menaruh beban satu per satu sampai tangan kita kosong lagi."
    ],
    catatan: ["Tulis tiga hal yang bikin cemas, lalu doakan satu per satu.", "Perhatikan kata “dalam segala hal”: tidak ada urusan yang terlalu kecil."]
  },
  {
    tanggal: "2026-10-25", tema: "Kasih",
    bacaan: "Matius 5–7 (Khotbah di Bukit)",
    judul: "Tiga pasal, satu cara hidup",
    renungan: [
      "Membaca tiga pasal sekaligus membuat pesannya terasa utuh: Yesus tidak cuma memberi aturan, tapi menunjukkan hati yang melatarbelakanginya.",
      "Dari ucapan bahagia sampai dua dasar rumah, semuanya menanyakan hal yang sama: aku mendengar, lalu melakukan atau tidak?"
    ],
    catatan: ["Matius 5: kasih sampai ke musuh, ini yang paling menantang.", "Matius 6: doa dan harta, dua-duanya soal hati.", "Matius 7: bangun di atas batu, bukan sekadar tahu."]
  },
  {
    tanggal: "2026-10-24", tema: "Syukur",
    bacaan: "Mazmur 103; Mazmur 107",
    judul: "Daftar kebaikan yang gampang lupa",
    renungan: [
      "Pemazmur menyuruh jiwanya sendiri mengingat. Ternyata bersyukur memang perlu dilatih, bukan muncul otomatis.",
      "Hari ini aku coba menyebut kebaikan Tuhan satu per satu, dan daftarnya lebih panjang dari yang kukira."
    ],
    catatan: ["Mazmur 103:2 jadi pengingat: jangan lupakan segala kebaikan-Nya.", "Target minggu ini: tulis tiga rasa syukur tiap malam."]
  },
  {
    tanggal: "2026-10-20", tema: "Pengampunan",
    bacaan: "Efesus 4–5",
    kunci: "Efesus 4:32", teks: "saling mengampuni, sebagaimana Allah di dalam Kristus telah mengampuni kamu.",
    judul: "Mengampuni karena sudah lebih dulu diampuni",
    renungan: [
      "Mengampuni terasa berat kalau menunggu perasaan siap. Paulus memberi alasan lain: kita mengampuni karena kita sendiri sudah menerima pengampunan.",
      "Itu tidak menghapus rasa sakit, tapi mengubah arah hati dari membalas menjadi melepaskan."
    ],
    catatan: ["Siapa yang masih ada di daftar “belum aku maafkan”?", "Doa: minta kekuatan untuk melepaskan, bukan untuk melupakan."]
  },
  {
    tanggal: "2026-10-15", tema: "Iman",
    bacaan: "Ibrani 11",
    kunci: "Ibrani 11:1", teks: "Iman adalah dasar dari segala sesuatu yang kita harapkan.",
    judul: "Percaya sebelum melihat",
    renungan: [
      "Satu pasal penuh nama-nama yang melangkah tanpa melihat hasilnya. Iman bukan perasaan yakin tanpa alasan, tapi berpijak pada janji Tuhan.",
      "Kadang langkah iman sesederhana tetap rajin, tetap berdoa, tetap melakukan bagianku."
    ],
    catatan: ["Satu hal yang sedang kutunggu jawabannya dari Tuhan.", "Nama mana di pasal ini yang paling kupahami situasinya?"]
  },
  {
    tanggal: "2026-10-05", tema: "Harapan",
    bacaan: "Mazmur 23",
    kunci: "Mazmur 23:1", teks: "TUHAN adalah gembalaku, takkan kekurangan aku.",
    judul: "Cukup, karena Gembalaku",
    renungan: [
      "Daud menulis ini bukan dari tempat yang nyaman. Ia tahu rasanya dikejar dan diliputi bahaya, tapi tetap berkata: aku tidak kekurangan.",
      "Harapan tumbuh dari mengenal siapa yang menuntun, bukan dari seberapa jelas jalannya."
    ],
    catatan: ["Baca seluruh pasal ini pelan-pelan, dua kali.", "Apa arti “cukup” bagiku saat ini?"]
  }
];
