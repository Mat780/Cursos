const entre = (min, max, num, ent = false) => {
	if(ent){
		return console.log(min <= num && max >= num);
	} else {
		return console.log(min < num && max > num);
	}
}

entre(10, 100, 50);
entre(10, 100, 160);
entre(3, 150, 3);
entre(3, 150, 3, true);