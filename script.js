

//fetch the categories
fetch("http://keep-it-simple.site/wp-json/wp/v2/categories")
.then(function(res){
    console.log(res)
    return res.json();
})
.then(function(datacat){
        console.log(datacat)
    receivedCat(datacat);
})


function receivedCat(elements){
    console.log(elements)
    elements.forEach(displayCategories)

}
// thi function will display one category find the template, clone it and fill it in and append it, what a multitasker
function displayCategories(oneCat){
        console.log(oneCat)
    //fidn the template
    const catTemplate = document.querySelector("#wordpresscategories").content;

    //clone said template
const catCopy = catTemplate.cloneNode(true);
// fill it with the stuffypu put in wordpress for better or worse why can i just put here lorem ipsum o sth ?

   catCopy.querySelector(".filter").textContent = oneCat.name;

    //append it
    document.querySelector("#buttonbox").appendChild(catCopy);

}







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
    copy.querySelector("img").setAttribute("src",'http://keep-it-simple.site/wp-content/uploads/2020/11/Group-13.png')

    //append it
    document.querySelector("main").appendChild(copy);

}
