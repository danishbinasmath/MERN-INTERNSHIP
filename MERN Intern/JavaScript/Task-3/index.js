function valid() {
    if (document.getElementById('name').value == undefined) {
        document.getElementById('name').innerHTML = "This field is required";
        document.getElementById('myName').style.borderColor = "red";
    }
    if (document.getElementById('email').value == undefined) {
        document.getElementById('email').innerHTML = "A valid email address is required";
        document.getElementById('myEmail').style.borderColor = "red";
    }
    if (document.getElementById('website').value == undefined) {
        document.getElementById('website').innerHTML = "A valid url is required";
        document.getElementById('myWebsite').style.borderColor = "red";
    }
    if (document.getElementById('message').value == undefined) {
        document.getElementById('message').innerHTML = "This field is required";
        document.getElementById('myMessage').style.borderColor = "red";
    }
}