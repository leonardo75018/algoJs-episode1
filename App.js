//Exericice - 1
/* 
        Arrondir un numéro casser et 
        remplacer le point par une virgule 
*/

// let number = 5.56789

// let numberFormated = number.toFixed(2).replace(".", ",")
// console.log(numberFormated)



//Exericice - 2 
//Vérifier si le text contient un mot 
// let phrase = "Eu quero viver"
// console.log(phrase.includes("Amor"))



//Exericice - 3
/* 
    -  Séparer un text qui contient des espaces, dans un nouveau array 
       ou chaque mot est une position de l'array

    -  Après transformer le array en text et ou il avait des espaces tu met un underscore _
*/

// let myPhrase = "Eu quero viver o amor";
// let myArray = myPhrase.split(" ")
// let phraseWithUnderscore = myArray.join("_")
// console.log(phraseWithUnderscore)


//Exericice - 4
//Transformer une chaine de caractéres en éléments d'un array 
// let word = "manipulaçao"
// console.log(Array.from(word))



/* 
    Exericice - 5 : Manipulation Array 
    - Ajouter un item à la fin 
    - Ajouter un item au début
    - Effacer un item à la fim 
    - Effacer un item au bédut 
*/

// let techs = ["html", "css","js"]
// techs.push("php")
// techs.unshift("python")
// techs.pop()
// techs.shift()



// Quel est la différence entre slice et splice
// console.log(techs.slice(1,2))
// techs.splice(1,1)


//Trouver la position d'un item dans un array
// let index = techs.indexOf("css")
// console.log(index)
// console.log(techs)



//Function seach 

// function search (mot){
//     let index = techs.indexOf(mot)

//     if(index == -1){
//       return  console.log("Tech not found")
//     }
    
//    return console.log(techs[index])
// }

// search("css")