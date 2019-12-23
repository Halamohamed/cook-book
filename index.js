let headElement = document.getElementsByClassName('header');
let childHome;
let sectionElement = document.getElementsByTagName('section');
let divElement = document.getElementsByTagName('div');
let imageElement = document.getElementById('imageId');
let paragElement = document.createElement('p');


document.addEventListener('DOMContentLoaded', init);

function init(){
    getStartSide();
    //getImage();
    //getIngredint();
}


function getStartSide(){
    let navRef = document.getElementById('nav');

    document.getElementById('nav');

    let home = navRef.childNodes[1];
     childHome = home.childNodes[1];

    console.log(childHome);
    childHome.addEventListener('click', function(){
        childHome.setAttribute('href', 'chicken.html');
    });
    
    
    //home.addEventListener('click', addList);
    
    //divElement.setAttribute('style', 'width:300px; height:600px');
    

    //document.body.appendChild(sectionElement);
    //sectionElement.appendChild(divElement);
    //divElement.appendChild(imageElement);
    //divElement.appendChild(paragElement);

}
function addList(){
    childHome.setAttribute('href','chicken.html');
}

function getImage(){
    imageElement.setAttribute('src', 'images/cucumber-salmon-panzanella-1565019143.jpg');
    imageElement.setAttribute('id', 'imageId');
}


    function addDescription(){
        var description1 = '\nDescription: \n';
        var description2 = "Instructions      "
        return description;
    }
    function getIngredint(){
        paragElement.textContent += 'Ingredints:';
        for(var i=0; i<ingredint.length; i++){
            paragElement.textContent +=  ingredint[i] ; 

        }
        paragElement.textContent += addDescription();
    }
