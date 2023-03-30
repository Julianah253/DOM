document.getElementById('gmc').innerHTML = "Welcome to JavaScript DOM!";
document.getElementById("img").src = "Demon slayer.png";
document.getElementById("img").style.borderRadius = "10px";
document.getElementById("img").style.width = "500px";
document.getElementById("img").style.height = "400px";
document.getElementById("img").style.boxShadow = " 5px 4px 5px gray";


const julianah = document.getElementById('gmc').innerHTML;

document.getElementById('GoMyCode').innerHTML = julianah;

document.getElementById('intro').innerHTML = "This is intro";

const love = document.getElementById('intro').innerHTML;

document.getElementById('outro').innerHTML = love + ", but this is outro";

function validateForm(){
    let x = document.forms["myForm"]["userName"].value;
    if (x == "") {
        alert("Name must be filled out");
        // return false;
    }

    let y = document.forms["myForm"]["email"].value;
    if (y == "") {
        alert("E-mail must be filled out");
        // return false;
    }

    let z = document.forms["myForm"]["phoneNumber"].value;
    if (z == "") {
        alert("Phone Number must be filled out");
        // return false;
    }

    let a = document.forms["myForm"]["passWord"].value;
    if (a == "") {
        alert("Password must be filled out");
        return false;
    }
}