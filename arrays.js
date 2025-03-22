const arr = [1, 2, 3, 4, 5];

let lastIndex = arr.length - 1;

let newIndex = lastIndex + 1;

arr[newIndex]=arr[4];
arr[4]=arr[3];
arr[3]=arr[2];
arr[2]=arr[1];
arr[1]=arr[0];
arr[0]=10

const arrLength = arr.length;


for (let i = arrLength-1; i >=0; i--) {
    console.log(arr[i]);    
}

