// type BasicColors = {
//     red: string,
//     blue: string,
//     green: string,
//     yellow: string,
//     black: string,
//     white: string
// }

type BasicColors = 'RED' | 'BLUE' | 'GREEN' | 'YELLOW' | 'BLACK' | 'WHITE';

type RealColors = Exclude<BasicColors, 'BLACK'| 'WHITE'>

function showColor(color: RealColors): void {
    console.log(color);
}

showColor('RED')
showColor('BLACK')

