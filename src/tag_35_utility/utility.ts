interface Ibook {
    author: string,
    name: string,
    publishingYear: string,
    shortDescription?: string,
    numberOfPages: number
}

export default Ibook
import { pick1 } from "./PartialBook";

console.log(pick1);