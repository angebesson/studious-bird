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
//version 1
// const getMode = (array) => {
//     const counts = {};
//     array.forEach(el => {
//         if(counts[el]) {
//         counts[el] += 1;
//       } else {
//         counts[el] = 1;
//       }
//       })
//       return counts;
//     };
//version 2
// 
//version 3
const getMode = (array) => {
    const counts = {};
    array.forEach((el) => {
      counts[el] = (counts[el] || 0) + 1;
    })
    if (new Set(Object.values(counts)).size === 1) {
      return null;
    }
    const highest = Object.keys(counts).sort((a,b)=>{return counts[b]-counts[a]})[0];
  }
const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
    const mean = getMean(numbers);
  const median = getMedian(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
}
