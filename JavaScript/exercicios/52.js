function removeProp(obj, prop) {
	const copy = {...obj}
	delete copy[prop]
	return copy
}

console.log(removeProp({a: 1, b: 2}, 'b')) 
console.log(removeProp({
	id: 20,
	name: 'caneta',
	desc: ''
}, 'desc'));