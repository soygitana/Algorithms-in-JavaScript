// Mean, Median, and Mode
// Given an array of numbers, calculate the mean, median, and mode.

// mode =  is the number that is repeated more often than any other
// mean =  average of the numbers  

class Calculate {
    constructor(arr) {
        this.arr = arr;
    }

    mean() {
        return this.arr.reduce((a, b) => a + b) / this.arr.length;
    };

    mode() {

        let max = 0;
        let mode = 0;
        let list = {};

        for (let el of this.arr) {
            if (!list[el])
                list[el] = 0;
            ++list[el];
        }
        for (let i in list) {
            if (list[i] > max) {
                max = list[i];
                mode = i;
            }
        }
        return mode;
    };

    median() {
        arr = this.arr;

        arr.sort((a, b) => a - b);

        let index = Math.floor(arr.length / 2);

        return (arr.length % 2) ? arr[index] : (arr[index - 1] + arr[index]) / 2;

    };
}


const object1 = new Calculate([1, 1, 2, 2, 3, 3, 4, 4])
const object2 = new Calculate([1, 3, 3, 4, 4])


console.log(object1.mode())