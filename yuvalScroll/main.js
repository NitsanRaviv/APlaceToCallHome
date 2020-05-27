var index = 2;
var coords117 = "631,155,682,182,699,223,704,255,703,289,694,328,688,351,684,360,689,377,713,425,721,459,718,481,706,506,692,542,670,558,652,565,639,567,556,546,534,523,518,471,523,431,541,369,542,349,534,252,537,236,545,201,561,182,587,163,607,156";

window.addEventListener('wheel', function(event){
  console.log("index = " + index);
  if (event.deltaY > 0){
    //Scroll foword

    document.getElementById("imageid").src="../Assets/yuvalImg/img" + index +".jpg";
    if (index < 310){
      index ++;
    }
  } 
  else {
    //Scroll backwards

    if (index > 1){
      index --;
    }
    document.getElementById("imageid").src="../Assets/yuvalImg/img" + index +".jpg";  
  }

   if( parseInt(index) >= 111 && parseInt(index) <= 130){
      
        addClickableArea(coords117);
    }
    else{
        removeClickableArea();
    }
});


function addClickableArea(coords) {

  var area1 = document.getElementById('area1');
  area1.setAttribute("coords",coords);
  area1.setAttribute("shape","poly");
  area1.setAttribute("href","../yuvalScroll/DIGIT.mp4");
}

function removeClickableArea() {

  var area1 = document.getElementById('area1');
  area1.setAttribute("coords","/");
  area1.setAttribute("shape","/");
  area1.setAttribute("href","/");
}

$(function() {
    $('#area1').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

