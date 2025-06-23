let input = [2, 7, 0, -4, 18, 24, 1,8,9,-7];

function callMergeSort(arr, arrayType){
    console.log(`creating subarray ${arrayType} with ${arr}`)
    return mergeSort(arr);
}
//sort array using merge sort
const processingStack = [];
function mergeSort(arr) {
   
    processingStack.push("sorting array " + arr)
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    // return subarrays only if the lenght is one.
    if(arr.length==1){
        return arr;
    }
    // recusively create subarrays
    left = callMergeSort(left, "left");
    right = callMergeSort(right, "right");
    let resp = merge(left, right);
    //console.log(processingStack);
    console.log("sorted subarray -" + resp)
    return resp;
    
}

const merge = (left, right) => {

    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
   // add the leftover array post sorting subarrays
    result = leftIndex < rightIndex ? result.concat(left.slice(leftIndex)) : 
        result.concat(right.slice(rightIndex));
    return result;
}

mergeSort(input);
