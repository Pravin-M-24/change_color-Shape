let color =[
    "red",
    "cyan",
    "black",
    "voilet",
    "blue",
    "yellow",
    "purple",
    "orange",
    "lightgreen",
    "lemon"
];
let classLst = [
    "triangle","triangle-up","triangle-down","rectangle","circle_inner","trapezoid", "diamond"
]
// let cg =  document.getElementById("circle_bg");
  function changeColor(){
     let cg =  document.getElementById("circle_bg");
    let index = Math.floor(Math.random() * color.length); 
         console.log(index);
        cg.style.backgroundColor = color[index];
  }
  function changeShape(){
    let div = document.getElementById("sp");

   let index = Math.floor(Math.random() * classLst.length);
    while(div.className != classLst[index]) div.className = classLst[index];
}
  

 let color_btn=  document.getElementById("changeColor");
 let shape_btn = document.getElementById("changeShape");

   color_btn.addEventListener("click" , changeColor);
    shape_btn.addEventListener("click",changeShape);
