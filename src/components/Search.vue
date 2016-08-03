<template>
    <div class="blog-search">
        <input type="text" v-model='keyword' @keyup.enter='search' placeholder="请输入文章题目">
    </div>
</template>

<script>
    export default {
        data() {
            return {
            	keyword: ''
            }
        },
        methods: {
            search: function () {
                if (this.keyword) {
                    location.href = '#!/search/title/' + this.keyword
                    this.keyword = ''
                } else {
                    swal('标题关键字不能为空', '请输入标题关键字', 'warning')
                }
            }
        }
    }
</script>
<style scoped>
    .blog-search{ height: 50px;line-height: 50px;}
    .blog-search input{width: 276px;height: 25px;}
</style>