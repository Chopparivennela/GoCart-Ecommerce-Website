document.addEventListener("DOMContentLoaded",()=>{
    displayProduct()
})
function displayProduct(){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    let cartContent=document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice");
    console.log(cart);
    cartContent.innerHTML="";
    let totalBill=0;
    if(cart.length===0){
        cartContent.innerHTML=`<div id="empty_cart">Your Cart is Empty <br><span>..Start Shopping....🛍️</span></div>`
        totalPrice.innerHTML=" ";
    }
cart.map((product,i)=>{
    totalBill+=Math.floor((product.price)*90)
    console.log(product,i);
  let newProd=document.createElement("div")  
  newProd.setAttribute("class","prod_info")
  newProd.innerHTML=`
  <div id="image">
  <img src="${product.thumbnail}"></div>
<div id="content">
<h1>${product.title}</h1>
 <p>Brand : ${product.brand}</p>
  <p id="price">Price :<span> &#8377; ${Math.round(product.price*90)}</span></p>
   <p id="discount">Discount :<span> ${product.discountPercentage} % </span></p>
   <p>Stock :<span> ${product.stock} left </span></p>
   <p>Availability-Status : ${product.availabilityStatus}</p>
<p>Warranty : ${product.warrantyInformation}</p>
<p>Shipping : ${product.shippingInformation}</p>
<p id="policy">Return Policy : <span>${product.returnPolicy}</span></p>
   </div>
   <div id="btn_tag">
   <button onclick="RemoveFromCart(${i})">Remove</button>
</div>`;
  cartContent.append(newProd);
});
let displayPrice=document.createElement("div");
displayPrice.setAttribute("class","total_price")
displayPrice.innerHTML=`<h1 id="price_h1">Total Price : &#8377;${totalBill}</h1>`
totalPrice.append(displayPrice);
}

function RemoveFromCart(index){
    let cart=JSON.parse(localStorage.getItem("cart"))
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    displayProduct();
}