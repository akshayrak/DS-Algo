/**
 * Given an integer array nums and an integer k,
 *  return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.
 * The value of |x| is defined as:
 *     x if x >= 0.
 *    -x if x < 0.
******************
*Example
****************
*Input: nums = [1,2,2,1], k = 1
*Output: 4
*Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
*************/

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