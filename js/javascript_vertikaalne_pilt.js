function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg_vertikaalne"); //V�tab suurendatud pildi
    var imgText = document.getElementById("imgtext"); //V�tab teksti 
    expandImg.src = imgs.src; //suurendatud pilt tuleb samast kohast kust tavaline pilt
    imgText.innerHTML = imgs.alt; //suurendatud pildi juures asuv tekst tuleb pildi "alt" atribuudilt
    expandImg.parentElement.style.display = "block"; //n�itab suurendatud pilti plokk-stiilis
  }
// Piltide galerii JavaScript p�rineb: https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp