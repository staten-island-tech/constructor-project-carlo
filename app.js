//one class to create the object person, album, movie ***Model
//take args

class Sneaker {
    constructor(name, size, price, sold, image){
        this.name = name;
        this.size = size;
        this.price = price;
        this.image = image;
        this.sold = sold;
        
    
    this.profit = function(){
        return (this.sold - this.price);
    };
};  
};
/* const jordan = new Sneaker('jrodan', 11, 240, 'no', 260);
console.log(jordan); */


//****View */ class for the UI which contains methods
// creates/insert html for the UI DISPLAY
//clear fields method


//remove something/object



class UI{
    htmlAddition(sneaker){

    let html = '<div class="display-sneaker"><div class="display-name">%name%</div><div class="display-size">%size%</div><div class="display-price">%price%</div><div class="display-sold">%sold%</div><div class="display-image"><img src="%url%" alt=""></div><p id="profit">%profit%</p><div class="remove-sneaker"><p class="remove-sneaker"> Remove Sneaker &#10006;</p></div></div>'; 
    const profit = sold.value - price.value;
    let newHtml = html.replace('%name%', sneaker.name);
    newHtml = newHtml.replace('%size%', sneaker.size);
    newHtml = newHtml.replace('%price%', sneaker.price);
    newHtml = newHtml.replace('%sold%', sneaker.sold);
    newHtml = newHtml.replace('%url%', sneaker.image);
    newHtml = newHtml.replace('%profit%', profit);
    document.querySelector('.display').insertAdjacentHTML('beforeend', newHtml);
    }
    clearFields(){
        document.getElementById('name').value = '';
        document.getElementById('size').value = '';
        document.getElementById('price').value = '';
        document.getElementById('sold').value = '';
        document.getElementById('image').value = '';
    };
    
    removeSneaker(target){
        if (target.className === "remove-sneaker"){
            target.parentElement.remove();
        
        };

    };
};


document.getElementById('sneaker-form').addEventListener('submit',function(e){
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const price = document.getElementById('price').value;
    const sold = document.getElementById('sold').value;
    const image = document.getElementById('image').value;
    

    const sneaker = new Sneaker(name, size, price, sold, image);

    const ui = new UI();
    if(name === '' || size === '' ||  price === '' || sold === '' || image === '' ) {
        alert ('fields are missing'); 
    } else {
    ui.htmlAddition(sneaker);
    ui.clearFields();
    };
    e.preventDefault();
    
    

});

document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();

   
    ui.removeSneaker(e.target);    
    

    ui.clearFields();

    e.preventDefault();
})
//controller combines the ui and model

//event handler with function

//get values



//instatiate new class/object with variable name


//instantiate new UI const ui = new UI()



//call relevant methods

//separate event handler for removing/deleting 