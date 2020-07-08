// pages/merchantLogin/merchantLogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    merchantID:null,
    merchantPswd:null,
  },

  inputLoginID(e){
    this.setData({
      merchantID:e.detail.value,
    })
  },

  inputPswd(e){
    this.setData({
      merchantPswd:e.detail.value,
    })
  },

  merchantLogin(){
    var that=this;
    wx.request({
      url: 'http://localhost:8080/merchant/loginById',
      data:{
        "id":that.data.merchantID,
        "password":that.data.merchantPswd,
      },
      success(res){
        if(res.data.code==200){
          getApp().globalData.merchantID=that.data.merchantID;
          wx.reLaunch({
            url: '../merchantTicket/merchantTicket?id='+that.data.merchantID,
          })
        }
        else{
          wx.showToast({
            title: '请正确输入登录ID与密码',
            icon: 'none',
          })
        }
      }
  
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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