"use strict"
let costFirst = prompt ("Какой вы хотите сайт? Введите число. 1 - Интернет-магазин (1000р) 2 - Сайт-визитка (2000р) 3 - Сайт компании (3000р) 4 - Промо-сайт (4000р)");
if (costFirst == 1) 
{costFirst = 1000};
if (costFirst == 2) 
{costFirst = 2000};
if (costFirst == 3) 
{costFirst = 3000};
if (costFirst == 4) 
{costFirst = 4000};
let costSecond = prompt ("Какой вы хотите дизайн? Введите число. 1 - Минимализм (1000р) 2 - Классический стиль (2000р) 3 - Корпоративный стиль (3000р) 4 - Ретро (4000р)");
if (costSecond == 1) 
{costSecond = 1000};
if (costSecond == 2) 
{costSecond = 2000};
if (costSecond == 3) 
{costSecond = 3000};
if (costSecond == 4) 
{costSecond = 4000};
let costThird = prompt ("Какая вам необходима адаптация? Введите число. 1 - только под мобильные устройства (1000р) 2 - только под пк (2000р) 3 - под все устройства (3000р)");
if (costThird == 1) 
{costThird = 1000};
if (costThird == 2) 
{costThird = 2000};
if (costThird == 3) 
{costThird = 3000};
let summ = costFirst + costSecond + costThird;
  alert("Итоговая стоимость: " + summ + " рублей");