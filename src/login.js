const login = document.querySelector(".loginForm");
const SuccessLogin = document.querySelector("header");
const id = document.querySelector(".id input");
const pw = document.querySelector(".pw input");
const resetbutton = document.querySelector("#sign-in button");
const userInform = JSON.parse(localStorage.getItem("users"));

function checkId (event) {
    const idValue = id.value;
    const pwValue = pw.value;
    const stopSubmmit = event.preventDefault();
    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    
    if (regEmail.test(idValue) !== true) { 	
        alert('형식에 맞지 않는 이메일입니다. 다시 입력해 주세요.');
        stopSubmmit
        console.log(regEmail.test(idValue) !== true);
    } else 
        compareLog(idValue, pwValue, event);
    }

function compareLog(id, pw, event) {
    const stopSubmmit = event.preventDefault();

    userInform.map((targetUser) => {
        if (targetUser.id !== id) {
            alert("존재하지 않는 아이디입니다.");
            stopSubmmit
        } else if (targetUser.pw !== pw) {
            alert("올바른 비밀번호가 아닙니다.");
            stopSubmmit
        } else 
            SuccessLogin.classList.toggle("hidden");    
    })
}

login.addEventListener("submit",checkId);