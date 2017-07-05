/*
do {
  var login = prompt("Введите Ваш логин: ");
  var correct = confirm("Ваш логин - " + login + "\nПодтверди данные");
}
while(!correct);
alert("Ваш логин - " + login); 


var a, b;
a = 100;
b = 555;
alert(a+=b);

eval("alert(124454 + 44431213)");
eval("alert('Artem ' + ' Novorai')")
*/

var w = [1,'hello',67,'werber',5,345];
 for(var index in w) {
document.write('Ячейка массива - ' + index + ' - значение данной ячейки - ' + w[index] + '<br>' );
   
   var arr = [1,2,3,4,['Artem','Novorai']];
   document.write(arr[4][1] + '<br>');
 }