// pages/merchantAddTicket/merchantAddTicket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    merchantID:null,
    ticketInfo:null,
    newTicketInfo:null,
  },

  submit(){
    var that=this;
    wx.showModal({
      cancelColor: 'cancelColor',
      content: "是否提交添加？",
      success(res){
        if(res.confirm){
          wx.request({
            url: 'http://localhost:8080/ticket/insert',
            data:{
              "merchantId":that.data.merchantID,
              "name":that.data.newTicketInfo.name,
              "img":that.data.newTicketInfo.img,
              "beginDate":that.data.newTicketInfo.beginTime,
              "address":that.data.newTicketInfo.address,
              "price":that.data.newTicketInfo.price,
              "people":that.data.newTicketInfo.people,
              "introduction":that.data.newTicketInfo.introduction,
            },
            method:'GET',
            success(res){
              if(res.data.code==200){
                wx.showToast({
                  title: '添加成功',
                  success:function(){
                    setTimeout(function(){
                      wx.reLaunch({
                        url: '../merchantTicket/merchantTicket?id='+that.data.merchantID,
                      })
                    },2000)
                  },
                })

              }
              else{
                wx.showToast({
                  title: '添加失败',
                  icon:'none'
                })
              }
            }
          })

        }
      }
    })
  },

  inputURL(e){
    var content="newTicketInfo.img";
    this.setData({
      [content]:e.detail.value,
    })
  },

  inputName(e){
    var content="newTicketInfo.name";
    this.setData({
      [content]:e.detail.value,
    })
  },

  inputBGTime(e){
    var content="newTicketInfo.beginTime";
    this.setData({
      [content]:e.detail.value,
    })
  },

  inputEDTime(e){
    var content="newTicketInfo.endTime";
    this.setData({
      [content]:e.detail.value,
    })
  },

  inputAddress(e){
    var content="newTicketInfo.address";
    this.setData({
      [content]:e.detail.value,
    })
  },

  inputPeople(e){
    var content="newTicketInfo.people";
    this.setData({
      [content]:e.detail.value,
    })
  },

  inputPrice(e){
    var content="newTicketInfo.price";
    this.setData({
      [content]:e.detail.value,
    })
  },

  inputIntro(e){
    var content="newTicketInfo.introduction";
    this.setData({
      [content]:e.detail.value,
    })
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
             ticketInfo:res.data.data,
             newTicketInfo:res.data.data,
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
      merchantID:options.id,
    })
    this.getCurrTicketInfo(1);
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