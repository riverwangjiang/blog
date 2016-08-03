<template>
	<div class="article">
		<div class="message fixed">
			<h2>{{item.title}}</h2>
			<div class="right">
				<span>{{item.time}}</span>
				<a v-link="{path:'/edit/' + item.id}">编辑</a>
			</div>
		</div>
		<div class="content" v-html="item.content">
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				item:{}
			}
		},
		 http: {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        },
        route: {
            data () {
            	document.title="查看博客";
                var artId = this.$route.params.id;
                var vueThis = this;
                vueThis.$http.post('http://localhost/options.php', {subType: "4", artId: artId}).then((rep)=> {
                    vueThis.item = rep.json()[0];
                }, (rep)=> {
                    console.log('error');
                })
            }
        }
	}
</script>
<style scoped>
	.article{background: white;}
	.message{padding: 5px 8px;margin-bottom: 10px; border-bottom: 1px solid #ccc;}
	h2{font-size: 28px;height: 40px;line-height: 40px;}
	span{margin-right: 5px;}
	.content{padding: 8px;word-wrap:break-word;}
</style>