// pages/buy/buy.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:null,
    ticketid:null,
    address:app.globalData.address,
    beizhu:null,
    count:1,
    id:app.globalData.id
  },

  getBeizhu(e){
    this.data.beizhu=e.detail.value;
  },

  getCount(e){
    this.data.count=e.detail.value;
  },

  insert(){
    wx.request({
      url: 'http://localhost:8080/order/insert?userId='+this.data.id+'&ticketId='+this.data.ticketid+
      '&count='+this.data.count+'&remark='+this.data.beizhu+'&address='+this.data.address,
      method:"POST",
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.ticketid=options.ticketId;
    let that=this;
    wx.request({
      url: 'http://localhost:8080/ticket/findTicketById',
      data:{
        "id":this.data.ticketid
      },
      success(res){
        console.log(res);
        if(res.data.code===200){
          that.setData({
            detail:res.data.data
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