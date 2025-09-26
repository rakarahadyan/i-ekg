let questions = [
  {
    index: 0,
    question: "Ilmu yang mempelajari tentang aktifitas listrik jantung disebut dengan?",
    options: ["Elektrofisiologi", "Elektrokardiografi", "Elektrolit", "Elektromagnetik"],
    answer: 1,
    hints: "Kata kunci: ilmu + aktivitas listrik + jantung. Fokus pada istilah medis yang berkaitan dengan rekaman jantung.",
    explanations: [
      "Elektrofisiologi adalah ilmu yang mempelajari fungsi listrik sel dan jaringan secara umum, bukan spesifik untuk jantung.",
      "BENAR! Elektrokardiografi adalah ilmu yang secara khusus mempelajari aktivitas listrik jantung dan interpretasi rekaman EKG.",
      "Elektrolit adalah zat yang dapat menghantarkan listrik dalam larutan, bukan ilmu yang mempelajari aktivitas listrik jantung.",
      "Elektromagnetik adalah cabang fisika yang mempelajari medan listrik dan magnet, tidak berkaitan dengan jantung."
    ]
  },
  {
    index: 1,
    question: "Suatu grafik yang menggambarkan rekaman listrik jantung disebut dengan?",
    options: ["Elektrokardiogram", "Elektrofisiologi", "Elektrolit", "Elektromagnetik"],
    answer: 0,
    hints: "Kata kunci: grafik + rekaman listrik jantung. Bukan ilmunya tapi hasil rekamannya dalam bentuk visual.",
    explanations: [
      "BENAR! Elektrokardiogram (EKG/ECG) adalah grafik atau rekaman visual yang menunjukkan aktivitas listrik jantung.",
      "Elektrofisiologi adalah ilmu yang mempelajari aktivitas listrik, bukan grafik atau rekamannya.",
      "Elektrolit adalah ion-ion dalam tubuh yang membantu konduksi listrik, bukan grafik rekaman jantung.",
      "Elektromagnetik adalah bidang fisika, tidak berkaitan dengan rekaman aktivitas jantung."
    ]
  },
  {
    index: 2,
    question: "Salah satu fungsi dari EKG adalah?",
    options: ["Mengobati pasien serangan jantung", "Menilai saturasi O2", "Menilai adanya Aritmia Jantung", "Menilai tekanan darah"],
    answer: 2,
    hints: "EKG adalah alat diagnostik untuk mendeteksi kelainan irama dan aktivitas listrik jantung, bukan untuk pengobatan atau mengukur parameter lain.",
    explanations: [
      "EKG adalah alat diagnostik, bukan alat terapi. EKG tidak dapat mengobati serangan jantung, hanya mendeteksi kelainan.",
      "Saturasi O2 diukur menggunakan pulse oximetry, bukan EKG. EKG tidak dapat mengukur kadar oksigen dalam darah.",
      "BENAR! EKG dapat mendeteksi berbagai jenis aritmia (gangguan irama jantung) seperti fibrilasi atrial, takikardia, bradikardia, dll.",
      "Tekanan darah diukur menggunakan sphygmomanometer, bukan EKG. EKG tidak dapat mengukur tekanan darah."
    ]
  },
  {
    index: 3,
    question: "Jantung terdiri dari berapa ruang?",
    options: ["1", "2", "3", "4"],
    answer: 3,
    hints: "Ingat anatomi dasar jantung: ada atrium kanan-kiri dan ventrikel kanan-kiri. Hitung total ruangnya.",
    explanations: [
      "Jantung tidak hanya terdiri dari 1 ruang. Struktur jantung lebih kompleks dari itu.",
      "Jantung tidak hanya terdiri dari 2 ruang. Ini masih kurang dari struktur sebenarnya.",
      "Jantung tidak terdiri dari 3 ruang. Jumlah ini masih belum tepat.",
      "BENAR! Jantung terdiri dari 4 ruang: 2 atrium (kanan dan kiri) dan 2 ventrikel (kanan dan kiri)."
    ]
  },
  {
    index: 4,
    question: "Jantung terdiri dari berapa katup?",
    options: ["4", "3", "2", "1"],
    answer: 0,
    hints: "Pikirkan katup yang mengatur aliran darah: ada katup antara atrium-ventrikel dan katup antara ventrikel-arteri besar.",
    explanations: [
      "BENAR! Jantung memiliki 4 katup: katup trikuspid, katup mitral/bikuspid, katup pulmonal, dan katup aorta.",
      "Jantung tidak hanya memiliki 3 katup. Jumlah sebenarnya lebih banyak dari ini.",
      "Jantung tidak hanya memiliki 2 katup. Struktur katup jantung lebih kompleks.",
      "Jantung tidak hanya memiliki 1 katup. Jantung memerlukan lebih banyak katup untuk mengatur aliran darah."
    ]
  },
  {
    index: 5,
    question: "Dinding otot jantung terdiri dari berapa lapisan?",
    options: ["1", "2", "3", "4"],
    answer: 2,
    hints: "Dinding jantung berlapis dari luar ke dalam: lapisan pelindung luar, lapisan otot utama, dan lapisan dalam yang halus.",
    explanations: [
      "Dinding jantung tidak hanya terdiri dari 1 lapisan. Struktur dinding jantung lebih berlapis.",
      "Dinding jantung tidak hanya terdiri dari 2 lapisan. Masih ada lapisan lain yang penting.",
      "BENAR! Dinding jantung terdiri dari 3 lapisan: epikardium (luar), miokardium (tengah), dan endokardium (dalam).",
      "Dinding jantung tidak terdiri dari 4 lapisan. Jumlah ini terlalu banyak."
    ]
  },
  {
    index: 6,
    question: "Selaput Perikardium yang melekat pada tulang dada dan selaput paru disebut?",
    options: ["Perikardium Viseralis", "Miokardium", "Epicardium", "Pericardium Parietalis"],
    answer: 3,
    hints: "Ada 2 jenis perikardium: yang melekat langsung pada jantung (viseralis) dan yang melekat pada struktur sekitar (parietalis).",
    explanations: [
      "Perikardium viseralis adalah lapisan yang langsung melekat pada permukaan jantung, bukan yang melekat pada tulang dada.",
      "Miokardium adalah lapisan otot jantung itu sendiri, bukan bagian dari perikardium.",
      "Epikardium adalah lapisan terluar dinding jantung, identik dengan perikardium viseralis.",
      "BENAR! Perikardium parietalis adalah lapisan luar perikardium yang melekat pada tulang dada dan struktur sekitarnya."
    ]
  },
  {
    index: 7,
    question: "Ruang pada jantung yang berfungsi sebagai penampung darah yang rendah oksigen dari seluruh tubuh adalah?",
    options: ["Atrium Kanan", "Atrium Kiri", "Ventrikel Kanan", "Ventrikel Kiri"],
    answer: 0,
    hints: "Darah rendah oksigen dari tubuh kembali ke jantung melalui vena. Pikirkan sisi mana yang menerima darah vena dari tubuh.",
    explanations: [
      "BENAR! Atrium kanan menerima darah yang rendah oksigen dari vena cava superior dan inferior (darah dari seluruh tubuh).",
      "Atrium kiri menerima darah yang kaya oksigen dari paru-paru melalui vena pulmonalis, bukan darah rendah oksigen.",
      "Ventrikel kanan memompa darah ke paru-paru, bukan sebagai penampung utama darah dari tubuh.",
      "Ventrikel kiri memompa darah kaya oksigen ke seluruh tubuh, bukan menerima darah rendah oksigen."
    ]
  },
  {
    index: 8,
    question: "Ruang pada jantung yang berfungsi sebagai penampung darah yang kaya oksigen dari kedua paru adalah?",
    options: ["Atrium Kanan", "Atrium Kiri", "Ventrikel Kanan", "Ventrikel Kiri"],
    answer: 1,
    hints: "Darah kaya oksigen dari paru-paru kembali ke jantung melalui vena pulmonalis. Pikirkan sisi mana yang menerima darah ini.",
    explanations: [
      "Atrium kanan menerima darah rendah oksigen dari tubuh, bukan darah kaya oksigen dari paru-paru.",
      "BENAR! Atrium kiri menerima darah yang sudah diperkaya oksigen dari paru-paru melalui 4 vena pulmonalis.",
      "Ventrikel kanan memompa darah rendah oksigen ke paru-paru, bukan menerima darah kaya oksigen.",
      "Ventrikel kiri memompa darah kaya oksigen ke tubuh, tapi menerima darah dari atrium kiri, bukan langsung dari paru-paru."
    ]
  },
  {
    index: 9,
    question: "Ruang pada jantung yang berfungsi sebagai penampung darah dari atrium kanan dan dipompakan ke paru-paru melalui arteri pulmonalis adalah?",
    options: ["Atrium Kanan", "Atrium Kiri", "Ventrikel Kanan", "Ventrikel Kiri"],
    answer: 2,
    hints: "Ruang yang memompa darah harus punya otot yang kuat (ventrikel). Darah ke paru-paru = sisi kanan jantung.",
    explanations: [
      "Atrium kanan adalah penampung awal darah dari tubuh, bukan yang memompa ke paru-paru.",
      "Atrium kiri berkaitan dengan sirkulasi sistemik, bukan sirkulasi pulmonalis.",
      "BENAR! Ventrikel kanan menerima darah dari atrium kanan dan memompanya ke paru-paru melalui arteri pulmonalis.",
      "Ventrikel kiri memompa darah ke seluruh tubuh melalui aorta, bukan ke paru-paru."
    ]
  },
  {
    index: 10,
    question: "Ruang pada jantung yang berfungsi sebagai penampung darah dari atrium kiri dan dipompakan ke seluruh tubuh melalui aorta adalah?",
    options: ["Atrium Kanan", "Atrium Kiri", "Ventrikel Kanan", "Ventrikel Kiri"],
    answer: 3,
    hints: "Ruang terkuat di jantung yang memompa darah ke seluruh tubuh. Aorta adalah arteri terbesar dari sisi kiri jantung.",
    explanations: [
      "Atrium kanan berkaitan dengan darah rendah oksigen dan sirkulasi ke paru-paru, bukan ke seluruh tubuh.",
      "Atrium kiri adalah penampung darah dari paru-paru, tapi tidak memompa langsung ke tubuh.",
      "Ventrikel kanan memompa darah ke paru-paru, bukan ke seluruh tubuh.",
      "BENAR! Ventrikel kiri adalah ruang terkuat yang menerima darah kaya oksigen dari atrium kiri dan memompanya ke seluruh tubuh melalui aorta."
    ]
  },
  {
    index: 11,
    question: "Lapisan paling luar dari dinding jantung adalah?",
    options: ["Epikardium", "Miokardium", "Endocardium", "Atrium"],
    answer: 0,
    hints: "Ingat urutan lapisan dinding jantung dari luar ke dalam: epi- (luar), mio- (otot), endo- (dalam).",
    explanations: [
      "BENAR! Epikardium adalah lapisan paling luar dari dinding jantung, juga disebut perikardium viseralis.",
      "Miokardium adalah lapisan tengah (otot jantung), bukan lapisan terluar.",
      "Endokardium adalah lapisan paling dalam yang melapisi ruang jantung, bukan terluar.",
      "Atrium adalah ruang jantung, bukan lapisan dinding jantung."
    ]
  },
  {
    index: 12,
    question: "Lapisan tengah dari dinding jantung yang berotot dan paling tebal adalah?",
    options: ["Epikardium", "Miokardium", "Endocardium", "Atrium"],
    answer: 1,
    hints: "Lapisan yang mengandung otot jantung dan bertanggung jawab untuk kontraksi. 'Mio' berarti otot.",
    explanations: [
      "Epikardium adalah lapisan terluar, bukan lapisan tengah yang berotot.",
      "BENAR! Miokardium adalah lapisan tengah yang terdiri dari otot jantung dan merupakan lapisan paling tebal.",
      "Endokardium adalah lapisan dalam yang tipis, bukan lapisan tengah yang tebal.",
      "Atrium adalah ruang jantung, bukan lapisan dinding jantung."
    ]
  },
  {
    index: 13,
    question: "Lapisan paling dalam dari dinding jantung yang langsung berhubungan dengan ruang-ruang jantung adalah?",
    options: ["Epikardium", "Miokardium", "Endokardium", "Atrium"],
    answer: 2,
    hints: "Lapisan yang bersentuhan langsung dengan darah di dalam ruang jantung. 'Endo' berarti dalam.",
    explanations: [
      "Epikardium adalah lapisan terluar, tidak berhubungan langsung dengan ruang jantung.",
      "Miokardium adalah lapisan tengah (otot), tidak berhubungan langsung dengan ruang jantung.",
      "BENAR! Endokardium adalah lapisan paling dalam yang melapisi ruang-ruang jantung dan katup jantung.",
      "Atrium adalah ruang jantung itu sendiri, bukan lapisan dinding."
    ]
  },
  {
    index: 14,
    question: "Katup jantung yang terletak diantara atrium dan ventrikel disebut dengan?",
    options: ["Katup Semilunar", "Katup Pulmonal", "Katup Aorta", "Katup Atrioventrikuler"],
    answer: 3,
    hints: "Nama katup sesuai dengan lokasinya: antara atrium dan ventrikel = atrio + ventrikuler.",
    explanations: [
      "Katup semilunar terletak antara ventrikel dan arteri besar (aorta dan pulmonalis), bukan antara atrium dan ventrikel.",
      "Katup pulmonal adalah salah satu katup semilunar yang terletak antara ventrikel kanan dan arteri pulmonalis.",
      "Katup aorta adalah katup semilunar yang terletak antara ventrikel kiri dan aorta.",
      "BENAR! Katup atrioventrikuler (AV valve) terletak antara atrium dan ventrikel, terdiri dari katup trikuspid dan mitral."
    ]
  },
  {
    index: 15,
    question: "Katup yang mempunyai 3 buah daun katup dan terletak antara atrium kanan dan ventrikel kanan adalah?",
    options: ["Katup Bikuspidalis", "Katup Trikuspidalis", "Katup Pulmonal", "Katup Aorta"],
    answer: 1,
    hints: "Kata kunci: 3 daun katup + sisi kanan jantung. 'Tri' berarti tiga.",
    explanations: [
      "Katup bikuspidalis (mitral) memiliki 2 daun katup dan terletak di sisi kiri jantung.",
      "BENAR! Katup trikuspidalis memiliki 3 daun katup dan terletak antara atrium kanan dan ventrikel kanan.",
      "Katup pulmonal terletak antara ventrikel kanan dan arteri pulmonalis, bukan antara atrium dan ventrikel.",
      "Katup aorta terletak antara ventrikel kiri dan aorta, bukan di sisi kanan jantung."
    ]
  },
  {
    index: 16,
    question: "Katup yang mempunyai 2 buah daun katup dan terletak antara atrium kiri dan ventrikel kiri adalah?",
    options: ["Katup Bikuspidalis atau Katup Mitral", "Katup Trikuspidalis", "Katup Pulmonal", "Katup Aorta"],
    answer: 0,
    hints: "Kata kunci: 2 daun katup + sisi kiri jantung. 'Bi' berarti dua, dan mitral seperti topi uskup yang memiliki 2 sisi.",
    explanations: [
      "BENAR! Katup bikuspidalis (juga disebut katup mitral) memiliki 2 daun katup dan terletak antara atrium kiri dan ventrikel kiri.",
      "Katup trikuspidalis memiliki 3 daun katup dan terletak di sisi kanan jantung.",
      "Katup pulmonal terletak antara ventrikel kanan dan arteri pulmonalis.",
      "Katup aorta terletak antara ventrikel kiri dan aorta, bukan antara atrium dan ventrikel."
    ]
  },
  {
    index: 17,
    question: "Pembuluh darah yang berfungsi mengantarkan darah menuju otot jantung adalah?",
    options: ["Vena Cava Superior", "Vena Cava Inferior", "Arteri Pulmonalis", "Arteri Koroner"],
    answer: 3,
    hints: "Otot jantung butuh suplai darah sendiri untuk berfungsi. Pikirkan pembuluh darah yang khusus menyuplai jantung.",
    explanations: [
      "Vena cava superior mengalirkan darah dari bagian atas tubuh kembali ke jantung, bukan untuk otot jantung.",
      "Vena cava inferior mengalirkan darah dari bagian bawah tubuh kembali ke jantung, bukan untuk otot jantung.",
      "Arteri pulmonalis mengalirkan darah dari jantung ke paru-paru, bukan untuk otot jantung.",
      "BENAR! Arteri koroner adalah pembuluh darah yang khusus menyuplai darah dan oksigen ke otot jantung (miokardium)."
    ]
  },
  {
    index: 18,
    question: "Sistem konduksi otot jantung terdiri dari?",
    options: ["AV Node, SA Node, Serabut Purkinje", "Serabut Purkinje, AV Node, SA Node", "SA Node, Traktus Internodal, Bachman Bundle, AV Node, Bundle Of HIS, Serabut Purkinje", "SA Node, Serabut Purkinje, AV Node, Bachman Bundle"],
    answer: 2,
    hints: "Sistem konduksi lengkap dimulai dari SA Node dan berakhir di Serabut Purkinje, dengan semua struktur penghubung di antaranya.",
    explanations: [
      "Ini hanya menyebutkan 3 komponen, padahal sistem konduksi lebih kompleks dan memiliki lebih banyak struktur.",
      "Urutan ini tidak tepat dan tidak lengkap dalam menggambarkan sistem konduksi jantung.",
      "BENAR! Ini adalah urutan lengkap sistem konduksi: SA Node → Traktus Internodal & Bachman Bundle → AV Node → Bundle of His → Serabut Purkinje.",
      "Urutan ini tidak tepat dan tidak mencantumkan semua komponen penting seperti Bundle of His."
    ]
  },
  {
    index: 19,
    question: "Pacemaker pada sistem konduksi yang dapat mengeluarkan impuls listrik sebesar 60 - 100 kali/menit adalah?",
    options: ["AV Node", "Serabut Purkinje", "Bundle of HIS", "SA Node"],
    answer: 3,
    hints: "Pacemaker utama/primer jantung yang mengatur irama normal. Frekuensi 60-100 adalah rentang normal heart rate.",
    explanations: [
      "AV Node adalah pacemaker sekunder dengan kecepatan 40-60 kali/menit, bukan 60-100.",
      "Serabut Purkinje adalah pacemaker tersier dengan kecepatan 20-40 kali/menit.",
      "Bundle of His bukan pacemaker utama dan tidak menghasilkan impuls dengan frekuensi 60-100.",
      "BENAR! SA Node (Sino Atrial Node) adalah pacemaker alami jantung dengan kecepatan normal 60-100 denyut/menit."
    ]
  },
  {
    index: 20,
    question: "Pacemaker pada sistem konduksi yang dapat mengeluarkan impuls listrik sebesar 40 - 60 kali/menit adalah?",
    options: ["SA Node", "AV node", "Serabut Purkinje", "Traktus Internodal"],
    answer: 1,
    hints: "Pacemaker cadangan/sekunder yang mengambil alih jika SA Node gagal. Frekuensinya lebih lambat dari normal.",
    explanations: [
      "SA Node menghasilkan impuls 60-100 kali/menit, bukan 40-60.",
      "BENAR! AV Node adalah pacemaker sekunder yang menghasilkan impuls 40-60 kali/menit jika SA Node gagal.",
      "Serabut Purkinje menghasilkan impuls 20-40 kali/menit, bukan 40-60.",
      "Traktus Internodal hanya menghantarkan impuls, bukan menghasilkan impuls sebagai pacemaker."
    ]
  },
  {
    index: 21,
    question: "Pacemaker pada sistem konduksi yang dapat mengeluarkan impuls listrik sebesar 20 - 40 kali/menit adalah?",
    options: ["SA Node", "AV node", "Serabut Purkinje", "Traktus Internodal"],
    answer: 2,
    hints: "Pacemaker darurat/tersier dengan frekuensi paling lambat. Terletak di ujung sistem konduksi di ventrikel.",
    explanations: [
      "SA Node menghasilkan impuls 60-100 kali/menit, jauh lebih cepat dari 20-40.",
      "AV Node menghasilkan impuls 40-60 kali/menit, lebih cepat dari 20-40.",
      "BENAR! Serabut Purkinje adalah pacemaker tersier dengan kecepatan paling lambat 20-40 kali/menit.",
      "Traktus Internodal berfungsi menghantarkan impuls, bukan sebagai pacemaker."
    ]
  },
  {
    index: 22,
    question: "Gelombang pada EKG yang dihasilkan dari depolarisasi atrium adalah?",
    options: ["Gelombang P", "Gelombang Q", "Gelombang R", "Gelombang S"],
    answer: 0,
    hints: "Gelombang pertama yang muncul di EKG, menunjukkan aktivasi atrium sebelum ventrikel berkontraksi.",
    explanations: [
      "BENAR! Gelombang P menggambarkan depolarisasi atrium (kontraksi atrium kanan dan kiri).",
      "Gelombang Q adalah bagian dari kompleks QRS yang menggambarkan depolarisasi ventrikel awal.",
      "Gelombang R adalah bagian dari kompleks QRS yang menggambarkan depolarisasi ventrikel utama.",
      "Gelombang S adalah bagian terakhir dari kompleks QRS yang menggambarkan depolarisasi ventrikel akhir."
    ]
  },
  {
    index: 23,
    question: "Ukuran dari lebar gelombang P yang normal adalah?",
    options: ["< 0,12 mv", "< 0,12 detik", "> 0,12 mv", "> 0,12 detik"],
    answer: 1,
    hints: "Lebar gelombang diukur dalam waktu (detik), bukan voltage (mV). Nilai normal kurang dari batas tertentu.",
    explanations: [
      "Ini menyebutkan voltage (mv), padahal yang ditanyakan adalah lebar/durasi gelombang P.",
      "BENAR! Lebar normal gelombang P adalah kurang dari 0,12 detik (durasi waktu).",
      "Ini salah karena menyebutkan voltage dan nilai yang terlalu besar untuk tinggi gelombang P.",
      "Lebar gelombang P yang lebih dari 0,12 detik menunjukkan kelainan (P mitrale/P pulmonale)."
    ]
  },
  {
    index: 24,
    question: "Ukuran dari tinggi gelombang P yang normal adalah?",
    options: ["> 0,3 mv", "> 0,3 detik", "< 0,3 mv", "< 0,3 detik"],
    answer: 2,
    hints: "Tinggi gelombang diukur dalam voltage (mV), bukan waktu. Nilai normal biasanya kurang dari batas tertentu untuk mencegah hipertrofi.",
    explanations: [
      "Tinggi gelombang P yang lebih dari 0,3 mV menunjukkan pembesaran atrium (tidak normal).",
      "Ini menyebutkan detik, padahal tinggi gelombang diukur dalam mV (millivolt).",
      "BENAR! Tinggi normal gelombang P adalah kurang dari 0,3 mV (0,25 mV di lead II).",
      "Ini salah karena tinggi gelombang diukur dalam mV, bukan detik."
    ]
  },
  {
    index: 25,
    question: "Gelombang pada gambaran EKG yang dihasilkan dari depolarisasi Ventrikel adalah?",
    options: ["Gelombang P", "Gelombang Q, R, dan S", "Gelombang T", "Gelombang U"],
    answer: 1,
    hints: "Depolarisasi ventrikel menghasilkan kompleks gelombang yang terdiri dari beberapa komponen berurutan.",
    explanations: [
      "Gelombang P menggambarkan depolarisasi atrium, bukan ventrikel.",
      "BENAR! Kompleks QRS (gelombang Q, R, dan S) menggambarkan depolarisasi ventrikel.",
      "Gelombang T menggambarkan repolarisasi ventrikel, bukan depolarisasi.",
      "Gelombang U jarang terlihat dan berhubungan dengan repolarisasi sistem His-Purkinje."
    ]
  },
  {
    index: 26,
    question: "Nilai normal ukuran P - R interval adalah?",
    options: ["< 0,12 detik", "> 0,20 detik", "0,06 - 0,12 detik", "0,12 - 0,20 detik"],
    answer: 3,
    hints: "Interval P-R menunjukkan waktu konduksi dari atrium ke ventrikel. Nilai normal berada dalam rentang tertentu, tidak terlalu cepat atau lambat.",
    explanations: [
      "Interval P-R kurang dari 0,12 detik menunjukkan konduksi yang terlalu cepat (pre-eksitasi).",
      "Interval P-R lebih dari 0,20 detik menunjukkan blok AV derajat pertama.",
      "Ini adalah nilai normal untuk lebar gelombang P atau kompleks QRS, bukan interval P-R.",
      "BENAR! Interval P-R normal adalah 0,12 - 0,20 detik, menggambarkan waktu konduksi dari atrium ke ventrikel."
    ]
  },
  {
    index: 27,
    question: "Gelombang yang menggambarkan proses repolarisasi ventrikel adalah?",
    options: ["Gelombang Q", "Gelombang R", "Gelombang S", "Gelombang T"],
    answer: 3,
    hints: "Setelah ventrikel berkontraksi (depolarisasi), mereka harus kembali ke keadaan istirahat (repolarisasi). Gelombang ini muncul setelah kompleks QRS.",
    explanations: [
      "Gelombang Q adalah bagian dari depolarisasi ventrikel, bukan repolarisasi.",
      "Gelombang R adalah bagian dari depolarisasi ventrikel, bukan repolarisasi.",
      "Gelombang S adalah bagian dari depolarisasi ventrikel, bukan repolarisasi.",
      "BENAR! Gelombang T menggambarkan repolarisasi ventrikel (fase relaksasi/recovery ventrikel)."
    ]
  },
  {
    index: 28,
    question: "Sadapan EKG terdiri dari berapa jenis?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    hints: "Sadapan EKG dibagi berdasarkan cara pengukurannya: ada yang mengukur perbedaan 2 titik, dan ada yang mengukur dari 1 titik referensi.",
    explanations: [
      "Sadapan EKG terdiri dari lebih dari 2 jenis. Ini terlalu sedikit.",
      "BENAR! Sadapan EKG terdiri dari 3 jenis: Bipolar, Unipolar Ekstremitas, dan Unipolar Prekordial.",
      "Sadapan EKG tidak terdiri dari 4 jenis. Jumlah ini terlalu banyak.",
      "Sadapan EKG tidak terdiri dari 5 jenis. Jumlah ini terlalu banyak."
    ]
  },
  {
    index: 29,
    question: "Jenis sadapan yang merekam perbedaan potensial dari dua (2) elektroda dan ditandai dengan angka romawi adalah?",
    options: ["Sadapan Unipolar", "Sadapan Bipolar", "Sadapan Prekordial", "Sadapan Ekstremitas"],
    answer: 1,
    hints: "Kata kunci: 2 elektroda = bi (dua) + polar. Menggunakan angka romawi I, II, III.",
    explanations: [
      "Sadapan unipolar merekam potensial dari satu elektroda terhadap elektroda referensi, bukan dua elektroda.",
      "BENAR! Sadapan bipolar merekam perbedaan potensial antara 2 elektroda dan menggunakan lead I, II, III (angka romawi).",
      "Sadapan prekordial adalah jenis sadapan unipolar yang menggunakan V1-V6, bukan angka romawi.",
      "Ini adalah kategori umum, bukan jenis spesifik yang dimaksud dalam pertanyaan."
    ]
  },
  {
    index: 30,
    question: "Sadapan yang merekam besar potensial listrik pada satu ekstremitas adalah?",
    options: ["Sadapan Bipolar", "Sadapan Prekordial", "Sadapan Unipolar Ekstremitas", "Sadapan Unipolar Prekordial"],
    answer: 2,
    hints: "Satu ekstremitas = unipolar + ekstremitas. Menggunakan notasi aVR, aVL, aVF (augmented Vector).",
    explanations: [
      "Sadapan bipolar merekam perbedaan potensial antara dua elektroda, bukan satu ekstremitas.",
      "Sadapan prekordial ditempatkan di dada, bukan pada ekstremitas.",
      "BENAR! Sadapan unipolar ekstremitas (aVR, aVL, aVF) merekam potensial listrik pada satu ekstremitas.",
      "Sadapan unipolar prekordial ditempatkan di dada, bukan ekstremitas."
    ]
  },
  {
    index: 31,
    question: "Sadapan yang merekam besar potensial listrik jantung dengan bantuan elektroda eksplorasi yang ditempatkan pada beberapa dinding dada adalah?",
    options: ["Sadapan Bipolar", "Sadapan Prekordial", "Sadapan Unipolar Ekstremitas", "Sadapan Unipolar Prekordial"],
    answer: 3,
    hints: "Elektroda di dinding dada = prekordial. Menggunakan notasi V1, V2, V3, V4, V5, V6.",
    explanations: [
      "Sadapan bipolar menggunakan elektroda pada ekstremitas, bukan dinding dada.",
      "Ini benar tapi tidak spesifik. Sadapan prekordial sama dengan sadapan unipolar prekordial.",
      "Sadapan unipolar ekstremitas ditempatkan pada ekstremitas, bukan dinding dada.",
      "BENAR! Sadapan unipolar prekordial (V1-V6) menggunakan elektroda eksplorasi di berbagai posisi dinding dada."
    ]
  },
  {
    index: 32,
    question: "Berapa jarak setiap satu kotak kecil dalam kertas EKG?",
    options: ["1 mm", "2 mm", "3 mm", "4 mm"],
    answer: 0,
    hints: "Kotak terkecil dalam kertas EKG memiliki ukuran standar internasional yang sangat kecil.",
    explanations: [
      "BENAR! Setiap kotak kecil dalam kertas EKG memiliki ukuran 1 mm x 1 mm.",
      "2 mm bukan ukuran standar untuk satu kotak kecil kertas EKG.",
      "3 mm terlalu besar untuk ukuran satu kotak kecil kertas EKG.",
      "4 mm terlalu besar untuk ukuran satu kotak kecil kertas EKG."
    ]
  },
  {
    index: 33,
    question: "Berapa jarak untuk setiap satu kotak besar dalam kertas EKG?",
    options: ["2 mm", "3 mm", "4 mm", "5 mm"],
    answer: 3,
    hints: "Kotak besar terdiri dari beberapa kotak kecil. Jika kotak kecil 1mm, maka kotak besar = 5 x kotak kecil.",
    explanations: [
      "2 mm terlalu kecil untuk ukuran satu kotak besar kertas EKG.",
      "3 mm masih terlalu kecil untuk ukuran satu kotak besar kertas EKG.",
      "4 mm masih kurang dari ukuran standar satu kotak besar kertas EKG.",
      "BENAR! Setiap kotak besar dalam kertas EKG berukuran 5 mm x 5 mm (terdiri dari 5x5 kotak kecil)."
    ]
  },
  {
    index: 34,
    question: "Cara yang digunakan untuk menentukan irama teratur atau tidak teratur adalah?",
    options: ["Melihat jarak antara QRS satu dengan QRS yang lain sama atau tidak", "Melihat tinggi gelombang R", "Melihat jarak antara gelombang P dengan QRS", "Melihat jarak antara gelombang QRS dengan gelombang T"],
    answer: 0,
    hints: "Keteraturan irama ditentukan oleh konsistensi interval antar denyut jantung. QRS menandai setiap denyut.",
    explanations: [
      "BENAR! Irama dinilai dengan mengukur interval R-R (jarak antara QRS). Jika sama = teratur, jika bervariasi = tidak teratur.",
      "Tinggi gelombang R tidak menentukan keteraturan irama, hanya menunjukkan amplitudo.",
      "Jarak P-QRS menunjukkan interval P-R, bukan keteraturan irama jantung.",
      "Jarak QRS-T tidak digunakan untuk menilai keteraturan irama jantung."
    ]
  },
  {
    index: 35,
    question: "Rumus yang benar dalam menghitung Frekuensi HR pada irama yang teratur adalah?",
    options: ["300/(jumlah kotak kecil antara R - R)", "1500/(jumlah kotak kecil antara R - R)", "1500/(jumlah kotak besar antara R - R)", "Ambil EKG Strip sepanjang 6 detik, hitung jumlah QRS dan kalikan 10"],
    answer: 1,
    hints: "Untuk irama teratur gunakan rumus: konstanta dibagi interval R-R. Konstanta untuk kotak kecil = 1500.",
    explanations: [
      "Rumus 300 dibagi kotak kecil digunakan untuk menghitung HR berdasarkan kotak besar, bukan kotak kecil.",
      "BENAR! Untuk irama teratur: HR = 1500 / (jumlah kotak kecil antara R-R). Angka 1500 berasal dari 300 x 5.",
      "Rumus ini menggunakan kotak besar, seharusnya 300/(jumlah kotak besar antara R-R).",
      "Metode ini digunakan untuk irama yang TIDAK teratur, bukan untuk irama teratur."
    ]
  },
  {
    index: 36,
    question: "Rumus yang benar dalam menghitung Frekuensi HR pada irama yang tidak teratur adalah?",
    options: ["300/(jumlah kotak kecil antara R - R)", "1500/(jumlah kotak kecil antara R - R)", "1500/(jumlah kotak besar antara R - R)", "Ambil EKG Strip sepanjang 6 detik, hitung jumlah QRS dan kalikan 10"],
    answer: 3,
    hints: "Untuk irama tidak teratur, interval R-R bervariasi sehingga perlu metode penghitungan rata-rata dalam periode waktu tertentu.",
    explanations: [
      "Metode ini digunakan untuk irama teratur dengan kotak besar, bukan irama tidak teratur.",
      "Metode ini digunakan untuk irama teratur, bukan irama tidak teratur.",
      "Metode ini juga digunakan untuk irama teratur, bukan irama tidak teratur.",
      "BENAR! Untuk irama tidak teratur: hitung QRS dalam strip 6 detik, lalu kalikan 10 untuk mendapat HR per menit."
    ]
  },
  {
    index: 37,
    question: "Jenis irama pada gambar EKG di bawah ini adalah?",
    options: ["Teratur", "Tidak Teratur/Irregular", "Regular", "Sinus"],
    answer: 1,
    image: "question37.png",
    hints: "Perhatikan jarak R-R pada gambar. Jika bervariasi = tidak teratur.",
    explanations: [
      "Berdasarkan konteks soal, irama pada gambar menunjukkan ketidakteraturan interval R-R.",
      "BENAR! Gambar menunjukkan irama yang tidak teratur dengan interval R-R yang bervariasi.",
      "Regular sama dengan teratur, yang tidak sesuai dengan gambar yang ditampilkan.",
      "Sinus menunjukkan asal irama, bukan keteraturannya. Sinus rhythm bisa teratur atau tidak teratur."
    ]
  },
  {
    index: 38,
    question: "Jenis irama pada gambar EKG di bawah ini adalah?",
    options: ["Tidak Teratur", "Irregular", "Teratur/Regular", "Takikardi"],
    answer: 2,
    image: "question38.jpg",
    hints: "Perhatikan jarak R-R pada gambar. Jika konsisten = teratur.",
    explanations: [
      "Berdasarkan konteks, gambar menunjukkan interval R-R yang konsisten, bukan tidak teratur.",
      "Irregular sama dengan tidak teratur, yang tidak sesuai dengan gambar.",
      "BENAR! Gambar menunjukkan irama yang teratur dengan interval R-R yang konsisten.",
      "Takikardi menunjukkan kecepatan jantung >100 bpm, bukan keteraturan irama."
    ]
  },
  {
    index: 39,
    question: "Berapa jumlah HR pada gambar EKG di bawah ini?",
    options: ["93 kali/menit", "83 kali/menit", "73 kali/menit", "63 kali/menit"],
    answer: 1,
    image: "question39.png",
    hints: "Gunakan rumus HR = 1500/jumlah kotak kecil R-R atau hitung interval R-R pada gambar yang diberikan.",
    explanations: [
      "93 bpm terlalu cepat berdasarkan interval R-R yang terlihat pada gambar.",
      "BENAR! Berdasarkan perhitungan interval R-R pada gambar, HR sekitar 83 kali/menit.",
      "73 bpm terlalu lambat berdasarkan interval R-R yang terlihat pada gambar.",
      "63 bpm terlalu lambat berdasarkan interval R-R yang terlihat pada gambar."
    ]
  },
  {
    index: 40,
    question: "Berapa jumlah HR pada gambar EKG di bawah ini?",
    options: ["90 kali/menit", "80 kali/menit", "70 kali/menit", "60 kali/menit"],
    answer: 3,
    image: "question40.png",
    hints: "Gunakan rumus HR = 1500/jumlah kotak kecil R-R atau hitung interval R-R pada gambar yang diberikan.",
    explanations: [
      "90 bpm terlalu cepat berdasarkan interval R-R yang terlihat pada gambar.",
      "80 bpm masih terlalu cepat berdasarkan interval R-R yang terlihat pada gambar.",
      "70 bpm masih sedikit cepat berdasarkan interval R-R yang terlihat pada gambar.",
      "BENAR! Berdasarkan perhitungan interval R-R pada gambar, HR sekitar 60 kali/menit."
    ]
  },
  {
    index: 41,
    question: "Berikut ini adalah pernyataan yang benar tentang kriteria irama Sinus Rhythm adalah sebagai berikut:",
    options: ["Irama reguler, Frekuensi nadi (HR) 40 - 60x/mnt, Gel. P. 0,06-0,12 dtk diikuti QRS, P-R interval normal", "Irama regular, frekuensi nadi (HR) 60 - 100 x/mnt, Gel. P. ≤ 0,12 dtk diikuti QRS, P-R interval normal, kompleks QRS ≤ 0,12 dtk", "Irama iregular, frekuensi nadi (HR) 60 - 100 x/mnt, Gel. P. 0,06-0,12 dtk diikuti QRS, P-R interval normal", "Irama regular, frekuensi nadi (HR) 40 - 60 x/mnt, Gel. P. terbalik diikuti QRS, P-R Interval normal"],
    answer: 1,
    hints: "Sinus rhythm normal: irama teratur + HR normal (60-100) + gelombang P normal + interval normal.",
    explanations: [
      "HR 40-60 x/mnt adalah bradikardi, bukan sinus rhythm normal. Sinus rhythm normal 60-100 bpm.",
      "BENAR! Sinus rhythm: irama teratur, HR 60-100 bpm, gelombang P normal diikuti QRS, P-R dan QRS interval normal.",
      "Sinus rhythm harus teratur (regular), bukan tidak teratur (irregular).",
      "HR 40-60 adalah bradikardi dan gelombang P terbalik bukan ciri sinus rhythm normal."
    ]
  },
  {
    index: 42,
    question: "Sadapan (Lead) yang dihasilkan oleh sadapan Bipolar adalah?",
    options: ["Lead I, II, dan III", "aVR, aVL, dan aVF", "V1 - V6", "V7 - V9"],
    answer: 0,
    hints: "Sadapan bipolar menggunakan notasi angka romawi dan terdiri dari 3 lead standar.",
    explanations: [
      "BENAR! Sadapan bipolar menghasilkan Lead I, II, dan III yang menggunakan angka romawi.",
      "aVR, aVL, dan aVF adalah sadapan unipolar ekstremitas, bukan bipolar.",
      "V1-V6 adalah sadapan unipolar prekordial, bukan sadapan bipolar.",
      "V7-V9 adalah sadapan tambahan prekordial posterior, bukan sadapan bipolar."
    ]
  },
  {
    index: 43,
    question: "Garis horizontal pada kertas EKG menunjukan waktu dimana setiap 1 kotak kecil memiliki nilai waktu?",
    options: ["0,1 detik", "0,4 detik", "0,04 detik", "0,004 detik"],
    answer: 2,
    hints: "Kecepatan standar EKG 25 mm/detik. Kotak kecil = 1 mm, jadi 1 mm = berapa detik?",
    explanations: [
      "0,1 detik terlalu besar untuk satu kotak kecil. Ini setara dengan 2,5 kotak kecil.",
      "0,4 detik terlalu besar untuk satu kotak kecil. Ini setara dengan 10 kotak kecil.",
      "BENAR! Setiap kotak kecil (1 mm) = 0,04 detik pada kecepatan standar 25 mm/detik.",
      "0,004 detik terlalu kecil untuk satu kotak kecil kertas EKG."
    ]
  },
  {
    index: 44,
    question: "Garis horizontal pada kertas EKG menunjukan waktu dimana setiap 1 kotak besar memiliki nilai waktu?",
    options: ["0,002 detik", "0,02 detik", "0,2 detik", "2 detik"],
    answer: 2,
    hints: "Kotak besar = 5 mm. Jika 1 mm = 0,04 detik, maka 5 mm = berapa detik?",
    explanations: [
      "0,002 detik terlalu kecil untuk satu kotak besar kertas EKG.",
      "0,02 detik terlalu kecil untuk satu kotak besar kertas EKG.",
      "BENAR! Setiap kotak besar (5 mm) = 0,2 detik pada kecepatan standar 25 mm/detik.",
      "2 detik terlalu besar untuk satu kotak besar kertas EKG."
    ]
  },
  {
    index: 45,
    question: "Garis vertikal pada kertas EKG menggambarkan voltage dimana setiap 1 kotak kecil memiliki nilai?",
    options: ["0,01 mv", "0,1 mv", "1 mv", "0,001 mv"],
    answer: 1,
    hints: "Kalibrasi standar: 1 mV = 10 mm. Kotak kecil = 1 mm, jadi 1 mm = berapa mV?",
    explanations: [
      "0,01 mV terlalu kecil untuk standar kalibrasi satu kotak kecil.",
      "BENAR! Setiap kotak kecil vertikal = 0,1 mV pada kalibrasi standar 1 mV = 10 mm.",
      "1 mV setara dengan 10 kotak kecil vertikal, bukan satu kotak kecil.",
      "0,001 mV terlalu kecil untuk satu kotak kecil kertas EKG."
    ]
  },
  {
    index: 46,
    question: "Garis vertikal pada kertas EKG menggambarkan voltage dimana setiap 1 kotak besar memiliki nilai?",
    options: ["0,005 mv", "0,05 mv", "5 mv", "0,5 mv"],
    answer: 3,
    hints: "Kotak besar = 5 mm. Jika 1 mm = 0,1 mV, maka 5 mm = berapa mV?",
    explanations: [
      "0,005 mV terlalu kecil untuk satu kotak besar vertikal.",
      "0,05 mV terlalu kecil untuk satu kotak besar vertikal.",
      "5 mV terlalu besar untuk satu kotak besar vertikal pada kalibrasi standar.",
      "BENAR! Setiap kotak besar vertikal (5 mm) = 0,5 mV pada kalibrasi standar."
    ]
  },
  {
    index: 47,
    question: "Standar kecepatan dalam perekaman EKG adalah?",
    options: ["25 mm/dtk", "50 mm/dtk", "2,5 mm/dtk", "5 mm/dtk"],
    answer: 0,
    hints: "Standar internasional yang digunakan di seluruh dunia untuk perekaman EKG rutin.",
    explanations: [
      "BENAR! Kecepatan standar perekaman EKG adalah 25 mm/detik di seluruh dunia.",
      "50 mm/dtk adalah kecepatan ganda yang kadang digunakan untuk analisis detail, bukan standar.",
      "2,5 mm/dtk terlalu lambat untuk perekaman EKG standar.",
      "5 mm/dtk terlalu lambat untuk perekaman EKG standar."
    ]
  },
  {
    index: 48,
    question: "Standar kaliberasi dalam perekaman EKG adalah?",
    options: ["1 mv", "1,5 mv", "2 mv", "2,5 mv"],
    answer: 0,
    hints: "Standar kalibrasi menentukan berapa tinggi gelombang untuk setiap satuan voltage. Yang paling umum digunakan adalah...",
    explanations: [
      "BENAR! Standar kalibrasi EKG adalah 1 mV = 10 mm (1 kotak besar) tinggi pada kertas EKG.",
      "1,5 mV bukan standar kalibrasi yang umum digunakan dalam EKG.",
      "2 mV adalah kalibrasi setengah dari standar, kadang digunakan untuk amplitudo besar.",
      "2,5 mV bukan standar kalibrasi yang digunakan dalam EKG."
    ]
  },
  {
    index: 49,
    question: "Jenis gambaran EKG yang dihasilkan oleh Nodus Sino Atrial adalah?",
    options: ["Junctional", "Atrial", "Idioventrikular", "Synus Rhythm"],
    answer: 3,
    hints: "SA Node adalah pacemaker normal jantung yang menghasilkan irama normal dengan nama sesuai asalnya.",
    explanations: [
      "Junctional rhythm dihasilkan oleh AV junction, bukan SA Node.",
      "Atrial rhythm dihasilkan oleh fokus ektopik di atrium, bukan SA Node.",
      "Idioventrikular rhythm dihasilkan oleh fokus di ventrikel, bukan SA Node.",
      "BENAR! SA Node menghasilkan Sinus Rhythm (normal heart rhythm) dengan gelombang P normal diikuti QRS."
    ]
  }
]