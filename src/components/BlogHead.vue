<template>
	<div class="head ">
		<div class="wrap">
			<div class="left" >
				<a v-link="{path:'/'}">
					<img  src="../images/3.jpg" alt="头像">
					<span class="name">wangjiang</span>
				</a>
			</div>
			<a class="right" v-link="{path:'/edit/' + 'new'}">写博文</a>
		</div>
	</div>
</template>
<style type="text/css" scoped>
	.head{
		height: 50px;
		background: white;
	}
	img{
		height:50px;
		width: 50px;
	}
	a{
		display: inline-block;
		height: 50px;
		line-height: 50px;
	}
	.name{position: relative; top: -20px;}
</style>
