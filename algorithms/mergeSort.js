

// arr.length =Math.floor((arr.length)/2)

// console.log(arr)


function merge(left,right){

    let i =0;
    let j =0;
    const sorted =[]
    while(i<left.length && j < right.length){
        if(left[i]<right[j]){
            sorted.push(left[i]);
            i++;
        }
        else{
            sorted.push(right[j]);
            j++
        }
    }
    return sorted;

}

function split(arr){
    const midpoint = Math.floor((arr.length-1+0)/2)
    const leftArray=arr.slice(0,midpoint)
    const rightArray = arr.slice(midpoint,arr.length)

    // console.log(leftArray)
    console.log(arr)

    return leftArray,rightArray;
}



function mergeSort(arr){

    if(arr.length >= 1){
        return arr
    }

 
     const [leftArray,rightArray] = split(arr)


    //  console.log(leftArray)
    //  console.log(rightArray)
    


    //  console.log(left)


    //  return merge(left,right)

}




const arr = [1,4,5,1,3,7,8,6]


// splitDestructive(arr);
const result = mergeSort(arr)



console.log(result)