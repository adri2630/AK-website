

//fetch the categories
fetch("http://keep-it-simple.site/wp-json/wp/v2/categories")
.then(function(res){

    return res.json();
})
.then(function(datacat){
        console.log(datacat)
    receivedCat(datacat);
     fetchData();
})


function receivedCat(elements){

    elements.forEach(displayCategories)

}
// thi function will display one category find the template, clone it and fill it in and append it, what a multitasker
function displayCategories(oneCat){

    //fidn the template
    const catTemplate = document.querySelector("#wordpresscategories").content;

    //clone said template
const catCopy = catTemplate.cloneNode(true);
// fill it with the stuffypu put in wordpress for better or worse why can i just put here lorem ipsum o sth ?





   catCopy.querySelector(".filter").textContent = oneCat.name;

    //append it
    document.querySelector("h2").appendChild(catCopy);

}





function fetchData(){



//fetch the data
fetch("http://keep-it-simple.site/wp-json/wp/v2/product")
.then(function(response){

    return response.json();
})
.then(function(data){

    receivedData(data);
})

function receivedData(products){

    products.forEach(displayProducts)

}
// thi function will display one product find the template, clone it and fill it in and append it, what a multitasker
function displayProducts(oneProduct){

    //fidn the template
    const productTemplate = document.querySelector("#producttemplate").content;

    //clone said template
const copy = productTemplate.cloneNode(true);
// fill it with the stuffypu put in wordpress for better or worse why can i just put here lorem ipsum o sth ?
///
    ///


    copy.querySelector("h3").textContent = oneProduct.title.rendered;
   // copy.querySelector(".button a").textContent = oneProduct.link;
    copy.querySelector(".editor").textContent = oneProduct.shortdescription;
    copy.querySelector("img").setAttribute("src",'http://keep-it-simple.site/wp-content/uploads/2020/11/Group-22.png')

    //append it
    document.querySelector("main").appendChild(copy);

}
}


//fetch the data
fetch("http://keep-it-simple.site/wp-json/wp/v2/contact/")
.then(function(resp){

    return resp.json();
})
.then(function(datay){

    receivedContact(datay);
})

function receivedContact(cont){

    cont.forEach(displayContact)

}
// thi function will display one product find the template, clone it and fill it in and append it, what a multitasker
function displayContact(oneContact){

    //fidn the template
    const contacttemp = document.querySelector("#contactTemp").content;

    //clone said template
const copyT = contacttemp.cloneNode(true);
// fill it with the stuffypu put in wordpress for better or worse why can i just put here lorem ipsum o sth ?



    copyT.querySelector("h2").textContent = oneContact.title.rendered;
   // copyT.querySelector("h4").textContent = oneContact.link;//

    //append it
    document.querySelector(".insidecontact").appendChild(copyT);

}
/////



