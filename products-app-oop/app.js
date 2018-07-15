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
        /*productList.innerHTML =*/
        const element = document.createElement('div')
        element.innerHTML = `
            <div class = "card text-center mb-4">
                <div class="card-body">
                    <strong> Product Name</strong>: ${product.name}
                    <strong> Product Price</strong>: ${product.price}
                    <strong> Product Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                <div>
            </div>
        `;
        productList.appendChild(element);
        this.resetForm();
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProducto(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Deleted successfully', 'info')
        }

    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        //Showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div,app);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);

    }
}

//DOM Events

//Events of Form (Add product)
document.getElementById('product-form').addEventListener('submit', function(evento) {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    //La funciona preventDefault cancela el evento que viene por defecto 
    //en este caso la recargada del formuario por se submit
    evento.preventDefault();
    const product = new Product(name, price, year);
    const ui = new UI();

    if(name === '' | price === '' | year === '') {
        ui.showMessage('Complete fields please', 'danger');
    } else{
        ui.addProduct(product);
        ui.showMessage('Product Added successfully', 'success');
    }
    
});

//Events of list (Delete Form)
document.getElementById('product-list').addEventListener('click', (e) => {
    //console.log(e.target);
    const ui = new UI();
    ui.deleteProducto(e.target);
});
