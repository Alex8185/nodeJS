const personOne = {
    name: 'Alex',
    age: 20
}

function increasePersonAge (person) {
    person.age += 1
    return person
}

increasePersonAge(personOne)
console.log(personOne.age)