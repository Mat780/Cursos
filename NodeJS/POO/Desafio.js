class ShopProduct{

	constructor(){
		this.name = "Shop Product";
		this.price = 0;
		this.weight = 0;
		this.type = "";
		this.code = "";
	}

}

class ShopCart{

	constructor(){
		this.total = 0;
		this.products = [{name: "Shop Product" ,price: 0, quantity: 0, link: "http://shop..."}]
		this.productsCount = 0;
	}

	add(product){
		this.total += product.price * product.quantity;
		this.products = this.products.push(product);
		
	}

	remove(product){
		this.total -= product.price * product.quantity;

		let index = this.products.findIndex( e => e.name === product.name);
		this.products.splice(index, 1);
	}

	list(){
		this.products.forEach( e => {
			console.log(e);
		} )
	}

}


class Food{

	constructor(){
		this.name = 'food';
		this.price = 0;
		this.desc = 'food is good :V'
		this.ingredients = []
		this.code = "001";
		this.category = 'food nice'
	}

}

class RpgCharacter{

	constructor(){
		this.health = 0;
		this.mana = 0;
		this.name = "";
		this.attackDmg = 0;
		this.magicDmg = 0;
		this.physicDef = 0;
		this.magicDef = 0;
		this.healthRegen = 0;
		this.manaRegen = 0;
		this.criticalChance = 0;
		this.criticalDmg = 0;
		this.level = 1;
		this.xp = 0;
		this.perks = [];
	}

	attackWithMelee(){
		const random = Math.random(1, 100);

		if(random <= this.criticalChance){
			return this.attackDmg * this.criticalDmg;
		} else {
			return this.attackDmg;
		}
	}

	attackWithMagic(){
		const random = Math.random(1, 100);

		if(random <= this.criticalChance){
			return this.magicDmg * this.criticalDmg;
		} else {
			return this.magicDmg;
		}
	}

	takePhysicalDmg(damage) {
		const damageDealt = damage - this.physicDef;

		this.health -= damageDealt <= 0 ? damageDealt : 0;  
	}

	takeMagicDmg(damage) {
		const damageDealt = damage - this.magicDef;

		this.health -= damageDealt <= 0 ? damageDealt : 0;
	}

	healthRegeneration(){
		return this.health + this.healthRegen;
	}

	manaRegeneration(){
		return this.mana + this.manaRegen;
	}

}

class RentCar{

	constructor(){
		this.modelCar = "";
		this.pricePerDay = 0;
		this.daysUsed = 0;
	}

	total(){
		return this.pricePerDay * this.daysUsed
	}

	addUseDay(){
		this.daysUsed++;
	}

}

class UserForSocialMedia{

	constructor(){
		this.name = "";
		this.email = "";
		this.password = "";
		this.desc = "";
		this.age = "";
		this.job = "";
		this.status = "";
		this.relationStatus = "";
		this.friends = [];
		this.blocked = [];
		this.photos = [];
	}

	changeName(newName){
		this.name = newName;
	}

	changeEmail(newEmail){
		this.email = newEmail;
	}

	changePassword(newPassword){
		// Depois de toda criptografia...
		this.password = newPassword;
	}

	changeDescription(newDescription){
		this.desc = newDescription;
	}

	changeStatus(newStatus){
		this.status = newStatus;
	}

	changeRelationshipStatus(newRelationshipStatus){
		this.relationshipStatus = newRelationshipStatus;
	}

	changeJob(newJob){
		this.job = newJob;
	}

	addFriend(friend){
		this.friends.push(friend);
	}

	removeFriend(friend){
		const index = this.friends.findIndex(e => e.name === friend.name);
		this.friends.splice(index, 1);
	}

	blockFriend(friend){
		removeFriend(friend);
		this.blocked.push(friend);
	}
	
	blockSomeone(person){
		this.blocked.push(person);
	}

	unBlock(person){
		const index = this.blocked.findIndex(e => e.name === person.name);
		this.blocked.splice(index, 1);
	}

	addPhoto(photo){
		this.photos.push(photo);
	}

	removePhoto(photo){
		const index = this.photos.findIndex(e => e.title === photo.title);
		this.photos.splice(index, 1);
	}

}

class Video{

	constructor(){
		this.title = "";
		this.desc = "";
		this.like = 0;
		this.dislikes = 0;
		this.link = "http://www.youtube.com/watch/titleSluged";
	}

	addLike(){
		this.like++;
	}

	removeLike(){
		this.like--;
	}

	addDislikes(){
		this.dislikes++;
	}

	removeDislikes(){
		this.dislikes--;
	}

	share(){
		return `		${this.title}
				This is an awesome video! check it out ${this.link}`
	}

}

class Student{

	constructor(){
		this.name = "Student";
		this.age = 0;
		this.grades = [];
	}

	addSchoolSubject(name){
		const schoolSubject = {name, grade: 0}
		this.grades.push(schoolSubject);
	}

	removeSchoolSubject(name){
		const index = this.grades.findIndex(e => e.name === name);
		this.grades.splice(index, 1);
	}

	addGrade(name, grade){
		const index = this.grades.findIndex(e => e.name === name);
		this.grades[index].grade = grade;
	}

}

class EncomendaFrete{

	constructor(){
		this.name = "";
		this.weight = 0;
		this.tax = 0;
		this.kms = 0;
		this.price = 0;
		this.minPrice = 0;
	}

	calcFrete(){
		this.price = this.minPrice + (this.weight * this.tax * this.kms);
	}

}

class AgendamentoDentista{

	constructor(){
		this.name = "";
		this.proceed = "";
		this.data = "00/00/00";
		this.time = "00:00";
		this.doctorName = "";
	}

	changeTime(newTime){
		this.time = newTime;
	}

	changeDate(newDate){
		this.time = newDate;
	}

}

class Banda{

	constructor(){
		this.name = "";
		this.type = "";
		this.musics = [];
		this.albuns = [];
		this.playlists = [];
		this.friends = [];
	}

	addMusic(music){
		this.musics.push(music);
	}

	removeMusic(music){
		const index = this.music.findIndex(e => e.title === music.title);
		this.musics.splice(index, 1);
	}

	createAlbum(musics){
		this.albuns.push(musics);
	}

	createPlaylist(musics){
		this.playlists.push(musics);
	}

	addFriend(friend){
		this.friends.push(friend);
	}

	removeFriend(friend){
		const index = this.friends.findIndex(e => e.name === friend.name);
		this.friends.splice(index, 1);
	}

}

class DeliveryService{

	constructor(){
		this.name = "Food";
		this.restaurant = "";
		this.price = 0;
		this.address = "";
	}

}

// Conexão com banco de dados
// Não vou fazer exatamente por causa do BD
// Preciso agilizar isso aqui

// class Biblioteca{

// 	constructor(){
		
// 	}

// }

class WhatsappMessage{

	constructor(){
		this.message = "";
	}

	addLetter(letter){
		this.message += letter;
	}

	removeLetter(){
		this.message.slice(0, -1);
	}

	send(){
		console.log(this.message);
	}

}

class RpgInventory{

	constructor(){
		this.slots = [];
		this.maxNumPerSlot = 50;
	}

	addItem(item){
		this.slots.push(item);
	}

	trashItem(item){
		const index = this.slots.findIndex(e => e === item);
		this.slots.splice(index, 1);
	}

	sellItem(item){
		console.log("Vendendo item...");
	}

	filterInventory(){
		console.log("Filtrando");
	}

	moveItem(item_1, item_2){
		const index_1 = this.slots.findIndex(e => e === item_1);
		const index_2 = this.slots.findIndex(e => e === item_2);
		[this.slots[index_1], this.slots[index_2]] = [this.slots[index_2], this.slots[index_1]];
	}

}

class SocialMediaGroup{

	constructor(){
		this.name = 'Group';
		this.members = [];
		this.likes = 0;
		this.comments = [];
		this.followersArray = [];
		this.followersNumber = 0;
		this.posts = [];
	}

	addMember(member){
		this.members.push(member);
	}
	
	removeMember(member){
		const index = this.members.findIndex(e => e === member);
		this.members.splice(index, 1);
	}

	addLike(){
		this.likes++;
	}

	removeLike(){
		this.like--;
	}

	addFollower(follower){
		this.followersArray.push(follower);
		this.followersNumber++;
	}

	removeFollower(follower){
		const index = this.followersArray.findIndex(e => e === follower);
		this.followersArray.splice(index, 1);
		this.followersNumber--;
	}

	addPost(post){
		this.posts.push(post);
	}

	removePost(post){
		const index = this.posts.findIndex(e => e === post);
		this.posts.slice(index, post);
	}

}

class VideoPlayer{

	constructor(){
		this.title;
		this.desc;
		this.likes;
		this.dislikes;
	}

	play(){
		console.log("Dando play no video...")
	}

	pause(){
		console.log("Dando pause no video...")
	}

	next15seg(){
		console.log("15segs depois");
	}

	prev15seg(){
		console.log("15segs antes");
	}

	nextVideo(){
		console.log("Proximo video...");
	}

	prevVideo(){
		console.log("Video anterior...");
	}

}

class InstagramStories{

	constructor(){
		this.video;
		this.effect;
		this.text;
		this.music;
		this.closeFriends; // True || false
	}

	upload(stories){
		console.log("Dando upload do stories");
	}

	newStories(){
		console.log("Criação do stories");
		let stories = "...";
		stories = applyEffect(stories);
		upload(stories);
	}

	musicSearch(){
		console.log("Procurando musica");
	}

	applyEffect(stories){
		console.log("Aplicando efeitos");
		return stories
	}

}

class GoogleSearch{

	constructor(){
		this.textForSearch;
	}

	search(){
		const textArray = this.textForSearch.split(" ");
	}

	removeFromSearch(){
		console.log("Tira as palavras selecionadas com -");
	}

}

class FacebookNotification{

	constructor(){
		this.message;
		this.time;
		this.photo;
	}

	alertUsers(){
		console.log("Alertando usuários...");
	}

}

class UdemyCourse{

	constructor(){
		this.aulas = [];
		this.taxaCompleto;
		this.desc;
		this.perguntas;
		this.respostas;
		this.anuncios;
	}

	playAula(aula){
		console.log(`Dando play na aula ${aula}`);
	}

	pauseAula(aula){
		console.log(`Dando pause aula ${aula}`);
	}

	trocarAula(aula, aulaAtual){
		if(aulaAtual != aula) console.log(`Trocando a aula atual para a aula ${aula}`);
	}

}