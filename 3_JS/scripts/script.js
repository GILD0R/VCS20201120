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
    firstName: "Petras",
    lastName:"Petraitis",
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

var button2 = document.querySelector("#change-img");
var i = 0;
button2.addEventListener("click", function(){
    var image = document.querySelector("div.gallery img");
    image.setAttribute("scr","https://picsum.photos/seed" + i++ + "/150");
});

var images = document.querySelectorAll("div.gallery img");
for (var j = 0; j<images.length; j++){
    images[j].addEventListener("click", function(event) {
        console.log(event);
        event.target.setAttribute("src", "https://picsum.photos/seed/" +Math.random() + "/150");
    }
);
}