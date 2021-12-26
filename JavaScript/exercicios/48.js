const mult = (num, vez) => {
	let res = 0;
	for (let i = 0; i < vez; i++) {
		res += num;
	}

	console.log(res);
};

mult(5, 5);
mult(0, 7);