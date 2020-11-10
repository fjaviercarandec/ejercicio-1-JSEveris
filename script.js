// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
//  * name: usuario2, country: france, money: 0, premiumAccount: false
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter".
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!

window.addEventListener("load", onLoad);

let array1 = [];

function User(name, country, money, premiumAccount) {
  this.name = name;
  this.country = country;
  this.money = money;
  this.premiumAccount = premiumAccount;
}

function createUsers() {
  var objeto1 = new User("usuario1", "spain", 199, true);
  var objeto2 = new User("usuario2", "france", 0, false);
  var objeto3 = new User("usuario3", "spain", 537, false);
  var objeto4 = new User("usuario4", "italy", 1004, true);
  var objeto5 = new User("usuario5", "spain", 250, false);
  var objeto6 = new User("usuario6", "ireland", 799, true);
  var objeto7 = new User("usuario7", "spain", 3345, false);
  array1.push(objeto1);
  array1.push(objeto2);
  array1.push(objeto3);
  array1.push(objeto4);
  array1.push(objeto5);
  array1.push(objeto6);
  array1.push(objeto7);
}

function filterUsers(users) {
  var arrayFilter = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].country == "spain" && users[i].money > 200) {
      arrayFilter.push(users[i]);
    }
  }
  return arrayFilter;
}

function onLoad() {
  console.log("hi");

  createUsers();
  console.log(array1);
  console.log(filterUsers(array1));
}
