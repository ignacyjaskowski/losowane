function posortuj () {
    for (let index = 0; index <= list.length; index++) {
        b = list[b]
        list[b - 1] = list[b - 1]
    }
}
function wylosuj_liste (dlugosc_listy: number) {
    for (let index = 0; index < dlugosc_listy; index++) {
        list.push(randint(0, 10))
    }
}
let b = 0
let list: number[] = []
list = []
