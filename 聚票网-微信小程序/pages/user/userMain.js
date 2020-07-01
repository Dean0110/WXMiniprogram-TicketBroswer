// pages/user/user_main.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    menuitems:[
      { text: '订阅', url: '../subscribe/subscribe', icon: '../../img/icon/订阅.png'},
      { text: '优惠券', url: '../userinfo/userinfo', icon: '../../img/icon/优惠券.png'},
      { text: '购票人', url: '../userinfo/userinfo', icon: '../../img/icon/购票人.png'},
      { text: '收货地址', url: '../userinfo/userinfo', icon: '../../img/icon/收货地址.png'},
      { text: '修改号码', url: '../userinfo/userinfo', icon: '../../img/icon/修改号码.png'},
      { text: '意见反馈', url: '../userinfo/userinfo', icon: '../../img/icon/意见反馈.png'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo:app.globalData.userInfo
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