/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var countKDifference = function(nums, k) {
    let temp = {}
    for(let i=0;i<nums.length;i++){
        if(temp[nums[i]]){
            temp[nums[i]]++
        }else{
            temp[nums[i]]=1
        }
    }
    let count=0
    for(let i=0;i<nums.length;i++){
            if(temp[nums[i]-k]){
                count+=temp[nums[i]-k]
            }
    }
    return count
};