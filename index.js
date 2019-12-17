let headElement = document.getElementsByClassName('header');

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

    
    headElement.innerHTML = 'EC COOK BOOK';
    
    
    //divElement.setAttribute('style', 'width:300px; height:600px');
    let navRef = document.getElementById('nav');

    //document.body.appendChild(sectionElement);
    //sectionElement.appendChild(divElement);
    //divElement.appendChild(imageElement);
    //divElement.appendChild(paragElement);

}

function getImage(){
    imageElement.setAttribute('src', 'images/cucumber-salmon-panzanella-1565019143.jpg');
    imageElement.setAttribute('id', 'imageId');
}

var ingredint1 = 
    ['8 oz. country bread, torn',
    '2 tbsp. olive oil',
    'Kosher salt and black pepper',
    '4 Persian cucumbers',
    '3 tbsp. red wine vinegar',
    
    '1 tsp. caraway seeds',
    '1/4 red onion, sliced',
    '1 small fennel bulb, sliced',
    '1 c. arugula',
    'Roasted salmon'];
var ingredint2 = ['',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '']

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
