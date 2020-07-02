Page({

  data: {

    orderInfoInfo:{
      "ticket":{
        "name":"2019林俊杰[圣所]世界巡回演唱会 河南站",
        "imgsrc":"../../img/orderimg/2.jpg",
        "ticketPrice":380
      },
      "playTime":"2019-04-13 19:30",
      "orderID":"24592077",
      "orderTime":"2018.12.28 10:01:23",
      "orderStatus":"支付成功",
      "ticketAmount":"1",
      "orderTotalPrice":"380.00",
      "sendApproach":"快递",
      "sendID":"2459207711",
      "sendAddress":"重庆市沙坪坝区重庆大学虎溪校区"
    },
  

    evaluate_contant:['评价条目一'],
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../img/icon/no-star.png',
    selectedSrc: '../../img/icon/full-star.png',
    halfSrc: '../../img/icon/half-star.png',
    score: 0,
    scores: [0]
  },

  // 提交事件
  submit_evaluate: function () {
    console.log('评价得分' + this.data.scores*2)
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
  }
})