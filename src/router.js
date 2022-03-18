import { renderHome } from './home.js';
import { renderLogin } from './login.js';
import { render404 } from './404.js'
import { renderRegister } from './register.js';
import { renderCreate } from './create.js'

let routes = {
    '/': renderHome,
    '/login': renderLogin,
    //'/404': render404
    '/register': renderRegister,
    '/create': renderCreate,

}

export function router(path) {
    hideSection()
    
    let renderer = routes[path] || render404 //ako routes[path] e undefined върни ми render404

    renderer()
  
}

function hideSection() {
    let mainContent = document.querySelector('.main-content')
    for (let section of mainContent.children) {
        section.style.display = 'none'
    }
}
