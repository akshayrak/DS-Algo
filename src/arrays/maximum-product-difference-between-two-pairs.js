/****
 * The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

    For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.

Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

Return the maximum such product difference.

***********************************
Input: nums = [5,6,2,7,4]
Output: 34
Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34.
*************/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDifference = function(nums) {
    let smallest=10000
    let si=0
    let secondSmallest=10000
    let largest=0
    let li=0
    let secondLargest=0
    for(let i =0;i<nums.length;i++){
        if(nums[i]<smallest){
            smallest=nums[i]
            si=i
        }
        
        if(nums[i]>largest){
            largest=nums[i]
            li=i
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]<secondSmallest&&nums[i]>=smallest&&i!=si&&i!=li){
            secondSmallest=nums[i]
        }
        
        if(nums[i]>secondLargest&&nums[i]<=largest&&i!=si&&i!=li){
            secondLargest=nums[i]
        }
    }
    return (largest*secondLargest)-(smallest*secondSmallest)

};