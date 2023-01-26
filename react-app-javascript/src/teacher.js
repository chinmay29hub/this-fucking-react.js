import { Person } from "./person"

export function promote() {
    console.log("Named exports")
}

export default class Teacher extends Person{
constructor (name, degree) {
    super(name)
    this.degree = degree
}
teach() {
    console.log("teach")
}
}