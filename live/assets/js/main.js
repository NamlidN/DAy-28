const text = "wo ist walter?";
const walterIndex = text.indexOf("walter"); //zählt bzw sagt wo walter ist-beginnt
console.log(walterIndex);

const istIndex = text.indexOf("ist");

console.log(istIndex); //3

console.log((waldoIndex = text.indexOf("waldo"))); // -1

//string.includes
console.log(text.includes("walter")); //true

//string.slice
const halloween = "süßes oder saures";
console.log(halloween.slice(0, 5)); //süßes

console.log(halloween.slice(11)); //saures

//string.replace   -ein wort
console.log(halloween.replace("süßes", "salziges"));

// string.replaceAll  -alles ersetzen

const dogText =
  "The quick brown fox jumps over the lazy dog. if the dog reacted was it really lazy";
console.log(dogText.replaceAll("dog", "cat"));

const halloweenUppercase = halloween.toUpperCase();
console.log(halloweenUppercase);
console.log(halloweenUppercase.toLocaleLowerCase());

const username = "WoWFreak98";
console.log(username.length); //length zählt satzzeichen

if (username.length <= 12) {
  console.log(`${username} accepted`);
} else {
  console.log("username not accepted");
}

const myText1 = "Ein text";
const myText2 = `So können ${dogText} wir ab jetzt
 Strings schreiben`; //`<--- sehr mächtig mit --->${ }<--kann man text ohne plus einfügen oder bariablen hinzufügen!

console.log(myText2);

console.log(parseInt("3")); //läst ein string als zahl anzeigen umwandeln

console.log(Number("3.123")); //läst ein string als zahl anzeigen umwandeln

console.log(String(3)); //läst eine zahl als string anzeigen umwandeln

const convertedNumerToString = String(3);

function getNameOfMonth() {
  const numberOfMonth = Number(document.getElementById("month").value);
  let output = ''


  switch(numberOfMonth){
    case 1:
    output = 'Januar';
    break
    case 2:
    output = 'Februar';
    break
    case 3:
    output = 'März';
    break
    case 4:
    output = 'Mai';
    break;
    default:
         output = 'Kein valider Monat'
    
  }
  document.getElementById('output').innerHTML = output;
}
const number = 2

switch(number){
      case 2:
      case 4:
      case 6:
      console.log('ungerade zahl')
      break;
      case 1:
      case 3:
      case 5:
        console.log('gerade zahl')
}