var posts=["2024/10/27/1/","2024/10/26/cpp-Function overloading/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };