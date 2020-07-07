Page({

  data: {
    orderInfo:null,
    evaluate_contant:['评价条目一'],
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../img/icon/no-star.png',
    selectedSrc: '../../img/icon/full-star.png',
    halfSrc: '../../img/icon/half-star.png',
    score: 0,
    scores: [0],
    commentdetail:null,
    id:null
  },

  commentInfo(e){
    this.setData({
      commentdetail:e.detail.value
    }) 
  },
  // 提交事件
  submit_evaluate: function () {
    let score=this.data.score*2;
    //console.log('评价得分' + this.data.scores*2);
    //console.log(this.data.commentdetail);
    wx.request({
      url: 'http://localhost:8080/order/updateOrderCommentByUserId?id='+this.data.id+'&comment='+this.data.commentdetail+'&level='+score,
      method:'PUT',
    })
  },

  //点击左边,半颗星
  selectLeft: function (e) {
    var score = e.currentTarget.dataset.score
    if (this.data.score == 0.5 && e.currentTarget.dataset.score == 0.5) {
      score = 0;
    }

    this.data.scores[e.currentTarget.dataset.idx] = score,
      this.setData({
        scores: this.data.scores,
        score: score
      })

  },

  //点击右边,整颗星
  selectRight: function (e) {
    var score = e.currentTarget.dataset.score

    this.data.scores[e.currentTarget.dataset.idx] = score,
      this.setData({
        scores: this.data.scores,
        score: score
      })
  },

  onLoad:function(options){
    let that=this;
    this.setData({
      id:options.id
    })
    wx.request({
      url: 'http://localhost:8080/order/findOrderMsgById',
      data:{
        "orderId":this.data.id
      },
      success(res){
        console.log(res);
        if(res.data.code===200){
          that.setData({
            orderInfo:res.data.data
          })
        }
      }
    })
  }
})