/* function hello () {
  for (let i=0; i<5; i++) { // var lets you access variable in the whole function
    console.log(i)
  }
  // console.log(i)
}

hello()

const h = 1
h = 5 */

/* const person = {
  name : "Chinmay Sonawane",
  walk() {
    console.log(this)
  },
  talk() {}
}

person.walk()

const walk = person.walk.bind(person)
console.log(walk)
walk() */

/* person.walk()

const targetMember = "name"
person[targetMember.value] = "@chinmay29hub" */


/* const square = (number) => {
  return number * number
}

console.log(square(12)) */

/* const jobs = [
  { id : 1, isActive : true },
  { id : 2, isActive : true },
  { id : 3, isActive : false }
]

const activeJobs = jobs.filter( (job) => {
  return job.isActive
} )

if (activeJobs) {
  console.log(activeJobs)
} */

/* const person = {
  talk() {
    setTimeout(() => {
      console.log("this", this)
    }, 3000)
  }
}

person.talk() */

/* const colors = ["red", "green", "blue"]
const items = colors.map((color) => {
  // return "<li>"+ color +"</li>"
  return `<li>${color}</li>`
})

console.log(items) */

/* const address = {
  street : "",
  city : "",
  country : ""
} */

/* const street = address.street
const city = address.city
const country = address.country */

// const { street : st, city : ct, country : cy } = address

/* const first = [1, 2, 3]
const second = [4, 5, 6]
 */
// console.log(first.concat(second))
// const combined = [...first, "@chinmay29hub", ...second, "last element"]
/* const clone = [...first]
console.log(first, clone) */

// const first = {
//   name : "Chinmay"
// }

// const second = {
//   job : "programmer"
// }

// const combined = {
//   ...first,
//   ...second
// }

// const clone = { ...first }

// console.log(combined)

/* const person = {
  name : "Chinmay Sonawane",
  // talk() {}
} */

/* class Person {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log("walk")
  }

} */

/* const person_1 = new Person("Chinmay")
console.log(person_1.name) */

/* class Teacher extends Person{
  constructor (name, degree) {
    super(name)
    this.degree = degree
  }
  teach() {
    console.log("teach")
  }
} */
import Teacher, { promote } from "./teacher" //default
// import { Teacher } from "./teacher" //named export
const teacher_1 = new Teacher("Chinmay", "B.E.")
teacher_1.walk()
teacher_1.teach()
promote()