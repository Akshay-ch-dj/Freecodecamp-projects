// Javascript for dropdown - sidebar 
//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown
//  content - This allows the user to have multiple dropdowns without any conflict */

var dropdown = document.getElementsByClassName("dropdown-active");
var i;

for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
}

// When the page moving down..(ie user scrolls up to the top of the page), slide down the navbar
// When the page moving up..(scrolling down/reading), slide up the navbar (275px out of the top view)

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
var currentScrollPos = window.pageYOffset;
    if (window.matchMedia("(max-width: 815px)").matches) {
        /*only works when the viewport is at most 815 pixels wide */
        if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        } else {
        document.getElementById("navbar").style.top = "-275px";
        }
        prevScrollpos = currentScrollPos;
    }
}
