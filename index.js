let headElement = document.createElement('h1');
let sectionElement = document.createElement('section');
let divElement = document.createElement('div');
let imageElement = document.createElement('img');
let paragElement = document.createElement('p');


document.addEventListener('DOMContentLoaded', init);

function init(){
    getStartSide();
    getImage();
    getIngredint();
}


function getStartSide(){

    
    headElement.innerHTML = 'EC COOK BOOK';
    headElement.style.textAlign = 'center';
    headElement.style.color = 'blue';
    divElement.setAttribute('style', 'width:300px; height:500px');
    
    document.body.appendChild(headElement);
    document.body.appendChild(sectionElement);
    sectionElement.appendChild(divElement);
    divElement.appendChild(imageElement);
    divElement.appendChild(paragElement);

}

function getImage(){
    imageElement.setAttribute('src', 'images/cucumber-salmon-panzanella-1565019143.jpg');
    imageElement.setAttribute('id', 'imageId');
}

var ingredint = 
    ['8 oz. country bread, torn',
    '2 tbsp. olive oil',
    'Kosher salt and black pepper',
    '4 Persian cucumbers',
    '3 tbsp. red wine vinegar',
    '2 tbsp. olive oil',
    '1 tsp. caraway seeds',
    '1/4 red onion, sliced',
    '1 small fennel bulb, sliced',
    '1 c. arugula',
    'Roasted salmon'];

    function getIngredint(){
        paragElement.textContent += 'Ingredints';
        for(var i=0; i<ingredint.length; i++){
            paragElement.textContent +=  ingredint[i] ; 

        }
    }
