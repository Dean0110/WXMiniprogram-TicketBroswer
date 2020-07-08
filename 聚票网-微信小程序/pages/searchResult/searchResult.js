// pages/searchResult/searchResult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchContent:'',
    ticketInfoList:null,
    showIndex:5,
  },

  back() {
    wx.navigateTo({
      url: '../searchPage/searchPage',
    })
  },

  bindInput:function(e){
    this.setData({
      searchContent:e.detail.value
    })
  },

  search(){
    this.getTicketByKeyword(this.data.archContent);
  },

  getTicketByKeyword(searchContent){
    let that=this;
    that.setData({
      ticketInfoList:null
    })
    // 判断是否搜索为空
    if(this.data.searchContent==''){
      wx.request({
        url: 'http://localhost:8080/ticket/all',
        data:{},
        success(res){
          console.log(res);
          if(res.data.code===200){
          that.setData({
            ticketInfoList:res.data.data
          })
        }
       }
      })
      return;
    }
    wx.request({
      url: 'http://localhost:8080/ticket/searchTicket',
      data:{
        "keyword":this.data.searchContent
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
    this.setData({
      searchContent:options.search_content
    })
    this.getTicketByKeyword(this.data.archContent);
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
    this.setData({
      showIndex:this.data.showIndex+6,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})