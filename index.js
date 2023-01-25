const myFn = (point, addata = Data()) => ({
    ...point,
    addata,
})

const newMyFn = {
    name: 'Alex',
    syrn: 'sub'
}

myFn(newMyFn)

