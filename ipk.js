   function hitungIPK(matkul) {
     const totalSks = matkul.reduce((a, m) => a + m.sks, 0);
     const totalMutu = matkul.reduce((a, m) => a + m.sks * m.bobot, 0);
     if (totalSks === 0) return 0;
     return totalMutu / totalSks;
   }
   module.exports = { hitungIPK };
