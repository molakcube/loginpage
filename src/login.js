const login = document.querySelector(".loginForm");
const id = document.querySelector(".id input");
const pw = document.querySelector(".pw input");
const button = document.querySelector("button");

console.log(login);

function asd (event) {
    event.preventDefault;
    const idValue = id.value;
    const pwValue = pw.value;
    localStorage.setItem(idValue, pwValue);
}
login.addEventListener("submit",asd);
button.addEventListener("click", reset);

function reset () {localStorage.clear()};