class Hesaplama {
  topla(eded1, eded2) {
    return eded1 + eded2;
  }

  cix(eded1, eded2) {
    return eded1 - eded2;
  }

  vur(eded1, eded2) {
    return eded1 * eded2;
  }

  bol(eded1, eded2) {
    if (eded2 === 0) {
      return "Sıfıra bölmək olmaz!";
    } else {
      return eded1 / eded2;
    }
  }
}

// Hesaplama obyektini yaratmaq
let hesap = new Hesaplama();

// İşlerle numuneler:
console.log("Toplam:", hesap.topla(5, 3)); // 5 + 3 = 8
console.log("Çıxma:", hesap.cix(5, 3)); // 5 - 3 = 2
console.log("Vurma:", hesap.vur(5, 3)); // 5 * 3 = 15
console.log("Bölme:", hesap.bol(10, 2)); // 10 / 2 = 5
console.log("Bölme:", hesap.bol(5, 0)); // Sıfıra bölmək olmaz!

function topla() {
  let eded1 = parseFloat(document.getElementById("eded1").value);
  let eded2 = parseFloat(document.getElementById("eded2").value);
  let hesap = new Hesaplama();
  document.getElementById("netice").innerHTML =
    "Netice: " + hesap.topla(eded1, eded2);
}

function cix() {
  let eded1 = parseFloat(document.getElementById("eded1").value);
  let eded2 = parseFloat(document.getElementById("eded2").value);
  let hesap = new Hesaplama();
  document.getElementById("netice").innerHTML =
    "Netice: " + hesap.cix(eded1, eded2);
}

function vur() {
  let eded1 = parseFloat(document.getElementById("eded1").value);
  let eded2 = parseFloat(document.getElementById("eded2").value);
  let hesap = new Hesaplama();
  document.getElementById("netice").innerHTML =
    "Netice: " + hesap.vur(eded1, eded2);
}

function bol() {
  let eded1 = parseFloat(document.getElementById("eded1").value);
  let eded2 = parseFloat(document.getElementById("eded2").value);
  let hesap = new Hesaplama();
  document.getElementById("netice").innerHTML =
    "Netice: " + hesap.bol(eded1, eded2);
}
