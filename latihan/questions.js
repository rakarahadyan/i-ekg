const questions = [
  {
    question: "Ilmu yang mempelajari tentang aktifitas listrik jantung disebut dengan?",
    options: ["Elektrofisiologi", "Elektrokardiografi", "Elektrolit", "Elektromagnetik"],
    answer: 1,
    explanations: [
      "Elektrofisiologi adalah ilmu yang mempelajari fungsi listrik sel dan jaringan secara umum, bukan spesifik untuk jantung.",
      "BENAR! Elektrokardiografi adalah ilmu yang secara khusus mempelajari aktivitas listrik jantung dan interpretasi rekaman EKG.",
      "Elektrolit adalah zat yang dapat menghantarkan listrik dalam larutan, bukan ilmu yang mempelajari aktivitas listrik jantung.",
      "Elektromagnetik adalah cabang fisika yang mempelajari medan listrik dan magnet, tidak berkaitan dengan jantung."
    ]
  },
  {
    question: "Suatu grafik yang menggambarkan rekaman listrik jantung disebut dengan?",
    options: ["Elektrokardiogram", "Elektrofisiologi", "Elektrolit", "Elektromagnetik"],
    answer: 0,
    explanations: [
      "BENAR! Elektrokardiogram (EKG/ECG) adalah grafik atau rekaman visual yang menunjukkan aktivitas listrik jantung.",
      "Elektrofisiologi adalah ilmu yang mempelajari aktivitas listrik, bukan grafik atau rekamannya.",
      "Elektrolit adalah ion-ion dalam tubuh yang membantu konduksi listrik, bukan grafik rekaman jantung.",
      "Elektromagnetik adalah bidang fisika, tidak berkaitan dengan rekaman aktivitas jantung."
    ]
  },
  {
    question: "Salah satu fungsi dari EKG adalah?",
    options: ["Mengobati pasien serangan jantung", "Menilai saturasi O2", "Menilai adanya Aritmia Jantung", "Menilai tekanan darah"],
    answer: 2,
    explanations: [
      "EKG adalah alat diagnostik, bukan alat terapi. EKG tidak dapat mengobati serangan jantung, hanya mendeteksi kelainan.",
      "Saturasi O2 diukur menggunakan pulse oximetry, bukan EKG. EKG tidak dapat mengukur kadar oksigen dalam darah.",
      "BENAR! EKG dapat mendeteksi berbagai jenis aritmia (gangguan irama jantung) seperti fibrilasi atrial, takikardia, bradikardia, dll.",
      "Tekanan darah diukur menggunakan sphygmomanometer, bukan EKG. EKG tidak dapat mengukur tekanan darah."
    ]
  },
  {
    question: "Jantung terdiri dari berapa ruang?",
    options: ["1", "2", "3", "4"],
    answer: 3,
    explanations: [
      "Jantung tidak hanya terdiri dari 1 ruang. Struktur jantung lebih kompleks dari itu.",
      "Jantung tidak hanya terdiri dari 2 ruang. Ini masih kurang dari struktur sebenarnya.",
      "Jantung tidak terdiri dari 3 ruang. Jumlah ini masih belum tepat.",
      "BENAR! Jantung terdiri dari 4 ruang: 2 atrium (kanan dan kiri) dan 2 ventrikel (kanan dan kiri)."
    ]
  },
  {
    question: "Jantung terdiri dari berapa katup?",
    options: ["4", "3", "2", "1"],
    answer: 0,
    explanations: [
      "BENAR! Jantung memiliki 4 katup: katup trikuspid, katup mitral/bikuspid, katup pulmonal, dan katup aorta.",
      "Jantung tidak hanya memiliki 3 katup. Jumlah sebenarnya lebih banyak dari ini.",
      "Jantung tidak hanya memiliki 2 katup. Struktur katup jantung lebih kompleks.",
      "Jantung tidak hanya memiliki 1 katup. Jantung memerlukan lebih banyak katup untuk mengatur aliran darah."
    ]
  },
  {
    question: "Dinding otot jantung terdiri dari berapa lapisan?",
    options: ["1", "2", "3", "4"],
    answer: 2,
    explanations: [
      "Dinding jantung tidak hanya terdiri dari 1 lapisan. Struktur dinding jantung lebih berlapis.",
      "Dinding jantung tidak hanya terdiri dari 2 lapisan. Masih ada lapisan lain yang penting.",
      "BENAR! Dinding jantung terdiri dari 3 lapisan: epikardium (luar), miokardium (tengah), dan endokardium (dalam).",
      "Dinding jantung tidak terdiri dari 4 lapisan. Jumlah ini terlalu banyak."
    ]
  },
  {
    question: "Selaput Perikardium yang melekat pada tulang dada dan selaput paru disebut?",
    options: ["Perikardium Viseralis", "Miokardium", "Epicardium", "Pericardium Parietalis"],
    answer: 3,
    explanations: [
      "Perikardium viseralis adalah lapisan yang langsung melekat pada permukaan jantung, bukan yang melekat pada tulang dada.",
      "Miokardium adalah lapisan otot jantung itu sendiri, bukan bagian dari perikardium.",
      "Epikardium adalah lapisan terluar dinding jantung, identik dengan perikardium viseralis.",
      "BENAR! Perikardium parietalis adalah lapisan luar perikardium yang melekat pada tulang dada dan struktur sekitarnya."
    ]
  },
  {
    question: "Ruang pada jantung yang berfungsi sebagai penampung darah yang rendah oksigen dari seluruh tubuh adalah?",
    options: ["Atrium Kanan", "Atrium Kiri", "Ventrikel Kanan", "Ventrikel Kiri"],
    answer: 0,
    explanations: [
      "BENAR! Atrium kanan menerima darah yang rendah oksigen dari vena cava superior dan inferior (darah dari seluruh tubuh).",
      "Atrium kiri menerima darah yang kaya oksigen dari paru-paru melalui vena pulmonalis, bukan darah rendah oksigen.",
      "Ventrikel kanan memompa darah ke paru-paru, bukan sebagai penampung utama darah dari tubuh.",
      "Ventrikel kiri memompa darah kaya oksigen ke seluruh tubuh, bukan menerima darah rendah oksigen."
    ]
  },
  {
    question: "Ruang pada jantung yang berfungsi sebagai penampung darah yang kaya oksigen dari kedua paru adalah?",
    options: ["Atrium Kanan", "Atrium Kiri", "Ventrikel Kanan", "Ventrikel Kiri"],
    answer: 1,
    explanations: [
      "Atrium kanan menerima darah rendah oksigen dari tubuh, bukan darah kaya oksigen dari paru-paru.",
      "BENAR! Atrium kiri menerima darah yang sudah diperkaya oksigen dari paru-paru melalui 4 vena pulmonalis.",
      "Ventrikel kanan memompa darah rendah oksigen ke paru-paru, bukan menerima darah kaya oksigen.",
      "Ventrikel kiri memompa darah kaya oksigen ke tubuh, tapi menerima darah dari atrium kiri, bukan langsung dari paru-paru."
    ]
  },
  {
    question: "Ruang pada jantung yang berfungsi sebagai penampung darah dari atrium kanan dan dipompakan ke paru-paru melalui arteri pulmonalis adalah?",
    options: ["Atrium Kanan", "Atrium Kiri", "Ventrikel Kanan", "Ventrikel Kiri"],
    answer: 2,
    explanations: [
      "Atrium kanan adalah penampung awal darah dari tubuh, bukan yang memompa ke paru-paru.",
      "Atrium kiri berkaitan dengan sirkulasi sistemik, bukan sirkulasi pulmonalis.",
      "BENAR! Ventrikel kanan menerima darah dari atrium kanan dan memompanya ke paru-paru melalui arteri pulmonalis.",
      "Ventrikel kiri memompa darah ke seluruh tubuh melalui aorta, bukan ke paru-paru."
    ]
  },
  {
    question: "Ruang pada jantung yang berfungsi sebagai penampung darah dari atrium kiri dan dipompakan ke seluruh tubuh melalui aorta adalah?",
    options: ["Atrium Kanan", "Atrium Kiri", "Ventrikel Kanan", "Ventrikel Kiri"],
    answer: 3,
    explanations: [
      "Atrium kanan berkaitan dengan darah rendah oksigen dan sirkulasi ke paru-paru, bukan ke seluruh tubuh.",
      "Atrium kiri adalah penampung darah dari paru-paru, tapi tidak memompa langsung ke tubuh.",
      "Ventrikel kanan memompa darah ke paru-paru, bukan ke seluruh tubuh.",
      "BENAR! Ventrikel kiri adalah ruang terkuat yang menerima darah kaya oksigen dari atrium kiri dan memompanya ke seluruh tubuh melalui aorta."
    ]
  },
  {
    question: "Lapisan paling luar dari dinding jantung adalah?",
    options: ["Epikardium", "Miokardium", "Endocardium", "Atrium"],
    answer: 0,
    explanations: [
      "BENAR! Epikardium adalah lapisan paling luar dari dinding jantung, juga disebut perikardium viseralis.",
      "Miokardium adalah lapisan tengah (otot jantung), bukan lapisan terluar.",
      "Endokardium adalah lapisan paling dalam yang melapisi ruang jantung, bukan terluar.",
      "Atrium adalah ruang jantung, bukan lapisan dinding jantung."
    ]
  },
  {
    question: "Lapisan tengah dari dinding jantung yang berotot dan paling tebal adalah?",
    options: ["Epikardium", "Miokardium", "Endocardium", "Atrium"],
    answer: 1,
    explanations: [
      "Epikardium adalah lapisan terluar, bukan lapisan tengah yang berotot.",
      "BENAR! Miokardium adalah lapisan tengah yang terdiri dari otot jantung dan merupakan lapisan paling tebal.",
      "Endokardium adalah lapisan dalam yang tipis, bukan lapisan tengah yang tebal.",
      "Atrium adalah ruang jantung, bukan lapisan dinding jantung."
    ]
  },
  {
    question: "Lapisan paling dalam dari dinding jantung yang langsung berhubungan dengan ruang-ruang jantung adalah?",
    options: ["Epikardium", "Miokardium", "Endokardium", "Atrium"],
    answer: 2,
    explanations: [
      "Epikardium adalah lapisan terluar, tidak berhubungan langsung dengan ruang jantung.",
      "Miokardium adalah lapisan tengah (otot), tidak berhubungan langsung dengan ruang jantung.",
      "BENAR! Endokardium adalah lapisan paling dalam yang melapisi ruang-ruang jantung dan katup jantung.",
      "Atrium adalah ruang jantung itu sendiri, bukan lapisan dinding."
    ]
  },
  {
    question: "Katup jantung yang terletak diantara atrium dan ventrikel disebut dengan?",
    options: ["Katup Semilunar", "Katup Pulmonal", "Katup Aorta", "Katup Atrioventrikuler"],
    answer: 3,
    explanations: [
      "Katup semilunar terletak antara ventrikel dan arteri besar (aorta dan pulmonalis), bukan antara atrium dan ventrikel.",
      "Katup pulmonal adalah salah satu katup semilunar yang terletak antara ventrikel kanan dan arteri pulmonalis.",
      "Katup aorta adalah katup semilunar yang terletak antara ventrikel kiri dan aorta.",
      "BENAR! Katup atrioventrikuler (AV valve) terletak antara atrium dan ventrikel, terdiri dari katup trikuspid dan mitral."
    ]
  },
  {
    question: "Katup yang mempunyai 3 buah daun katup dan terletak antara atrium kanan dan ventrikel kanan adalah?",
    options: ["Katup Bikuspidalis", "Katup Trikuspidalis", "Katup Pulmonal", "Katup Aorta"],
    answer: 1,
    explanations: [
      "Katup bikuspidalis (mitral) memiliki 2 daun katup dan terletak di sisi kiri jantung.",
      "BENAR! Katup trikuspidalis memiliki 3 daun katup dan terletak antara atrium kanan dan ventrikel kanan.",
      "Katup pulmonal terletak antara ventrikel kanan dan arteri pulmonalis, bukan antara atrium dan ventrikel.",
      "Katup aorta terletak antara ventrikel kiri dan aorta, bukan di sisi kanan jantung."
    ]
  },
  {
    question: "Katup yang mempunyai 2 buah daun katup dan terletak antara atrium kiri dan ventrikel kiri adalah?",
    options: ["Katup Bikuspidalis atau Katup Mitral", "Katup Trikuspidalis", "Katup Pulmonal", "Katup Aorta"],
    answer: 0,
    explanations: [
      "BENAR! Katup bikuspidalis (juga disebut katup mitral) memiliki 2 daun katup dan terletak antara atrium kiri dan ventrikel kiri.",
      "Katup trikuspidalis memiliki 3 daun katup dan terletak di sisi kanan jantung.",
      "Katup pulmonal terletak antara ventrikel kanan dan arteri pulmonalis.",
      "Katup aorta terletak antara ventrikel kiri dan aorta, bukan antara atrium dan ventrikel."
    ]
  },
  {
    question: "Pembuluh darah yang berfungsi mengantarkan darah menuju otot jantung adalah?",
    options: ["Vena Cava Superior", "Vena Cava Inferior", "Arteri Pulmonalis", "Arteri Koroner"],
    answer: 3,
    explanations: [
      "Vena cava superior mengalirkan darah dari bagian atas tubuh kembali ke jantung, bukan untuk otot jantung.",
      "Vena cava inferior mengalirkan darah dari bagian bawah tubuh kembali ke jantung, bukan untuk otot jantung.",
      "Arteri pulmonalis mengalirkan darah dari jantung ke paru-paru, bukan untuk otot jantung.",
      "BENAR! Arteri koroner adalah pembuluh darah yang khusus menyuplai darah dan oksigen ke otot jantung (miokardium)."
    ]
  },
  {
    question: "Sistem konduksi otot jantung terdiri dari?",
    options: ["AV Node, SA Node, Serabut Purkinje", "Serabut Purkinje, AV Node, SA Node", "SA Node, Traktus Internodal, Bachman Bundle, AV Node, Bundle Of HIS, Serabut Purkinje", "SA Node, Serabut Purkinje, AV Node, Bachman Bundle"],
    answer: 2,
    explanations: [
      "Ini hanya menyebutkan 3 komponen, padahal sistem konduksi lebih kompleks dan memiliki lebih banyak struktur.",
      "Urutan ini tidak tepat dan tidak lengkap dalam menggambarkan sistem konduksi jantung.",
      "BENAR! Ini adalah urutan lengkap sistem konduksi: SA Node → Traktus Internodal & Bachman Bundle → AV Node → Bundle of His → Serabut Purkinje.",
      "Urutan ini tidak tepat dan tidak mencantumkan semua komponen penting seperti Bundle of His."
    ]
  },
  {
    question: "Pacemaker pada sistem konduksi yang dapat mengeluarkan impuls listrik sebesar 60 - 100 kali/menit adalah?",
    options: ["AV Node", "Serabut Purkinje", "Bundle of HIS", "SA Node"],
    answer: 3,
    explanations: [
      "AV Node adalah pacemaker sekunder dengan kecepatan 40-60 kali/menit, bukan 60-100.",
      "Serabut Purkinje adalah pacemaker tersier dengan kecepatan 20-40 kali/menit.",
      "Bundle of His bukan pacemaker utama dan tidak menghasilkan impuls dengan frekuensi 60-100.",
      "BENAR! SA Node (Sino Atrial Node) adalah pacemaker alami jantung dengan kecepatan normal 60-100 denyut/menit."
    ]
  },
  {
    question: "Pacemaker pada sistem konduksi yang dapat mengeluarkan impuls listrik sebesar 40 - 60 kali/menit adalah?",
    options: ["SA Node", "AV node", "Serabut Purkinje", "Traktus Internodal"],
    answer: 1,
    explanations: [
      "SA Node menghasilkan impuls 60-100 kali/menit, bukan 40-60.",
      "BENAR! AV Node adalah pacemaker sekunder yang menghasilkan impuls 40-60 kali/menit jika SA Node gagal.",
      "Serabut Purkinje menghasilkan impuls 20-40 kali/menit, bukan 40-60.",
      "Traktus Internodal hanya menghantarkan impuls, bukan menghasilkan impuls sebagai pacemaker."
    ]
  },
  {
    question: "Pacemaker pada sistem konduksi yang dapat mengeluarkan impuls listrik sebesar 20 - 40 kali/menit adalah?",
    options: ["SA Node", "AV node", "Serabut Purkinje", "Traktus Internodal"],
    answer: 2,
    explanations: [
      "SA Node menghasilkan impuls 60-100 kali/menit, jauh lebih cepat dari 20-40.",
      "AV Node menghasilkan impuls 40-60 kali/menit, lebih cepat dari 20-40.",
      "BENAR! Serabut Purkinje adalah pacemaker tersier dengan kecepatan paling lambat 20-40 kali/menit.",
      "Traktus Internodal berfungsi menghantarkan impuls, bukan sebagai pacemaker."
    ]
  },
  {
    question: "Gelombang pada EKG yang dihasilkan dari depolarisasi atrium adalah?",
    options: ["Gelombang P", "Gelombang Q", "Gelombang R", "Gelombang S"],
    answer: 0,
    explanations: [
      "BENAR! Gelombang P menggambarkan depolarisasi atrium (kontraksi atrium kanan dan kiri).",
      "Gelombang Q adalah bagian dari kompleks QRS yang menggambarkan depolarisasi ventrikel awal.",
      "Gelombang R adalah bagian dari kompleks QRS yang menggambarkan depolarisasi ventrikel utama.",
      "Gelombang S adalah bagian terakhir dari kompleks QRS yang menggambarkan depolarisasi ventrikel akhir."
    ]
  },
  {
    question: "Ukuran dari lebar gelombang P yang normal adalah?",
    options: ["< 0,12 mv", "< 0,12 detik", "> 0,12 mv", "> 0,12 detik"],
    answer: 1,
    explanations: [
      "Ini menyebutkan voltage (mv), padahal yang ditanyakan adalah lebar/durasi gelombang P.",
      "BENAR! Lebar normal gelombang P adalah kurang dari 0,12 detik (durasi waktu).",
      "Ini salah karena menyebutkan voltage dan nilai yang terlalu besar untuk tinggi gelombang P.",
      "Lebar gelombang P yang lebih dari 0,12 detik menunjukkan kelainan (P mitrale/P pulmonale)."
    ]
  },
  {
    question: "Ukuran dari tinggi gelombang P yang normal adalah?",
    options: ["> 0,3 mv", "> 0,3 detik", "< 0,3 mv", "< 0,3 detik"],
    answer: 2,
    explanations: [
      "Tinggi gelombang P yang lebih dari 0,3 mV menunjukkan pembesaran atrium (tidak normal).",
      "Ini menyebutkan detik, padahal tinggi gelombang diukur dalam mV (millivolt).",
      "BENAR! Tinggi normal gelombang P adalah kurang dari 0,3 mV (0,25 mV di lead II).",
      "Ini salah karena tinggi gelombang diukur dalam mV, bukan detik."
    ]
  },
  {
    question: "Gelombang pada gambaran EKG yang dihasilkan dari depolarisasi Ventrikel adalah?",
    options: ["Gelombang P", "Gelombang Q, R, dan S", "Gelombang T", "Gelombang U"],
    answer: 1,
    explanations: [
      "Gelombang P menggambarkan depolarisasi atrium, bukan ventrikel.",
      "BENAR! Kompleks QRS (gelombang Q, R, dan S) menggambarkan depolarisasi ventrikel.",
      "Gelombang T menggambarkan repolarisasi ventrikel, bukan depolarisasi.",
      "Gelombang U jarang terlihat dan berhubungan dengan repolarisasi sistem His-Purkinje."
    ]
  },
  {
    question: "Nilai normal ukuran P - R interval adalah?",
    options: ["< 0,12 detik", "> 0,20 detik", "0,06 - 0,12 detik", "0,12 - 0,20 detik"],
    answer: 3,
    explanations: [
      "Interval P-R kurang dari 0,12 detik menunjukkan konduksi yang terlalu cepat (pre-eksitasi).",
      "Interval P-R lebih dari 0,20 detik menunjukkan blok AV derajat pertama.",
      "Ini adalah nilai normal untuk lebar gelombang P atau kompleks QRS, bukan interval P-R.",
      "BENAR! Interval P-R normal adalah 0,12 - 0,20 detik, menggambarkan waktu konduksi dari atrium ke ventrikel."
    ]
  },
  {
    question: "Gelombang yang menggambarkan proses repolarisasi ventrikel adalah?",
    options: ["Gelombang Q", "Gelombang R", "Gelombang S", "Gelombang T"],
    answer: 3,
    explanations: [
      "Gelombang Q adalah bagian dari depolarisasi ventrikel, bukan repolarisasi.",
      "Gelombang R adalah bagian dari depolarisasi ventrikel, bukan repolarisasi.",
      "Gelombang S adalah bagian dari depolarisasi ventrikel, bukan repolarisasi.",
      "BENAR! Gelombang T menggambarkan repolarisasi ventrikel (fase relaksasi/recovery ventrikel)."
    ]
  },
  {
    question: "Sadapan EKG terdiri dari berapa jenis?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    explanations: [
      "Sadapan EKG terdiri dari lebih dari 2 jenis. Ini terlalu sedikit.",
      "BENAR! Sadapan EKG terdiri dari 3 jenis: Bipolar, Unipolar Ekstremitas, dan Unipolar Prekordial.",
      "Sadapan EKG tidak terdiri dari 4 jenis. Jumlah ini terlalu banyak.",
      "Sadapan EKG tidak terdiri dari 5 jenis. Jumlah ini terlalu banyak."
    ]
  },
  {
    question: "Jenis sadapan yang merekam perbedaan potensial dari dua (2) elektroda dan ditandai dengan angka romawi adalah?",
    options: ["Sadapan Unipolar", "Sadapan Bipolar", "Sadapan Prekordial", "Sadapan Ekstremitas"],
    answer: 1,
    explanations: [
      "Sadapan unipolar merekam potensial dari satu elektroda terhadap elektroda referensi, bukan dua elektroda.",
      "BENAR! Sadapan bipolar merekam perbedaan potensial antara 2 elektroda dan menggunakan lead I, II, III (angka romawi).",
      "Sadapan prekordial adalah jenis sadapan unipolar yang menggunakan V1-V6, bukan angka romawi.",
      "Ini adalah kategori umum, bukan jenis spesifik yang dimaksud dalam pertanyaan."
    ]
  },
  {
    question: "Sadapan yang merekam besar potensial listrik pada satu ekstremitas adalah?",
    options: ["Sadapan Bipolar", "Sadapan Prekordial", "Sadapan Unipolar Ekstremitas", "Sadapan Unipolar Prekordial"],
    answer: 2,
    explanations: [
      "Sadapan bipolar merekam perbedaan potensial antara dua elektroda, bukan satu ekstremitas.",
      "Sadapan prekordial ditempatkan di dada, bukan pada ekstremitas.",
      "BENAR! Sadapan unipolar ekstremitas (aVR, aVL, aVF) merekam potensial listrik pada satu ekstremitas.",
      "Sadapan unipolar prekordial ditempatkan di dada, bukan ekstremitas."
    ]
  },
  {
    question: "Sadapan yang merekam besar potensial listrik jantung dengan bantuan elektroda eksplorasi yang ditempatkan pada beberapa dinding dada adalah?",
    options: ["Sadapan Bipolar", "Sadapan Prekordial", "Sadapan Unipolar Ekstremitas", "Sadapan Unipolar Prekordial"],
    answer: 3,
    explanations: [
      "Sadapan bipolar menggunakan elektroda pada ekstremitas, bukan dinding dada.",
      "Ini benar tapi tidak spesifik. Sadapan prekordial sama dengan sadapan unipolar prekordial.",
      "Sadapan unipolar ekstremitas ditempatkan pada ekstremitas, bukan dinding dada.",
      "BENAR! Sadapan unipolar prekordial (V1-V6) menggunakan elektroda eksplorasi di berbagai posisi dinding dada."
    ]
  },
  {
    question: "Berapa jarak setiap satu kotak kecil dalam kertas EKG?",
    options: ["1 mm", "2 mm", "3 mm", "4 mm"],
    answer: 0,
    explanations: [
      "BENAR! Setiap kotak kecil dalam kertas EKG memiliki ukuran 1 mm x 1 mm.",
      "2 mm bukan ukuran standar untuk satu kotak kecil kertas EKG.",
      "3 mm terlalu besar untuk ukuran satu kotak kecil kertas EKG.",
      "4 mm terlalu besar untuk ukuran satu kotak kecil kertas EKG."
    ]
  },
  {
    question: "Berapa jarak untuk setiap satu kotak besar dalam kertas EKG?",
    options: ["2 mm", "3 mm", "4 mm", "5 mm"],
    answer: 3,
    explanations: [
      "2 mm terlalu kecil untuk ukuran satu kotak besar kertas EKG.",
      "3 mm masih terlalu kecil untuk ukuran satu kotak besar kertas EKG.",
      "4 mm masih kurang dari ukuran standar satu kotak besar kertas EKG.",
      "BENAR! Setiap kotak besar dalam kertas EKG berukuran 5 mm x 5 mm (terdiri dari 5x5 kotak kecil)."
    ]
  },
  {
    question: "Cara yang digunakan untuk menentukan irama teratur atau tidak teratur adalah?",
    options: ["Melihat jarak antara QRS satu dengan QRS yang lain sama atau tidak", "Melihat tinggi gelombang R", "Melihat jarak antara gelombang P dengan QRS", "Melihat jarak antara gelombang QRS dengan gelombang T"],
    answer: 0,
    explanations: [
      "BENAR! Irama dinilai dengan mengukur interval R-R (jarak antara QRS). Jika sama = teratur, jika bervariasi = tidak teratur.",
      "Tinggi gelombang R tidak menentukan keteraturan irama, hanya menunjukkan amplitudo.",
      "Jarak P-QRS menunjukkan interval P-R, bukan keteraturan irama jantung.",
      "Jarak QRS-T tidak digunakan untuk menilai keteraturan irama jantung."
    ]
  },
  {
    question: "Rumus yang benar dalam menghitung Frekuensi HR pada irama yang teratur adalah?",
    options: ["300/(jumlah kotak kecil antara R - R)", "1500/(jumlah kotak kecil antara R - R)", "1500/(jumlah kotak besar antara R - R)", "Ambil EKG Strip sepanjang 6 detik, hitung jumlah QRS dan kalikan 10"],
    answer: 1,
    explanations: [
      "Rumus 300 dibagi kotak kecil digunakan untuk menghitung HR berdasarkan kotak besar, bukan kotak kecil.",
      "BENAR! Untuk irama teratur: HR = 1500 / (jumlah kotak kecil antara R-R). Angka 1500 berasal dari 300 x 5.",
      "Rumus ini menggunakan kotak besar, seharusnya 300/(jumlah kotak besar antara R-R).",
      "Metode ini digunakan untuk irama yang TIDAK teratur, bukan untuk irama teratur."
    ]
  },
  {
    question: "Rumus yang benar dalam menghitung Frekuensi HR pada irama yang tidak teratur adalah?",
    options: ["300/(jumlah kotak kecil antara R - R)", "1500/(jumlah kotak kecil antara R - R)", "1500/(jumlah kotak besar antara R - R)", "Ambil EKG Strip sepanjang 6 detik, hitung jumlah QRS dan kalikan 10"],
    answer: 3,
    explanations: [
      "Metode ini digunakan untuk irama teratur dengan kotak besar, bukan irama tidak teratur.",
      "Metode ini digunakan untuk irama teratur, bukan irama tidak teratur.",
      "Metode ini juga digunakan untuk irama teratur, bukan irama tidak teratur.",
      "BENAR! Untuk irama tidak teratur: hitung QRS dalam strip 6 detik, lalu kalikan 10 untuk mendapat HR per menit."
    ]
  },
  {
    question: "Jenis irama pada gambar EKG di bawah ini adalah?",
    options: ["Teratur", "Tidak Teratur/Irregular", "Regular", "Sinus"],
    answer: 1,
    explanations: [
      "Berdasarkan konteks soal, irama pada gambar menunjukkan ketidakteraturan interval R-R.",
      "BENAR! Gambar menunjukkan irama yang tidak teratur dengan interval R-R yang bervariasi.",
      "Regular sama dengan teratur, yang tidak sesuai dengan gambar yang ditampilkan.",
      "Sinus menunjukkan asal irama, bukan keteraturannya. Sinus rhythm bisa teratur atau tidak teratur."
    ]
  },
  {
    question: "Jenis irama pada gambar EKG di bawah ini adalah?",
    options: ["Tidak Teratur", "Irregular", "Teratur/Regular", "Takikardi"],
    answer: 2,
    explanations: [
      "Berdasarkan konteks, gambar menunjukkan interval R-R yang konsisten, bukan tidak teratur.",
      "Irregular sama dengan tidak teratur, yang tidak sesuai dengan gambar.",
      "BENAR! Gambar menunjukkan irama yang teratur dengan interval R-R yang konsisten.",
      "Takikardi menunjukkan kecepatan jantung >100 bpm, bukan keteraturan irama."
    ]
  },
  {
    question: "Berapa jumlah HR pada gambar EKG di bawah ini?",
    options: ["93 kali/menit", "83 kali/menit", "73 kali/menit", "63 kali/menit"],
    answer: 1,
    explanations: [
      "93 bpm terlalu cepat berdasarkan interval R-R yang terlihat pada gambar.",
      "BENAR! Berdasarkan perhitungan interval R-R pada gambar, HR sekitar 83 kali/menit.",
      "73 bpm terlalu lambat berdasarkan interval R-R yang terlihat pada gambar.",
      "63 bpm terlalu lambat berdasarkan interval R-R yang terlihat pada gambar."
    ]
  },
  {
    question: "Berapa jumlah HR pada gambar EKG di bawah ini?",
    options: ["90 kali/menit", "80 kali/menit", "70 kali/menit", "60 kali/menit"],
    answer: 3,
    explanations: [
      "90 bpm terlalu cepat berdasarkan interval R-R yang terlihat pada gambar.",
      "80 bpm masih terlalu cepat berdasarkan interval R-R yang terlihat pada gambar.",
      "70 bpm masih sedikit cepat berdasarkan interval R-R yang terlihat pada gambar.",
      "BENAR! Berdasarkan perhitungan interval R-R pada gambar, HR sekitar 60 kali/menit."
    ]
  },
  {
    question: "Berikut ini adalah pernyataan yang benar tentang kriteria irama Sinus Rhythm adalah sebagai berikut:",
    options: ["Irama reguler, Frekuensi nadi (HR) 40 - 60x/mnt, Gel. P. 0,06-0,12 dtk diikuti QRS, P-R interval normal", "Irama regular, frekuensi nadi (HR) 60 - 100 x/mnt, Gel. P. ≤ 0,12 dtk diikuti QRS, P-R interval normal, kompleks QRS ≤ 0,12 dtk", "Irama iregular, frekuensi nadi (HR) 60 - 100 x/mnt, Gel. P. 0,06-0,12 dtk diikuti QRS, P-R interval normal", "Irama regular, frekuensi nadi (HR) 40 - 60 x/mnt, Gel. P. terbalik diikuti QRS, P-R Interval normal"],
    answer: 1,
    explanations: [
      "HR 40-60 x/mnt adalah bradikardi, bukan sinus rhythm normal. Sinus rhythm normal 60-100 bpm.",
      "BENAR! Sinus rhythm: irama teratur, HR 60-100 bpm, gelombang P normal diikuti QRS, P-R dan QRS interval normal.",
      "Sinus rhythm harus teratur (regular), bukan tidak teratur (irregular).",
      "HR 40-60 adalah bradikardi dan gelombang P terbalik bukan ciri sinus rhythm normal."
    ]
  },
  {
    question: "Sadapan (Lead) yang dihasilkan oleh sadapan Bipolar adalah?",
    options: ["Lead I, II, dan III", "aVR, aVL, dan aVF", "V1 - V6", "V7 - V9"],
    answer: 0,
    explanations: [
      "BENAR! Sadapan bipolar menghasilkan Lead I, II, dan III yang menggunakan angka romawi.",
      "aVR, aVL, dan aVF adalah sadapan unipolar ekstremitas, bukan bipolar.",
      "V1-V6 adalah sadapan unipolar prekordial, bukan sadapan bipolar.",
      "V7-V9 adalah sadapan tambahan prekordial posterior, bukan sadapan bipolar."
    ]
  },
  {
    question: "Garis horizontal pada kertas EKG menunjukan waktu dimana setiap 1 kotak kecil memiliki nilai waktu?",
    options: ["0,1 detik", "0,4 detik", "0,04 detik", "0,004 detik"],
    answer: 2,
    explanations: [
      "0,1 detik terlalu besar untuk satu kotak kecil. Ini setara dengan 2,5 kotak kecil.",
      "0,4 detik terlalu besar untuk satu kotak kecil. Ini setara dengan 10 kotak kecil.",
      "BENAR! Setiap kotak kecil (1 mm) = 0,04 detik pada kecepatan standar 25 mm/detik.",
      "0,004 detik terlalu kecil untuk satu kotak kecil kertas EKG."
    ]
  },
  {
    question: "Garis horizontal pada kertas EKG menunjukan waktu dimana setiap 1 kotak besar memiliki nilai waktu?",
    options: ["0,002 detik", "0,02 detik", "0,2 detik", "2 detik"],
    answer: 2,
    explanations: [
      "0,002 detik terlalu kecil untuk satu kotak besar kertas EKG.",
      "0,02 detik terlalu kecil untuk satu kotak besar kertas EKG.",
      "BENAR! Setiap kotak besar (5 mm) = 0,2 detik pada kecepatan standar 25 mm/detik.",
      "2 detik terlalu besar untuk satu kotak besar kertas EKG."
    ]
  },
  {
    question: "Garis vertikal pada kertas EKG menggambarkan voltage dimana setiap 1 kotak kecil memiliki nilai?",
    options: ["0,01 mv", "0,1 mv", "1 mv", "0,001 mv"],
    answer: 1,
    explanations: [
      "0,01 mV terlalu kecil untuk standar kalibrasi satu kotak kecil.",
      "BENAR! Setiap kotak kecil vertikal = 0,1 mV pada kalibrasi standar 1 mV = 10 mm.",
      "1 mV setara dengan 10 kotak kecil vertikal, bukan satu kotak kecil.",
      "0,001 mV terlalu kecil untuk satu kotak kecil kertas EKG."
    ]
  },
  {
    question: "Garis vertikal pada kertas EKG menggambarkan voltage dimana setiap 1 kotak besar memiliki nilai?",
    options: ["0,005 mv", "0,05 mv", "5 mv", "0,5 mv"],
    answer: 3,
    explanations: [
      "0,005 mV terlalu kecil untuk satu kotak besar vertikal.",
      "0,05 mV terlalu kecil untuk satu kotak besar vertikal.",
      "5 mV terlalu besar untuk satu kotak besar vertikal pada kalibrasi standar.",
      "BENAR! Setiap kotak besar vertikal (5 mm) = 0,5 mV pada kalibrasi standar."
    ]
  },
  {
    question: "Standar kecepatan dalam perekaman EKG adalah?",
    options: ["25 mm/dtk", "50 mm/dtk", "2,5 mm/dtk", "5 mm/dtk"],
    answer: 0,
    explanations: [
      "BENAR! Kecepatan standar perekaman EKG adalah 25 mm/detik di seluruh dunia.",
      "50 mm/dtk adalah kecepatan ganda yang kadang digunakan untuk analisis detail, bukan standar.",
      "2,5 mm/dtk terlalu lambat untuk perekaman EKG standar.",
      "5 mm/dtk terlalu lambat untuk perekaman EKG standar."
    ]
  },
  {
    question: "Standar kaliberasi dalam perekaman EKG adalah?",
    options: ["1 mv", "1,5 mv", "2 mv", "2,5 mv"],
    answer: 0,
    explanations: [
      "BENAR! Standar kalibrasi EKG adalah 1 mV = 10 mm (1 kotak besar) tinggi pada kertas EKG.",
      "1,5 mV bukan standar kalibrasi yang umum digunakan dalam EKG.",
      "2 mV adalah kalibrasi setengah dari standar, kadang digunakan untuk amplitudo besar.",
      "2,5 mV bukan standar kalibrasi yang digunakan dalam EKG."
    ]
  },
  {
    question: "Jenis gambaran EKG yang dihasilkan oleh Nodus Sino Atrial adalah?",
    options: ["Junctional", "Atrial", "Idioventrikular", "Synus Rhythm"],
    answer: 3,
    explanations: [
      "Junctional rhythm dihasilkan oleh AV junction, bukan SA Node.",
      "Atrial rhythm dihasilkan oleh fokus ektopik di atrium, bukan SA Node.",
      "Idioventrikular rhythm dihasilkan oleh fokus di ventrikel, bukan SA Node.",
      "BENAR! SA Node menghasilkan Sinus Rhythm (normal heart rhythm) dengan gelombang P normal diikuti QRS."
    ]
  }
];