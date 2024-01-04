function hitungLuas() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    var luas = 0.5 * alas * tinggi;

    document.getElementById('hasilLuas').innerText = 'Luas: ' + luas.toFixed(2);
}

function hitungKeliling() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);
    var sisiMiring = Math.sqrt(alas**2 + tinggi**2);

    var keliling = alas + tinggi + sisiMiring;

    document.getElementById('hasilKeliling').innerText = 'Keliling: ' + keliling.toFixed(2);
}