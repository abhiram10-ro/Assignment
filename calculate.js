function cal(){
    var v= [0,0,0,0,0];
    var a=document.getElementById("1").value;
    v[0]=a;
    if(a==undefined){
        v[0]=0
    }
    a=document.getElementById("2").value;
    v[1]=a;
    if(a==undefined){
        v[0]=0
    }
    a=document.getElementById("3").value;
    v[2]=a;
    if(a==undefined){
        v[0]=0
    }
    a=document.getElementById("4").value;
    v[3]=a;
    if(a==undefined){
        v[0]=0
    }
    a=document.getElementById("5").value;
    v[4]=a;
    if(a==undefined){
        v[0]=0
    }
    var sum=0;
    var cost=[55,20,10,40,180]
    for(let i=0;i<5;i++){
        sum+=cost[i]*v[i];
    }
    var s = "List of Selected Items Are:";
    if(document.getElementById("1a").checked){
        s=s+"Notebook"+"("+v[0]+")"+"<br>";
    }
    if(document.getElementById("2a").checked){
        s=s+"Pen"+"("+v[1]+")"+"<br>";
    }
    if(document.getElementById("3a").checked){
        s=s+"Pencil"+"("+v[2]+")"+"<br>";
    }
    if(document.getElementById("4a").checked){
        s=s+"Ice-Cream"+"("+v[3]+")"+"<br>";
    }
    if(document.getElementById("5a").checked){
        s=s+"Geometry box"+"("+v[4]+")"+"<br>";
    }
    document.querySelector(".d").innerHTML="<br>"+s+"<br>"+"Total Bill Is ="+" "+sum;
}
function val(){
    p=/^[1-9]$/

 var a=document.getElementById("1").value; 
    if(!p.test(a)){
        document.querySelector(".lst").innerHTML="Enter Only Numbers";
    }
  var h=document.getElementById("2").value;   
 if(!p.test(h) ){
     document.querySelector(".lst").innerHTML="Enter Only Numbers";
 }
 var b=document.getElementById("3").value;   
 if(!p.test(b)){
     document.querySelector(".lst").innerHTML="Enter Only Numbers";
 }
 var c=document.getElementById("4").value;   
 if(!p.test(c)){
     document.querySelector(".lst").innerHTML="Enter Only Numbers";
 }
 var d=document.getElementById("5").value;   
 if(!p.test(d)){
     document.querySelector(".lst").innerHTML="Enter Only Numbers";
 }
else{
    document.querySelector(".lst").innerHTML="You Can Check Your Bill";

} 
}