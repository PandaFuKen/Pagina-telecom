function openNav() {
    document.getElementById("navpanda").style.width = "400px";
  }
  
  function closeNav() {
    document.getElementById("navpanda").style.width = "0";
  }

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  var prevScrollpos = window.pageXOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navi").style.top = "0";
    } else {
      document.getElementById("navi").style.top = "-100px";
    }if (prevScrollpos > currentScrollPos) {
      document.getElementById("icono").style.top = "10px";
    } else {
      document.getElementById("icono").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }

