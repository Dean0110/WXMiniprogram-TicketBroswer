// pages/ticket/ticket.js
// let ticketInfo
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subimg:[
      {"img":"../../img/icon/no-star.png","id":0},
      {"img":"../../img/icon/full-star.png","id":1},
    ],
    currImg:0,
    ticketInfo:null,
    merchantInfo:null,
    ticketid:null,
    subscribeList:null,
    mentionDetail:"每人最多购买五张，须携带纸质门票验票入场，儿童一律凭票入场，一个订单对应一个证件，证件支持：身份证。"
  },

  buy(){
    wx.navigateTo({
      url:'../buy/buy?ticketId='+this.data.ticketid
    })
  },

  change(){
    let index=(this.data.currImg+1)%2;
    this.setData({
      currImg:index
    });

    if(this.data.currImg===0){
      wx.request({
        url: 'http://localhost:8080/subscribe/deleteSubscribeByEntity?userId='+app.globalData.id+
        '&merchantId='+this.data.merchantInfo.id,
        method:"DELETE",
      })
    }
    if(this.data.currImg){
      wx.request({
        url: 'http://localhost:8080/subscribe/insertSubscribeByEntity?userId='+app.globalData.id+
        '&merchantId='+this.data.merchantInfo.id,
        method:"POST",
      })
    }
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let id=options.id;
      this.data.ticketid=options.id;
      let that =this;
      let currInfo=null;
      wx.request({
        url: 'http://localhost:8080/ticket/findTicketById',
        data:{
          "id":id
        },
        success(res){
        //console.log(res);
         if(res.data.code===200){
           that.setData({
             ticketInfo:res.data.data
           })
         }
        }
      }),
      wx.request({
        url: 'http://localhost:8080/ticket/findTicketMsgById',
        data:{
          "id":id
          // "id":1
        },
        success(res){
         //console.log(res);
         if(res.data.code===200){
           that.setData({
             merchantInfo:res.data.data
           });
          //  that.setData({
          //    currInfo:res.data.data
          //  });
          currInfo=res.data.data;
          // console.log(currInfo);
          wx.request({
              url: 'http://localhost:8080/subscribe/findMerchantMsg',
              data:{
                "userId":app.globalData.id
                // "id":1
              },
              success(res){
              //console.log(res);
              for(let i=0;i<res.data.data.length;i++){
                if(res.data.data[i].id===currInfo.id){
                  that.setData({
                    currImg:1
                  })
                }
              }
              }
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