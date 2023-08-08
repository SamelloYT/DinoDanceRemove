function removeDinoDance() {
  let imgList = document.querySelectorAll('img[alt="DinoDance"]', 'img[alt="DinoDanceTurbo"]');
  imgList.forEach(img => {
    img.style.visibility = 'hidden';
  });
}


removeDinoDance();

setInterval(function () {
  removeDinoDance();
}, 100)
