<template>
	<div class="main">
        <blog-head></blog-head>
        <div class="wrap fixed content">
            <router-view :items="artlist" class="article left"></router-view>
    		<div class="sider right">
    			<search></search>
    			<art-type></art-type>
                <time-line></time-line>
    		</div>
        </div>
</div>
</template>
<script>
	import BlogHead from './BlogHead.vue'
	import Search from './Search.vue'
	import ArtType from './ArtType.vue'
    import TimeLine from './TimeLine.vue'
	export default{
		data(){
			return {
				artlist:[]
			}
		},
		components:{
			BlogHead,Search,ArtType,TimeLine
		},
		http: {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        },
        route: {
            data() {
                document.title="首页";
                var theRoute = this.$route.params;
                if (!theRoute.tag && !theRoute.time && !theRoute.title) {
                    this.$emit('getList');
                } else if (theRoute.tag) {
                    this.filtBy(theRoute.tag, '5');
                } else if (theRoute.time) {
                    this.filtBy(theRoute.time, '6');
                } else if (theRoute.title) {
                    console.log(theRoute.title);
                    this.filtBy(theRoute.title, '7');
                }
            }
        },
		methods: {
            filtBy(keyword, subType) {
                var vueThis = this;
                vueThis.$http.post('/getData', {subType: subType, artTag: keyword}).then( (rep) =>{
                    if (rep.json() != 0) {
                        vueThis.artlist = rep.json();

                    } else {
                        swal('搜索结果为空', '请输入其它标题关键字', 'error');
                    }
                }, (rep) => {
                    console.log('error');
                })
            }
        },
        events: {
            getList () {
                var vueThis = this;
                this.$http.post('/getData',{subType:'0'}).then((rep) =>{
                 	vueThis.artlist = rep.json();
                }, (rep) => {
                    swal("ERROR!", "", "error");
                })
            },
            'refresh': function () {
                this.$emit('getList');
            }
        }
	}
</script>
<style scoped>
.sider{width:280px;background: white;}
.article{width:700px;min-height: 600px;}
.content{margin-top: 20px}

</style>