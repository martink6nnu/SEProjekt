function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg_vertikaalne"); //Võtab suurendatud pildi
    var imgText = document.getElementById("imgtext"); //Võtab teksti 
    expandImg.src = imgs.src; //suurendatud pilt tuleb samast kohast kust tavaline pilt
    imgText.innerHTML = imgs.alt; //suurendatud pildi juures asuv tekst tuleb pildi "alt" atribuudilt
    expandImg.parentElement.style.display = "block"; //näitab suurendatud pilti plokk-stiilis
  }
