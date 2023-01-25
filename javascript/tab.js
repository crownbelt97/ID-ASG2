// JavaScript Document

const allIndicator = document.querySelectorAll('.store-indicator li');
const allContent = document.querySelectorAll('.store-content li');

allIndicator.forEach(item=> {
  item.addEventListener('click', function () {
    const content = document.querySelector(this.dataset.target);

    allIndicator.forEach(i=> {
      i.classList.remove('active');
    })

    allContent.forEach(i=> {
      i.classList.remove('active');
    })

    content.classList.add('active');
    this.classList.add('active');
	  map.resize();
  })
})