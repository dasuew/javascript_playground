function Person(saying) {
    this.saying = saying
}

Person.prototype.talk = function () {
    console.log('i say: ', this.saying)
}

function newy(constructor) {
    let obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    let argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))

    return obj
}

let crockford = newy(Person, 'Semicolons!!!')

crockford.talk()