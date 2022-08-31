const login = document.querySelector(".loginForm");
const id = document.querySelector(".id input");
const pw = document.querySelector(".pw input");
const resetbutton = document.querySelector("#sign-in button");

function checkId (e) {
    const idValue = id.value;
    const pwValue = pw.value;
    const checkLog = localStorage.getItem(idValue);
    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const stopSubmmit = e.preventDefault();
    
    if (regEmail.test(idValue) !== true) { 	
        alert('형식에 맞지 않는 이메일입니다. 다시 입력해 주세요.');
        stopSubmmit
    } else if (checkLog === null) {
        alert("아이디가 존재하지 않습니다")
        stopSubmmit
        } else if(checkLog !== pwValue) {
            alert("비밀번호를 확인하세요")
        stopSubmmit     
        } else successLogin ();
}

function successLogin () {
    const main = document.querySelector(".container");
    const welcome = document.querySelector(".welcome");
    main.classList.toggle("hidden");
    welcome.classList.toggle("hidden");
}

login.addEventListener("submit",checkId);