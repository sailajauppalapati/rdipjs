function clr(){
  document.getElementById("result").value="";
}
function dis(val) 
         { 
             document.getElementById("result").value+=val ;
         } 
function addition(m,n){
        var k= parseInt(m)+parseInt(n);

        return k;
    }
    function subtraction(m,n){
        var k= parseInt(m)-parseInt(n);

        return k;
    }
    function multiplication(m,n){

        var k= parseInt(m)*parseInt(n);

        return k;
    }
    function division(m,n){
        var k= parseInt(m) / parseInt(n);

        return k;
    }
     function percentage(m,n){

        var k= parseInt(m)/100;
        var s=k*parseInt(n);

        return s;
    }
     function absolute(m){
        var k=Math.abs(m);
        return k;
    }
     function squareroot(m){

        var k=Math.sqrt(m);
        var s=k.toFixed(3);

        return s;
    }


function solve(){
      inp=document.getElementById("result").value;
      z=inp.split(" ");
      if(z[0]=='abs' && z.length==4)
        z[1]=z[2]+z[3];
       if( z[1] =='+')
        var dis=this.addition(z[0],z[2]);
       else if(z[1]=='-')
        var dis=this.subtraction(z[0],z[2]);
    else if(z[1]=='*')
        var dis=this.multiplication(z[0],z[2]);
    else if(z[1]=='/')
        var dis=this.division(z[0],z[2]);
    else if(z[1]=='%')
        var dis=this.percentage(z[0],z[2]);
    else if(z[0]=='abs')
        var dis=this.absolute(z[1]);
    else if(z[0]=='sqrt')
        var dis=this.squareroot(z[1]);

    document.getElementById('result').value=dis;
    return dis;
} 





function validatename()
{
    var name=document.getElementById("fname").value;
    if(name.match(/^[a-zA-Z]/))
    {
        return true;
    }
    else  
    {  
        alert("Please Enter alphabet in place of starting letter of name ");
        return false;
    }
}

function validatephno()
{
  var num = document.getElementById("number").value;
  if (isNaN(num) || num.length!=10)
  {
    alert("Phone Number is not valid");
    return false;
  } 
  else 
  {
    return true;
  }
}

function validateemail(){
    var email=document.getElementById("email").value;
    atrpos = email.indexOf("@");
    dtpos = email.lastIndexOf(".");
    if((atrpos<1)||(dtpos-atrpos<2)){
        alert("Please Enter correct email Id");
        return false;
    }
    else
    {
        return true;
    }
}


function finalval()
{
    if(validatename() && validatephno() && validateemail())
    {
        alert("All values you have entered are Valid");
        return true;
    }
    else
    {   
        alert("Values you have entered are not Valid");
        return false;
    }

}





function finalpalin()
{
  pal=document.getElementById("palin").value;
  k=pal.replace(/\s/g,"").toLowerCase();

    if(k==k.split("").reverse().join(""))
    {
        alert(`${pal} is a Palindrome`);
        return true;
    }
    else
    {  
        alert(`${pal} is not a Palindrome`);
        return false;
    }
}


function finalanag(){
    a=document.getElementById("anag").value;
    b=document.getElementById("anag2").value;
    s=a.replace(/\s/g,"").toLowerCase();
    h=b.replace(/\s/g,"").toLowerCase();
    s = s.split('').sort().join('');
    h = h.split('').sort().join('');

    if(s==h)
    {
        alert(`${a},${b} are anagrams`);
        return true;
    }
    else
    {
        alert(`${a},${b} are not anagrams`);
        return false;
    }
}




function game(){
    var l=Math.floor(Math.random() * 1000);
    var h=Math.floor(Math.random() * 1000);
  
    document.getElementById("sk").value = l;
    document.getElementById("lh").value = h;
    var mapping={'0':'Human' , '1':"Cockroach" , '2':'NuclearBomb'};
    
    var m=parseInt(l)%3;
    var n=parseInt(h)%3;
     
    if(m==n){
      res = "TIE";
    }
    else if(m==1&&n==0||m==0&&n==1){
      res = "Human Survives";
    }
    else if(m==1&&n==2||m==2&&n==1){
      res = "Cockroach Survives";
    }
    else if(m==0&&n==2||m==2&&n==0){
      res = "Human Dies";
    }
    document.getElementById("finalresult").value=res;
    return res;

}