// function params(day, ...rest) {
//     rest.forEach(id => console.log(id))
// }
// params(`Monday`, 1, 2, 3)

function newDragons(dragon1, dragon2, dragon3) {
    console.log(dragon1, dragon2, dragon3)
}

newDragons = (dragon1, dragon2, dragon3) => {
    console.log(dragon1, dragon2, dragon3)
}

let dragons = ['fluffy', 'buffy', 'knuffy']

newDragons(...dragons)


// let dragon1, remainingDragons

// [dragon1, ...remainingDragons] = dragons

// console.log(dragon1, remainingDragons);

// let dragon = { name: 'Fluffy', power: 'Fire' }
// let name, power

// ({ name, power } = dragon)

// name
// power

