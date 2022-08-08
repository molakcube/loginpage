const signIn = document.querySelector("#signinZone");
const id = document.querySelector(".id input");
const pw = document.querySelector(".pw input");

function  createID (event) {
    event.preventDefault();
    localStorage.setItem(id.value, pw.value);
}
signIn.addEventListener("submit",createID);