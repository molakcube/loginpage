const signIn = document.querySelector(".signinForm");
const id = document.querySelector(".id input");
const pw = document.querySelector(".pw input");
const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,20}/g;
const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

userInformation = [];

function idKeyevent() {
    const idValue = document.getElementById("id").value;
    const checkId = regEmail.test(idValue);
    const wrongId = document.getElementById("wrong-id");

    if(checkId !== true) {
        wrongId.classList.replace("none", "show");
    } else {wrongId.classList.replace("show", "none");}
};

function pwKeyevent() {
    const pwValue = document.getElementById("pw").value;
    const checkPw = regPassword.test(pwValue);

    const wrongPw = document.getElementById("wrong-pw");
    const tooShort = document.getElementById("too-short");
    const tooLong = document.getElementById("too-long");

    if (pwValue.length < 6 ) {
        wrongPw.classList.replace("show", "none");
        tooLong.classList.replace("show", "none");
        tooShort.classList.replace("none", "show");
    } else if (pwValue.length > 20) {
        tooShort.classList.replace("show", "none");
        wrongPw.classList.replace("show", "none");
        tooLong.classList.replace("none", "show");
    } else if(checkPw !== true) {
        tooShort.classList.replace("show", "none");
        tooLong.classList.replace("show", "none");
        wrongPw.classList.replace("none", "show");
    } else {
        wrongPw.classList.replace("show", "none");
        tooShort.classList.replace("show", "none");
        tooLong.classList.replace("show", "none");
    }
};

function inspectValue(event) { 
    const idValue = id.value;
    const pwValue = pw.value;

    const checkId = regEmail.test(idValue);
    const checkPw = regPassword.test(pwValue);
    const checkTrue = checkId && checkPw;

    const stopSubmmit = event.preventDefault();

    if (checkTrue == true) {
        successCreate(idValue, pwValue);
    } else if (checkId == false) {
        alert("아이디는 이메일 형식만 가능합니다.");
        stopSubmmit
    } else 
        alert("비밀번호는 6단어 이상, 20단어 이하의 대문자,숫자,특수문자를 포함해야 합니다.");
        stopSubmmit
}

function successCreate(id, pw) {
    const users = {
        id: id,
        pw: pw
    }

    userInformation.push(users);
    localStorage.setItem("users",JSON.stringify(userInformation));
    alert("회원가입 되었습니다.");
    location.href="login.html";
}

signIn.addEventListener("submit",inspectValue);
