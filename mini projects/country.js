//https://countries.dev/alpha/${code}
const getCountry = async (code)=>{
    try {
        const response = await fetch(`https://countries.dev/alpha/${code}`)
        if (!response.ok){
            throw new Error("Invalid Country Code")
        }
        const country = await response.json()
        return country;
    }catch(e){
        console.log(e.message)
    }
}
async function main() {
    const code = "IN"
    const country = await getCountry(code)

    console.log(`Name : ${country.name}`)
    console.log(`Region : ${country.region}`)
    console.log(`Border Countries : ${country.borders}`)
    console.log(`Capital : ${country.capital}`)
    console.log(`Timezone : ${country.timezones}`)
    console.log(`Population : ${country.population}`)
    console.log(`Population Density : ${country.populationDensity}`)
}

main()