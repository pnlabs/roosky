const c = 'бвгджзклмнпрстфхцчшщ'
const v = 'аеиоуэюя'
const lnTails = ['ов', 'ин', 'ев']
const posTails = ['ер', 'ор', 'ист', 'ик']

const randomChar = (s) => {
    const position = Math.trunc(Math.random() * s.length)
    return s.slice(position, position + 1)
}

const randomTail = (tails) => {
    const position = Math.trunc(Math.random() * tails.length)
    return tails[position]
}

const firstName = () => {
    const sylls = Math.trunc(Math.random() * 3 + 1)
    console.log('firstName sylls', sylls)
    let name = ''
    for (let s = 0; s < sylls; s++) {
        console.log(`firstName s`,s)
        name =
            name +
            (s === 0 ? randomChar(c).toUpperCase() : randomChar(c)) +
            randomChar(v)
        console.log(`firstName name`,name)
    }
    /*
        if (Math.random() > 0.5 && gender > 0) {
            name = name + randomChar(c)
        }
    */
    name = name + randomChar(c)
    return name
}

const lastName = () => {
    const sylls = Math.trunc(Math.random() * 4 + 1)
    console.log(`lastName sylls`, sylls)
    let name = ''
    for (let s = 0; s < sylls; s++) {
        console.log(`lastName s`,s)
        name =
            name +
            (s === 0 ? randomChar(c).toUpperCase() : randomChar(c)) +
            randomChar(v)
        console.log(`lastName name`,name)
    }
    name = name + randomChar(c)
    name = name + randomTail(lnTails)
    return name
}

const middleName = () => {
    return lastName() + 'ич'
}

const phone = () => {
    return (
        '+79' + String(Math.trunc(Math.random() * 1000000000)).padStart(9, '0')
    )
}

const position = () => {
    const sylls = Math.trunc(Math.random() * 4 + 1)
    let string = ''
    for (let s = 0; s < sylls; s++) {
        string = string + randomChar(c) + randomChar(v)
    }
    return string + randomTail(posTails)
}

export default { firstName, lastName, middleName, phone, position }

