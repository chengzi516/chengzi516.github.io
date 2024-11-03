var posts=["2024/10/26/cpp-Function overloading/","2024/11/03/cpp-reference/","2024/11/03/cpp-Member functions/","2024/11/03/cpp-Structure alignment/","2024/11/03/cpp-initlist/","2024/11/03/cpp-management/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };