<template>
	<div class="time">
		<a v-for="n in time.length" v-link="{path:'/search/time/' + time[n]}">{{time[n]}}</a>
	</div>
</template>
<script>
	export default{
		props:['items'],
		computed:{
			time(){
				var arr = this.items;
                var hash = {};
                var newArr = [];
                for(let n=0;n<arr.length;n++){
                	console.log(n);
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
	.time{width: 350px; height:50px;padding: 0 8px;}
	.time a{line-height: 50px;margin-right: 5px}
</style>