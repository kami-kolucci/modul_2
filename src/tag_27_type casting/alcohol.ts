type Alcohol = {
    name: string;
    percentage: number;
    type: string;
}

type Mixer = {
    name: string;
    type: string;
    carbonated: string;
};

export type Cocktail = Alcohol & Mixer

const mix1: Cocktail = {
    name: "Long Island",
    percentage: 18,
    type: "Vodka",
    carbonated: "xy"
}

export default mix1
