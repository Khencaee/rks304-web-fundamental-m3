// Ambil elemen form-nya
const formRegister = document.getElementById("formRegister");

// "Dengerin" event submit pada form
formRegister.addEventListener("submit", function (event) {

    let isValid = true; // anggap valid dulu, nanti diubah jadi false kalau ada yang salah

    // Ambil semua nilai input
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const nama = document.getElementById("nama").value.trim();
    const tanggalLahir = document.getElementById("tanggal_lahir").value;
    const alamat = document.getElementById("alamat").value.trim();
    const noTelpon = document.getElementById("no_telpon").value.trim();

    // Ambil semua elemen buat nampilin pesan error
    const errorUsername = document.getElementById("errorUsername");
    const errorPassword = document.getElementById("errorPassword");
    const errorNama = document.getElementById("errorNama");
    const errorTanggalLahir = document.getElementById("errorTanggalLahir");
    const errorAlamat = document.getElementById("errorAlamat");
    const errorNoTelpon = document.getElementById("errorNoTelpon");

    // Reset dulu semua pesan error (biar gak numpuk dari submit sebelumnya)
    [errorUsername, errorPassword, errorNama, errorTanggalLahir, errorAlamat, errorNoTelpon].forEach(el => {
        el.classList.add("hidden");
        el.textContent = "";
    });

    // a. Username: tidak boleh kosong, minimal 3 karakter
    if (username === "") {
        errorUsername.textContent = "Username tidak boleh kosong.";
        errorUsername.classList.remove("hidden");
        isValid = false;
    } else if (username.length < 3) {
        errorUsername.textContent = "Username minimal 3 karakter.";
        errorUsername.classList.remove("hidden");
        isValid = false;
    }

    // b. Password: tidak boleh kosong, minimal 8 karakter
    if (password === "") {
        errorPassword.textContent = "Password tidak boleh kosong.";
        errorPassword.classList.remove("hidden");
        isValid = false;
    } else if (password.length < 8) {
        errorPassword.textContent = "Password minimal 8 karakter.";
        errorPassword.classList.remove("hidden");
        isValid = false;
    }

    // c. Nama: tidak boleh kosong
    if (nama === "") {
        errorNama.textContent = "Nama tidak boleh kosong.";
        errorNama.classList.remove("hidden");
        isValid = false;
    }

    // d. Tanggal lahir: tidak boleh kosong, tidak boleh future date
    if (tanggalLahir === "") {
        errorTanggalLahir.textContent = "Tanggal lahir tidak boleh kosong.";
        errorTanggalLahir.classList.remove("hidden");
        isValid = false;
    } else {
        const inputDate = new Date(tanggalLahir);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // biar jam-nya gak ikut mempengaruhi perbandingan

        if (inputDate > today) {
            errorTanggalLahir.textContent = "Tanggal lahir tidak boleh lebih dari hari ini.";
            errorTanggalLahir.classList.remove("hidden");
            isValid = false;
        }
    }

    // e. Alamat: tidak boleh kosong
    if (alamat === "") {
        errorAlamat.textContent = "Alamat tidak boleh kosong.";
        errorAlamat.classList.remove("hidden");
        isValid = false;
    }

    // f. Nomor telpon: tidak boleh kosong, harus berawalan 62
    if (noTelpon === "") {
        errorNoTelpon.textContent = "Nomor telpon tidak boleh kosong.";
        errorNoTelpon.classList.remove("hidden");
        isValid = false;
    } else if (!noTelpon.startsWith("62")) {
        errorNoTelpon.textContent = "Nomor telpon harus berawalan 62.";
        errorNoTelpon.classList.remove("hidden");
        isValid = false;
    }

    // Kalau ada yang gak valid, batalkan submit form (jangan pindah ke dashboard.html)
    if (!isValid) {
        event.preventDefault();
    }
});
