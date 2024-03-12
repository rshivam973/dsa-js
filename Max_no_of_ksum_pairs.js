var maxOperations = function(nums, k) {
    let i=0,j=0,count=0;
    let n = nums.length;
    const mp = new Map();
    for(i=0;i<n;i++){
        if(mp.get(k-nums[i])){
            count++;
            if(mp.get(k-nums[i])==1) mp.delete(k-nums[i]);
            else mp.set(k-nums[i],mp.get(k-nums[i])-1);
        }else{
            mp.set(nums[i],mp.get(nums[i])+1 || 1);
        }
    }
    return count;
};

const nums = [1,2,3,4]; 
const k = 5;
console.log(maxOperations(nums,k));