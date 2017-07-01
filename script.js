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