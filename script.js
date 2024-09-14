function mincost(arr) { 
	let cost = 0;
	
	arr.sort((a,b) => a-b);

	while(arr.length>1){
	let first = arr.shift();
	let second = arr.shift();
	cost +=  first + second;
	arr.push(first + second);
	arr.sort((a,b) => a-b);
	}

	return cost;
		
}

module.exports=mincost;
