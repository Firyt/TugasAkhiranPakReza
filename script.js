function requireUsername() {
    var uName = document.forms["myForm"]["userName"].value;
    if (uName == "") {
        alert("Kamu Harus isi Usernamenya :<");
        return false;
    }
}

function matchingMail() {
    var mail1 = document.forms["myForm"]["email_1"].value;
    var mail2 = document.forms["myForm"]["email_2"].value;
    if (mail1 != mail2) {
        alert("Sepertinya Email kamu belum setipe deh:<");
        return false;
    } else if (mail1 === "" || mail2 === "") {
        alert("Emailnya gaboleh kosong tauu:<");
        return false;
    }
}

function matchingPass() {
    var pass1 = document.forms["myForm"]["pw1"].value;
    var pass2 = document.forms["myForm"]["pw2"].value;
    if (pass1 != pass2) {
        alert("Sepertinya Password kamu belum cocok deh:<");
        return false;
    } else if (pass1 === "" || pass2 === "") {
        alert("Passwordnya gaboleh kosong tauu:<");
        return false;
    }
}

function lastCheckAll() {
    var uName = document.forms["myForm"]["userName"].value;
    var mail1 = document.forms["myForm"]["email_1"].value;
    var mail2 = document.forms["myForm"]["email_2"].value;
    var pass1 = document.forms["myForm"]["pw1"].value;
    var pass2 = document.forms["myForm"]["pw2"].value;

    if (uName.length > 1 && mail1.length > 1 && mail1 === mail2 && pass1.length > 1 && pass1 === pass2) {
        pindahLoAjg();
        return true;
    } else {
        return false;
    }
}

function pindahLoAjg() {
    window.location.href = "TugasAkhiranPakReza/login.html";
}