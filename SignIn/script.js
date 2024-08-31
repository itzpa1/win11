function user() {
    document.getElementById("mainuser").innerText = document.getElementById("user").innerText;
    document.getElementById("user").style.backgroundColor='#aca1b683';
    document.getElementById("user2").style.backgroundColor='#aca1b600';
    document.getElementById("mainuser").style.textTransform = "uppercase";
    document.getElementById("mainuser").style.fontSize = "45px";
    document.getElementById("mainuser").style.padding = "0";
    document.getElementById("dp").src = 'media/user.jpg';
}

function user2() {
    document.getElementById("mainuser").innerText = document.getElementById("user2").innerText;
    document.getElementById("user").style.backgroundColor='#aca1b600';
    document.getElementById("user2").style.backgroundColor='#aca1b683';
    document.getElementById("mainuser").style.textTransform = "lowercase";
    document.getElementById("mainuser").style.fontSize = '35px';
    document.getElementById("mainuser").style.padding = '0 0 17px';
    document.getElementById("dp").src='media/user2.png';
}

function load() {
    document.getElementById("footer").style.display = "none";
    document.getElementById("btn").style.display = "none";
    document.getElementById("load").style.display = "flex";
    setTimeout("window.open('../Home/home.html')",4000)
}
