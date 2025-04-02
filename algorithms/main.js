function binarySearch(arr, target) {
    let first = 0;
    let last = arr.length - 1;
    let midpoint = Math.floor((first + last) / 2);

    // Base case: target not found
    if (first > last) {
        return false;
    }

    if (target === arr[midpoint]) {
        return true;
    } else if (target > arr[midpoint]) {
        // **Pass the updated "first" value to the NEXT recursive call**
        return binarySearch(arr.slice(midpoint + 1), target);
    } else {
        // **Pass the updated "last" value to the NEXT recursive call**
        return binarySearch(arr.slice(0, midpoint)), target);
    }
}

const arr = [1, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 8));  // true
console.log(binarySearch(arr, 2));  // false