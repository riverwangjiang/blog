<template>
	<div class="types">
		<a class="type"v-for="n in tag.length" v-link="{path:'/search/tag/' + tag[n]}">{{tag[n]}}</a>
	</div>
</template>
<script>
	export default{
		props:['items'],
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
	.types{height: 50px;padding:0 8px;border-bottom: 1px solid #ccc;border-top: 1px solid #ccc;}
	.type{margin-right: 5px;line-height: 50px;}
</style>