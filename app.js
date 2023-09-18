var age = +prompt('Введите свой возраст')
if (age  < '18') {
    alert('Вы еще молоды, Вам нужно учиться');
}else if( age  < 50){
    alert('Вам нужно работать')
}else if (age  < 59){
    alert('Вам скоро на пенсию')
}else if (age  < 100){
    alert('Вы пенсионер')
}else{
    alert('Что-то пошло не так')
}

var time = +prompt('Введите время');

switch (time) {
    case 0:
    alert('12 часов ночи')
    break
    case 1:
    alert('1 час ночи')
    break
    case 2:
    alert('2 часа ночи')
    break
    case 3:
    alert('3 часа ночи')
    break
    case 4:
    alert('4 часа ночи')
    break
    case 5:
    alert('5 часов утра')
    break
    case 6:
    alert('6 часов утра')
    break
    case 7:
    alert('7 часов утра')
    break
    case 8:
    alert('8 часов утра')
    break
    case 9:
    alert('9 часов утра')
    break
    case 10:
    alert('10 часов утра')
    break
    case 11:
    alert('11 часов утра')
    break
    case 12:
    alert('12 часов дня')
    break
    case 13:
    alert('13 часов дня')
    break
    case 14:
    alert('2 часа дня')
    break
    case 15:
    alert('3 часа дня')
    break
    case 16:
    alert('4 часа дня')
    break
    case 17:
    alert('5 часа дня')
    break
    case 18:
    alert('6 часов вечера')
    break
    case 19:
    alert('7 часов вечера')
    break
    case 20:
    alert('8 часов вечера')
    break
    case 21:
    alert('9 часов вечера')
    break
    case 22:
    alert('10 часов вечера')
    break
    case 23:
    alert('11 часов вечера')
    break
}


var a = +prompt('Введите первое число')
var b = +prompt('Введите второе число')
var c = +prompt('Введите третье число')

if ((a > b) && (a < c) || (a > c) && (a < b)){
    alert('Среднее число '+ a)
}else if ((b > a) && ( b < c) || (b > c) && (b < a)){
    alert('Среднее число '+ b)
}else if ((c > a) && ( c < b) || (c > b) && (c < a)){
    alert('Среднее число '+ c)
}