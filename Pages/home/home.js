// Pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "dotdot",
    age: 18,
    student:[
      { id: 101, name: "haha"},
      { id: 102, name: "heihei" },
      { id: 103, name: "houhou" },
    ],
    counter:0
  },
  handlebtnClick(){
    this.setData({
      counter:this.data.counter + 1
    })
    console.log("加1次")
  },
  handleSub() {
    this.setData({
      counter: this.data.counter - 1
    })
    console.log('减1次')
  }
})
