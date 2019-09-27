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
        'black',
        'white',
];

const getRandomColor = () => {
        let rand = Math.floor(Math.random() * 11);
        return allowColors[rand];
}

export default getRandomColor
