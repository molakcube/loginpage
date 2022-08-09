const login = document.querySelector(".loginForm");
const id = document.querySelector(".id input");
const pw = document.querySelector(".pw input");
const resetbutton = document.querySelector("#sign_in button");

function createId (event) {
    event.preventDefault();
    const idValue = id.value;
    const pwValue = pw.value;
    localStorage.setItem(idValue, pwValue);
} // 이건 회원가입 할 때 필요한 매소드

function checkId (event) {
    event.preventDefault();
    const idValue = id.value;
    const pwValue = pw.value;
    const checkLog = localStorage.getItem(idValue);
    if (checkLog === null) {
        alert("아이디가 존재하지 않습니다")
    } else if(checkLog != pwValue) {
        alert("비밀번호를 확인하세요")     
    } else successLogin ();
}

function successLogin () {
    const main = document.querySelector(".container");
    const welcome = document.querySelector(".welcome");
    main.classList.toggle("hidden");
    welcome.classList.toggle("hidden");
}

// login.addEventListener("submit",createId);
login.addEventListener("submit",checkId);
resetbutton.addEventListener("click", (cleanStorage) => {localStorage.clear()});