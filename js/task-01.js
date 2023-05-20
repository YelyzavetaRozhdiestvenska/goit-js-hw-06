const list = document.querySelector(`#categories`);
[...list.children].forEach(item => {
    let numberOfCategories = list.children.length;
    let category = item.firstElementChild.textContent;
    let elements = item.lastElementChild.children.length; 

    console.log(`Number of categories: ${numberOfCategories}`);
    console.log(`Category: ${category}`);
    console.log(`Elements: ${elements}`);
})

