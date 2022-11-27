//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://yzf.qq.com/fsna/kf-file/kf_pic/20221016/KFPIC_56149c9206ac38555_WXIMAGE_00bff74eafb94f6a9d68e7fec85ef149.jpg?)",
    "url(https://yzf.qq.com/fsna/kf-file/kf_pic/20221127/KFPIC_c31a4085efb295734_WXIMAGE_8317a61f063c4fc1916c7125a0ba58fe.jpg?)",
    "url(https://yzf.qq.com/fsna/kf-file/kf_pic/20221127/KFPIC_b94b66f7d92d76925_WXIMAGE_4a7616ae13b8408295b9da50dcf6e3b5.jpg?)",
    "url(https://yzf.qq.com/fsna/kf-file/kf_pic/20221127/KFPIC_26b76a64a60b94e29_WXIMAGE_d1469d1e0a374bf2a1f9a5d6676ebf5a.jpg?)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * backimg.length);
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  var bannerimg =[
    "url(https://yzf.qq.com/fsna/kf-file/kf_pic/20221016/KFPIC_56149c9206ac38555_WXIMAGE_00bff74eafb94f6a9d68e7fec85ef149.jpg?)",
    "url(https://yzf.qq.com/fsna/kf-file/kf_pic/20221127/KFPIC_c31a4085efb295734_WXIMAGE_8317a61f063c4fc1916c7125a0ba58fe.jpg?)",
    "url(https://yzf.qq.com/fsna/kf-file/kf_pic/20221127/KFPIC_b94b66f7d92d76925_WXIMAGE_4a7616ae13b8408295b9da50dcf6e3b5.jpg?)",
    "url(https://yzf.qq.com/fsna/kf-file/kf_pic/20221127/KFPIC_26b76a64a60b94e29_WXIMAGE_d1469d1e0a374bf2a1f9a5d6676ebf5a.jpg?)"
  ];
  //获取banner图片总数，生成随机数
  var bannerindex =Math.floor(Math.random() * bannerimg.length);
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];