import { printprofile } from "./profile.js";

const userData = {
    name: "Alex",
    age: 14,
}

const vedro = [1, 2, 3]

function negro(bebro) {
    bebro.map(arr => arr + 1)
    return bebro
}

negro(vedro)

const profile = {
    ...userData,
    company: 'Grom'
}

printprofile(profile)