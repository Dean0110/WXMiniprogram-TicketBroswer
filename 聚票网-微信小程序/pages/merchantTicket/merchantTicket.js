// pages/merchantTicket/merchantTicket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    merchantID:2,
    ticketInfoList:null,
  },


  getTicketByID(){
    let that=this;
    that.setData({
      ticketInfoList:null
    })
    // 判断是否搜索为空
    wx.request({
      url: 'http://localhost:8080/ticket/allMerchantTicket',
      data:{
        "merchantId":this.data.merchantID
      },
      success(res){
        console.log(res);
        if(res.data.code===200){
        that.setData({
          ticketInfoList:res.data.data
        })
      }
      }
    })
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTicketByID();
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