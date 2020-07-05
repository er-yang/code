function attackEach (nums) {
  let row = Array(nums.length).fill(0);
  let column = Array(nums.length).fill(0);
  for(let i = 0; i < nums.length; i ++) {
    for(let j = 0; j < nums[i].length; j ++) {
      if(nums[i][j] === 1) {
        row[i]++;
        column[j]++;
        if(row[i] >= 2 || column[j] >= 2) {
          return false;
        }
      }
    }
  }
  return true;
}
let nums = [[0, 1, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 0, 0],]
console.log(attackEach(nums));