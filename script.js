const quoteInner = document.getElementById("quote")

const quoteButton = document.getElementById("quoteGenBtn")

async function getQuote() {
    quoteButton.disabled = true
    try {
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
        const quote = data.slip.advice
        quoteInner.textContent = quote
        quoteButton.disabled = false
    }
    catch (error) {
        console.log('Ошибка получения цитаты: ', error)
    }
}

quoteButton.addEventListener('click', getQuote)

window.addEventListener('load', getQuote)