function copymenu(){

    var dptcategory = document.queryselectar('.dptcat');
    var dptpacle = document.queryselectar('.departments');
    dptpacle.innerHTML = dptcategory.innerHTML;


    var mainNav = document.queryselectar('.header-nav nav');
    var navPlace = document.queryselectar('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;



    var topNav = document.queryselectar('.header-top .wrapper');
    var topPlace = document.queryselectar('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;

}
copymenu();


// show mobile menu
const menuButton = document.querySelector('.trigger'),
closeButton = document.querySelector('.t-close'),
addClass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
    addClass.classList.toggle('showmenu')
})
closeButton = document.querySelector('click', function(){
    addClass.classList.remove('showmenu')
})





// show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener ('click', toggle) );

function toggle(e){
    e.preventdefault();
    submenu.forEach((item) => item != this ? item.closest ('.has-child').classList.remove('expand'): null)
    if (this.closest ('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}

const searchButton = document.querySelector('.t-close'),
tClose = document.querySelector('.search-close'),
showClass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
  showClass.classList.toggle('showsearch')
});
tClose.addEventListener('click', function() {
  showClass.classList.remove('showsearch')
})
searchButton();
