import {formatDate} from "../utils"
import {TotalDonatsBlock} from "./total-donats-block"

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
        const input = document.querySelector('.donate-form__donate-input')
        priceDonat.innerHTML = `${input.value} $`

        donat.insertAdjacentElement('beforeend', priceDonat)
        this.#container.insertAdjacentElement('beforeend', donat)

        this.#totalDonatsBlock.render(input.value)

        input.value = ''
    }
}