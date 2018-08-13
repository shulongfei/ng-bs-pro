<template>
  <div class="container container-main">
    <div class="row">
      <div class="col-sm-9">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>&nbsp;
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>&nbsp;
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>
          <!-- Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img v-bind:src= "img[0]" alt="...提示">
            </div>

            <div class="item">
              <img v-bind:src= "img[1]" alt="...提示">
            </div>

            <div class="item">
              <img v-bind:src= "img[2]" alt="...提示">
            </div>
          </div>
        </div>

        <br>
        <div class="clear">
          <div class="well well-sm content-block">
            <h4>程序员请放下你的技术情节，与你的同伴一起进步</h4>
            <ul class="media-list content-img">
              <li class="media">
                <div class="media-left media-middle">
                  <a href="#">
                    <img class="media-object" src="../assets/img/img1.jpg" alt="...">
                  </a>
                </div>
                <div class="media-body">
                  <p>
                    如果说掌握一门赖以生计的技术是技术人员要学会的第一课的话， 那么我觉得技术人员要真正学会的第二课，不是技术，而是业务、交流与协作，学会关心其他工作伙伴的...
                  </p>
                  <a href="" class="btn btn-warning">阅读全文>></a>

                </div>
              </li>
            </ul>
            <div class="auto-info">
              <span class="glyphicon glyphicon-time" aria-hidden="true"></span>
              <p class="date-font">  2018-6-18</p>
              <p>作者: 小明</p>
              <p>博客: <a href="">善良的舒先生</a></p>
            </div>
          </div> 
          <div class="well well-sm content-block">
            <h4>程序员请放下你的技术情节，与你的同伴一起进步</h4>
            <ul class="media-list content-img">
              <li class="media">
                <div class="media-left media-middle">
                  <a href="#">
                    <img class="media-object" src="../assets/img/img1.jpg" alt="...">
                  </a>
                </div>
                <div class="media-body">
                  <p>
                    如果说掌握一门赖以生计的技术是技术人员要学会的第一课的话， 那么我觉得技术人员要真正学会的第二课，不是技术，而是业务、交流与协作，学会关心其他工作伙伴的...
                  </p>
                  <a href="" class="btn btn-warning">阅读全文>></a>

                </div>
              </li>
            </ul>
            <div class="auto-info">
              <span class="glyphicon glyphicon-time" aria-hidden="true"></span>
              <p class="date-font">  2018-6-18</p>
              <p>作者: 小明</p>
              <p>博客: <a href="">善良的舒先生</a></p>
            </div>

          </div> 
          <div class="well well-sm content-block">

            <h4>程序员请放下你的技术情节，与你的同伴一起进步</h4>
            <ul class="media-list content-img">
              <li class="media">
                <div class="media-left media-middle">
                  <a href="#">
                    <img class="media-object" src="../assets/img/img1.jpg" alt="...">
                  </a>
                </div>
                <div class="media-body">
                  <p>
                    如果说掌握一门赖以生计的技术是技术人员要学会的第一课的话， 那么我觉得技术人员要真正学会的第二课，不是技术，而是业务、交流与协作，学会关心其他工作伙伴的...
                  </p>
                  <a href="" class="btn btn-warning">阅读全文>></a>

                </div>
              </li>
            </ul>

            <div class="auto-info">
              <span class="glyphicon glyphicon-time" aria-hidden="true"></span>
              <p class="date-font">  2018-6-18</p>
              <p>作者: 小明</p>
              <p>博客: <a href="">善良的舒先生</a></p>
            </div>

          </div> 

        </div>  
        

      </div>
      <div class="col-sm-3 person-info">
        <div class="well well-sm">
          <div class="weather">
            <iframe width="100%" scrolling="no" height="60" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&amp;id=12&amp;icon=1&amp;num=1"></iframe>
          </div>
        </div>

        <div class="well well-sm">
          <h4>分 类</h4><hr style="margin: 10px 0">
          <ul class="person-list list-inline">
            <li>
              <p>学习笔记</p>
            </li>
            <li>
              <p>前端工具</p>
            </li>
            <li>
              <p>前端项目</p>
            </li>
            <li>
              <p>杂文随笔</p>
            </li>
          </ul>
        </div>

        <div class="well well-sm">
          <div class="weather">
            呵呵！
            买不起服务器，不写了，没劲………………
          </div>
        </div>

      </div>


    </div>
  </div>  
</template>

<script>
  import  img1 from '../assets/img/bg4.jpg'
  import  img2 from '../assets/img/img2.jpg'
  import  img3 from '../assets/img/img3.jpg'

  export default{
    
    data:function(){
      return {
        msg:'Hello Login',

        img: [img1, img2, img3],

        userName:'',
        userPwd:''
      }
    },

    methods:{
      loginToIndex:function(){
      this.$http
        .get('http://localhost/data_vue_admin/user/login.php?uname='+this.userName+"&upwd="+this.userPwd)
        .then(function(response){
          console.log(response.data);
          if(response.data.code == 200)
          {
            this.$router.push('/Main')
          }
        })
      }
    }
    
  }
</script>

<style></style>
