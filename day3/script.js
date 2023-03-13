let scrollButton = document.querySelector(".scroll-button a");
console.log(scrollButton);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollButton.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollButton.style.display = "none";
  }

}
function openGmail() {
  window.location.href = "mailto:saimanikantakarnati12@gmail.com";
}