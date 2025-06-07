f unction leftSsplit(start,end,arr){

	let midpoint = null
	if(arr.length === 0){
		return midpoint 
	}
	else if (arr.length === 1){
		return arr[0];
	}
	midpoint = Math.floor((start+end)/2);
    return arr[midpoint]

}


const arr = [-10,-3,0,5,9]

console.log(leftSsplit(0,4,arr))