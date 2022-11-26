import readline from 'readline'

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


function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

function isWoman(person) {
  return person.gender === "female"
}

function areAllWomen(students){
  let allWomen = false
  let anyMan = students.some(student => student.gender === "male")
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
  let bestScoredStudent = "No hay notas"
  
  students.forEach(student => {
    if (student.examScores.length === 0) {
      return
    }
    let totalScore = student.examScores.reduce(
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
  let studentAndAvg = "No hay ninguna nota"

  students.forEach(student => {
      if (student.examScores.length === 0) {
        return
      }

      let totalScore = student.examScores.reduce(
        (a, b) => a + b
      )

      let avgScore = totalScore / student.examScores.length
      
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

const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout, 
});

const info = `
Pulsa el número de la opción deseada:

1- Mostrar los datos de los alumnos 
2- Mostrar la cantidad de alumnos que hay en clase
3- Mostrar los nombres de los alumnos
4- Eliminar el último alumno de la clase
5- Eliminar un alumno aleatorio de la clase
6- Mostrar los datos de las alumnas mujeres
7- Mostrar el número de alumnos hombres y el número de alumnas mujeres
8- Mostrar si todos los alumnos son mujeres
9- Mostrar los nombres de los alumnos de entre 20 y 25 años
10- Añadir un alumno nuevo
11- Mostrar el nombre de la persona más joven de la clase
12- Mostrar la edad media de todos los alumnos de la clase (hombre y mujeres)
13- Mostrar la edad media de las alumnas mujeres de la clase
14- Añadir nueva nota a los alumnos
15- Ordenar alumnos alfabéticamente 
16- Mostrar el alumno con mejor puntuación
17- Mostrar el nombre y la nota media del alumno con mejor media 
18- Añadir un punto extra a cada nota de cada alumno

Pulsa cualquier otra tecla para salir
`


function getUserNumber() {
  const promise = new Promise((resolve) => {
    rl.question(info, (num) => {
      rl.pause(); 
      resolve(parseInt(num))
    })
  })
  return promise;
}


let exit = false

while (!exit){

  let userNumber = await getUserNumber()
  
  switch(userNumber) {

    case 1: /*Se imprimen los alumnos en una tabla*/
      console.table(students)
      break
    
    case 2: /*Se imprime la cantidad de alumnos*/ 
      console.log("Hay", students.length, "alumnos")
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
      let amountOfWomen = women.length
      let men = students.filter(student => student.gender === "male" )
      let amountOfMen = men.length
      console.log("Alumnas: " + amountOfWomen)
      console.log("Alumnos: " + amountOfMen)
      break
    
    case 8: /*Muestra False si hay algún chico y True si son todas mujeres*/
      if(areAllWomen(students)){
        console.log("Son todas mujeres")
      } 
      else if(!areAllWomen(students)){
        console.log("No son todos mujeres")
      }
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
      console.log("El alumno más pequeño es", findSmallestStudent(students))
      break
  
    case 12: /*Se muestra la edad media de todos los alumnos*/
      console.log("La edad media de edad de los alumnos es", calculateAverageAge(students))
      break
  
    case 13: /*Se muestra la media de edad de las alumnas mujeres*/
      let listOfWomen = students.filter(student => student.gender === "female" )
      console.log("La media de edad de las alumnas mujeres es", calculateAverageAge(listOfWomen))
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
      exit = true
      console.log("Has cerrado el gestor de alumnos. ¡Adiós!")
      rl.close()
      break
  }
}






