// JavaScript Document

//Choosing locations to appear by selecting each lists
const allIndicator = document.querySelectorAll('.store-indicator li');
const allContent = document.querySelectorAll('.store-content li');

//onClick function to switch into selected locations

allIndicator.forEach(item=> {
  item.addEventListener('click', function () {
    const content = document.querySelector(this.dataset.target);

    allIndicator.forEach(i=> {
      i.classList.remove('active');
    })

    allContent.forEach(i=> {
      i.classList.remove('active');
    })
//Resizing Maps when clicked into individual location tabs
    content.classList.add('active');
    this.classList.add('active');
	  map.resize();
	  map2.resize();
	  map3.resize();
	  map4.resize();
  })
})