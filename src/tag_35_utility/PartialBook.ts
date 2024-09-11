import Ibook from "./utility";

// export type optionIbook = Partial<Ibook>

// const book1: optionIbook = {
//     author: "xy",
//     name: "xx"
    
// }


// type OmitIbook = Omit<Ibook, 'publishingYear' | 'shortDescription'>

// const omitBook: OmitIbook = {
//     author: "xy",
//     name: 'xxx',
//     numberOfPages: 1
// }


type PickIbook = Pick<Ibook, 'name' | 'shortDescription'>

export const pick1: PickIbook = {
    name: "pick",
    shortDescription: 'pick it up'
}
