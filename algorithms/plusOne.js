function plusOne(arr){
    let lastIndex= arr.length-1;
    lastElement = arr[lastIndex]

    for(let i=arr.length; i>0;i--){
       if( arr[lastIndex] === 9){
        arr[lastIndex]=0
        arr[lastIndex-1]=arr[lastIndex-1]+1
       }
         lastIndex= lastIndex-1
    }


    return arr
}

const arr =[]
const result = plusOne(arr)

console.log(result)