<template>
	<div id="pokemon">
		<div class="card">
		<div class="card-image">
			<figure>
			<img :src="pokemon.currentImg" alt="Placeholder image">
			</figure>
		</div>
		<div class="card-content">
			<div class="media">
			<div class="media-content">
				<p class="title is-4" style="text-transform: capitalize;">{{num}} - {{ name }}</p>
				<p class="subtitle is-6">{{ pokemon.type }}</p>
			</div>
			</div>
			<div class="content">
				<button class="button is-success is-rounded" @click="changeSprite()">Mudar sprite</button>
			</div>
		</div>
		</div>

	</div>
</template>

<script>
import axios from 'axios';

export default {
	props: {
		num: Number,
		name: String,
		url: String
	},

	data() {
		return {
			pokemon: {
				isFront: true,
				currentImg: "",
				type: "",
				front: "",
				back: ""
			},
			
		}
	},

	created: function() {

		
		const upper = (letter, word) => {
			const up = letter.toUpperCase();
			return up + word.slice(1);
		}


		axios.get(this.url).then( res => {
			this.pokemon.type = res.data.types[0].type.name;
			this.pokemon.front = res.data.sprites.front_default;
			this.pokemon.back = res.data.sprites.back_default;
			this.pokemon.currentImg = this.pokemon.front;

			this.pokemon.type = upper(this.pokemon.type[0], this.pokemon.type);
		})
	},

	methods: {
		changeSprite: function(){
			if(this.pokemon.isFront){
				this.pokemon.isFront = false;
				this.pokemon.currentImg = this.pokemon.back
			} else {
				this.pokemon.isFront = true;
				this.pokemon.currentImg = this.pokemon.front
			}
		}
	}
}
</script>

<style scoped>
	#pokemon{
		margin-top: 2%;
	}
</style>