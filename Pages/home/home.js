// Pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  //----------------监听页面的生命周期函数------------------
  //页面被加载出来
  onLoad(){
    console.log('onLoad')
    wx.request({
      url: '',
    })
  },
  //页面初次渲染完成时
  onReady(){
    console.log('onReady')
  },
  //页面显示出来时
  onShow(){

  },
  onHide(){

  },
  onUnload(){

  }
})