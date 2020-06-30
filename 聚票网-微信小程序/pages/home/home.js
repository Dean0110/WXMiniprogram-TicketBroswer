// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currindexNav:0,
    mynavList:[
      {"text":"演唱会","id":0},
      {"text":"展览休闲","id":1},
      {"text":"话剧歌剧","id":2},
      {"text":"体育","id":3},
      {"text":"全部分类","id":4}
    ],
    myswiperList:[
      {"imgSrc":"../../img/TicketImage/4.jpg"},
      {"imgSrc":"../../img/TicketImage/5.jpg"},
      {"imgSrc":"../../img/TicketImage/6.jpg"},
      {"imgSrc":"../../img/TicketImage/7.jpg"}
    ],
    recommendList:[
      {"imgSrc":"../../img/recommend/6.jpg",
       "kind":"演唱会",
       "price":"150元"},
      {"imgSrc":"../../img/recommend/2.jpg",
       "kind":"话剧歌剧",
       "price":"100元"},
      {"imgSrc":"../../img/recommend/3.jpg",
       "kind":"展览休闲",
       "price":"35元"},
      {"imgSrc":"../../img/recommend/4.jpg",
       "kind":"话剧歌剧",
       "price":"380元"},
      {"imgSrc":"../../img/recommend/5.jpg",
       "kind":"儿童亲子",
       "price":"100元"},
    ],

  moreList:[
      {"imgSrc":"../../img/recommend/1.jpg",
      "title":"扯馆儿喜剧专场———寅派动力",
      "date":"2020.07.02-07.05",
      "place":"重庆|寅派动力",
       "kind":"曲苑杂坛",
       "price":"80元"},
      {"imgSrc":"../../img/recommend/2.jpg",
      "title":"开心麻花爆笑舞台剧《乌龙山伯爵》",
      "date":"2020.07.10-07.12",
      "place":"重庆|重庆文化宫大剧院",
       "kind":"话剧歌剧",
       "price":"100元"},
      {"imgSrc":"../../img/recommend/3.jpg",
      "title":"《重逢岛》新媒体艺术展",
      "date":"2020.06.06-08.16",
      "place":"重庆|原美术馆",
       "kind":"展览休闲",
       "price":"35元"}
    ]
  },

  activeNav(e){
    this.setData({
      currindexNav:e.target.dataset.index
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