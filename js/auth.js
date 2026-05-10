const userValid = {
    username: "admin",
    password: "123"
};

function prosesLogin() {
    let userInput = document.getElementById("username").value;
    let passInput = document.getElementById("password").value;

    if (userInput === userValid.username && passInput === userValid.password) {
        alert("Login Berhasil!");
        window.location.href = "index.html"; 
    } else {
        alert("Username atau Password salah!");
    }
}