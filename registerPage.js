const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

   const payload = new FormData(form)

   Object.fromEntries(payload)
   console.log([...payload])

   fetch('https://httpbin.org/post', {
        method:"POST",
        body: payload,
   })
   .then(res => res.json())
   .then(res => console.log(res))
   .catch(err => console.log(err))
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

let pwRip = 0
document.getElementById('pwr').addEventListener('click', () => {
    if(pwRip == 0) {
        document.getElementById('passwordRipetuta').type = "text"
        pwRip++
    } else {
        document.getElementById('passwordRipetuta').type = "password"
        pwRip--
    }
})