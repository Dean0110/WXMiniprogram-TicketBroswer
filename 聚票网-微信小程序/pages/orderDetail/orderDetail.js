// pages/orderDetail/orderDetail.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
   orderInfo:null,
  },

  getOrderDetail(id){
    let that=this;
      wx.request({
        url: 'http://localhost:8080/order/findOrderMsgById',
        data:{
          "orderId":id
        },
        success(res){
          console.log(res);
          if(res.data.code===200){
            that.setData({
              orderInfo:res.data.data
            })
          }
        }
      })
  },

  quit1(){
    wx.request({
      url: 'http://localhost:8080/order/updateOrderStateByUserId?orderId='+this.data.id+'&state=1',
      method:"PUT"
      // data:{
      //   "orderId":this.data.id,
      //   "state":1
      // }
    });
    wx.navigateBack({});
  },

  again1(){
    wx.redirectTo({
      url: '../buy/buy?ticketId='+this.data.id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.id;
    this.data.id=options.id;
    this.getOrderDetail(id);
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