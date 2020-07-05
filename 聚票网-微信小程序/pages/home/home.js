// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMoreView:false,
    currindexNav:0,
    mynavList:[
      {"text":"演唱会","id":0},
      {"text":"展览休闲","id":1},
      {"text":"话剧歌剧","id":2},
      {"text":"音乐剧","id":3},
      {"text":"全部分类","id":4}
    ],
    myswiperList:[
      {"imgSrc":"../../img/sliderImage/4.jpg"},
      {"imgSrc":"../../img/sliderImage/5.jpg"},
      {"imgSrc":"../../img/sliderImage/6.jpg"},
      {"imgSrc":"../../img/sliderImage/7.jpg"}
    ],
    recommendList:null,
    moreList:null,
  },

  showMore(){
    this.setData({
      showMoreView:!this.data.showMoreView
    })
  },

  hideMore(){
    this.setData({
      showMoreView:false
    })
  },

  turnToMerchant(){
    wx.navigateTo({
      url:'../merchantLogin/merchantLogin'
    })
  },

  turnToManager(){
    wx.navigateTo({
      url:'../managerLogin/managerLogin'
    })
  },

  searchNavigateTo(){
    wx.navigateTo({
      url: '../searchPage/searchPage',
    })
  },

  activeNav(e){
    // console.log(this.data.mynavList[e.target.dataset.index].text);
    this.setData({
      currindexNav:e.target.dataset.index
    })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    wx.request({
      url: 'http://localhost:8080/ticket/all',
      success(res){
        console.log(res);
        if(res.data.code===200){
          that.setData({
            recommendList:res.data.data
          }),
          that.setData({
            moreList:res.data.data
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