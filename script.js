var acc = document.getElementsByClassName('accordion'); // Соаздаем переменую, которая поулчит элемент класса accordion
var i; 

for (i = 0; i < acc.length; i++) { //i содержит 0 приравниваеяет нулю. i меньше чем длинна массива accordion и после инкреминтироваться
    acc[i].onclick = function () { // значение i срабатывает onclick и функция в котором...
        this.classList.toggle("active"); //исп. элемент будет совершать событие toggle класса active

        this.nextElementSibling.classList.toggle("show"); //исп. элемент будет использовать свойство,  которое возвращает элемент следующий сразу за указанным в списке дочерних элементов родительского элемента. После совершает событие toggle класса show
    }
}