// Code your solution here

const findMatching = (array, name) => {
    //case insensitive, simple method is to compare after lower casing both sides
    const namematch = (element) => {
        return element.toLowerCase() === name.toLowerCase()
    }
    return array.filter(namematch)
}

const fuzzyMatch = (array, name) => {

    const namematch = (element) => {
        return element[0].toLowerCase() === name[0].toLowerCase()
    }

    return array.filter(namematch)
}

//takes an array of objects and a string to match
const matchName = (array, Name) => {
    //need to match the obj property to the name
    const namematch = (obj) => {
        return obj.name === Name
    }
    return array.filter(namematch)
}