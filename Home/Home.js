let promise=[];

function fetchData(){
    fetch("https://dummyjson.com/products").then((res)=>{
     return res.json();
    }).then((val)=>{
        console.log(val.products);
        product=val.products;
        localStorage.setItem("allproducts",JSON.stringify(product))
        displayProduct(product)
    })
}

function displayProduct(prod){
    let output="";
    prod.forEach((val)=>{
        output+=`
        <main> 
        <div id="container">
        <div id="image">
        <img src="${val.thumbnail}"/>
        </div>
        <h3>${val.title}</h3>
        <div id="text_container1">
        <span id="price">&#8377; ${Math.round(val.price*90)}</span>
           <span>Instock.${val.stock}</span>
        </div>
         <div id="detailBox">
                <button id="ratings_btn">Rating: ${val.rating}⭐</button>
         <button id="details_btn" onclick="details(${val.id})">Details</button></div>
        </div>
         </main>
        `
    })
    document.getElementById("productContainer").innerHTML=output;
}
fetchData();
document.getElementById("searchbar").addEventListener("input",function searchItem(event){
    let searchTerm=event.target.value.toLowerCase();
    let filteredProduct=product.filter((v)=>{
        return(
            v.title.toLowerCase().includes(searchTerm)||
            v.category.toLowerCase().includes(searchTerm)
        );
    });
    displayProduct(filteredProduct);
}
);

function details(productId){
    console.log(productId);
    localStorage.setItem("productId",productId);
    window.location.href="../viewDetails/viewDetails.html"
    
}