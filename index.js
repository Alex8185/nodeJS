const userProfile = {
    name: 'Alex',
    surname: 20,
    age: 34
}

const newUser = ({name, surname}) => {
    if(!surname) {
        return `User ${name} has no comment`
    }
    return `User ${name} has ${surname} comments`
}
console.log(newUser(userProfile))