/* eslint-disable no-unused-vars */
document.getElementById("defaultOpen").click();

window.onscroll = function () {
    myFunction();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetHeight;

function openBottomNav() {
    document.getElementById("mySideLegal").style.height = "100%";
    document.getElementById("mySideLegal").style.bottom = "0px";
    document.body.style.backgroundColor = "rgb(0,0,0,0.75)";
}

function closeBottomNav() {
    document.getElementById("mySideLegal").style.height = "0";
    document.getElementById("mySideLegal").style.bottom = "-64px";
    document.body.style.backgroundColor = "white";
}


function openSide() {
    document.getElementById("mySideBar").style.width = "100%";
    document.getElementById("main").style.marginRight = "100%";
    document.body.style.backgroundColor = "rgb(0,0,0,0.4)";
}

function closeSide() {
    document.getElementById("mySideBar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor = "white";
}

//Dashboard Page
function openDash() {
    document.getElementById("mySideDash").style.width = "100%";
    document.getElementById("main").style.marginRight = "100%";
    document.body.style.backgroundColor = "rgb(0,0,0,0.4)";
}
function closeDash() {
    document.getElementById("mySideDash").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor = "white";
}
//Downloads Page
function openDownloads() {
    document.getElementById("mySideDownload").style.width = "100%";
    document.getElementById("main").style.marginRight = "100%";
    document.body.style.backgroundColor = "rgb(0,0,0,0.4)";
}

function closeDownloads() {
    document.getElementById("mySideDownload").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor = "white";
}
//Products Page
function openProducts() {
    document.getElementById("mySideProducts").style.width = "100%";
    document.getElementById("main").style.marginRight = "100%";
    document.body.style.backgroundColor = "rgb(0,0,0,0.4)";
}

function closeProducts() {
    document.getElementById("mySideProducts").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor = "white";
}
//ServicesPage
function openServices() {
    document.getElementById("mySideServices").style.width = "100%";
    document.getElementById("main").style.marginRight = "100%";
    document.body.style.backgroundColor = "rgb(0,0,0,0.4)";
}

function closeServices() {
    document.getElementById("mySideServices").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor = "white";
}
//Community Page
function openCommunity() {
    document.getElementById("mySideCommunity").style.width = "100%";
    document.getElementById("main").style.marginRight = "100%";
    document.body.style.backgroundColor = "rgb(0,0,0,0.4)";
}

function closeCommunity() {
    document.getElementById("mySideCommunity").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor = "white";
}

//SupportPage
function openSupport() {
    document.getElementById("mySideSupport").style.width = "100%";
    document.getElementById("main").style.marginRight = "100%";
    document.body.style.backgroundColor = "rgb(0,0,0,0.4)";
}

function closeSupport() {
    document.getElementById("mySideSupport").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor = "white";
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgb(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "#333";
}

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

function openPage(pageName, elmnt, color) {
    var i, linkcontent, links;
    linkcontent = document.getElementsByClassName("linkcontent");
    for (i = 0; i < linkcontent.length; i++) {
        linkcontent[i].style.display = "none";
    }
    links = document.getElementsByClassName("link");
    for (i = 0; i < links.length; i++) {
        links[i].style.backgroundColor = "rgb(0,0,0,0)";

    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
    elmnt.style.color = "";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



function openTab(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
   
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  // Get the element with id="defaultOpen" and click on it

}
 


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
