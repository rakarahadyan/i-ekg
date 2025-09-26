let questions = [
  {
    "id": "takikardi-sinus",
    "answer": "Takikardi Sinus (ST)",
    "hint": "• Irama            : Teratur<br>• Frekuensi (HR)   : >100–150 kali/menit<br>• Gelombang P      : Normal, setiap P diikuti QRS dan T<br>• Interval PR      : Normal<br>• Gelombang QRS    : Normal<br>",
    "image": "<img src=\"../assets/Takikardi Sinus.png\" alt=\"Takikardi Sinus\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "bradikardi-sinus",
    "answer": "Bradikardi Sinus (SB)",
    "hint": "• Irama            : Teratur<br>• Frekuensi (HR)   : <60 kali/menit<br>• Gelombang P      : Normal, setiap gelombang diikuti QRS dan T<br>• Interval PR      : Normal<br>• Gelombang QRS    : Normal<br>",
    "image": "<img src=\"../assets/Bradikardi Sinus.png\" alt=\"Bradikardi Sinus\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "aritmia-sinus",
    "answer": "Aritmia Sinus",
    "hint": "• Irama            : Tidak teratur<br>• Frekuensi (HR)   : 60 - 100 kali/menit<br>• Gelombang P      : Normal<br>• Interval PR      : Normal<br>• Gelombang QRS    : Normal, semua gelombang sama<br>",
    "image": "<img src=\"../assets/Aritmia Sinus.png\" alt=\"Aritmia Sinus\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "sinus-arest",
    "answer": "Sinus Arest",
    "hint": "• Irama            : Teratur, kecuali pada bagian yang hilang<br>• Frekuensi (HR)   : Biasanya ±60 kali/menit<br>• Gelombang P      : Normal, setiap P diikuti QRS<br>• Interval PR      : Normal<br>• Gelombang QRS    : Normal<br>• Catatan          : Hilangnya gelombang P, QRS, dan T menyebabkan jeda R–R<br>",
    "image": "<img src=\"../assets/Sinus Arest.png\" alt=\"Sinus Arest\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "ekstrasistol-atrial",
    "answer": "Ekstrasistol Atrial",
    "hint": "• Irama            : Tidak teratur (ada irama timbul lebih awal)<br>• Frekuensi (HR)   : Tergantung irama dasar<br>• Gelombang P      : Bentuk berbeda dari irama dasar<br>• Interval PR      : Normal atau memendek<br>",
    "image": "<img src=\"../assets/Ekstrasistol Atrial.png\" alt=\"Ekstrasistol Atrial\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "takikardi-supraventrikel",
    "answer": "Takikardi Supraventrikel (SVT)",
    "hint": "• Irama            : Teratur<br>• Frekuensi (HR)   : 150 - 250 kali/menit<br>• Gelombang P      : Sulit dilihat, kadang kecil<br>• Interval PR      : Tidak dapat dihitung / memendek<br>• Gelombang QRS    : Normal<br>",
    "image": "<img src=\"../assets/Takikardi Supraventrikel.jpg\" alt=\"Takikardi Supraventrikel\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "flutter-atrial",
    "answer": "Flutter Atrial",
    "hint": "• Irama            : Biasanya teratur, bisa juga tidak<br>• Frekuensi (HR)   : Bervariasi (normal, lambat, atau cepat)<br>• Gelombang P      : Tidak normal, seperti gigi gergaji (2:1, 3:1, 4:1)<br>• Interval PR      : Tidak dapat dihitung<br>• Gelombang QRS    : Normal<br>",
    "image": "<img src=\"../assets/Flutter Atrial.png\" alt=\"Flutter Atrial\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "fibrilasi-atrial",
    "answer": "Fibrilasi Atrial (AF)",
    "hint": "• Irama            : Tidak teratur<br>• Frekuensi (HR)   : Bervariasi (normal, lambat, cepat)<br>• Respon Cepat     : HR ≥100/menit<br>• Respon Normal    : HR 60 - 100/menit<br>• Respon Lambat    : HR ≤60/menit<br>• Gelombang P      : Tidak terlihat, sering berupa gelombang keriting<br>• Interval PR      : Tidak dapat dihitung<br>• Gelombang QRS    : Normal<br>",
    "image": "<img src=\"../assets/Fibrilasi Atrial.jpg\" alt=\"Fibrilasi Atrial\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "irama-junctional",
    "answer": "Irama Junctional",
    "hint": "• Irama            : Teratur<br>• Frekuensi (HR)   : 40 - 60 kali/menit<br>• Gelombang P      : Terbalik (sebelum/ setelah QRS)<br>• Interval PR      : <0,12 detik atau tidak dapat dihitung<br>• Gelombang QRS    : Normal<br>",
    "image": "<img src=\"../assets/Irama Junctional.png\" alt=\"Irama Junctional\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "ekstrasistol-junctional",
    "answer": "Ekstrasistol Junctional",
    "hint": "• Irama            : Tidak teratur (gelombang muncul lebih awal)<br>• Frekuensi (HR)   : Tergantung irama dasar<br>• Gelombang P      : Tidak ada / abnormal<br>• Interval PR      : Tidak dapat dihitung / memendek<br>• Gelombang QRS    : Normal<br>",
    "image": "<img src=\"../assets/Ekstrasistol Junctional.png\" alt=\"Ekstrasistol Junctional\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "takikardi-junctional",
    "answer": "Takikardi Junctional",
    "hint": "• Irama            : Teratur<br>• Frekuensi (HR)   : >100 kali/menit<br>• Gelombang P      : Tidak ada / terbalik<br>• Interval PR      : Tidak dapat dihitung / memendek<br>• Gelombang QRS    : Normal<br>",
    "image": "<img src=\"../assets/Takikardi Junctional.png\" alt=\"Takikardi Junctional\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "ekstrasistol-supraventrikel",
    "answer": "Ekstrasistol Supraventrikel",
    "hint": "• Irama            : Tidak teratur (ada irama lebih awal)<br>• Frekuensi (HR)   : Tergantung irama dasar<br>• Gelombang P      : Bentuk berbeda dari irama dasar<br>• Interval PR      : Normal / memendek<br>",
    "image": "<img src=\"../assets/Ekstrasistol Supraventrikel.png\" alt=\"Ekstrasistol Supraventrikel\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "takikardi-supraventrikel2",
    "answer": "Takikardi Supraventrikel (Paroksismal)",
    "hint": "• Irama            : Teratur<br>• Frekuensi (HR)   : 150 - 250 kali/menit<br>• Gelombang P      : Sulit dilihat, kadang kecil<br>• Interval PR      : Tidak dapat dihitung / memendek<br>• Gelombang QRS    : Normal<br>",
    "image": "<img src=\"../assets/Takikardi Supraventrikel2.png\" alt=\"Takikardi Supraventrikel Paroksismal\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "irama-idioventrikuler",
    "answer": "Irama Idioventrikuler",
    "hint": "• Irama            : Teratur<br>• Frekuensi (HR)   : 20 - 40 kali/menit<br>• Gelombang P      : Tidak terlihat<br>• Interval PR      : Tidak ada<br>• Gelombang QRS    : Lebar (>0,12 detik)<br>",
    "image": "<img src=\"../assets/Irama Idioventrikuler.png\" alt=\"Irama Idioventrikuler\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "ekstrasistol-ventrikuler",
    "answer": "Ekstrasistol Ventrikuler (VES)",
    "hint": "• Irama            : Tidak teratur (gelombang timbul lebih awal)<br>• Frekuensi (HR)   : Tergantung irama dasar<br>• Gelombang P      : Tidak ada<br>• Interval PR      : Tidak ada<br>• Gelombang QRS    : Lebar >0,12 detik<br>",
    "image": "<img src=\"../assets/Ekstrasistol Ventrikuler.png\" alt=\"Ekstrasistol Ventrikuler\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "takikardi-ventrikel",
    "answer": "Takikardi Ventrikel (VT)",
    "hint": "• Irama            : Teratur<br>• Frekuensi (HR)   : >100 kali/menit<br>• Gelombang P      : Tidak terlihat<br>• Interval PR      : Tidak ada<br>• Gelombang QRS    : Lebar (>0,12 detik)<br>",
    "image": "<img src=\"../assets/Takikardi Ventrikel.png\" alt=\"Takikardi Ventrikel\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "fibrilasi-ventrikel",
    "answer": "Fibrilasi Ventrikel (VF)",
    "hint": "• Irama            : Tidak teratur<br>• Frekuensi (HR)   : Tidak dapat dihitung<br>• Gelombang P      : Tidak ada<br>• Gelombang QRS    : Kacau, tidak dapat diidentifikasi<br>• Jenis VF         :<br>- Fibrilasi Ventrikel Kasar (Coarse)<br>",
    "image": "<img src=\"../assets/Fibrilasi Ventrikel Kasar.png\" alt=\"VF Kasar\" class=\"w-full h-auto rounded-lg my-4\"><br>- Fibrilasi Ventrikel Halus (Fine)<br><img src=\"../assets/Fibrilasi Ventrikel halus.png\" alt=\"VF Halus\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "sa-blok",
    "answer": "Blok Sinoatrial (SA Blok)",
    "hint": "• Irama            : Teratur, kecuali pada bagian yang hilang<br>• Frekuensi (HR)   : <60 kali/menit<br>• Gelombang P      : Normal, diikuti QRS<br>• Interval PR      : Normal<br>• Gelombang QRS    : Normal<br>• Catatan          : Ada episode hilang satu/lebih P-QRS-T → kelipatan R–R<br>",
    "image": "<img src=\"../assets/sa-blok.png\" alt=\"SA Blok\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "av-blok-I",
    "answer": "Blok AV Derajat I",
    "hint": "• Irama            : Teratur<br>• Frekuensi (HR)   : 60 - 100 kali/menit<br>• Gelombang P      : Normal, selalu diikuti QRS<br>• Interval PR      : >0,20 detik (memanjang)<br>• Gelombang QRS    : Normal<br>",
    "image": "<img src=\"../assets/av-blok-I.png\" alt=\"AV Blok Derajat I\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "av-blok-mobitz-I",
    "answer": "Blok AV Derajat II Mobitz I (Wenckebach)",
    "hint": "• Irama            : Tidak teratur<br>• Frekuensi (HR)   : 60 - 100 kali/menit (kadang <60)<br>• Gelombang P      : Normal, tapi ada yang tidak diikuti QRS<br>• Interval PR      : Makin lama makin panjang → 1 P drop → siklus ulang<br>• Gelombang QRS    : Normal<br>",
    "image": "<img src=\"../assets/av-blok-mobitz-I.png\" alt=\"AV Blok Derajat II Mobitz I\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "av-blok-mobitz-II",
    "answer": "Blok AV Derajat II Mobitz II",
    "hint": "• Irama            : Umumnya tidak teratur<br>• Frekuensi (HR)   : <60 kali/menit (lambat)<br>• Gelombang P      : Normal, sebagian tidak diikuti QRS<br>• Interval PR      : Normal / memanjang konstan lalu blok<br>• Gelombang QRS    : Normal<br>",
    "image": "<img src=\"../assets/av-blok-mobitz-II.png\" alt=\"AV Blok Derajat II Mobitz II\" class=\"w-full h-auto rounded-lg my-4\">"
  },
  {
    "id": "av-blok-III",
    "answer": "Blok AV Derajat III (Total AV Blok)",
    "hint": "• Irama            : Teratur<br>• Frekuensi (HR)   : <60 kali/menit<br>• Gelombang P      : Normal, tidak berhubungan dengan QRS<br>• Interval PR      : Bervariasi<br>• Gelombang QRS    : Normal / >0,12 detik<br>",
    "image": "<img src=\"../assets/av-blok-III.png\" alt=\"AV Blok Derajat III\" class=\"w-full h-auto rounded-lg my-4\">"
  },
];
// {
//   "id": "rbbb",
//   "answer": "Right Bundle Branch Block (RBBB)",
//   "hint": "• Irama            : Teratur<br>• Frekuensi (HR)   : 60 - 100 kali/menit<br>• Gelombang P      : Normal, selalu diikuti QRS<br>• Interval PR      : Normal<br>• Gelombang QRS    : >0,12 detik<br>• Catatan          : Pola rsR' (M shape) di V1-V2, S lebar di V6<br>",
//   "image": "<img src=\"../assets/rbbb.png\" alt=\"RBBB\" class=\"w-full h-auto rounded-lg my-4\">"
// },
// {
//   "id": "lbbb",
//   "answer": "Left Bundle Branch Block (LBBB)",
//   "hint": "• Irama            : Teratur<br>• Frekuensi (HR)   : 60 - 100 kali/menit<br>• Gelombang P      : Normal<br>• Interval PR      : Normal<br>• Gelombang QRS    : >0,12 detik (lebar)<br>• Catatan          : Pola rsR' (M shape) di V5-V6, QS di V1, perubahan ST-T<br>",
//   "image": "<img src=\"../assets/lbbb.png\" alt=\"LBBB\" class=\"w-full h-auto rounded-lg my-4\">"
// }