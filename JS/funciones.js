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

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsById("navi").style.top = "0";
  } else {
    document.getElementsById("navi").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}