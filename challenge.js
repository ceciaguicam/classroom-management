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
},
{
  age: 36,
  examScores: [],
  gender: "female",
  name: "nuria"
},
{
  age: 24,
  examScores: [],
  gender: "male",
  name: "alberto"
},
{
  age: 31,
  examScores: [],
  gender: "female",
  name: "blanca"
},
{
  age: 20,
  examScores: [],
  gender: "male",
  name: "sergio"
},
{
  age: 25,
  examScores: [],
  gender: "female",
  name: "sandra"
},
{
  age: 22,
  examScores: [],
  gender: "female",
  name: "carla"
}]



const maleNames = ['pepe', 'juan', 'victor', 'leo', 'francisco', 'carlos'];
const femaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const genders = ['male', 'female'];

let userNumber = 18

/*

-Cuando se ejecute el programa, imprimir en consola las opciones del usuario. Seguir preguntando hasta que se pulse 0.
DONE-Cuando se pulse 1 se mostrará en forma tabla a los alumnos
DONE-Cuando se pulse 2 se mostrará la cantidad de alumnos que hay
DONE-Cuando se pulse 3 se mostrarán los nombres de los alumnos
DONE-Cuando se pulse 4 se elimina el último alumno de la clase
DONE-Cuando se pulse 5 se elimina a un alumno aleatorio de la clase
DONE-Cuando se pulse 6 se muestran los datos de las alumnas
DONE-Cuando se pulsa 7 se muestra la cantidad de alumnos y la cantidad de alumnas
DONE-Cuando se pulsa 8 se muestra True si todos los alumnos son chicas, y False si hay 1 o más chicos
DONE-Cuando se pulsa 9 se muestran los nombres de los alumnos de entre 20 y 25 años
DONE-Cuando se pulsa 10 se añade un nuevo alumno con datos aleatorios: nombre, edad entre 20 y 50, género y calificaciones vacío
DONE-Cuando se pulsa 11 se muestra el nombre de la persona más joven de clase
DONE-Cuando se pulsa 12 se muestra la edad media de los alumnos (incluidas las chicas)
DONE-Cuando se pulsa 13 se muestra la edad media de las alumnas
DONE-Cuando se pulsa 14 se añade una nota aleatoria entre 0 y 10 a cada uno de los alumnos
DONE-Cuando se pulsa 15 se ordenan por orden alfabético la lista de alumnos
DONE-Cuando se pulsa 16 se muestra el alumno con las mejores notas (mayor sumatorio de notas
DONE-Cuando se pulsa 17 se muestra al alumno con mejor nota media y su media
-Cuando se pulsa 18 se añade 1 punto a cada nota de cada alumno. Si el alumno no tiene ninguna nota se le pone un 10. Si tiene algún 10
no se sube la nota
*/

function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

function isWoman(person) {
  return person.gender === "female"
}

function areAllWomen(students){
  let allWomen = false
  anyMan = students.some(student => student.gender === "male")
  if (anyMan === false){
    allWomen = true
  }
  return allWomen
}

function randomGender (genders) {
  let randomGenderNumber = calculateRandomNumber(0, 1)
  let newGender = genders[randomGenderNumber]
  return newGender
}

function randomName (newGender, femaleNames, maleNames) {
  let newName
  let randomNameNumber

  if (newGender === "female"){
      randomNameNumber = calculateRandomNumber(0, femaleNames.length - 1)
      newName = femaleNames[randomNameNumber]
  }

  else if (newGender === "male"){
      randomNameNumber = calculateRandomNumber(0, maleNames.length - 1)
      newName = maleNames[randomNameNumber]
  
  }

  return newName
}

function newStudent(maleNames, femaleNames, genders) {
  let newAge = calculateRandomNumber(20, 50)
  let newGender = randomGender(genders)
  let newName = randomName(newGender, femaleNames, maleNames)
  let newObject = {age: newAge, examScores: [], gender: newGender, name: newName}
  return newObject
}

function getBestScoredStudent(students) {
  let bestScore = 0
  let bestScoredStudent 
  
  students.forEach(student => {
      totalScore = student.examScores.reduce(
        (a, b) => a + b
      )
      
      if (totalScore > bestScore) {
        bestScore = totalScore
        bestScoredStudent = student
      }
  })
  return bestScoredStudent
}

function sumAges(students) {
  let sumOfAges = 0
  students.forEach(item => {
      sumOfAges += item.age
  })
  return sumOfAges
}

function calculateAverageAge(students) {
  let sumOfAges = sumAges(students)
  let averageAge = sumOfAges / students.length
  return averageAge
}

function findSmallestStudent(students) {
  let smallestAge = 51
  let studentName
  
  students.forEach(student => {
      if (student.age < smallestAge) {
        studentName = student.name
        smallestAge = student.age
      }
  })

  return studentName
}

function orderByAlphabet(students) {
  students.sort((studentA, studentB) => { 
    if (studentA.name > studentB.name){
      return 1
    }

    if (studentA.name < studentB.name){
      return -1
    }

    return 0
  })
  console.table(students)
}

function getBestAvgStudent(students) {
  let bestAvg = 0
  let bestAvgStudent
  
  students.forEach(student => {
      totalScore = student.examScores.reduce(
        (a, b) => a + b
      )

      avgScore = totalScore / student.examScores.length
      
      if (avgScore > bestAvg) {
        bestAvg = avgScore
        bestAvgStudent = student.name
      }

      studentAndAvg = {name: bestAvgStudent, averageScore: bestAvg}
  })
  return studentAndAvg
}

function incrementScores(students) {
  students.forEach(student => {
    if (student.examScores.length === 0){
      student.examScores.push(10)
      return
    }

    student.examScores = student.examScores.map(score => {
      if (score !== 10) {
        score += 1
      }
      return score
    })
  })
  return students
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
    let randomNumber = calculateRandomNumber(0, students.length-1)
    students.splice(randomNumber, 1)
    console.table(students)
    break
  
  case 6: /*Se muestran los datos de las alumnas*/
    let onlyWomen = students.filter(student => student.gender === "female" )
    console.table(onlyWomen)
    break
  
  case 7: /*Se muestra la cantidad de alumnos y de alumnas*/
    let women = students.filter(student => student.gender === "female" )
    amountOfWomen = women.length
    let men = students.filter(student => student.gender === "male" )
    amountOfMen = men.length
    console.log("Alumnas: " + amountOfWomen)
    console.log("Alumnos: " + amountOfMen)
    break
  
  case 8: /*Muestra False si hay algún chico y True si son todas mujeres*/
    console.log(areAllWomen(students))
    break
  
  case 9: /*Se muestran los nombres de los alumnos de entre 20 y 25 años*/
    let youngerStudents = students.filter(student => student.age >= 20 & student.age <= 25 )
    youngerStudents.forEach(item => console.log(item.name))
    break
  
  case 10: /*Se crea un nuevo alumno con datos aleatorios y sin notas*/
    students.push(newStudent(maleNames, femaleNames, genders))
    console.table(students)
    break
  
  case 11: /*Se muestra el nombre del alumno más pequeño*/
    console.log(findSmallestStudent(students))
    break

  case 12: /*Se muestra la edad media de todos los alumnos*/
    console.log(calculateAverageAge(students))
    break

  case 13: /*Se muestra la media de edad de las alumnas mujeres*/
    let listOfWomen = students.filter(student => student.gender === "female" )
    console.log(calculateAverageAge(listOfWomen))
    break

  case 14: /*Se crea una nota aleatoria de 1 a 10 en cada alumno*/
    let randomNote
    students.forEach(item => {
      randomNote = calculateRandomNumber(1, 10)
      item.examScores.push(randomNote)
    })
    console.table(students)
    break

  case 15: /*Se ordenan los alumnos por orden de lista*/
    orderByAlphabet(students)
    break
  
  case 16: /*Muestra el alumno con mayor puntuación*/
    console.table(getBestScoredStudent(students))
    break

  case 17: //Muestra nombre y media del alumno con mejor media
    console.table(getBestAvgStudent(students))
    break

  case 18: //Sube 1 punto a cada nota de cada alumno
    console.table(incrementScores(students))
    break

  default:
    console.log("es de prueba")
    break
}



