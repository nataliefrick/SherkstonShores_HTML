var key = window.options.api_key;
var title = "";
window.addEventListener('load',function(){
			var container=document.createElement("div");
				container.setAttribute("id", "div_"+key);
                container.style.backgroundColor="#eee";
				
			var span =document.createElement("span");
				span.setAttribute("id", "span_"+key);
				span.style.fontFamily="'Roboto', sans-serif"; 
				span.style.fontWeight="bold"; 
				span.style.textAlign="center"; 
				span.style.display ="flex"; 
				
			var loader_message = document.createTextNode("Please Wait....Calendar is loading"); 
				span.appendChild(loader_message); 
				container.appendChild(span);
				
			var ifrm = document.createElement("iframe");
			ifrm.setAttribute("src","https://www.vrcalendarsync.com/shorcode.php?api_key="+key+"&title="+title);
			
            ifrm.style.width = "100%";
			ifrm.frameBorder=0;
			ifrm.style.minHeight = "1000px";
			if(window.options.width){
				ifrm.style.width = window.options.width;
			}
			if(window.options.min_height){
				ifrm.style.minHeight  = window.options.min_height;
			}	
			ifrm.style.height = "100%";
			if(window.options.height){
				ifrm.style.height = window.options.height;
			}	
			if(window.options.border){
				ifrm.style.border = window.options.border;
			}			
			ifrm.setAttribute("id", key);
			ifrm.setAttribute("onload", 'frameload("span_'+key+'")');
			container.appendChild(ifrm);
			var s = document.getElementById("vr_"+key);
			s.parentNode.insertBefore(container, s);
	});
	function frameload(key){
		document.getElementById(key).innerHTML="";
	}



// --------------To top button--------------

//Get the button:
let mybutton = document.getElementById("myBtn");

function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Scroll to top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};



