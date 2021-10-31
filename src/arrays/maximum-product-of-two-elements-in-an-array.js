/*******
 * Given the array of integers nums, you will choose two different indices i and j of that array. 
 * Return the maximum value of (nums[i]-1)*(nums[j]-1).
 ********
 Example
 *******
 Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0),
 you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
****************************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let max=0;
    let maxIndex=0
    let secondMax=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            max=nums[i]
            maxIndex=i
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=secondMax&&i!=maxIndex){
            secondMax=nums[i]
        }
    }
    return (max-1)*(secondMax-1)
};