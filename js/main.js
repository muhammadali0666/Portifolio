window.addEventListener("DOMContentLoaded", function (){
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 150)
  })

  const hamburger = document.querySelector(".hamburger")
  const menyu = document.querySelector(".menyu")
  const menyuItems = document.querySelectorAll(".menyu a")
  const about = document.querySelector(".about-btn")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    menyu.classList.toggle("active")
  })

  menyuItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
      hamburger.classList.add("active")
      menyu.classList.add("active")
    })
    about.addEventListener("click", () => {
      
    })
  })



  ////////////////////// auto write

  function autoType(elementClass, typingSpeed){
    var thhis = $(elementClass);
    thhis.css({
      "position": "relative",
      "display": "inline-block"
    });
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(".text-js");
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function(){
      thhis.css("opacity",1);
      thhis.prev().removeAttr("style");
      thhis.text("");
      for(var i = 0; i < amntOfChars; i++){
        (function(i,char){
          setTimeout(function() {        
            newString += char;
            thhis.text(newString);
          },i*typingSpeed);
        })(i+1,text[i]);
      }
    },1500);
  }
  
  $(document).ready(function(){
  //   // Now to start autoTyping just call the autoType function with the 
  //   // class of outer div
  //   // The second paramter is the speed between each letter is typed.   
    autoType(".type-js", 100);
  
    
  });
})