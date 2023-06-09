let email = document.getElementById('email').value
let pass = document.getElementById('password').value
let errorBox = document.querySelector('.errorBox')
let mailTest = "test@applied.it"
let testPsw = "Test1234"
let landingPage = '../Landing page/landingPage.html'
let validEmail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const payload = new FormData(form)
    console.log([...payload])
})

let flagPw = 0
document.getElementById('pw').addEventListener('click', () => {
    if(flagPw == 0) {
        document.getElementById('password').type = "text"
        flagPw++
    } else {
        document.getElementById('password').type = "password"
        flagPw--
    }   
})