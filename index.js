import './index.css'
import {App} from "./src/modules/app"

const app = new App
const donatButton = document.querySelector('.donate-form__submit-button')

donatButton.addEventListener('click', (event) => {
    event.preventDefault()
    app.run()
})

