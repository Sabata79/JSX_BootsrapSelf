/*
 * Student name :Sasa Mora Roca
 * Started date :30.3.2022
 */
// Object array for plants
const PLANT = [
   {
   "name":"Herkkutatti",
   "image":'<img alt="1" src="images/herkkutatti.jpg">',
   "question":"Mikä tämän yleisen sienilajin nimi on ?",
   "answer1":"Herkkutatti" ,
   "answer2":"Suppilovahvero",
   "answer3":"Kanttarelli",
   "rightAnswer":"Herkkutatti"
   },
   {
   "name":"Kielo",
   "image":'<img alt="2" src="images/kielo.jpg">',
   "question":"Mikä tämän kauniin ,mutta myrkyllisen kasvin nimi on? ",
   "answer1":"Kielo",
   "answer2":"Aho-orvokki",
   "answer3":"Arovuokko",
   "rightAnswer":"Kielo"
   },
   {
   "name":"Kirsikkapuu",
   "image":'<img alt="3" src="images/Kirsikka.jpg">',
   "question":"Minkä tämän puun nimi on? Kyseisen puun kukintaa ihastellaan vuosittain Japanissa (Hanami).",
   "answer1":"Kirsikkapuu",
   "answer2":"Luumupuu",
   "answer3":"Omenapuu",
   "rightAnswer":"Kirsikkapuu"
   },
   {
   "name":"Koivu",
   "image":'<img alt="4" src="images/koivu.jpg">',
   "question":"Tämä on Suomen kansallispuu?",
   "answer1":"Koivu",
   "answer2":"Mänty",
   "answer3":"Tammi",
   "rightAnswer":"Koivu"
   },
   {
   "name":"Apila",
   "image":'<img alt="5" src="images/apila.jpg">',
   "question":"Tätä pientä kasvia löytyy melkein joka pihalta ,kun löydät sen nelilehtisenä se tuo onnea..",
   "answer1":"Apila",
   "answer2":"Linnunkaali",
   "answer3":"Onnenlehti",
   "rightAnswer":"Apila"
   },
   {
   "name":"Leppä",
   "image":'<img alt="6" src="images/leppa.jpg">',
   "question":"Tämä tunnettu puu voi elää jopa 100 vuotiaaksi..",
   "answer1":"Leppä",
   "answer2":"Koivu",
   "answer3":"Tammi",
   "rightAnswer":"Leppä"
   },
   {
   "name":"Villilupiini",
   "image":'<img alt="7" src="images/lupiini.jpg">',
   "question":"Suomalainen artisti J.Karjalainen julkaisi tästä kasvista kappaleen vuonna 1994.. ",
   "answer1":"Villilupiini",
   "answer2":"Jättipalsami",
   "answer3":"Kurtturuusu",
   "rightAnswer":"Villilupiini"
   },
   {
   "name":"Punaherukka",
   "image":'<img alt="8" src="images/punaviinimarja.jpg">',
   "question":"Hiukan hapan ja hiukan makea ,mehumarja..",
   "answer1":"Punaherukka",
   "answer2":"Pihlajanmarja",
   "answer3":"Ruohokanukka",
   "rightAnswer":"Punaherukka"
   },
   {
   "name":"Vadelma",
   "image":'<img alt="9" src="images/vadelma.jpg">',
   "question":"Mikä tämä ihmisellä vastustuskykyä lisäävän marjan nimi on?",
   "answer1":"Vadelma",
   "answer2":"Mansikka",
   "answer3":"Hilla",
   "rightAnswer":"Vadelma"
   },
   {
   "name":"Voikukka",
   "image":'<img alt="10" src="images/voikukka.jpg">',
   "question":"Mikä on tämä tunnettu rikkakasvi jota myös käytetään ruokana sekä lääkkeenä?", 
   "answer1":"Voikukka",
   "answer2":"Piharatamo",
   "answer3":"Päiväkakkara",
   "rightAnswer":"Voikukka"
   }
];

let userAnswer = 0;

/** Function
* Returns random integer from implemented values between min and max
*  
* @param {value} min    minimum value
* @param {value} max    maximum value
* @returns {value}      random number
*/   
function getRndInteger(min, max  ) {  
   return Math.floor(Math.random() * (max - min) ) + min;   
   }

let count = -1;
let progresCount = 0;
let right = 0;
let grow = 0;

//Quiz start
function a01() {

   //Number to get right index from PLANT array
   let index = 0;
   
   //Randoms index fron PLANT array
   index = getRndInteger(0,PLANT.length);
   right = PLANT[index].rightAnswer;
   
   progresCount++;
   count++;  
   grow += 10 ;

   //Shows these      
   document.getElementById("first").style.display = "inline-block";
   document.getElementById("second").style.display = "inline-block";
   document.getElementById("third").style.display = "inline-block";
   
   if (count <= 9 ) {

      //adds progressbar length and count per question
      document.getElementById("counter").innerHTML = progresCount + "/10";   
      document.getElementById("counter").style.width = grow + "%";
      
      //question and images
      document.getElementById("text").innerHTML = PLANT[index].question ;   
      document.getElementById("picture").innerHTML = PLANT[index].image ;
      document.getElementById("start").style.display ="none";
      
      const THEANSWER = [
         PLANT[index].answer1 ,
         PLANT[index].answer2 ,
         PLANT[index].answer3
      ];

      const BUTTONS = [
         "first",
         "second",
         "third"
      ];
      
      // buttons randomizer and ELSE for finaScreen
      for(j = 0; j <= 2; j++) {    
         let max = THEANSWER.length ;
         let random =Math.floor(Math.random()*max); 
         let order = random;

         document.getElementById(BUTTONS[j]).innerHTML = THEANSWER[order];
         THEANSWER.splice(order, 1);   
      }
      PLANT.splice(index, 1);
   } else {
      finalScreen();
   }
}

let correct = 0;

let firstBtn = document.getElementById("first");
let secondBtn = document.getElementById("second");
let thirdBtn = document.getElementById("third");

/** Function 
 * enables/disables buttons
 * 
*/
function submitFirst() {
   document.getElementById("start").disabled = false;
   document.getElementById("submit").style.display = "inline-block";
   document.getElementById("submit").innerHTML = "Olen varma vastauksesta!"   

   // records clicks userAnswer
   firstBtn = document.getElementById("first");
   secondBtn = document.getElementById("second");
   thirdBtn = document.getElementById("third");
   
   userAnswer = document.getElementById("first").innerHTML;
}

function submitSecond() {
   document.getElementById("start").disabled = false;
   document.getElementById("submit").style.display = "inline-block";
   document.getElementById("submit").innerHTML = "Olen varma vastauksesta!"   
   
      // records clicks userAnswer
      firstBtn = document.getElementById("first");
      secondBtn = document.getElementById("second");
      thirdBtn = document.getElementById("third");
      
      userAnswer = document.getElementById("second").innerHTML;
}

function submitThird() {
   document.getElementById("start").disabled = false;
   document.getElementById("submit").style.display = "inline-block";
   document.getElementById("submit").innerHTML = "Olen varma vastauksesta!"   
      
      // records clicks userAnswer
      firstBtn = document.getElementById("first");
      secondBtn = document.getElementById("second");
      thirdBtn = document.getElementById("third");
         
      userAnswer = document.getElementById("third").innerHTML;
}

function a02() {
     
   //Answer check
   if (userAnswer == right) {
      correct ++;
   }
   if (count <= 8) {
      a01();
   } else {
      finalScreen();
   }
}

/** Function 
 * Setups the final screen
 * 
*/  
function finalScreen() {
   //Hides these
   document.getElementById("submit").style = "hidden";
   document.getElementById("text").innerHTML = "";
   document.getElementById("first").style = "hidden";
   document.getElementById("second").style = "hidden";
   document.getElementById("third").style = "hidden";
   document.getElementById("picture").innerHTML = "";  
   document.getElementById("counter").innerHTML = "";
   
   //Shows these
   document.getElementById("containerFinal").style.display = "inline-block";
   document.getElementById("scoreImage").style.display = "inline-block";
   document.getElementById("restart").style.display = "inline-block";
   document.getElementById("restart").innerHTML = "Uudestaan"
   document.getElementById("starContainer").style.display = "inline-block"
   
   // correct & shows score rating stars 
   document.getElementById("result").innerHTML = correct + " / 10";

   if (correct == 0) {
      document.getElementById("result").style.display = "none";
      document.getElementById("scoreImage").style.display = "none";
      document.getElementById("mistake").style.display = "inline-block"
   }
   else if (correct > 0 && correct <= 2) {
      document.getElementById("oneStar").style.color = "orange";
   }
   else if(correct > 2 && correct <= 4) {
      document.getElementById("oneStar").style.color = "orange";
      document.getElementById("twoStar").style.color = "orange";
   }
   else if(correct > 4 && correct <= 6) {
      document.getElementById("oneStar").style.color = "orange";
      document.getElementById("twoStar").style.color = "orange";
      document.getElementById("threeStar").style.color = "orange";
   }
   else if (correct > 6 && correct <= 9) {
      document.getElementById("oneStar").style.color = "orange";
      document.getElementById("twoStar").style.color = "orange";
      document.getElementById("threeStar").style.color = "orange";
      document.getElementById("fourStar").style.color = "orange";
   }
   else{      
      document.getElementById("oneStar").style.color = "orange";
      document.getElementById("twoStar").style.color = "orange";
      document.getElementById("threeStar").style.color = "orange";
      document.getElementById("fourStar").style.color = "orange";
      document.getElementById("fiveStar").style.color = "orange"; 
   }
}

/** 
*
* Footer slide from w3schools
*/
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("footer").style.bottom = "0";
  } else {
    document.getElementById("footer").style.bottom = "-70px";
  }
  prevScrollpos = currentScrollPos;
}
