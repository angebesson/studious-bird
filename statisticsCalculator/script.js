const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;
const getMedian = (array) => {
    const sorted = array.toSorted((a, b) => a - b);
    if (sorted.length % 2 === 0) {
        const mean = getMean([sorted[sorted.length / 2], sorted[(sorted.length / 2) - 1]]);
        return mean;
    }
    else {
        const middle = getMean([sorted[Math.floor(sorted.length / 2)]]);
        return middle;
    }
};
const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
    const mean = getMean(numbers);
    document.querySelector("#mean").textContent = mean
}