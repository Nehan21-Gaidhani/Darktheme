var count=0;
function clicked()
{
if(count%2==0 && count!=0)
{
  let ele=document.getElementsByTagName('body');
  ele[0].style.backgroundColor="white";
  let ele2=document.getElementsByClassName('ab')
  ele2[0].style.backgroundColor="white";
  let ele3=document.getElementsByClassName('contact-form')
    ele3[0].style.color="black"
    

  count++;

}
else
{
    let ele=document.getElementsByTagName('body');
    ele[0].style.backgroundColor="black";
    let ele2=document.getElementsByClassName('ab')
    ele2[0].style.backgroundColor="grey"
    let ele3=document.getElementsByClassName('contact-form')
    ele3[0].style.color="white"
   
   

    
    count++;

}
}

function text(){
 

}