const signIn = document.querySelector(".signinForm");
const id = document.querySelector(".id input");
const pw = document.querySelector(".pw input");

function  createId (event) {
    event.preventDefault();
    const idValue = id.value;
    const pwValue = pw.value;
    localStorage.setItem(idValue, pwValue);
    successCreate ();
}

function successCreate () {
    const main = document.querySelector(".container");
    const welcome = document.querySelector(".success");
    main.classList.toggle("hidden");
    welcome.classList.toggle("hidden");
}

signIn.addEventListener("submit",createId);