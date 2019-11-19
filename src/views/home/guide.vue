
<template>
  <el-scrollbar style="height:100vh;">
    <div class="app-container">
       <vue-particles
                            color="#ffffff"
                            :particleOpacity="0.7"
                            linesColor="#ffffff"
                            :particlesNumber="180"
                            shapeType="circle"
                            :particleSize="5"
                            :linesWidth="2"
                            :lineLinked="true"
                            :lineOpacity="0.4"
                            :linesDistance="18"
                            :moveSpeed="3"
                            :hoverEffect="true"
                            hoverMode="grab"
                            :clickEffect="true"
                            clickMode="push" 
                            class="particles-js" 
                            >
                      </vue-particles>  
            <div class="app-comp-content">

              <div class="app-comp-content-banner" >
                <el-row style="margin:10px 120px">
                  <el-col :span="5" v-for="(o, index) in info" :key="index" :offset="1" :gutter="20">

                      <div class="app-comp-content-banner-avator" @click="test">
                        <div class="image">
                           <img :src=o.img />
                        </div>
                        <div class="title">
                          <h2>{{o.title}}</h2>
                        </div>
                      </div>

                  </el-col>
                </el-row>

              </div>
            </div>
   </div>           
  </el-scrollbar>
</template>

<script>
  export default {
    name: "top",
    data() {
      return {
        info: [
          {
            img:require('@/assets/query.png'),
            title:'综合查询'
         },
          {
            img:require('@/assets/keyboard.png'),
            title:'输入法搜索'
          },{
            img:require('@/assets/map.png'),
            title:'地图搜索'
          },{
            img:require('@/assets/load.png'),
            title:'下载中心'
          },{
            img:require('@/assets/people.png'),
            title:'人员库'
          },{
            img:require('@/assets/target.png'),
            title:'目标库'
          },{
            img:require('@/assets/manager.png'),
            title:'用户管理'
          }, {
            img:require('@/assets/log.png'),
            title:'日志管理'
         },
          {
            img:require('@/assets/statistics.png'),
            title:'业务量统计'
          }, {
            img:require('@/assets/system.png'),
            title:'系统资源'
         }





        ]
      };
    },
    methods:{
        test(){
        this.$router.push('/dashboard')
         }
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style> 
 .el-scrollbar__wrap { 
   overflow-x: hidden; 
 } 
 </style>  
<style lang="scss" scoped>
 #particles-js {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
  .app-container {
    width: 100%;
    height: 100%;
    background: url("../../assets/1.jpg") no-repeat center 0px;
    /*background-color:#304156;*/
    background-size: cover;
    color: #fff;
    .app-comp-content {
      width: 100%;
      height: 100%;
      /*background: url("../../assets/dott.png") repeat;*/
      position: relative;
     
      .app-comp-content-banner {
        display: flex;
        justify-content: space-around;
        max-width: 1200px;
        padding: 10% 0;
        margin: 0 auto;
        .app-comp-content-banner-avator {
          width: 50%;
          text-align: center;
          position: relative;
          z-index: 10;
          border-radius:50% ;
          // margin-top:10px;
          .title{
            margin-top:15px;
            padding-top:5px;
            width: 190px;
            :hover{
              /*border-radius:50% ;*/
              color: rgb(64, 158, 255);
            }
          }
          .image {
            width: 150px;
            height: 150px;
            padding: 20px;
            border-radius:50% ;
             :hover{
              // border:1px solid rgb(64, 158, 255);
              border: 2px solid rgb(64, 158, 255);
              border-radius:50% ;
            }
           
            img{
              width: 150px;
              height: 150px;
              border-radius:50% ;
              padding: 30px;
               border:2px solid #304156;
              
            }
            /*background-color:#304156;*/
           
          }
        }
        /*.app-comp-content-banner-avator img {*/
          /*width: 74%;*/
          /*border-radius:50% ;*/
          /*border:2px solid #304156;*/

        /*}*/
      }
    }
  }
</style>
<style> 
 .el-scrollbar__wrap { 
   overflow-x: hidden; 
 } 
 </style> 
