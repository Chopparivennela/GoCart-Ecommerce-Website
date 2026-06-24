document.addEventListener("DOMContentLoaded",()=>{
    let productDetails=document.getElementById("productDetails");
    let allproducts=JSON.parse(localStorage.getItem("allproducts"));
    let productId=localStorage.getItem("productId")
if(allproducts && productId){
    let selectedProduct=allproducts.find((v)=>{
        return v.id==productId
    })
    console.log(selectedProduct);
  if(selectedProduct){
   productDetails.innerHTML=`
   <main>
    <div id="container">
   <div id="image">
   <image src="${selectedProduct.thumbnail}" alt=""></div>
   <div id="allDetails">
   <h1>${selectedProduct.title}</h1>
   <span><strong>Brand:</strong>${selectedProduct.brand}</span>
   <p><strong>Category:</strong>${selectedProduct.category}</p>
   <p><strong>Description:</strong>${selectedProduct.description}</p>
     <p><strong>price :<span id="price"> &#8377; ${Math.round(selectedProduct.price)*90}</strong></span></p>
     <div id="button">
     <button id="backToHome">Back to Home</button>
     <button id="addToCart">Add to Cart</button>
     </div>
     </div>
      </div>
     <div id="review">
     <h1>Customer reviews</h1>
     <br>
     ${selectedProduct.reviews.map(
      (review)=>`
      <div id="ratings">${"❤️".repeat(review.rating)}${"🖤".repeat((5)-review.rating)}</div> 
      <p id="comment">${review.comment}</p>
      <p id="nam">By <strong>${
        review.reviewerName}</strong> on ${new Date(review.date)}</p>
        <hr>`)}</div>
   </main>
   `
   document.getElementById("backToHome").addEventListener("click",()=>{
    window.location.href="../Home/Home.html";
   });

   document.getElementById("addToCart").addEventListener("click",()=>{
    addToCart(selectedProduct);
   });
  }
  else{
    productDetails.innerHTML='<p>Product Not Available</p>'
  }
    
}
else{
    productDetails.innerHTML='<p>Product Not Found...</p>'
}
});

function addToCart(product){
  let cart=JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product)
  localStorage.setItem("cart",JSON.stringify(cart))
  alert("Product added to cart successfully")
}