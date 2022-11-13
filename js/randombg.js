//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://yzf.qq.com/fsna/kf-file/kf_pic/20221016/KFPIC_56149c9206ac38555_WXIMAGE_00bff74eafb94f6a9d68e7fec85ef149.jpg?)",
    "url(https://source.fomal.cc/img/default_cover_160.webp)",
    "url(https://source.fomal.cc/img/default_cover_2.webp)",
    "url(http://img.hb.aicdn.com/a13644264e8d4f5f52a74c88d75d8ff22c34eb12f6b4c5-k1IIl6)",
    "url(https://source.fomal.cc/img/dm5.webp)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * backimg.length);
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  var bannerimg =[
    "url(https://yzf.qq.com/fsna/kf-file/kf_pic/20221016/KFPIC_56149c9206ac38555_WXIMAGE_00bff74eafb94f6a9d68e7fec85ef149.jpg?)",
    "url(https://source.fomal.cc/img/default_cover_160.webp)",
    "url(https://source.fomal.cc/img/default_cover_2.webp)",
    "url(http://img.hb.aicdn.com/a13644264e8d4f5f52a74c88d75d8ff22c34eb12f6b4c5-k1IIl6)",
    "url(https://source.fomal.cc/img/dm5.webp)"
  ];
  //获取banner图片总数，生成随机数
  var bannerindex =Math.floor(Math.random() * bannerimg.length);
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];