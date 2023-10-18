//console.log("Hello World")
//alert  ("Ada Notifikasi")
//prompt ("Pinjam Seratus")

//var Promnet="Coding is easy"
//console.log(Promnet)
//var Promnet="Coding is easy"
//console.log(Promnet)
//var Promnet="nothing is possible"
//console.log (Promnet)

//let Promnet="Coding is fun"
//console.log(Promnet)
//let Promnet="Coding not fun"
//console.log(Promnet)

//const Promnet="Coding is my life"
//console.log(Promnet)
//const Promnet="Coding is not my life"
//console.log(Promnet)

//let totalPoin=prompt("Masukkan poin anda")
    //if(totalPoin>=100){
        //document.write("congratulation")
    //}else{
        //document.write("Keep Triying")
    //}

//let x=6;
//let y=3;

//console.log(x<10&&y>1)
//console.log(x<10&&y<1)
//console.log(x==5||y==5)
//console.log(x==6||y==5)
//!(x==y)

// document.write(x<10&&y>1)
// document.write("<br>");
// document.write(x<10&&y<1)

//let p=document.querySelector("p")
//let button=document.querySelector("button")
//let input=document.querySelector("input")
//button.addEventListener('click' function())
//let isi=input.value
//console.log(isi)
//p.inert-HTML == isi

function tampilkanData() {
        var inputNama = document.getElementById("nama").value;
        var daftarData = document.getElementById("daftarData");
        var li = document.createElement("li");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "dataCheckbox";
        li.appendChild(checkbox);

        var textElement = document.createElement("span"); // Create a <span> for the text
        textElement.innerText = inputNama; // Set the text content
        li.appendChild(textElement);

        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("X"));
        deleteButton.onclick = function () {
            li.remove();
        };
        li.appendChild(deleteButton);

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                textElement.style.textDecoration = "line-through"; // Apply strikethrough
            } else {
                textElement.style.textDecoration = "none"; // Remove strikethrough
            }
        });

        daftarData.appendChild(li);
        document.getElementById("nama").value = "";
    }
