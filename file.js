/*
 - rubah class AppleTree
 - tinggi pohon, bertambah secara random setiap tahun nya
 - jumlah buah yang diproduksi juga random setiap tahun nya
 - saat menambahkan buah baru, masukkan class Apple sebagai qty
 - saat umur pohon bertambah, set qty buah menjadi 0 lagi
 - Jika umur pohon lebih dari 10 tahun, maka kondisi kesehatan pohon sudah jelek
 - lakukan looping, sampai kesehatan pohon sudah jelek
*/

function getRandomNumber() {
    // get random number from 1 - 10
    return Math.floor(Math.random() * 10) + 1;
  }
  
  class AppleTree {
    // Initialize a new AppleTree
    constructor() {
      this._umur = 0;
      this._tinggi = 0;
      this._qty = [];
      this._health = true;
    }
  
    // Grow the tree
    grow() {
      this._umur++;
      this._tinggi = getRandomNumber();
    }
  
    // Produce some apple
    produceApples(qyt) {
      var apple = new Apple(getRandomNumber());
      this._qty = apple;
    }
  
     // Get some fruits
    harvest() {
      return this._qty.qty;
    }
  }
  
  class Apple {
    constructor(fruit) {
      this.qty = fruit
    }
  }
  
  var tree = new AppleTree()
  do {
    tree.grow();
    tree.produceApples();
  
    console.log(`[Year ${tree._umur} Report] Height = ${tree._tinggi.toFixed(2)} Meter | Apples Harvested = ${tree.harvest()}`);

    if (tree._umur >= 10) {
      tree._health = false;
    }
  } while (tree._health != false)