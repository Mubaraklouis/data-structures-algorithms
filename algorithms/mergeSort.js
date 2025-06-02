function merge(left, right){
    let i = 0;
    let j = 0;
    const sorted = [];
    
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            sorted.push(left[i]);
            i++;
        }
        else{
            sorted.push(right[j]);
            j++;
        }
    }
    
    // Add any remaining elements from left array
    while(i < left.length){
        sorted.push(left[i]);
        i++;
    }
    
    // Add any remaining elements from right array
    while(j < right.length){
        sorted.push(right[j]);
        j++;
    }
    
    return sorted;
}

function split(arr){
    const midpoint = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, midpoint);
    const rightArray = arr.slice(midpoint);
    
    
    return [leftArray, rightArray];
}

function mergeSort(arr){
    // Base case: arrays with 0 or 1 element are already sorted
    if(arr.length <= 1){
        return arr;
    }
    
    // Split the array into two halves
    const [leftArray, rightArray] = split(arr);
    
    // Recursively sort both halves
    const left = mergeSort(leftArray);
    const right = mergeSort(rightArray);

    console.log("left",left,"right" ,right)
    
    // Merge the sorted halves and return
    return merge(left, right);
}

// Test the algorithm
const arr = [1, 4, 5, 1, 3, 7, 8, 6];
const sortedArr = mergeSort(arr);
console.log("Original array:", arr);
console.log("Sorted array:", sortedArr);