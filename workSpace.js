var rotate = function(nums, k) {
    var start = nums.length - k;
    var answer = []
    for (var i = start; i < nums.length; i++){
        answer.push(nums[i])
    }
    for (var j = 0; j < start; j++){
        answer.push(nums[j])
    }
    return answer
};

console.log("rotate", rotate([1,2,3,4,5,6,7], 3));