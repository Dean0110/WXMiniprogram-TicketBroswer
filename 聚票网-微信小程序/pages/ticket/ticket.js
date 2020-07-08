// pages/ticket/ticket.js
// let ticketInfo
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ticketInfo:null,
    merchantInfo:null,
    ticketid:null,
    mentionDetail:"每人最多购买五张，须携带纸质门票验票入场，儿童一律凭票入场，一个订单对应一个证件，证件支持：身份证。"
  },

  buy(){
    wx.navigateTo({
      url:'../buy/buy?ticketId='+this.data.ticketid
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let id=options.id;
      this.data.ticketid=options.id;
      let that =this;
      wx.request({
        url: 'http://localhost:8080/ticket/findTicketById',
        data:{
          "id":id
        },
        success(res){
         console.log(res);
         if(res.data.code===200){
           that.setData({
             ticketInfo:res.data.data
           })
         }
        }
      }),
      wx.request({
        url: 'http://localhost:8080/ticket/findTicketMsgById',
        data:{
          "id":id
        },
        success(res){
         console.log(res);
         if(res.data.code===200){
           that.setData({
             merchantInfo:res.data.data
           })
         }
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