// pages/searchPage/searchPage.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchContent:"",

    searchHistory:null,
      
    searchRecommend:null,
  },

  bindInput:function(e){
    this.setData({
      searchContent:e.detail.value
    })
  },

  search(){
    app.data.searchHistory.push(this.data.searchContent);
    console.log(app.data.searchHistory);
    wx.navigateTo({
      url: '../searchResult/searchResult?search_content='+this.data.searchContent,
    })
  },

  searchHisTag(e){
    var index=e.currentTarget.dataset.index
    var content=this.data.searchHistory[index]
    this.setData({
      searchContent:content 
    }),
    this.search()
  },

  searchRecTag(e){
    var index=e.currentTarget.dataset.index
    var content=this.data.searchRecommend[index]
    this.setData({
      searchContent:content
    }),
    this.search()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      searchHistory:app.data.searchHistory
      
    });
    this.setData({
      searchRecommend:app.data.searchRecommend
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