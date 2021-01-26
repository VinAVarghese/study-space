function flatten(arr,ans=[]){
    if(!Array.isArray(arr[0])){
        ans.push(arr[0])
    } else {
        return flatten(arr[0], ans);
    }
    if(arr.length < 1) return ans
    return flatten(arr.splice(1), ans);
  }
  
  console.log('flatten: ', flatten([1, 2, 3, [4, 5] ]) ); // [1, 2, 3, 4, 5]
  console.log('flatten: ', flatten([1, [2, [3, 4], [[5]]]]) ); // [1, 2, 3, 4, 5]
  console.log('flatten: ', flatten([[1],[2],[3]]) ); // [1, 2, 3]
  console.log('flatten: ', flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) ); // [1, 2, 3]