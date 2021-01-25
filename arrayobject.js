let 
keluarga = {
    mama : "mina",
    papa : "gerry",
    anaksulung : "chaeyeon",
    anakbungsu : "jackson",
    ponakan : "rina"
};

document.querySelector("#object").innerHTML =
"Nama Object = keluarga <br> Isi Object : 1. " + keluarga.mama 
+ "<br>2. " + keluarga.papa
+ "<br>3. " + keluarga.anaksulung
+ "<br>4. " + keluarga.anakbungsu
+ "<br>5. " + keluarga.ponakan;

let sekolah = [
    "SMA 1",
    "SMA 25",
    "SMA 566",
    "SMA Gaul",
    "SMA mantap"
];
sekolah.forEach(tampilkanArray);

function tampilkanArray(item, index){
    document.querySelector("#array").innerHTML +=
    "Nama Sekolah Array : " + index + " : " + item + "<br>";
};
