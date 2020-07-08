// pages/home/home.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMoreView:false,
    currindexNav:0,
    mynavList:[
      {"text":"全部","id":0},
      {"text":"演唱会","id":1},
      {"text":"话剧歌剧","id":2},
      {"text":"音乐会","id":3},
      {"text":"展览休闲","id":4},
      {"text":"曲苑杂坛","id":5},
      {"text":"儿童亲子","id":6}
    ],
    myswiperList:[
      {"imgSrc":"../../img/sliderImage/mbttdys.png","id":'22'},
      {"imgSrc":"../../img/sliderImage/byx.png","id":23},
      {"imgSrc":"../../img/sliderImage/yghyh.jpg","id":24}
    ],
    recommendList:null,
    moreList:null,
    showIndex:5,
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
    this.setData({
      currindexNav:e.target.dataset.index
    });
    wx.navigateTo({
      url: '../variety/variety?tagname='+this.data.mynavList[this.data.currindexNav].text+"&index="+this.data.currindexNav,
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
    let that=this;
    wx.request({
      url: 'http://localhost:8080/ticket/findMoreTicket',
      data:{
        "id":app.globalData.id
      },
      success(res){
        console.log(res);
        if(res.data.code===200){
          that.setData({
            moreList:res.data.data
          })
        }
      }
    }),
    wx.request({
      url: 'http://localhost:8080/ticket/findSubscribe',
      data:{
        "id":app.globalData.id
      },
      success(res){
        console.log(res);
        if(res.data.code===200){
          that.setData({
            recommendList:res.data.data
          })
        }
      }
    })
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