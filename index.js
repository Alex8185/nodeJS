const person = {
    name: 'Alex',
    age: 40
}

const person2 = JSON.parse(JSON.stringify(person))

person2.age = 42

console.log(person.age)
console.log(person2.age)