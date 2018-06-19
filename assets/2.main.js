webpackJsonp([2],{

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(41)
	__vue_script__ = __webpack_require__(43)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\ArtDetail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(44)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-29ced1a0/ArtDetail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-29ced1a0&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ArtDetail.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-29ced1a0&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ArtDetail.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.article[_v-29ced1a0]{background: white;}\n.message[_v-29ced1a0]{padding: 5px 8px;margin-bottom: 10px; border-bottom: 1px solid #ccc;}\nh2[_v-29ced1a0]{font-size: 28px;height: 40px;line-height: 40px;}\nspan[_v-29ced1a0]{margin-right: 5px;}\n.content[_v-29ced1a0]{padding: 8px;word-wrap:break-word;}\n", ""]);

	// exports


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	// 	<div class="article">
	// 		<div class="message fixed">
	// 			<h2>{{item.title}}</h2>
	// 			<div class="right">
	// 				<span>{{item.time}}</span>
	// 				<a v-link="{path:'/edit/' + item.id}">编辑</a>
	// 			</div>
	// 		</div>
	// 		<div class="content" v-html="item.content">
	// 		</div>
	// 	</div>
	// </template>
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            item: {}
	        };
	    },

	    http: {
	        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    },
	    route: {
	        data: function data() {
	            document.title = "查看博客";
	            var artId = this.$route.params.id;
	            var vueThis = this;
	            vueThis.$http.post('/getData', { subType: "4", artId: artId }).then(function (rep) {
	                vueThis.item = rep.json()[0];
	            }, function (rep) {
	                console.log('error');
	            });
	        }
	    }
	    // </script>
	    // <style scoped>
	    // 	.article{background: white;}
	    // 	.message{padding: 5px 8px;margin-bottom: 10px; border-bottom: 1px solid #ccc;}
	    // 	h2{font-size: 28px;height: 40px;line-height: 40px;}
	    // 	span{margin-right: 5px;}
	    // 	.content{padding: 8px;word-wrap:break-word;}
	    // </style>

	};

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"article\" _v-29ced1a0=\"\">\n\t<div class=\"message fixed\" _v-29ced1a0=\"\">\n\t\t<h2 _v-29ced1a0=\"\">{{item.title}}</h2>\n\t\t<div class=\"right\" _v-29ced1a0=\"\">\n\t\t\t<span _v-29ced1a0=\"\">{{item.time}}</span>\n\t\t\t<a v-link=\"{path:'/edit/' + item.id}\" _v-29ced1a0=\"\">编辑</a>\n\t\t</div>\n\t</div>\n\t<div class=\"content\" v-html=\"item.content\" _v-29ced1a0=\"\">\n\t</div>\n</div>\n";

/***/ })

});