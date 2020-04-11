// pages/home/home.js
//getApp()获取App()产生的实例对象
const app = getApp()

// const name = app.globalData.name;
// const age = app.globalData.age;

//注册一个页面
//页面也有自己的生命周期

Page({
   //------------2、初始化数据-----------------------
  data:{
    message : '哈哈哈',
    list:[]
  },
  hanlegetUserInfo :function(event){
    console.log(event)
  },
  //------------1、监听页面的生命周期函数-----------------------
  //页面被加载出来
  onLoad(){
    console.log("onLoad")
    //const _this = this;
    wx.request({
      //
      url: 'http://123.207.32.32:8000/recommend',
      //箭头的函数中的this一层层向上找
      success:(res) =>{
        console.log(res)
        // const data = res.data.data.list;
        // this.setData({
        //   list:data
        // })
      }
      /**
       * success : function(res){
       *  console.log(res)
       * const data = res.data.data.list;
       * console.log(_this)
       * _this.setData({
       *  list:data
       * })
       * }
       */

    })
  },
  //页面初次渲染完成
  onReady(){
    console.log("onReady")
  },
  //页面显示出来时
  onShow(){
    console.log("onShow")
  },
  //当页面隐藏起来
  onHide(){
    console.log("onHide")
  },
  onUnload(){
    console.log("onUnload")
  },
   //------------3、监听wxml中相关的一些事件-----------------------
   hanlegetUserInfo :function(event){
    console.log(event)
  },
  handViewClick(){
    console.log('哈哈哈被点击了')
  },
   //------------4、监听其他事件-----------------------
  onPageScroll(obj){
    console.log(obj),
    console.log("页面滚动到底部")
  },
  onPullDownRefresh(){
    console.log('下拉刷新的事件')
  }
})
