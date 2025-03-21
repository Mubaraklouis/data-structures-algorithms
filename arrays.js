const arr = [1, 2, 3, 4, 5];

let lastIndex = arr.length - 1;

let newIndex = lastIndex + 1;

arr[newIndex]=arr[4];
arr[4]=arr[3];
arr[3]=arr[2];
arr[2]=arr[1];
arr[1]=arr[0];
arr[0]=10


for(let i = 0; i < arr.length; i++) {

  
    console.log(arr[i]);



}