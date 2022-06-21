import {DonatsBlock} from "./donats-block"

export class App {
    #donatsBlock

    constructor() {
        this.#donatsBlock = new DonatsBlock()
    }

    run() {
        this.#donatsBlock.render()
    }
}