const signIn = document.querySelector(".signinForm");
const id = document.querySelector(".id input");
const pw = document.querySelector(".pw input");

function  createId(event) {
    event.preventDefault();
    const idValue = id.value;
    const pwValue = pw.value;
    inspectValue(idValue, pwValue);
}

function inspectValue( filledId, filledPw) {
    const regExp = /^[A-Za-z0-9]{4,10}$/;
    const checkId = regExp.test(filledId);
    const checkPw = regExp.test(filledPw);
    console.log(checkId);
    console.log(checkPw);
    const checkTrue = checkId && checkPw;
    if (checkTrue == true) {
        localStorage.setItem(filledId, filledPw);
        successCreate();
    } else if (checkId == false) {
        alert("아이디는 10줄 이하의 영문과 숫자 조합만 가능합니다");
    } else alert("비밀번호는 10줄 이하의 영문과 숫자 조합만 가능합니다");
}

function successCreate() {
    const main = document.querySelector(".container");
    const welcome = document.querySelector(".success");
    main.classList.toggle("hidden");
    welcome.classList.toggle("hidden");
}

signIn.addEventListener("submit",createId);