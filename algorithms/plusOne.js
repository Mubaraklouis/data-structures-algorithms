function insertFirst(arr,num){
  const arrLength = arr.length;  //O(1)
  let lastIndex = arrLength - 1; //O(1)  
  let newIndex = lastIndex + 1;  //O(1)
  arr[newIndex]=arr[lastIndex];  //O(1)

  //in total this is O(1)

for (let i = arrLength-1; i >=0; i--) {
  if (i === 0) {
    arr[i] = num;
  }
}
}

function plusOne(arr){
    let lastIndex= arr.length-1;
    lastElement = arr[lastIndex]

  
    for(let i=arr.length-1; i>=0;i--){
      if( arr[i] < 9){
        arr[i] = arr[i]+1
        return arr
     }
     
      console.log(i)
         
      arr[i]=0

    }

    // console.log(arr[-1])
    insertFirst(arr,1)

    return arr
}

const arr =[9,9,9]
const result = plusOne(arr)

console.log(result)