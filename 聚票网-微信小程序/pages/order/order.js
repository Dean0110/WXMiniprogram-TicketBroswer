// pages/order/order.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // orderList:[
    //   {
    //     "ticket":{
    //       "name":"2019林俊杰[圣所]世界巡回演唱会 河南站",
    //       "imgsrc":"../../img/orderimg/2.jpg",
    //       "ticketPrice":380
    //     },
    //     "orderStatus":"交易成功",
    //     "orderNumber":"24592077",
    //     "startTime":"时间：2018.12.28 10:01:23",
    //     "ticketAmount":1,
    //     "totalPrice":380
    //   },
    // ]
    orderList:null,
  },

  change:function(event){
    
    let id=event.currentTarget.dataset.index;
    console.log(id);
    wx.navigateTo({
      url: '../comment/comment?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    wx.request({
      url: 'http://localhost:8080/order/findOrderMsgByUserId',
      data:{
        "userId":app.data.id

      },
      success(res){
        console.log(res);
        that.setData({
          orderList:res.data.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})