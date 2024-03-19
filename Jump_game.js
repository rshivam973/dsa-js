var canJump = function(nums) {
    var n = nums.length;
    var pos = n-1;
    var flag;
    for(let i = n-2; i>=0; i--){
        if(i+nums[i]>=pos)
            pos = i;
    }
    return pos === 0;
};

var nums = [2,3,1,1,4];
console.log(canJump(nums)); // true