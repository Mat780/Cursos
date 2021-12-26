const rept = (array, vez) => {
	const newArray = [array];

	for (let i = 1; i < vez; i++){
		newArray.push(array);
	}

	return newArray;
}

console.log(rept("codigo" , 2));
console.log(rept(7, 3));