do {
  var login = prompt("Введите Ваш логин: ");
  var correct = confirm("Ваш логин - " + login + "\nПодтверди данные");
}
while(!correct);
alert("Ваш логин - " + login);      