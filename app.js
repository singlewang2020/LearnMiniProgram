//注册一个小程序实例
App({
  onLaunch: function () {
    //网络请求

    //获取用户信息
  },
  onShow: function (options) {
    //判断小程序的进入场景
    console.log(options)
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }
    //2.获取用户信息，并将获取到的用户信息传递到服务器
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })
  },
  onHide: function () {
    
  },
  onError: function (msg) {

  },
  globalData:{
    name:'coderWhy',
    age : 18
  }
})

