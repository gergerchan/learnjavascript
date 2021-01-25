function luasSegitiga(){
    let alas = prompt("Masukkan Alas Segitiga"),
        tinggi = prompt("Masukkan Tinggi Segitiga"),
        luas = 0.5*alas*tinggi;
    if (alas != null && tinggi != null) {
        document.getElementById("alas").innerHTML =
        "Alas segitiga = " + alas;
        document.getElementById("tinggi").innerHTML =
        "Tinggi segitiga = " + tinggi;
        document.getElementById("luassegitiga").innerHTML =
        "Luas segitiga = 1/2  x " + alas + " x " + tinggi + " = "+ luas;
     }
}

function luasLingkaran(){
    const pi = 3.14;
    let jari = prompt("Masukkan Jari-Jari Lingkaran"),
        luas = pi*jari;
    if (jari != null) {
        document.getElementById("pi").innerHTML =
        "Pi = " + pi;
        document.getElementById("jari").innerHTML =
        "Jari-jari lingkaran = " + jari;
        document.getElementById("luaslingkaran").innerHTML =
        "Luas Lingkaran = " + pi + " x " + jari + " = "+ luas;
     }
}

