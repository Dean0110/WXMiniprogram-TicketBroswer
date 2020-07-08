// pages/phoneModify/phoneModify.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newPhone:null,
    userInfo:null,
  },

  change(e){
    this.data.newPhone=e.detail.value;
  },

  submitPhone:function(){
    let that=this;
    wx.showModal({
      title: "提示",
      content: "是否提交修改？",
      cancelColor: 'cancelColor',
      success(res){
        wx.request({
          url: 'http://localhost:8080/user/updatePhone?id='+app.globalData.id+'&phone='+that.data.newPhone,
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