export class TotalDonatsBlock {
    #container
    #totalValue

    constructor() {
        this.#container = document.querySelector('#total-amount')
        this.#totalValue = 0
    }

    render(value) {
        this.#totalValue += +value
        this.#container.innerHTML = `${this.#totalValue} $`
    }
}