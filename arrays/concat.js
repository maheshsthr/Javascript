const phoneBrands = ["apple","samsung"]
console.log(phoneBrands)

const hearingBrands = ["boat","noise"]
console.log(hearingBrands)

phoneBrands.push(hearingBrands) // this shared hearing brands as a single array in phonebrands array 
console.log(phoneBrands)

//so we will use concat
phoneBrands.pop()
console.log(phoneBrands)

//concat
allBrands = phoneBrands.concat(hearingBrands)
console.log(allBrands)
