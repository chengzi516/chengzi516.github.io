var posts=["2024/10/26/cpp-Function overloading/","2024/11/03/cpp-reference/","2024/11/03/cpp-Member functions/","2024/11/03/cpp-Structure alignment/","2024/11/03/cpp-initlist/","2024/11/03/cpp-Inheritance and polymorphism/","2024/11/03/cpp-Memory management/","2024/11/04/cpp-String implement/","2024/11/06/Life may exist on Jupiter/","2024/11/06/碎碎念/","2024/12/13/cpp-vector implement/","2024/12/13/linux-makefile/","2024/12/13/linux-process/","2024/12/14/linux-createprocess/","2024/12/15/cpp-list implement/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };