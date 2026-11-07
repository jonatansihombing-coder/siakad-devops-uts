   const test = require('node:test');
   const assert = require('node:assert');
   const { hitungIPK } = require('./ipk');

   test('IPK dihitung benar', () => {
     assert.strictEqual(hitungIPK([{ sks: 3, bobot: 4 }, { sks: 3, bobot: 3 }]), 3.5);
   });

   test('IPK 0 jika belum ada nilai (semester 1)', () => {
     assert.strictEqual(hitungIPK([]), 0);
   });
