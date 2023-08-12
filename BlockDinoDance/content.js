function removeDinoDance() {
  let imgListDinoDance = document.querySelectorAll('img[alt="DinoDance"]');
  let imgListDinoDanceTurbo = document.querySelectorAll('img[alt="DinoDanceTurbo"]');
  let imgListDinoDansey = document.querySelectorAll('img[alt="DinoDansey"]');
  
  imgListDinoDance.forEach(imgdd => {
      imgdd.style.visibility = 'hidden';
  });
  
  imgListDinoDanceTurbo.forEach(imgddt => {
      imgddt.style.visibility = 'hidden';
  });
  
  imgListDinoDansey.forEach(imgddy => {
      imgddy.style.visibility = 'hidden';
  });
  console.log(imgListDinoDance);
  console.log(imgListDinoDanceTurbo);
  console.log(imgListDinoDansey);
}


removeDinoDance();

setInterval(function () {
  removeDinoDance();
}, 100)
