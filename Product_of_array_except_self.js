var productExceptSelf = function(nums) {
    var left = new Array(nums.length).fill(0);
    var right = new Array(nums.length).fill(0);
    left[0]=1,right[nums.length-1]=1;
    for(let i=1;i<nums.length;i++){
        left[i] = left[i-1]*nums[i-1];
    }
    for(let j=nums.length-2;j>=0;j--){
        right[j] = right[j+1]*nums[j+1];
    }
    for(let i=0;i<nums.length;i++){
        nums[i]=left[i]*right[i];
    }
    return nums;
};

var nums = [-1,1,0,-3,3];
productExceptSelf(nums);
console.log(nums);