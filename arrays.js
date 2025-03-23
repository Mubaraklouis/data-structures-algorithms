const arr = [1, 2, 3, 4, 5];

// arr[4]=arr[3];
// arr[3]=arr[2];
// arr[2]=arr[1];
// arr[1]=arr[0];
// arr[0]=10


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
    else {
      arr[i] = arr[i-1];
    }
 }
}

//deu to loop the travasal of the array depends on the size of the aray if n elements in array 
//O(n)


//total time complexity: O(n)


function verifyInsertFirst(){
   let arr = [1, 2, 3, 4, 5];
    insertFirst(arr,30);
    console.log(arr);
}





verifyInsertFirst(); // [10, 1, 2, 3, 4]