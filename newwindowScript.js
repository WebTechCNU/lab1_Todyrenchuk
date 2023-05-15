
const image = document.querySelector('.logo');
const newwindow = document.querySelector('.newwindow');

image.addEventListener('mouseover', function() {
  const x = event.clientX;
  newwindow.style.left = x -100 + 'px';
  newwindow.style.display = 'block';
});

image.addEventListener('mouseout', function() {
  newwindow.style.display = 'none';
});