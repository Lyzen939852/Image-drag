//第一步  获取结点
//fill:第一个盒子里面的图片
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");


//第二步  fill事件监听

fill.addEventListener("dragstart",dragStart);
fill.addEventListener("dragend",dragEnd);

//第三步 fill拖动函数（开始拖动）
function dragStart(){
  //this指向fill
  this.className += " hold"; //.fill.hold样式
  //拖动图片时，同时清除盒子中的图片
  //invisible:不可见
  setTimeout(()=>(
      this.className = "invisible"),0)
}

//结束拖动
function dragEnd(){
    //拖动结束时，还原原本状态
    this.className = "fill";
}

//第四步 循环empties盒子并设置事件监听
for(const empty of empties){
   
    empty.addEventListener("dragover",dragOver);
    
    empty.addEventListener("dragenter",dragEnter);
    
    empty.addEventListener("dragleave", dragLeave);
    
    empty.addEventListener("drop", dragDrop);
}

 //dragover：当被拖动对象，在另一对象容器范围内拖动时，进行触发
function dragOver(e){
    e.preventDefault();
}

//dragenter：当被拖动对象，进入容器范围内时，进行触发
function dragEnter(e){
    e.preventDefault();
    //添加hovered样式
    this.className += " hovered";
} 


//dragLeave：当被拖动对象，离开当前容器范围内时，进行触发
function dragLeave(){
   this.className = "empty";
}

//drop：拖动过程中，释放鼠标时，进行触发
function dragDrop(){
    this.className = "empty";
    //
    this.append(fill);
    
}