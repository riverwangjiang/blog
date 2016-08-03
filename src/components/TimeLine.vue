<template>
	<div class="time">
		<a v-for="n in time.length" v-link="{path:'/search/time/' + time[n]}">{{time[n]}}</a>
	</div>
</template>
<script>
	export default{
		ready(){
			let vm = this;
			this.$http.post('http://localhost/options.php',{subType:'0'}).then((rep)=>{
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
			time(){
				var arr = this.items;
                var hash = {};
                var newArr = [];
                for(let n=0;n<arr.length;n++){
                	if(!hash[arr[n].time]) {
                	 	newArr.push(arr[n].time);
                        hash[arr[n].time] = true;
                        
                    }

                }
                return newArr;
			}
		}
	}
</script>
<style scoped>
	.time{min-height:30px; padding: 0 8px;}
	.time a{height:30px;line-height: 30px;margin-right: 5px;display: inline-block;}
</style>