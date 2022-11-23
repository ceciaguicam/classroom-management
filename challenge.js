/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/

const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}]



const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

let userNumber = 5

/*

-Cuando se ejecute el programa, imprimir en consola las opciones del usuario. Seguir preguntando hasta que se pulse 0.
DONE-Cuando se pulse 1 se mostrará en forma tabla a los alumnos
DONE-Cuando se pulse 2 se mostrará la cantidad de alumnos que hay
DONE-Cuando se pulse 3 se mostrarán los nombres de los alumnos
DONE-Cuando se pulse 4 se elimina el último alumno de la clase
DONE-Cuando se pulse 5 se elimina a un alumno aleatorio de la clase
  DONE.Una variable se iguala a un nº al azar entre el 1 y el length de la lista
  DONE.Se elimina el item que tiene como índice el número aleatorio escogido
-Cuando se pulse 6 se muestran los datos de las alumnas
-Cuando se pulsa 7 se muestra la cantidad de alumnos y la cantidad de alumnas
-Cuando se pulsa 8 se muestra True si todos los alumnos son chicas, y False si hay 1 o más chicos
-Cuando se pulsa 9 se muestran los nombres de los alumnos de entre 20 y 25 años
-Cuando se pulsa 10 se añade un nuevo datos con datos aleatorios: nombre, edad entre 20 y 50, género y calificaciones vacío
-Cuando se pulsa 11 se muestra el nombre de la persona más joven de clase
-Cuando se pulsa 12 se muestra la edad media de los alumnos (incluidas las chicas)
-Cuando se pulsa 13 se muestra la edad media de las alumnas
-Cuando se pulsa 14 se añade una nota aleatoria entre 0 y 10 a cada uno de los alumnos
-Cuando se pulsa 15 se ordenan por orden alfabético la lista de alumnos
-Cuando se pulsa 16 se muestra el alumno con las mejores notas (mayor sumatorio de notas)
-Cuando se pulsa 17 se muestra al alumno con mejor nota media y su media
-Cuando se pulsa 18 se añade 1 punto a cada nota de cada alumno. Si el alumno no tiene ninguna nota se le pone un 10. Si tiene algún 10
no se sube la nota
*/

function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}


switch(userNumber) {
  case 1: /*Se imprimen los alumnos en una tabla*/
    console.table(students)
    break
  
  case 2: /*Se imprime la cantidad de alumnos*/
    console.log(students.length)
    break
  
  case 3: /*Se imprimen los nombres de los alumnos*/
    students.forEach(item => console.log(item.name))
    break
  
  case 4: /*Se elimina el último alumno del array*/
    students.pop()
    console.table(students)
    break
  
  case 5: /*Se elimina un alumno aleatorio*/
    randomNumber = calculateRandomNumber(0, students.length-1)
    students.splice(randomNumber, 1)
    console.table(students)
    break

  default:
    console.log("es de prueba")
    break
}



