document.addEventListener("DOMContentLoaded",function(){
initHead();
initBody();
insertImages();
})
function initHead(){
    var hRef = document.createElement("h1");
    hRef.innerHTML="EC Cook Book";
    document.body.appendChild(hRef);
    hRef.style.textAlign = "center";
    hRef.style.color = "blue";
    hRef.style.backgroundColor ="yellow";
    document.body.style.backgroundColor = "lightgrey";

}
function initBody(){
    var divRef = document.createElement("div");
    document.body.appendChild(divRef);
    divRef.style.width ="100%"
    divRef.style.height = "200px"
    divRef.style.backgroundColor= "red";
    divRef.className ="divImages"
   
    divRef.setAttribute("id","divIdd")
    // divRef.setAttribute("style","")
     var x=document.getElementById("divIdd")
     x.style.color= ("orange")
     x.textContent =" Hello"
     x.style.textAlign ="center"
     var divRef1 = document.createElement("div");
    divRef.appendChild(divRef1);
    
}
function insertImages(){
    var iframeRef = document.createElement("iframe");
    document.body.appendChild(iframeRef);
    iframeRef.setAttribute("style","width= 200px; height= 200px; backgroundColor = blue");
//     var x = document.body.createElement("IFRAME");
//   x.setAttribute("src", "https://www.w3schools.com");
//   document.body.appendChild(x);

}
