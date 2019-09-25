const allowColors = [
        'red',
        'pink',
        'purple',
        'teal',
        'green',
        'lime',
        'cyan',
        'amber',
        'orange',
        'black'
];

const getRandomColor = () => {
        let rand = Math.floor(Math.random() * 10);
        return allowColors[rand];
}

export default getRandomColor
