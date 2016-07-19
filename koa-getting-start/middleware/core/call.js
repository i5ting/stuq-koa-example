function add(a,b){  
  console.log(a+b)
}

function sub(a,b){  
  console.log(a-b)
}

add.call(sub, 3, 1)


// 这个例子中的意思就是用 add 来替换 sub，
// add.call(sub,3,1) == add(3,1) ，
// 所以运行结果为：alert(4); 
// 注意：js 中的函数其实是对象，函数名是对 Function对象的引用。