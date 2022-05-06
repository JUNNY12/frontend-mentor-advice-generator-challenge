const diceButton = document.querySelector(".diceContainer")
const container = document.querySelector('.container')




const getQuote = () => {
   
fetch(`https://api.adviceslip.com/advice`)
    .then(data => data.json())
    .then(adviceData => {
        console.log(adviceData.slip)
        populateQuote(adviceData.slip)
    })
    .catch(err => console.log(err))
}

diceButton.addEventListener("click", getQuote)


const populateQuote = (quote) => {

    const {id, advice} = quote
 
    const adviceText=document.querySelector(".adviceText")
    const adviceId = document.querySelector('.adviceId')

    adviceId.innerText= `Advice # ${id}`
    adviceText.innerHTML=advice
}
