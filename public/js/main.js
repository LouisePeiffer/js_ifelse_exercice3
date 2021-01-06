// PARTIE 1
// Exo 1 
// let tabPrenoms = ['Louise', 'Tita', 'Elya', 'Anna', 'Béné']
// let tabLength = tabPrenoms.length
// console.log(tabLength);
// console.log("Bonjour " + tabPrenoms[0]);
// console.log("Bonjour " + tabPrenoms[1]);
// console.log("Bonjour " + tabPrenoms[2]);
// console.log("Bonjour " + tabPrenoms[3]);
// console.log("Bonjour " + tabPrenoms[4]);

// Exo 2
// let chiffreAl = Math.round(Math.random()*10)
// console.log(chiffreAl);
// let quest1 = prompt('Pick a numba')
// if (quest1 != chiffreAl) {
//     let quest2 = prompt('Pick a numba')
// }
// else if (quest1 == chiffreAl) {
//     alert('Bv')
// }

// Exo 3
// let reps1 = ['22','23',"24"]
// let reps2 = ['Peiffer', 'Pfeiffer', 'Peiff']
// let reps3 = ['Louise', 'BadB', 'Rose']
// let quests = [`Quel âge? ${reps1}`, `Ton nom? ${reps2}`, `Ton prénom? ${reps3}`]

// let que1 = prompt(quests[0])
// if (que1 == reps1[0]) {
//     alert('Good B')
// }
// else (
//     alert('T nul')
// )

// let que2 = prompt(quests[1])
// if (que2==reps2[0]) {
//     alert('Bien vu B')
// }
// else (
//     alert('Nul B')
// )

// let que3 = prompt(quests[2])
// if (que3 == reps3[1]) {
//     alert('Cool B')
// }
// else (
//     alert('Un peu mzi hn')
// )

// PARTIE 2
// Prompt
let temps = prompt("Quel temps fait-il aujourd'hui").toLocaleLowerCase()
console.log(temps);
if (temps == 'soleil') {
    alert('Titties ouuuut')
}
else if (temps == 'vent') {
    alert('mets un petit pull B')
}
else if (temps == 'neige') {
    alert('Go faire un bonhomme des neiges hihi')
}
else (
    alert("That's suspicious, that's weird")
)
