function customPop(arr){
    const newArr=[];
    const lastIndex = arr.length-1
    const arrLenth = arr.length;
    if(arrLenth===0){
        return newArr
    }

        for(let i=0; i<arrLenth;i++){
            if(i===lastIndex){
                return newArr
            }
            newArr.push(arr[i]);
    }

    return newArr;
}


function verifyPop(){
    const arr = [1,3,7]
    const result =customPop(arr);

    console.log(result);
}

verifyPop()