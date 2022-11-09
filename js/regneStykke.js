const KM = document.getElementById("inputKM");
const LI = document.getElementById("inputLI");
const button = document.getElementById("button1");
const outputText = document.getElementById("outputText");
const outputTextA = document.getElementById("outputTextA");
// jeg lager noen const at resten av koden er lettere og kortere. 
// De to første er for de to forsjellige innput felten den i mitten. 
// er for knappen og de siste er for outputt feltene.
let kmTotal = 0;
let liTotal = 0;
// disse to er ikke cons fordi verdiene demmes kommer til å forandre seg.
button.addEventListener("click", e=>{  // gjør at min knapp lytter til click event
    kmTotal= KM.value*1+kmTotal;       // regne total km
    liTotal = LI.value*1+liTotal;      // regne total liter
    let gjenomsitTotal = (liTotal/(kmTotal/10)).toFixed(2); // tofixd gjør svaret kortere
    outputText.innerHTML = "Total kjørelangde " + kmTotal + " km med et gjenomsits forbruk på " + gjenomsitTotal + " l/mil."; //lage svar setting
    let svar = (LI.value/(KM.value/10)).toFixed(2); // tofixd gjør svaret kortere
    outputTextA.value = KM.value + "km kjørt på " + LI.value + " l tilsvarer et forbruk på " + svar + "l/mil " + "\n" + outputTextA.value; //lage svar setting for textarea 
});