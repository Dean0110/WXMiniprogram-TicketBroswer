// pages/ticket/ticket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ticketDetail:{
      "ticket":{
        "name":"曹轩宾2020[我]全国巡回演唱会 西安站",
        "imgsrc":"../../img/TicketImage/6.jpg",
        "ticketPrice":150
      },
      "time":{
        "date":"2020.10.16",
        "time":"20:30",
        "describe":"约90分钟，仅供参考，最终以现场实际时长为准"
      },
      "place":{
        "city":"西安市",
        "houseName":"MAO Livehouse西安",
        "location":"雁翔路3369号曲江创意谷文化产业园地内"
      }
    },
  },

  addOrder(){
    var order_page=pages[6]
    order_page.setData({
      orderList:this.data.orderList.push({
        "ticket":{
          "name":"2019林俊杰[圣所]世界巡回演唱会 河南站",
          "imgsrc":"../../img/orderimg/2.jpg",
          "ticketPrice":380
        },
        "orderStatus":"交易成功",
        "orderNumber":"24592077",
        "startTime":"时间：2018.12.28 10:01:23",
        "ticketAmount":1,
        "totalPrice":380
      })
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