const details = {
    "takikardi-sinus": `
<h3 class="text-lg font-semibold mb-2">⚡ Takikardi Sinus (ST)</h3>
• Irama            : Teratur<br>
• Frekuensi (HR)   : >100–150 kali/menit<br>
• Gelombang P      : Normal, setiap P diikuti QRS dan T<br>
• Interval PR      : Normal<br>
• Gelombang QRS    : Normal<br>
<img src="../assets/Takikardi Sinus.png" alt="Takikardi Sinus" class="w-full h-auto rounded-lg my-4">
`,
    "bradikardi-sinus": `
<h3 class="text-lg font-semibold mb-2">🐌 Bradikardi Sinus (SB)</h3>
• Irama            : Teratur<br>
• Frekuensi (HR)   : <60 kali/menit<br>
• Gelombang P      : Normal, setiap gelombang diikuti QRS dan T<br>
• Interval PR      : Normal<br>
• Gelombang QRS    : Normal<br>
<img src="../assets/Bradikardi Sinus.png" alt="Bradikardi Sinus" class="w-full h-auto rounded-lg my-4">
`,
    "aritmia-sinus": `
<h3 class="text-lg font-semibold mb-2">📊 Aritmia Sinus</h3>
• Irama            : Tidak teratur<br>
• Frekuensi (HR)   : 60 - 100 kali/menit<br>
• Gelombang P      : Normal<br>
• Interval PR      : Normal<br>
• Gelombang QRS    : Normal, semua gelombang sama<br>
<img src="../assets/Aritmia Sinus.png" alt="Aritmia Sinus" class="w-full h-auto rounded-lg my-4">
`,
    "sinus-arest": `
<h3 class="text-lg font-semibold mb-2">⏸️ Sinus Arest</h3>
• Irama            : Teratur, kecuali pada bagian yang hilang<br>
• Frekuensi (HR)   : Biasanya ±60 kali/menit<br>
• Gelombang P      : Normal, setiap P diikuti QRS<br>
• Interval PR      : Normal<br>
• Gelombang QRS    : Normal<br>
• Catatan          : Hilangnya gelombang P, QRS, dan T menyebabkan jeda R–R<br>
<img src="../assets/Sinus Arest.png" alt="Sinus Arest" class="w-full h-auto rounded-lg my-4">
`,
    "ekstrasistol-atrial": `
<h3 class="text-lg font-semibold mb-2">⚡ Ekstrasistol Atrial</h3>
• Irama            : Tidak teratur (ada irama timbul lebih awal)<br>
• Frekuensi (HR)   : Tergantung irama dasar<br>
• Gelombang P      : Bentuk berbeda dari irama dasar<br>
• Interval PR      : Normal atau memendek<br>
<img src="../assets/Ekstrasistol Atrial.png" alt="Ekstrasistol Atrial" class="w-full h-auto rounded-lg my-4">
`,
    "takikardi-supraventrikel-svt": `
<h3 class="text-lg font-semibold mb-2">🏃‍♂️ Takikardi Supraventrikel (SVT)</h3>
• Irama            : Teratur<br>
• Frekuensi (HR)   : 150 - 250 kali/menit<br>
• Gelombang P      : Sulit dilihat, kadang kecil<br>
• Interval PR      : Tidak dapat dihitung / memendek<br>
• Gelombang QRS    : Normal<br>
<img src="../assets/Takikardi Supraventrikel.jpg" alt="Takikardi Supraventrikel" class="w-full h-auto rounded-lg my-4">
`,
    "flutter-atrial": `
<h3 class="text-lg font-semibold mb-2">🌊 Flutter Atrial</h3>
• Irama            : Biasanya teratur, bisa juga tidak<br>
• Frekuensi (HR)   : Bervariasi (normal, lambat, atau cepat)<br>
• Gelombang P      : Tidak normal, seperti gigi gergaji (2:1, 3:1, 4:1)<br>
• Interval PR      : Tidak dapat dihitung<br>
• Gelombang QRS    : Normal<br>
<img src="../assets/Flutter Atrial.png" alt="Flutter Atrial" class="w-full h-auto rounded-lg my-4">
`,
    "fibrilasi-atrial": `
<h3 class="text-lg font-semibold mb-2">💥 Fibrilasi Atrial (AF)</h3>
• Irama            : Tidak teratur<br>
• Frekuensi (HR)   : Bervariasi (normal, lambat, cepat)<br>
• Respon Cepat     : HR ≥100/menit<br>
• Respon Normal    : HR 60 - 100/menit<br>
• Respon Lambat    : HR ≤60/menit<br>
• Gelombang P      : Tidak terlihat, sering berupa gelombang keriting<br>
• Interval PR      : Tidak dapat dihitung<br>
• Gelombang QRS    : Normal<br>
<img src="../assets/Fibrilasi Atrial.jpg" alt="Fibrilasi Atrial" class="w-full h-auto rounded-lg my-4">
`,
    "irama-junctional": `
<h3 class="text-lg font-semibold mb-2">🎵 Irama Junctional</h3>
• Irama            : Teratur<br>
• Frekuensi (HR)   : 40 - 60 kali/menit<br>
• Gelombang P      : Terbalik (sebelum/ setelah QRS)<br>
• Interval PR      : <0,12 detik atau tidak dapat dihitung<br>
• Gelombang QRS    : Normal<br>
<img src="../assets/Irama Junctional.png" alt="Irama Junctional" class="w-full h-auto rounded-lg my-4">
`,
    "ekstrasistol-junctional": `
<h3 class="text-lg font-semibold mb-2">⚡ Ekstrasistol Junctional</h3>
• Irama            : Tidak teratur (gelombang muncul lebih awal)<br>
• Frekuensi (HR)   : Tergantung irama dasar<br>
• Gelombang P      : Tidak ada / abnormal<br>
• Interval PR      : Tidak dapat dihitung / memendek<br>
• Gelombang QRS    : Normal<br>
<img src="../assets/Ekstrasistol Junctional.png" alt="Ekstrasistol Junctional" class="w-full h-auto rounded-lg my-4">
`,
    "takikardi-junctional": `
<h3 class="text-lg font-semibold mb-2">🏃‍♂️ Takikardi Junctional</h3>
• Irama            : Teratur<br>
• Frekuensi (HR)   : >100 kali/menit<br>
• Gelombang P      : Tidak ada / terbalik<br>
• Interval PR      : Tidak dapat dihitung / memendek<br>
• Gelombang QRS    : Normal<br>
<img src="../assets/Takikardi Junctional.png" alt="Takikardi Junctional" class="w-full h-auto rounded-lg my-4">
`,
    "ekstrasistol-supraventrikel": `
<h3 class="text-lg font-semibold mb-2">⚡ Ekstrasistol Supraventrikel</h3>
• Irama            : Tidak teratur (ada irama lebih awal)<br>
• Frekuensi (HR)   : Tergantung irama dasar<br>
• Gelombang P      : Bentuk berbeda dari irama dasar<br>
• Interval PR      : Normal / memendek<br>
<img src="../assets/Ekstrasistol Supraventrikel.png" alt="Ekstrasistol Supraventrikel" class="w-full h-auto rounded-lg my-4">
`,
    "takikardi-supraventrikel-paroksismal": `
<h3 class="text-lg font-semibold mb-2">🏃‍♂️ Takikardi Supraventrikel (Paroksismal)</h3>
• Irama            : Teratur<br>
• Frekuensi (HR)   : 150 - 250 kali/menit<br>
• Gelombang P      : Sulit dilihat, kadang kecil<br>
• Interval PR      : Tidak dapat dihitung / memendek<br>
• Gelombang QRS    : Normal<br>
<img src="../assets/Takikardi Supraventrikel2.jpg" alt="Takikardi Supraventrikel Paroksismal" class="w-full h-auto rounded-lg my-4">
`,
    "irama-idioventrikuler": `
<h3 class="text-lg font-semibold mb-2">🎵 Irama Idioventrikuler</h3>
• Irama            : Teratur<br>
• Frekuensi (HR)   : 20 - 40 kali/menit<br>
• Gelombang P      : Tidak terlihat<br>
• Interval PR      : Tidak ada<br>
• Gelombang QRS    : Lebar (>0,12 detik)<br>
<img src="../assets/Irama Idioventrikuler.png" alt="Irama Idioventrikuler" class="w-full h-auto rounded-lg my-4">
`,
    "ekstrasistol-ventrikuler": `
<h3 class="text-lg font-semibold mb-2">⚡ Ekstrasistol Ventrikuler (VES)</h3>
• Irama            : Tidak teratur (gelombang timbul lebih awal)<br>
• Frekuensi (HR)   : Tergantung irama dasar<br>
• Gelombang P      : Tidak ada<br>
• Interval PR      : Tidak ada<br>
• Gelombang QRS    : Lebar >0,12 detik<br>
<img src="../assets/Ekstrasistol Ventrikuler.png" alt="Ekstrasistol Ventrikuler" class="w-full h-auto rounded-lg my-4">
`,
    "takikardi-ventrikel": `
<h3 class="text-lg font-semibold mb-2">🏃‍♂️ Takikardi Ventrikel (VT)</h3>
• Irama            : Teratur<br>
• Frekuensi (HR)   : >100 kali/menit<br>
• Gelombang P      : Tidak terlihat<br>
• Interval PR      : Tidak ada<br>
• Gelombang QRS    : Lebar (>0,12 detik)<br>
<img src="../assets/Takikardi Ventrikel.png" alt="Takikardi Ventrikel" class="w-full h-auto rounded-lg my-4">
`,
    "fibrilasi-ventrikel": `
<h3 class="text-lg font-semibold mb-2">💥 Fibrilasi Ventrikel (VF)</h3>
• Irama            : Tidak teratur<br>
• Frekuensi (HR)   : Tidak dapat dihitung<br>
• Gelombang P      : Tidak ada<br>
• Gelombang QRS    : Kacau, tidak dapat diidentifikasi<br>
• Jenis VF         :<br>
- Fibrilasi Ventrikel Kasar (Coarse)<br>
<img src="../assets/Fibrilasi Ventrikel Kasar.png" alt="VF Kasar" class="w-full h-auto rounded-lg my-4"><br>
- Fibrilasi Ventrikel Halus (Fine)<br>
<img src="../assets/Fibrilasi Ventrikel halus.png" alt="VF Halus" class="w-full h-auto rounded-lg my-4">
`,
    "blok-sinoatrial-sa-blok": `
<h3 class="text-lg font-semibold mb-2">🚫 Blok Sinoatrial (SA Blok)</h3>
• Irama            : Teratur, kecuali pada bagian yang hilang<br>
• Frekuensi (HR)   : <60 kali/menit<br>
• Gelombang P      : Normal, diikuti QRS<br>
• Interval PR      : Normal<br>
• Gelombang QRS    : Normal<br>
• Catatan          : Ada episode hilang satu/lebih P-QRS-T → kelipatan R–R<br>
<img src="../assets/sa-blok.png" alt="SA Blok" class="w-full h-auto rounded-lg my-4">
`,
    "blok-av-derajat-I": `
<h3 class="text-lg font-semibold mb-2">1️⃣ Blok AV Derajat I</h3>
• Irama            : Teratur<br>
• Frekuensi (HR)   : 60 - 100 kali/menit<br>
• Gelombang P      : Normal, selalu diikuti QRS<br>
• Interval PR      : >0,20 detik (memanjang)<br>
• Gelombang QRS    : Normal<br>
<img src="../assets/av-blok-I.png" alt="AV Blok Derajat I" class="w-full h-auto rounded-lg my-4">
`,
    "blok-av-derajat-2-mobitz-I-wenckebach": `
<h3 class="text-lg font-semibold mb-2">2️⃣ Blok AV Derajat II Mobitz I (Wenckebach)</h3>
• Irama            : Tidak teratur<br>
• Frekuensi (HR)   : 60 - 100 kali/menit (kadang <60)<br>
• Gelombang P      : Normal, tapi ada yang tidak diikuti QRS<br>
• Interval PR      : Makin lama makin panjang → 1 P drop → siklus ulang<br>
• Gelombang QRS    : Normal<br>
<img src="../assets/av-blok-mobitz-I.png" alt="AV Blok Derajat II Mobitz I" class="w-full h-auto rounded-lg my-4">
`,
    "blok-av-derajat-2-mobitz-II": `
<h3 class="text-lg font-semibold mb-2">2️⃣ Blok AV Derajat II Mobitz II</h3>
• Irama            : Umumnya tidak teratur<br>
• Frekuensi (HR)   : <60 kali/menit (lambat)<br>
• Gelombang P      : Normal, sebagian tidak diikuti QRS<br>
• Interval PR      : Normal / memanjang konstan lalu blok<br>
• Gelombang QRS    : Normal<br>
<img src="../assets/av-blok-mobitz-II.png" alt="AV Blok Derajat II Mobitz II" class="w-full h-auto rounded-lg my-4">
`,
    "blok-av-derajat-III-total-av-blok": `
<h3 class="text-lg font-semibold mb-2">3️⃣ Blok AV Derajat III (Total AV Blok)</h3>
• Irama            : Teratur<br>
• Frekuensi (HR)   : <60 kali/menit<br>
• Gelombang P      : Normal, tidak berhubungan dengan QRS<br>
• Interval PR      : Bervariasi<br>
• Gelombang QRS    : Normal / >0,12 detik<br>
<img src="../assets/av-blok-III.png" alt="AV Blok Derajat III" class="w-full h-auto rounded-lg my-4">
`,
    "right-bundle-branch-block": `
<h3 class="text-lg font-semibold mb-2">➡️ Right Bundle Branch Block (RBBB)</h3>
• Irama            : Teratur<br>
• Frekuensi (HR)   : 60 - 100 kali/menit<br>
• Gelombang P      : Normal, selalu diikuti QRS<br>
• Interval PR      : Normal<br>
• Gelombang QRS    : >0,12 detik<br>
• Catatan          : Pola rsR’ (M shape) di V1-V2, S lebar di V6<br>
<img src="../assets/rbbb.png" alt="RBBB" class="w-full h-auto rounded-lg my-4">
`,
    "left-bundle-branch-block": `
<h3 class="text-lg font-semibold mb-2">⬅️ Left Bundle Branch Block (LBBB)</h3>
• Irama            : Teratur<br>
• Frekuensi (HR)   : 60 - 100 kali/menit<br>
• Gelombang P      : Normal<br>
• Interval PR      : Normal<br>
• Gelombang QRS    : >0,12 detik (lebar)<br>
• Catatan          : Pola rsR’ (M shape) di V5-V6, QS di V1, perubahan ST-T<br>
<img src="../assets/lbbb.png" alt="LBBB" class="w-full h-auto rounded-lg my-4">
`
};
