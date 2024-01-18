function tampil() {
  let nama = document.getElementById("nama").value;
  let pw = document.getElementById("pw").value;

  if (nama == "Felisha" && pw == "nwzn00") {
    alert("Selamat Berhasil Login");
    window.location = "looping.html";
  } else {
    alert("Anda Gagal Login");
  }
}

document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();

  tampil();
});
