const dragons = [
    'cool dragon',
    'angry dragon',
    'shiny dragon'
]

const dragon = {
    name: 'fluffykins',
    type: 'cool dragon'
}

const iterator = dragons[Symbol.iterator]()
console.log(iterator.next())

const iterator2 = dragon[Symbol.iterator]
console.log(iterator2.next())