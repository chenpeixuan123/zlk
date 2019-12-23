<template>
  <div>
<!--    展示轮播图-->
      <div class="lunBo">
        <img src="http://images.gshxkj.com.cn/index/index_bg.png" alt="">
      </div>

      <div class="content">
        <div class="fwly">
          服务领域
        </div>
        <p style="margin-bottom: 22px;">【<span>SERVICE　AREA</span>】</p>

        <el-row  class="ffly aa" type="flex" justify="center" style="box-sizing: border-box;">
          <el-col :xs="12" :sm="12" :md="5" style="box-sizing: border-box;">
            <div style="background-image: url('http://images.gshxkj.com.cn/index/bg2@2x.png')" @mouseover="dongxiao(1)" :class="index==1?'evenyList animated swing':'evenyList'">
              <div>
                  <img src="http://images.gshxkj.com.cn/index/icon1.png" alt="" width="66"  height="57">
              </div>
              <div class="line_fw"></div>
              <p>大数据</p>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="5">
            <div style="background-image: url('http://images.gshxkj.com.cn/index/bg3@2x.png')" @mouseover="dongxiao(2)"  :class="index==2?'evenyList animated swing':'evenyList'">
              <div>
                <img src="http://images.gshxkj.com.cn/index/icon2.png" alt="" width="78"  height="73">
              </div>
              <div class="line_fw"></div>
              <p>人工智能</p>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="5">
            <div style="background-image: url('http://images.gshxkj.com.cn/index/bg4@2x.png')" :class="index==3?'evenyList animated swing':'evenyList'" @mouseover="dongxiao(3)">
              <div>
                <img src="http://images.gshxkj.com.cn/index/icon3.png" alt="" width="90"  height="90">
              </div>
              <div class="line_fw"></div>
              <p>云计算</p>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="5">
            <div style="background-image: url('http://images.gshxkj.com.cn/index/bg5@2x.png')" :class="index==4?'evenyList animated swing':'evenyList'" @mouseover="dongxiao(4)">
              <div>
                <img src="http://images.gshxkj.com.cn/index/icon9.png" alt="" width="57"  height="57">
              </div>
              <div class="line_fw"></div>
              <p>系统集成</p>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="5">
            <div style="background-image: url('http://images.gshxkj.com.cn/index/bg6@2x.png')" @mouseover="dongxiao(5)" :class="index==5?'evenyList animated swing':'evenyList'">
              <div>
                <img src="http://images.gshxkj.com.cn/index/icon5.png" alt="" width="71"  height="54">
              </div>
              <div class="line_fw"></div>
              <p>IT运维</p>
            </div>
          </el-col>
        </el-row>




        <div class="fwly" style="margin-top: 50px;" ref="element" >
          服务网络
        </div>
        <p style="margin-bottom: 22px;">【<span>SERVICE　NETWORK</span>】</p>

        <el-row class="ffly" style="align-items: center;display: flex;" >
          <el-col :sm="9">
            <div :class="num==1?'fwwl_left animated bounceInLeft':'fwwl_left'">
              <h2>业务覆盖全甘肃省</h2>
              <p>12个地级市：兰州市、嘉峪关市、金昌市、</p>
              <p>白银市、天水市、武威市、张掖市、平凉市、</p>
              <p>酒泉市、庆阳市、定西市、陇南市</p>
              <p>100%覆盖甘肃地级市</p>
            </div>
          </el-col>
          <el-col :sm="15">
            <div :class="num==1?'fwwl_left animated bounceInRight':'fwwl_left'">
              <img src="http://images.gshxkj.com.cn/index/bg14.png" class="fwwl_img">
            </div>
          </el-col>
        </el-row>

      </div>

<!--    我们的优势-->
    <div class="superiorityMain1">
      <div class="ourSuperiority">
        <div class="fwly" style="margin-top: 50px">
          我们的优势
        </div>
        <p class="secondWord" style="margin-bottom: 50px;">【<span>OUR ADVANTAGES</span>】</p>
        <el-row  class="ourSuperiorityList" type="flex" justify="center" style="flex-wrap: wrap;padding: 0 10px;">
          <el-col :xs="12" :sm="6">
              <div>
                <h2>丰富的行业经验</h2>
                <p>涉及领域广泛，已成功完成众　多项目,满足了不同行业IT需求。</p>
              </div>
          </el-col>
          <el-col :xs="12" :sm="6">
            <div>
              <h2>完善的管理</h2>
              <p>专业成熟的项目管理、产品管理、IT服务管理以及供应商管理体系，保证每一个项目成功实施。</p>
            </div>
          </el-col>
          <el-col :xs="12" :sm="6">
            <div>
              <h2>专业的技术团队支持</h2>
              <p>拥有多行业、多品类专业技术人员，跟随时代脚步，掌握行业先进技术，高效率、高质量完成每一个项目。</p>
            </div>
          </el-col>
          <el-col :xs="12" :sm="6">
            <div>
              <h2>先进的管理理念</h2>
              <p>公司顺应国家发展趋势，紧跟互联网发展步伐，始终以技术为核心，以科技创新为指引,为每位用户提供安全、快捷、高效、实用的专业信息化服务。</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <!--    我们的产品-->
    <div class="superiorityMain">
      <div class="ourSuperiority" >
        <div class="fwly" style="margin-top: 50px">
          我们的产品
        </div>
        <p class="secondWord" style="margin-bottom: 50px">【<span>SERVICE PRODUCTS</span>】</p>

        <el-row class="productList"  >
          <el-col :xs="24" :sm="12">
            <div>
              <img src="http://images.gshxkj.com.cn/index/bg7.png" alt="">
              <p>住宅维修基金云管理平台</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="6">
            <div>
              <img src="http://images.gshxkj.com.cn/index/bg8.png" alt="">
              <p>陇银资本互联网平台</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="6">
            <div>
              <img src="http://images.gshxkj.com.cn/index/bg9.png" alt="">
              <p>智慧社区</p>
            </div>
          </el-col>
        </el-row>

        <el-row class="productList">
          <el-col :xs="24" :sm="6">
            <div>
              <img src="http://images.gshxkj.com.cn/index/bg10.png" alt="">
              <p>豪马驾校后台云管理系统</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="6">
            <div>
              <img src="http://images.gshxkj.com.cn/index/bg11.png" alt="">
              <p>PM管理系统</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="6">
            <div>
              <img src="http://images.gshxkj.com.cn/index/bg12.png" alt="">
              <p>智慧幼儿园</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="6">
            <div>
              <img src="http://images.gshxkj.com.cn/index/bg13.png" alt="">
              <p>影院项目</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>





  </div>
</template>

<script>

export default {
  name: 'index',
  data(){
    return{
      index:0,
      num:0
    }
  },
  methods:{
    dongxiao(index){
      this.index=index;
    },
    handleScroll: function () {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      // 设备/屏幕高度
      let top=this.$refs.element.offsetTop;
      if(scrollTop+200>top){
        this.num=1;
      }
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .ffly{
    .el-col{
      padding: 10px;
    }
  }

  .line_fw{
    width: 63px;
    height: 2px;
    background: #fff;
    margin: 5px auto;
  }

  .productList{
    padding: 0 10px;
    margin-bottom: 10px;
    div{
      box-sizing: border-box;
      overflow: hidden;
    }
    .el-col{
      position: relative;
      padding:0 5px;
      margin-bottom: 10px;
      box-sizing: border-box;
    }
    p{
      width: calc(100% - 10px);
      position: absolute;
      bottom: 0px;
      color: #fff;
      height: 67px;
      line-height: 67px;
      text-align: center;
      background: rgba(0,0,0,.3);
    }
    img{
      width: 100%;
      height: 100%!important;
      transform: scale(1.02);
      transition: all 1s;
      &:hover{
        transform: scale(1.2);
      }
    }
  }
  .ourSuperiorityList{
    .el-col{
      max-width: 277px;
      padding: 0 10px;
      div{
        padding-bottom: 10px;
        overflow: hidden;
        height: 100%;
        width: 100%;
        background-image: url("http://images.gshxkj.com.cn/index/bg1.png");
        background-size:100% 100%;
        background-repeat: no-repeat;
        transition: All 0.6s ease-in-out;
        -webkit-transition: All 0.6s ease-in-out;
        -moz-transition: All 0.6s ease-in-out;
        -o-transition: All 0.6s ease-in-out;
        &:hover{
          transform: rotateY(180deg);
          h2,p{
            transform: rotateY(-180deg);
          }
        }
      }
      h2{
        transition: All 0.6s ease-in-out;
        -webkit-transition: All 0.6s ease-in-out;
        -moz-transition: All 0.6s ease-in-out;
        -o-transition: All 0.6s ease-in-out;
        color: #3366CC;
        font-size: 18px;
        text-align: center;
        margin: 49px 0 40px;
      }
      p{
        transition: All 0.6s ease-in-out;
        -webkit-transition: All 0.6s ease-in-out;
        -moz-transition: All 0.6s ease-in-out;
        -o-transition: All 0.6s ease-in-out;
        font-size: 14px;
        color: #333;
        padding: 0 38px;
        line-height: 40px;
      }
    }
  }
  .superiorityMain1{
      background-image: url("http://images.gshxkj.com.cn/index/adv_bg.png");
      background-size:100% 100%;
      background-repeat: no-repeat;
    padding-bottom: 100px;
    padding-top: 20px;
  }
  .superiorityMain{

    .ourSuperiority{
      overflow: hidden;
      width: 1196px;
      margin: 0 auto;
      padding-bottom: 100px;
    }
  }
  .fwwl_left{
    margin-left: 20px;
    h2{
      padding-left: 79px;
      font-weight: normal;
      font-size: 26px;
      color: #333;
      margin-bottom: 55px;
    }
    p{
      width: 400px;
      margin-left: 120px;
      color: #666;
      line-height: 30px;
      font-size: 16px;
    }
  }
  .fwwl_img{
    width: 90%;
    margin-left: 5%;
  }
  .evenyList{
    overflow: hidden;
    padding-bottom: 50px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    transition: All 1s ease-in-out;
    -webkit-transition: All 1s ease-in-out;
    -moz-transition: All 1s ease-in-out;
    -o-transition: All 1s ease-in-out;
    /*&:hover{*/
    /*  transform: rotate(360deg);*/
    /*  -webkit-transform: rotate(360deg);*/
    /*  -moz-transform: rotate(360deg);*/
    /*  -o-transform: rotate(360deg);*/
    /*  -ms-transform: rotate(360deg);*/
    /*}*/
    div:first-child{
      height: 73px;
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;


    }
    p{
      text-align: center;
      color: #fff;
    }
  }

  .lunBo{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .content{
    box-sizing: border-box;
    width: 1196px;
    margin:39px auto 0;
    &>p{
      text-align: center;
      color: #FFCC99;
      font-size: 18px;
      span{
        color: #666666;
        font-size: 15px;
      }
    }
  }
  .fwly{
    color: #666699;
    font-size: 28px;
    width: 422px;
    height: 36px;
    margin: 0 auto;
    text-align: center;
    background-image: url(http://images.gshxkj.com.cn/index/icon4@2x.png);
    background-size: 100% 20%;
    background-repeat: no-repeat;
    background-position-y: bottom;
    padding: 10px 0;
  }
.secondWord{
  text-align: center;
  color: #FFCC99;
  font-size: 18px;
  span{
    color: #666666;
    font-size: 15px;
  }
}
</style>
