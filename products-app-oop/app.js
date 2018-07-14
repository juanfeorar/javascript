class Product {
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }

}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div')
        element.innerHTML = ``;
    }

    deleteProducto(){

    }

    showMessage() {

    }
}

//DOM Events
document.getElementById('product-form').addEventListener('submit', function(evento) {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    //La funciona preventDefault cancela el evento que viene por defecto 
    //en este caso la recargada del formuario por se submit
    evento.preventDefault();
    const product = new Product(name, price, year);
})