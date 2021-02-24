'use strict';
/*

Date: 
Site: 
Level: 
Problem: 

Solution:
*/

/*

Date: 2/22/21 
Site: Leetcode
Level: easy 
Problem: 
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
 

Constraints:

m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
1 <= accounts[i][j] <= 100

Solution:
*/

const maximumWealth = (accounts) => {
  const sums = [];

  accounts.forEach((customer) =>
    sums.push(
      customer.reduce((total, value) => {
        return total + value;
      }, 0)
    )
  );

  return Math.max(...sums);
};

/*

Date: 2/22/21 
Site: Leetcode
Level: Easy
Problem: 

Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Solution:
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let counter = 0;
  let runs = nums.length - 1;
  while (runs > 0) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        counter++;
      }
    }
    nums.shift();
    runs--;
  }
  return counter;
};


/*
2/23/21 

attempted the grid illumination problem (dropbox practice) and could not solve. worked for small data sets, but not large

*/ 
