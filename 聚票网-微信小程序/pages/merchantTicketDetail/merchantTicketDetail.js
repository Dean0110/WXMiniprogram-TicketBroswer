// pages/merchantTicketDetail/merchantTicketDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    editTicket:false,
    ticketInfo:null,
  },

  getCurrTicketInfo(id){
    let that=this;
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
      })
  },

  openEdit(){
    this.setData({
      editTicket:true,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.id;
    this.getCurrTicketInfo(id);
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