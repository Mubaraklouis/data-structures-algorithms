function split(start,end,arr){
	let temArray = []
	// if(arr.length === 0){
	// 	return null;
	// }
	// else if (arr.length === 1){
	// 	return arr;
	// }
	for(let i = start; i<end;i++){
			temArray.push(arr[i])
		}
	

	return temArray
}



const arr = [-10,-3,0,5,9]
//find the midpoint
 let midpoint = Math.floor((arr.length-1)/2);



const left = split(0,midpoint,arr)
console.log("LSA:",left)
const right = split(midpoint+1,arr.length,arr)
console.log("RSA:",right)

// const right = console.log(midpoint+1,arr.length-1,arr)