const dog = () => {
    const sound = 'woof'
    return {
        talk: () => console.log(sound),
        eat: () => console.log('yummie')
    }
}

const sniffles = dog()

sniffles.talk()
sniffles.eat()