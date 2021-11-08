"use strict"

$(document).ready(function(){
    
        window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
        $(window).scroll(() => {
            let scrollDistance = $(window).scrollTop();
            $(".section").each((i,el) => {
                if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
                    $ ("nav a").each((i,el) => {
                        if ($(el).hasClass("active")){
                            $(el).removeClass("active"); }});
                    $ ('nav li:eq ('+ i +')').find('a').addClass('active');
                }
            });
        });
    });
let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.element-animation');
elements.each((i,el) => {
    observer.observe(el);
});
function onEntry(entry){
    entry.forEach( change => {
        if (change.isIntersecting){
            change.target.classList.add ('show-animation');
            change.target.src = change.target.dataset.src;
        }
    })
}
 
        
        function calculate() {
   let site  = document.getElementById('site').value;
    let day = 0;
switch (site) {
   case "1000":
        day = 1;
      break;
   case "2000":
        day = 2;
      break;   
   case "3000":
         day = 3;
      break; 
      default:
      site = 0;
      day = 0;
}  
let design  = document.getElementById('design').value;
        let day1 = 0;
switch (design) {
   case "1000":
        day1 = 1;
      break;
   case "2000":
         day1 = 2;
      break;  
        default:
      design = 0;
      day1 = 0;
}
      let adaptive  = document.getElementById('adaptive').value;
            let day2  = 0;
switch (adaptive) {
   case "1000":
        day2 = 1;
      break;
   case "2000":
        day2 = 2;
      break;   
    case "3000":
        day2 = 3;
      break;
        default:
      adaptive = 0;
        day2 = 0;
}
    let summ = +adaptive + +design + +site;
 document.getElementById('itogo').innerHTML = summ +" р.";
            let days = +day + +day1 + +day2;
 document.getElementById('itogo1').innerHTML = days +" д.";
    }

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});
$(document).ready(function(){
 showStartModal();
});
function showStartModal(){
    setTimeout(function(){
     $('#staticBackdrop').modal('show');    
    }, 3000)}; 
$(document).ready(function() {
$("#inputPhone").mask("+375(99) 999-9999");
    $('form').submit(function(event){
    if ($("#inputPhone").val() == ""){
        event.preventDefault();
        alert("Введите телефон");
    }
});
     });
$(document).ready(function() {
$('form').submit(function(event){
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: $(this).serialize()
    }).done(function (){
        $(this).find("input").val("");
        alert("Успешно отправлено!");
        $("form").trigger("reset");
    });
    return false;
});
    });
var text = $('.text1').text(),
    textArr = text.split('');

$('.text1').html('');

$.each(textArr, function(i, v){
  if(v == ' '){$('.text1').append('<span class="space"></span>');}
  $('.text1').append('<span>'+v+'</span>');
})