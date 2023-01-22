const mySity = {
    sity: 'New York',
    info: {
        popular: true,
        country: 'USA'
    }
}

console.log(mySity.info.popular)
delete mySity.info['popular']
console.log(mySity)