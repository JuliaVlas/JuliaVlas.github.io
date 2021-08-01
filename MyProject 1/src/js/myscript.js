"use strict"
        window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
        function calculate() {
    site  = document.getElementById('site').value;
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
design  = document.getElementById('design').value;
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
      adaptive  = document.getElementById('adaptive').value;
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