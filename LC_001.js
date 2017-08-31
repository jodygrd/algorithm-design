var twoSum = function(nums, target) {
    var indexes = []
    for (i=0; i<nums.length-1; i++) {
      for (j=1; j<nums.length; j++) {
         if (nums[i]+nums[j] === target){
            return [i,j]
          }
      }
    }
};

twoSum([2, 7, 11, 15], 9)

twoSum([3,2,4], 6)


// Brute force approach has time complexity of O(n). Try hash-map next time!