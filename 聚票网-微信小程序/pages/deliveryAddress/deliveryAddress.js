// pages/deliveryAddress/deliveryAddress.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newAddr:null,
    userInfo:null,
  },

  newAddress(e){
    this.data.newAddr=e.detail.value;
   // console.log(this.data.newAddr);
  },
  submitAddress:function(){
    console.log(this.data.newAddr);
    let that=this;
    wx.showModal({
      title: "提示",
      content: "是否提交修改？",
      cancelColor: 'cancelColor',
      success(res){
        wx.request({
          url: 'http://localhost:8080/user/updateAddress?id='+app.globalData.id+'&address='+that.data.newAddr,
          method:"PUT",
        })
        if(res.confirm){
          wx.showToast({
            title: '修改成功',
          })
        }else if(res.cancel){

        }
      }
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
      url: 'http://localhost:8080/user/findById',
      data:{
        "id":app.globalData.id
      },
      success(res){
        console.log(res);
        if(res.data.code===200){
          that.setData({
            userInfo:res.data.data
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})