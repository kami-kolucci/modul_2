import Colors from './special-color'

export default function randomColorGenerator(): Colors {
    const giveColor = Object.values(Colors)
    const randonColor = Math.floor(Math.random() * 10)
    return giveColor[randonColor]
}



