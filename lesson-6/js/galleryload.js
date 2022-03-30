document.addEventListener("DOMContentLoaded", function() {
    var loadImages = document.querySelectorAll("img.gallery-pic");    
    var loadThrottleTimeout;
    
    function load () {
      if(loadThrottleTimeout) {
        clearTimeout(loadThrottleTimeout);
      }    
      
      loadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          loadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('gallery-pic');
              }
          });
          if(loadImages.length == 0) { 
            document.removeEventListener("scroll", load);
            window.removeEventListener("resize", load);
            window.removeEventListener("orientationChange", load);
          }
      }, 20);
    }
    
    document.addEventListener("scroll", load);
    window.addEventListener("resize", load);
    window.addEventListener("orientationChange", load);
  });