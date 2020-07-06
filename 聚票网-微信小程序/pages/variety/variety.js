// pages/variety/variety.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currindexNav:0,
    tagname:null,
    mynavList:[
      {"text":"全部","id":0},
      {"text":"演唱会","id":1},
      {"text":"话剧歌剧","id":2},
      {"text":"音乐会","id":3},
      {"text":"展览休闲","id":4},
      {"text":"曲苑杂坛","id":5},
      {"text":"儿童亲子","id":6}
    ],
    ticketByKindList:null,
  },

  activeNav(e){
   let that=this;
   this.setData({
     currindexNav:e.target.dataset.index
   })
   this.setData({
     tagname:this.data.mynavList[this.data.currindexNav].text
   })
   if(this.data.currindexNav===0){
      wx.request({
        url: 'http://localhost:8080/ticket/all',
        success(res){
          if(res.data.code===200){
            that.setData({
              ticketByKindList:res.data.data
            })
          }
        }
      })
   }
   else{
   wx.request({
    url: 'http://localhost:8080/ticket/searchByTagName',
    data:{
      "name":this.data.tagname
    },
    success(res){
      console.log(res);
      if(res.data.code===200){
        that.setData({
          ticketByKindList:res.data.data
        })
      }
    }
  
  })
}
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    let tagname=options.tagname;
    let index=options.index;
    console.log(tagname);
    console.log(index);
    this.setData({
      currindexNav:index
    })
    this.setData({
      tagname:tagname
    })
    wx.request({
      url: 'http://localhost:8080/ticket/searchByTagName',
      data:{
        "name":this.data.tagname
      },
      success(res){
        console.log(res);
        if(res.data.code===200){
          that.setData({
            ticketByKindList:res.data.data
          })
        }
      }
    })
   // console.log(this.data.currindexNav);
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