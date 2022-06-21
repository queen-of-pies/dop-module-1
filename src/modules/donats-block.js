import {formatDate} from "../utils"
import {TotalDonatsBlock} from "./total-donats-block";

export class DonatsBlock {
    #container
    #totalDonatsBlock

    constructor() {
        this.#container = document.querySelector('.donates-container__donates')
        this.#totalDonatsBlock = new TotalDonatsBlock()
    }

    render() {
        const donat = document.createElement('div')
        donat.className = 'donate-item'
        donat.innerHTML = `${formatDate()} - `

        const priceDonat = document.createElement('b')
        const donatValue = document.querySelector('.donate-form__donate-input').value
        priceDonat.innerHTML = `${donatValue} $`

        donat.insertAdjacentElement('beforeend', priceDonat)
        this.#container.insertAdjacentElement('beforeend', donat)

        this.#totalDonatsBlock.render(donatValue)
    }
}