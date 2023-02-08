//Implementing next button arrow and previous button arrow to slide to next products
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];



productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
//Button onClick function to go to next product
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
//Button onClick function to go back to previous product
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})