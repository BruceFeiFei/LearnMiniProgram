App({

  onLaunch: function () {
    //获取用户信息
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })
  },

  
  onShow: function (options) {
    //判断小程序进入场景
    console.log(options)
  },

  onHide: function () {
    
  },


  onError: function (msg) {
    
  }
  
})
