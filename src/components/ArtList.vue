<template>
	<div>
		<div class="item fixed" v-for="n in items.length">
			<div class="head">
				<a class="title" v-link="{path:'/detail/' +items[n].id }">{{items[n].title}}</a>
				<a class="right" v-link="{path:'/search/tag/' + items[n].tag}">
				{{items[n].tag}}
				</a>
			</div>
			<div class="line" v-html="items[n].content"></div>
			<div class="tool">
				<a class="right" v-link="{path:'/search/time/' + items[n].time}">
				{{items[n].time}}
				</a>
				<a class="right" v-link="{path:'/edit/' + items[n].id}">编辑</a>
				<a class="right" href="javascript:void(0)" @click="deleteIt(items[n].id)">删除</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:['items'],
		methods:{
			deleteIt(id){
				let vm = this;
				vm.$http.post('/getData',{subType: '3',artId: id}).then((rep)=>{
					if (rep.data==1) {
						swal(
			              {
			                title: '删除成功',
			                text: "",
			                type: "success",
			                showCancelButton: false,
			                closeOnConfirm: true
			              },
			               function () {
                          vm.$dispatch('refresh', 'refresh')
                        });
					}
				},(rep)=>{
					swal( 
						{
			                title: '删除失败',
			                text: "",
			                type: "error",
			                showCancelButton: false,
			                closeOnConfirm: true
			             });
				})
			}
		}
	}
</script>
<style scoped>
    .head{margin-bottom: 10px;}
	.item{margin-bottom:20px;background: white;padding: 5px 8px;}
	.title{font-size: 22px;font-weight: bold;}
	.tool span,.tool a{margin-left: 20px;}
	.line{height:38px;overflow: hidden;margin-bottom: 5px;word-wrap:break-word;}
</style>