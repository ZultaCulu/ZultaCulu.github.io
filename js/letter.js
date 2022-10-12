function passWord() {
    var testV = 1;
    var pass1 = prompt('Please Enter Passcode',' ');
    while (testV < 3) {
    if (!pass1)
        history.go(-1);
    if (pass1 == "46ISKEY") {
        alert('YOU NOW HAVE ACCSESS');
    window.open('top_secret.html');
    break;
    }
    testV+=1;
    var pass1 =
    prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
    }
    if (pass1.toLowerCase()!="password" & testV ==3)
        history.go(-1);
    return " ";
}