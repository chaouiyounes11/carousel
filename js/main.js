// ====================================
// ====================================
// ==============VARIABLES=============
// ====================================
// ====================================
// ====================================

var myIndex = 0;
var myImages = document.getElementsByClassName("slider");

// ====================================
// ====================================
// ====================================
// ==============FUNCTIONS=============
// ====================================
// ====================================
// ====================================

function carousel() {
    for (i = 0; i < myImages.length; i++) {
       myImages[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > myImages.length) {
      myIndex = 1}
    myImages[myIndex-1].style.display = "block";
    setTimeout(carousel, 4600); // Change image every 2 seconds
}

function avant (previous) {
  element.onclick(left);
  myIndex--;
}


// ====================================
// ====================================
// ====================================
// ==============SCRIPT================
// ====================================
// ====================================
// ====================================
carousel();


 // ====================================
 // ====================================
 // ====================================
 // ==============CODE TASLIM==========
 // ===============AND I================
 // ====================================
 // ====================================
 // ====================================

 // // MES VARIABLES
 //  var emplacement = document.getElementById("slide");
 //  var mesimg = document.getElementsByTagName("img");
 //  var tableau = Array.from(mesimg);

// // MES FUNCTIONS
// function next() {
// var affichage = tableau.shift();
//
// console.log(tableau);
// tableau[0].classList.remove("hidden");
// tableau.push(affichage);
// tableau[tableau.length-1].classList.add("hidden");
//
// // console.log(tableau);
// // console.log(affichage);
//
//
//
// setTimeout (next, 2000);
//
// }
//
// //MON SCRIPT
// next();
// // intervalID = window.setInterval(next(), 5000);
