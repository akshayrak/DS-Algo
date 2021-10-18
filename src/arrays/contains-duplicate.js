/********************
 * Given an integer array nums,
 *  return true if any value appears at least twice in the array,
 *  and return false if every element is distinct.
 * ***********
 * example:
 * *********
 * Input: nums = [1,2,3,1]
 * Output: true
 * *********************/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    temp={}
    for(let i=0;i<nums.length;i++){
        if(temp[nums[i]]){
            return true
        }else{
            temp[nums[i]]=1
        }
    }
    return false
};