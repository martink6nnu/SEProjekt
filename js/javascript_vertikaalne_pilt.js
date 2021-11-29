function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg_vertikaalne"); //Võtab suurendatud pildi
    var imgText = document.getElementById("imgtext"); //Võtab teksti 
    expandImg.src = imgs.src; //suurendatud pilt tuleb samast kohast kust tavaline pilt
    imgText.innerHTML = imgs.alt; //suurendatud pildi juures asuv tekst tuleb pildi "alt" atribuudilt
    expandImg.parentElement.style.display = "block"; //näitab suurendatud pilti plokk-stiilis
  }
// Piltide galerii JavaScript pärineb: https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp