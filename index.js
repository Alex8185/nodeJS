const button = {
    width: 200,
    text: 'Alex',
    name: 'rewrt'
}

const newButton = {
    ...button,
    color: 'red'
}
const superButton = {
    ...button,
    ...newButton
}
console.log(superButton)
