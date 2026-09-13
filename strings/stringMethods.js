let email = "msx31.mahesh@gmail.com"

let isEmail = email.includes('@')
let isStartsWith = email.startsWith("msx")
let isEnds = email.endsWith(".com")

console.log(isEmail,isStartsWith,isEnds)

//slice , replcae

const phrase = "javaScript is Fun"
console.log(phrase.slice(0,10))
console.log(phrase.replace("Fun","amazing"))


//join and split
let fruits = 'orange , banana , mango'
let fruitArray = fruits.split(',')
console.log(fruitArray)

let fruitArray1 = ['Orange', 'Banana', 'Mango']
let fruit1 = fruitArray1.join(' and ')
console.log(fruit1)
