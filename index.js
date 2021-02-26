const productData = [{
    img: "shirt1.jpg",
    title: "shirt",
    price: "$100",
    button: "Add to cart"

}]

const container = document.getElementById('grid');

productData.forEach((result) => {

    const card = document.createElement('div');

    const content = `
    <div class="card">

       <img src=${result.img} class="card-img-top" alt="HOODIE">

       <div class="card-body">

         <h5 class="card-title">${result.title}</h5>
         <p class="card-text">${result.price}</p>

         <div class="d-grid gap-2 col- mx-auto">
           <button type="button" class="btn btn-secondary btn-sm" id="buy">${result.button}</button>
         </div>
         
       </div>
    </div>`; 

    container.innerHTML += content;
})