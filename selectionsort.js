// find min value and replace with first element

let arr = [1,9,0,2,-8,5,2,27,-82,4];

// how to find min value ? - take a benchmark and find difference

for (let i = 0;i<arr.length;i++){
    let benchmark = 0;
    let minIndex = i;
    for (let k = i+1;k<arr.length;k++){
        console.log("compared value", i , k)
        console.log(arr.length)
        let difference = arr[k]-arr[i];
        console.log(arr[k] , arr[i],difference)
        if (benchmark>difference){
            benchmark = difference;
            minIndex = k;
        }
    }
    //swap
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}
console.log(arr)