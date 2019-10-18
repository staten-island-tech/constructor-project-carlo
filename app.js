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


//****View */ class for the UI which contains methods
// creates/insert html for the UI DISPLAY
//clear fields method


//remove something/object



class UI{
    htmlAddition(sneaker){
        let html = '<div class="display-sneaker"><div class="display-name">%name%</div><div class="display-size">%size%</div><div class="display-price">%price%</div><div class="display-sold">%sold%</div><div class="display-image"><img src="%url%" alt=""></div><div class="remove-sneaker"><p class="remove-sneaker"> Remove Sneaker &#10006;</p></div></div>'; 

    let newHtml = html.replace('%name%', sneaker.name);
    newHtml = newHtml.replace('%size%', sneaker.size);
    newHtml = newHtml.replace('%price%', sneaker.price);
    newHtml = newHtml.replace('%sold%', sneaker.sold);
    newHtml = newHtml.replace('%url%', sneaker.image);
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
        if(target.parentElement.classList.contains('remove-sneaker')){
            target.parentElement.remove();
        };

};

}

document.getElementById('sneaker-form').addEventListener('submit',function(e){
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const price = document.getElementById('price').value;
    const sold = document.getElementById('sold').value;
    const image = document.getElementById('image').value;
    

    const sneaker = new Sneaker(name, size, price, sold, image);

    const ui = new UI();

    ui.clearFields();
    ui.htmlAddition(sneaker);
    
    

});
//controller combines the ui and model

//event handler with function

//get values



//instatiate new class/object with variable name


//instantiate new UI const ui = new UI()



//call relevant methods

//separate event handler for removing/deleting 