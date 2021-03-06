// pages/user/user_main.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    menuitems:[
      { text: '订阅', url: '../subscribe/subscribe', icon: '../../img/icon/dingyue.png'},
      // { text: '优惠券', url: '../discountCoupon/discountCoupon', icon: '../../img/icon/youhuiquan.png'},
      // { text: '购票人', url: '../booker/booker', icon: '../../img/icon/goupiaoren.png'},
      { text: '收货地址', url: '../deliveryAddress/deliveryAddress', icon: '../../img/icon/shouhuodizhi.png'},
      { text: '修改号码', url: '../phoneModify/phoneModify', icon: '../../img/icon/xiugaihaoma.png'},
      { text: '意见反馈', url: '../feedback/feedback', icon: '../../img/icon/yijianfankui.png'}
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