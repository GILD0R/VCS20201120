// alert ("as esu js faile")

console.log("konsoleje");
document.write("dokumente")

var kintamojoPavadinimas = "tekstukas";
console.log(kintamojoPavadinimas);

var masyvas = ["Vardas", 23, true, null];
// console.log (masyvas.length);

// masyvas.push(1);
// masyvas.shift();
// console.log(masyvas);
// masyvas.unshift(50);

var profile = {
    firstName: "Kazimiras",
    lastName:"Jarmolovskis",
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
}
var paragraph = document.createElement("p");
paragraph.innerText = "Tekstas idetas i elementa su JS"

document.body.prepend(paragraph);



var button1 = document.querySelector("#change-p-color");
button1.addEventListener("click", function(){
    var outro = document.querySelector("div.outro p");
    outro.style.color = "red";
});