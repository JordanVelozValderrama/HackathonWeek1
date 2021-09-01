//Ejercicio #1
let admin;
let name;
name = 'John';
admin = name;
console.log("==========Resultado del Ejercicio #1==========");
alert(admin);
console.log(admin);
//Ejercicio #2
let planeta = 'Tierra';
let usuario = 'Jhon';
console.log("==========Resultado del Ejercicio #2==========");
console.log(planeta);
console.log(usuario);
//Ejercicio #3
function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

const birthday = '04.18.1982';
const age = calcularEdad(birthday);
console.log("==========Resultado del Ejercicio #3==========");
console.log(birthday.toUpperCase());
try {
    console.log(age.toUpperCase());
} catch (error) {
    console.log("age.toUpperCase() : " + error);
}
//Ejercicio #4
let name2 = "Ilya";
alert(`hello ${1}`); // ? 1
alert(`hello ${"name2"}`); // ? name2
alert(`hello ${name2}`); // ? Ilya
console.log("==========Resultado del Ejercicio #4==========");
console.log(`hello ${1}`); // ? 1
console.log(`hello ${"name2"}`); // ? name2
console.log(`hello ${name2}`); // ? Ilya
//Ejercicio #5
const user = {};
console.log("==========Resultado del Ejercicio #5==========");
user.name = "John";
console.log(user);
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);
//Ejercicio #6
function isEmpty(obj) {
    if (Object.entries(obj).length === 0) {
        return false;
    } else {
        return true;
    }
}

let schedule = {};
console.log("==========Resultado del Ejercicio #6==========");
alert(isEmpty(schedule)); // true
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false
console.log(isEmpty(schedule));
//Ejercicio #7
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum1 = 0;
for (let key in salaries) {
    sum1 += salaries[key];
}
console.log("==========Resultado del Ejercicio #7==========");
console.log(sum1);
//Ejercicio #8
function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] = menu[key] * 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);
console.log("==========Resultado del Ejercicio #8==========");
console.log(menu);