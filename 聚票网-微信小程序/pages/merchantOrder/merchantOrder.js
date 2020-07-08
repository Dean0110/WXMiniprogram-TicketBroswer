// pages/merchantOrder/merchantOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    merchantID:null,
    orderList:null,
  },

  deleteOrder:function(event){
    let id=event.currentTarget.dataset.index;
    var that=this;
    wx.showModal({
      title: "提示",
      content: "确认删除订单？",
      cancelColor: 'cancelColor',
      success(res){
        if(res.confirm){
          wx.request({
            url: 'http://localhost:8080/order/deleteOrderById?id='+id,
            method:"DELETE",
            success(res){
              if(res.data.code===200){
                that.loadOrder();
            }
            }
          })
        }else if(res.cancel){
        }
      }
    })


  },

  loadOrder(){
    let that=this;
    wx.request({
      url: 'http://localhost:8080/order/findOrderMsgByMerchantId',
      data:{
        "merchantId":this.data.merchantID
      },
      success(res){
        if(res.data.code==200){
          that.setData({
            orderList:res.data.data
          })
        }

      }
    })
  },

  switchToTicket(){
    wx.redirectTo({
      url: '../merchantTicket/merchantTicket?id='+this.data.merchantID,
    })
  },

  switchToOrder(){
    wx.redirectTo({
      url: '../merchantOrder/merchantOrder?id='+this.data.merchantID,
    })
  },

  switchToInfo(){
    wx.redirectTo({
      url: '../merchantInfoManage/merchantInfoManage?id='+this.data.merchantID,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      merchantID:options.id,
    })
    this.loadOrder();
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