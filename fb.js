$(document).ready(function() {
  var images = ["img1.jpeg", "img2.jpg", "index.jpeg", "img4.jpg", "index1.jpeg" ,"index1.jpeg" ,"index2.jpeg", "img8.jpeg" , "img9.jpeg" , "img10.jpeg"];
  var imageId = 0;
  setInterval(function () {
    $('img').attr("src" , images[imageId]);
    imageId++;
    if(imageId === images.length)
    imageId = 0;
  }, 2000);
});
