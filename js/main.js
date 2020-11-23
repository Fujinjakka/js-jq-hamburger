
var menu = $(".fa-bars");

menu.click(
  function() {
    $(".hamburger-menu").show(2000);
  }
);

var closeMenu = $(".fa-times");

closeMenu.click(
  function() {
    $(".hamburger-menu").hide(2000);
  }
);
