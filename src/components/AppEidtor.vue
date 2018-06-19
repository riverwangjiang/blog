<template>
	<div class="blog-eidtor">
		<blog-head></blog-head>
		<div class="blog-main wrap">
			<input type="text" v-model='title' placeholder="文章标题...">
	        <input type="text" v-model='tag' placeholder="文章标签...">
	        <tool-bar></tool-bar>
	        <div class="content fixed">
	        <textarea class="left"autofocus id="inputter" v-model="content" placeholder="文章内容..."></textarea>
	        <div class="left" id="outputter" v-html="content | markify"></div>
	        </div>
			<div class="right">
				<button @click="submit">发表文章</button> 
				<button @click="cancel">取消</button>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import marked from '../common/marked'
	import BlogHead from './BlogHead.vue'
	import ToolBar from './ToolBar.vue'
	Vue.filter('markify', function (val) {
	  return marked(val);
	})

	export default{
		data(){
			return { 
					title:'',
					content:'',
					tag:'',
					id:'',
					editMode: ''
			}
		},
		components:{
			BlogHead,ToolBar
		},
		route:{
			data(){
				document.title="编辑博客";
				let vueThis = this;
				vueThis.editMode = vueThis.$route.params.mode;
				if (vueThis.editMode!='new') {
					vueThis.$http.post('/getData',{subType: "4", artId: vueThis.editMode}).then((rep)=>{
					let httpData = rep.json();
					if (httpData) {
						vueThis.title = httpData[0].title;
						vueThis.content = httpData[0].content;
						vueThis.tag = httpData[0].tag;
						vueThis.id = httpData[0].id;
					}else{
					 console.log('article.error');	
					}
				}, (rep)=>{
					console.log(rep);
				})
				}else if(vueThis.editMode == 'new'){
					vueThis.title = '';
					vueThis.tag = '';
					vueThis.content = '';
				}
				
			}
		},
		methods:{
			submit(){
				let vm = this;
				let subType = '1';
				if (vm.editMode=='new') {
					var alertWord = '提交成功';
				}else{
					subType = '2';
					var alertWord = '修改成功';
				}
				function markedArt() {
        			return marked(vm.content);
      			}
				vm.$http.post('/getData', {
		        subType: subType,
		        artTitle: vm.title,
		        artTag: vm.tag,
		        artContent: markedArt(),
		        artId: vm.id
		      }).then((rep) =>{
		          if(rep.data == 1) {
		          	
		            swal(
		              {
		                title: alertWord,
		                text: "",
		                type: "success",
		                showCancelButton: false,
		                closeOnConfirm: true
		              },
		              function(){
		                location.href = '#!/';
		              });
		          }
		      }, (rep) => {
		          console.log('error');
		      })
			},
			cancel(){
				location.href = '#!/';
			}
		}
	}
</script>
<style scoped>
	textarea{resize: none;height:500px;outline: none;width: 490px;border: none;padding: 5px;word-wrap:break-word;}
	#outputter{height: 500px;width: 489px;background:white;border-left: 1px solid rgb(233,233,233);padding: 5px;word-wrap:break-word;overflow-y: auto;}
	input{height: 20px}
	input{width: 100%; margin-top: 10px;}
	button{cursor: pointer;padding:2px;}
	.content{margin-bottom: 10px;}
</style>