let loginSection = document.querySelector('.login')
console.log(loginSection)
//по този начин не обхождаме целия документ, а само определена секция в която е формата
let loginForm = loginSection.querySelector('form')
console.log(loginSection)

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    let email = formData.get('email')
    let password = formData.get('password')
    console.log(formData)

    fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    await(res => res.JSON())
    await(user => {
        localStorage.setItem('user', JSON.stringify(user))
    })
})
export function renderLogin() {
    loginSection.style.display = 'block'

    //loginForm.addEventListener - ако е тук това означава всеки път да закачаме събитие
    //ако се прави по този начин, трябва всеки път да разкачаш всички закачени събития
}
