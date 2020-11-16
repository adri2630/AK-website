




//fetch the data
fetch("http://keep-it-simple.site/wp-json/wp/v2/product")
.then(function(response){
    console.log(response)
    return response.json();
})
.then(function(data){
        console.log(data)
    receivedData(data);
})

function receivedData(products){
    console.log(products)
    products.forEach(displayProducts)

}
// thi function will display one product find the template, clone it and fill it in and append it, what a multitasker
function displayProducts(oneProduct){
        console.log(oneProduct)
    //fidn the template
    const productTemplate = document.querySelector("#producttemplate").content;

    //clone said template
const copy = productTemplate.cloneNode(true);
// fill it with the stuffypu put in wordpress for better or worse why can i just put here lorem ipsum o sth ?

    copy.querySelector("h3").textContent = oneProduct.title.rendered;
    copy.querySelector("p").textContent = oneProduct.content.rendered;
    copy.querySelector("img").setAttribute;

    //append it
    document.querySelector("main").appendChild(copy);

}
