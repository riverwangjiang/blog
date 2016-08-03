require('./common/base.css');
let Vue = require('vue');
let VueRouter = require('vue-router');
let VueResource = require('vue-resource');
let Lib = require('./common/lib');
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
let router = new VueRouter();

//全局函数 调用顶层设置title
Vue.mixin({
  methods: {
  	setTitle: function (val) {
	  	if(val) this.$dispatch('setTile', val);
	}
  },
  route: {
    activate (){
      console.log('activate');
    }
  } 
});

//顶层组件 设置title
let topApp = Vue.extend({
	events: {
	    'setTitle': function (title) {
	      Lib.setTitle(title);
	    }
	}
});

//加载路由配置
  let index = require('./components/App.vue');
  router.map({
    '/':{
      component: index,
      subRoutes:{
        '/':{
          component: reslove => { return require(['./components/ArtList.vue'],reslove) }
        },
        '/detail/:id': {
               component: reslove => { return require(['./components/ArtDetail.vue'],reslove) }
            }
         }
      },
    '/edit/:mode':{
      component: reslove => {return require(['./components/AppEidtor.vue'],reslove)}
     },
    '/search/tag/:tag': {
      component: index,
      subRoutes: {
        '/': {
          component: reslove => { return require(['./components/ArtList.vue'],reslove) }
        }
      }
    },
    '/search/time/:time': {
      component: index,
      subRoutes: {
        '/': {
          component: reslove => { return require(['./components/ArtList.vue'],reslove) }
        }
      }
    },
    '/search/title/:title': {
      component: index,
      subRoutes: {
        '/': {
          component: reslove => { return require(['./components/ArtList.vue'],reslove) }
        }
      }
    }
       
  });

  router.redirect({
      '*':"/"
  });
  router.start(topApp, '#app');
