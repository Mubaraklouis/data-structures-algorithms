const arr = [1,2,3,4,5];



const customPush = (arr,num)=>{
const arrLength = arr.length;
const lastIndex =arrLength-1;
const newIndex=lastIndex+1;
arr[newIndex]=num;

return arr;
}

//very the custom push method

function verifyPush(){
    const result = customPush(arr,20);

    console.log(result)


}


verifyPush()