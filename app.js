

var width = window.innerWidth || document.documentElement.clientWidth;

var months = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agostp",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];
var tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime());

//document.getElementById("spanDate").innerHTML =  tomorrow.getDate() + " " + months[tomorrow.getMonth()] + ", " + tomorrow.getFullYear();
if (tomorrow.getDay() >= 0 && tomorrow.getDay() <= 4) {
  document.getElementById("spanDate").innerHTML =
    tomorrow.getDate() +
    " " +
    months[tomorrow.getMonth()] +
    ", " +
    tomorrow.getFullYear() +
    " Disponibile per un colloquio :) <br>";
} if(tomorrow.getDay() > 4 ) {
  document.getElementById("spanDate").innerHTML =
    tomorrow.getDate() +
    " " +
    months[tomorrow.getMonth()] +
    ", " +
    tomorrow.getFullYear() +
    " Non disponibile per un colloquio :/";
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);

  if (h >= 16) {
    document.getElementById("txt").innerHTML =
      h + ":" + m + ":" + s + " Ti ricontatterò a breve";
  } else {
    document.getElementById("txt").innerHTML =
      h +
      ":" +
      m +
      ":" +
      s +
      " Attualmente fuori turno, ti ricontatterò tra le ore 16 e le ore 22 di oggi!";
  }
  if(h > 22){
    document.getElementById("txt").innerHTML =
    h +
    ":" +
    m +
    ":" +
    s +
    " Attualmente fuori turno, ti ricontatterò tra le ore 16 e le ore 22 di domani!";
  }
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}


/*
const toggle = document.getElementById("toggleDark");


toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.backgroundColor = "#202028";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});
*/
$(document).ready(function () {






  var day = anime.timeline({
    targets: ".circle",
    translateX: '50vw',
    easing: "easeInOutBack",
    
    color: '#ffff',
    
    
    borderRadius: "10%",
    delay: 2000,
    direction: "alternate",
    endDelay: 2000,

    rotate: "1turn",
    duration: 2000,
    delay: 2000,
    loop: true,
    opacity:[1, 0],
  });
  day.add({
    targets: ".circle2",
    translateX: ['50vw', 0],
    easing: "easeInOutBack",
    
    color: '#ffff',
    
    
    borderRadius: "10%",
    delay: 2000,
    direction: "alternate",
    endDelay: 2000,

    rotate: "1turn",
    duration: 2000,
    delay: 2000,
    loop: true,
    opacity:[0, 1],
  })

  anime({
    targets: ".uno",
    background: [
      "#00b4d8",

      "#404051",
    ],
    easing: "easeInOutSine",
    duration: 2000,
    delay: 2000,
    endDelay: 2000,
    direction: "alternate",
    loop: true
    
  });

  anime({
    targets: ".wrapper p",
    borderColor: [
      "#6fddff",

      "#15151b",
    ],
   
    
    easing: "easeInOutSine",
    duration: 2000,
    delay: 2000,
    endDelay: 2000,
    direction: "alternate",
    loop: true,
    
    
  });







 var textWrapper = document.querySelector('.git .testo');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml6 .letter',
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i
    }).add({
      targets: '.ml6',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });



      
    
  });
  

  if(width < 760){
    anime({
        day: anime.timeline({
        targets: ".circle",
        translateX: 50,
        easing: "easeInOutBack",
        
        color: '#ffff',
        
        
        borderRadius: "10%",
        delay: 2000,
        direction: "alternate",
        endDelay: 2000,
    
        rotate: "1turn",
        duration: 2000,
        delay: 2000,
        loop: true,
        opacity:[1, 0],

        targets: ".circle2",
        translateX: [50, 0],
        easing: "easeInOutBack",
        
        color: '#ffff',
        
        
        borderRadius: "10%",
        delay: 2000,
        direction: "alternate",
        endDelay: 2000,
    
        rotate: "1turn",
        duration: 2000,
        delay: 2000,
        loop: true,
        opacity:[0, 1],
      })
    }

























    )}
