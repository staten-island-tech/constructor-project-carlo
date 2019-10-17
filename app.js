//one class to create the object person, album, movie ***Model
//take args

class Sneaker {
    constructor(name, size, price, sold, image){
        this.name = name;
        this.size = size;
        this.price = price;
        this.image = image;
        this.sold = sold;
        
    }
    calculateProfit(){
        return (this.sold - this.price);
    };
};  

/* const jordan = new Sneaker('jrodan', 11, 240, 'no', 260);
console.log(jordan); */
const form = document.getElementById('#sneaker-form')
const userName = document.getElementById('#name');
const userSize = document.getElementById('#size');
const userPrice = document.getElementById('#price');
const userImage = document.getElementById('#image');
const display = document.getElementById('.display');

//****View */ class for the UI which contains methods
// creates/insert html for the UI DISPLAY
//clear fields method


//remove something/object



class ui{
    htmlAddition(sneaker){
        let html = '<div class="display-sneaker"><div class="display-name">%name%</div><div class="display-size">%size%</div><div class="display-price">%price%</div><div class="display-sold">%sold%</div><div class="display-image"><img src="%url%" alt=""></div><div class="remove-sneaker"><p class="remove-sneaker"> Remove Sneaker &#10006;</p></div></div>'; 

    let newHtml = html.replace('%name%', sneaker.name);
    newHtml = newHtml.replace('%size%', sneaker.size);
    newHtml = newHtml.replace('%price%', sneaker.price);
    newHtml = newHtml.replace('%sold%', sneaker.sold);
    newHtml = newHtml.replace('%url%', sneaker.image);
    document.getElementById('.display').insertAdjacentHTML('beforeend', newHtml);
    }
    clearFields(){
        document.getElementById('name');
        document.getElementById('size');
        document.getElementById('price');
        document.getElementById('image');
    };
    
    removeSneaker(el){
        if(el.target.parentElement.classList.contains('remove-sneaker')){
            el.target.parentElement.parentElement.remove();
        };

};

}

document.getElementbyId('sneaker-form').addEventListener('submit',function(e){
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;
    

    const sneaker = new Sneaker(name, size, price, sold, image);

    const ui = new ui();

    ui.clearFields();
    ui.htmlAddition(sneaker);
    ui.removeSneaker(el);
    

});
//controller combines the ui and model

//event handler with function

//get values



//instatiate new class/object with variable name


//instantiate new UI const ui = new UI()



//call relevant methods

//separate event handler for removing/deleting 