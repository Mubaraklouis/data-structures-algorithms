function customPop(arr){
    const newArr=[];
    const lastIndex = arr.length-1
    const arrLenth = arr.length;

    //all the above are assigment operation with O(1)
    if(arrLenth===0){
        return newArr
    }

    //the loop has O(N) because the number of to shfit to the numer array is directly proportion to the number of the given arr
        for(let i=0; i<arrLenth;i++){
            if(i===lastIndex){
                return newArr
            }
            newArr.push(arr[i]);
    }
    return newArr;
}



function efficientPop(arr){
    if(arr.length ===0){
        return arr
    }
    arr.length--;

    return arr;
}

function verifyPop(){
    const arr = [1,3,7]
    const result =customPop(arr);
    const result2 = efficientPop(arr)

    console.log(result);
    console.log(result2)
}

verifyPop()