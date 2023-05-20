const list = document.querySelector(`#categories`);
console.log(`Number of categories: ${list.children.length}`);

[...list.children].forEach(item => {

    
    let category = item.firstElementChild.textContent;
    let elements = item.lastElementChild.children.length; 

    
    console.log(`Category: ${category}`);
    console.log(`Elements: ${elements}`);
})

