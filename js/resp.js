burger = document.querySelector(".burger");
main_div = document.querySelector(".main_div");
div_one = document.querySelector(".div_one");
div_two = document.querySelector(".div_two");

burger.addEventListener("click", () => {
  div_two.classList.toggle("v_nav_respo");
  div_one.classList.toggle("v_nav_respo");
  main_div.classList.toggle("h_nav_respo");
});
