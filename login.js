function tampil() {

    let nama = document.getElementById("nama").value
    let pw = document.getElementById("pw").value

    if (nama == "Felisha" && pw == "nwzn00") {
        alert("Selamat Berhasil Login");
        window.location = "index.html";
    }
    else {
        alert("Anda Gagal Login");
    }
}

document.getElementById("login").addEventListener("button", function (event) {
    event.preventDefault();
    tampil();
})



