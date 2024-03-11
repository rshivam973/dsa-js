var maxOperations = function(nums, k) {
    let i=0,j=nums.length-1,count=0;
    nums.sort();
    while(i<j){
        let sum = nums[i]+nums[j];
        if(sum===k){
            count++;
            i++;
            j--;
        }
        else if(sum<k){
            i++;
        }else{
            j--;
        }
    }
    return count;
};

const nums = [1,2,3,4]; 
const k = 5;
console.log(maxOperations(nums,k));