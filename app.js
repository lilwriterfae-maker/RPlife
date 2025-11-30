// CONFIG — wstaw swoje z EmailJS
const EMAILJS_SERVICE = "service_mvxo4ma";
const EMAILJS_TEMPLATE = "template_g45r2da";
const EMAILJS_PUBLIC = "BzDsqZwkEkhfl5FUo";

emailjs.init(EMAILJS_PUBLIC);

// "Baza danych" w localStorage
let users = JSON.parse(localStorage.getItem("users") || "{}");

// Elementy
const loginView = document.getElementById("loginView");
const registerView = document.getElementById("registerView");
const resetView = document.getElementById("resetView");
const accountView = document.getElementById("accountView");
const adminView = document.getElementById("adminView");

function showLogin() { hideAll(); loginView.classList.remove("hidden"); }
function showRegister() { hideAll(); registerView.classList.remove("hidden"); }
function showReset() { hideAll(); resetView.classList.remove("hidden"); }
function showAccount(email) {
    hideAll();
    document.getElementById("accEmail").innerText = email;
    accountView.classList.remove("hidden");
}
function showAdminPanel() {
    hideAll();
    adminView.classList.remove("hidden");
}

function hideAll() {
    loginView.classList.add("hidden");
    registerView.classList.add("hidden");
    resetView.classList.add("hidden");
    accountView.classList.add("hidden");
    adminView.classList.add("hidden");
}

// --- REJESTRACJA ---
document.getElementById("sendCodeBtn").onclick = () => {
    let email = document.getElementById("regEmail").value;
    let pass = document.getElementById("regPassword").value;

    if (!email || !pass) {
        document.getElementById("regMsg").innerText = "Wpisz email i hasło!";
        return;
    }

    let code = Math.floor(100000 + Math.random() * 900000);
    users[email] = { password: pass, code };
    localStorage.setItem("users", JSON.stringify(users));

    emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        to_email: email,
        code: code
    }).then(() => {
        document.getElementById("codeBox").classList.remove("hidden");
        document.getElementById("regMsg").innerText = "Kod wysłany!";
    });
};

document.getElementById("verifyCodeBtn").onclick = () => {
    let email = document.getElementById("regEmail").value;
    let code = document.getElementById("regCode").value;

    if (users[email] && users[email].code == code) {
        users[email].verified = true;
        localStorage.setItem("users", JSON.stringify(users));

        // Admin check
        if(email === "lilwriterfae@gmail.com"){
            showAdminPanel();
        } else {
            showLogin();
        }
    } else {
        document.getElementById("regMsg").innerText = "Niepoprawny kod!";
    }
};

// --- LOGOWANIE ---
document.getElementById("loginBtn").onclick = () => {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;

    if (users[email] && users[email].verified && users[email].password === pass) {
        if (email === "lilwriterfae@gmail.com") {
            showAdminPanel();
        } else {
            showAccount(email);
        }
    } else {
        document.getElementById("loginMsg").innerText = "Błędny email/hasło!";
    }
};

// --- RESET HASŁA ---
document.getElementById("resetSendBtn").onclick = () => {
    let email = document.getElementById("resetEmail").value;

    if (!users[email]) {
        document.getElementById("resetMsg").innerText = "Nie ma takiego konta!";
        return;
    }

    let code = Math.floor(100000 + Math.random() * 900000);
    users[email].resetCode = code;
    localStorage.setItem("users", JSON.stringify(users));

    emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        to_email: email,
        code: code
    }).then(() => {
        document.getElementById("resetCodeBox").classList.remove("hidden");
        document.getElementById("resetMsg").innerText = "Kod wysłany!";
    });
};

document.getElementById("resetConfirmBtn").onclick = () => {
    let email = document.getElementById("resetEmail").value;
    let code = document.getElementById("resetCode").value;
    let newPass = document.getElementById("resetNewPassword").value;

    if (users[email] && users[email].resetCode == code) {
        users[email].password = newPass;
        localStorage.setItem("users", JSON.stringify(users));
        showLogin();
    } else {
        document.getElementById("resetMsg").innerText = "Kod niepoprawny!";
    }
};

// --- WYLOGOWANIE ---
document.getElementById("logoutBtn").onclick = () => {
    showLogin();
};
