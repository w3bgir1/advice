const request = require('superagent')
const url = 'https://api.adviceslip.com/advice'
const adviceBox = document.getElementById('adviceBox')
const getAdviceBtn = document.getElementById('btn')
const searchButton = document.getElementById('btn2')

const getAdvice = () => {
    request
   .get(url)
   .then(res => res.text)
   .then(json => JSON.parse(json))
   .then(data => data.slip.advice)
   .then(advice => showAdvice(advice))
   .catch(err => {
        console.log(err)
   })
}

const showAdvice = advice => {
    adviceBox.innerHTML = `<p>${advice}</p>`

}

getAdviceBtn.addEventListener('click', getAdvice)

getAdvice()


const searchAdvice = (query) => {
    request
   .get(`https://api.adviceslip.com/advice/search/${query}`)
   .then(res => res.text)
   .then(json => JSON.parse(json))
   .then(data => data.slips[0].advice)
   .then(advice => showAdvice(advice))
   .catch(err => {
        showAdvice(`Sorry, we couldn't find anything for you :(`)
   })
}
 
searchButton.addEventListener('click', () => {
    searchAdvice(prompt('Include search word', 'happy'))    
})
    

