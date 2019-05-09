var mainContent = document.getElementById('ehstools_section');



// Get the modal
var modal0 = document.getElementById('myModal0');
var modal1 = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var imgModal = document.getElementById('imgModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var readMe0 = document.getElementById('buttonReadMe0');
var readMe1 = document.getElementById('buttonReadMe');
var readMe2 = document.getElementById('buttonReadMe2');
var readMe3 = document.getElementById('buttonReadMe3');
var showImage  = document.getElementById('showImage');



var modalImg = document.getElementById("img01");
var captionText = document.getElementById("modalCaption");
var modalHeader = document.getElementById("modalHeader");
var buttonClose0 = document.getElementById("buttonClose0");
var buttonClose1 = document.getElementById("buttonClose");
var buttonClose2 = document.getElementById("buttonClose2");
var buttonClose3 = document.getElementById("buttonClose3");



readMe0.onclick = function(){
	
	modal0.style.display = "block";	
}

readMe1.onclick = function(){
 
 modal1.style.display = "block";
}
readMe2.onclick = function(){
	modal2.style.display = "block";
}
readMe3.onclick = function(){
	modal3.style.display = "block";	
}

buttonClose0.onclick = function(){
	modal0.style.display = "none";
}
buttonClose1.onclick = function(){
	modal1.style.display = "none";

}
buttonClose2.onclick = function(){
	modal2.style.display = "none";
}
buttonClose3.onclick = function(){
	modal3.style.display = "none";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal2) {
    modal.style.display = "none";
    modal2.style.display = "none";

  }
} 






showImage.onclick = function(){
	modalImg.style.display = "block";
}
