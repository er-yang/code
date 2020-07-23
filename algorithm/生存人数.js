/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
var maxAliveYear = function(birth, death) {
    let years = [];
    birth.forEach(item => {
        years[item - 1900] = years[item - 1900] === undefined ? 1 : years[item - 1900] + 1;
    });
    death.forEach(item => {
        years[item - 1900 + 1] = years[item - 1900 + 1] === undefined ? -1 : years[item - 1900+1] - 1;
    });
    console.log(JSON.stringify(years));
    let total = [];
    let mintotal = total[0];
    let minYear = 1900;
    years.reduce((acc, cur, index) => {
        if(cur === undefined || cur === null) {
            return acc;
        }
        total[index] = acc + cur;
        if(mintotal < total[index]) {
            mintotal = total[index];
            minYear = 1900 + index;
        }
        return total[index];
    }, 0);
    return minYear;
};

maxAliveYear([1900, 1903, 1905], [1902,1904,1905]);