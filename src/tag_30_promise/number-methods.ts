function randomNumber(): Promise<number[]> {
    return new Promise((resolve, reject) => {


        const values = [Math.floor(Math.random() * 130) + 1, Math.floor(Math.random() * 130) + 1, Math.floor(Math.random() * 130) + 1];
        console.log(values);
        if (values[0] > 100 || values[1] > 100 || values[2] > 100) {
            reject('too high');
        } else {
            resolve(values);
        }
    });
}

randomNumber()
    .then(values => {
        console.log( values);
        return values.map(value => value + 7)
    })
    .then(adding => {
        console.log("plus 7",adding);
        return adding.map(value => value * 2)
    })
    .catch(error => {
        console.log( error);
    });



