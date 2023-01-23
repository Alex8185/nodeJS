const personOne = {
    name: 'Alex',
    age: 20
}

function increasePersonAge (person) {
    const updatePerson = Object.assign({}, person)
    updatePerson.age += 1
    return updatePerson
}

const updatePersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatePersonOne.age)