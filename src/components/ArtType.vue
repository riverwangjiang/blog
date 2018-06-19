<template>
	<div class="types">
		<a class="type"v-for="n in tag.length" v-link="{path:'/search/tag/' + tag[n]}">{{tag[n]}}</a>
	</div>
</template>
<script>
	export default{
		ready(){
			let vm = this;
			this.$http.post('/getData',{subType:'0'}).then((rep)=>{
				vm.items = rep.json();
			}, (rep)=>{
				console.log('error');
			})
		},
		data(){
			
			return{
				items:[]
			}
		},
		computed:{
			tag(){
                var arr = this.items;
                var hash = {};
                var newArr = [];
                for(let n=0;n<arr.length;n++){
                	 if(!hash[arr[n].tag]) {
                        hash[arr[n].tag] = true;
                        newArr.push(arr[n].tag);
                    }
                }
                return newArr;
			}
		}
	}
</script>
<style scoped>
	.types{min-height:30px;padding:0 8px;border-bottom: 1px solid #ccc;border-top: 1px solid #ccc;}
	.type{height: 30px;margin-right: 5px;line-height: 30px;display: inline-block;}
</style>