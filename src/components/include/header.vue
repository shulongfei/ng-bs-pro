<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/">个人博客</router-link>
        </div>
        <ul class="nav navbar-nav navbar-right nav-btn">
          <li><button class="btn btn-default" @click="alert(true)">登录</button></li>
          <li><button class="btn btn-default" @click="alert(false)">注册</button></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
  
</template>
<style type="text/css">

.nav-btn {
  line-height: 50px;
}
.nav-btn li {
  margin-left: 15px;
}
  
</style>
<script>
  import message from '../../../utils/public';
  export default{

    data:function(){
      return {
       
      }
    },

    methods:{
      alert:function(bool){
        if(bool) {
           message('亲！想要酷炫的登录界面，请联系博主，为你定制……😅。 求关注！！！');
         } else {
           message('亲！想要酷炫的注册界面，请联系博主，为你定制……😅。 求关注！！！');
         }
      }
      
    } 

  }
</script>

