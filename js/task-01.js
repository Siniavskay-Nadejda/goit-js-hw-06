const allcategories = document.querySelectorAll(".item");
console.log("Number of categories:", allcategories.length);

const arraycategories = [...allcategories]
    .map(categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`)
arraycategories.forEach(el => console.log(el))
















 

