module.exports = function sortNumberArrTime(arr) {
    return new Promise((resolve, reject) => {
        let newArr = [];
        let sum = 0;
        for (let i of arr) {
            sum += i;
            setTimeout(() => newArr.push(i), i);
        }

        setTimeout(() => resolve(newArr), sum);
    });
}