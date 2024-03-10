let select=document.querySelectorAll('.select');
let userinp=document.getElementById("userinp");
let result=document.getElementById("result");




fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayDropDown(res))

function displayDropDown(res){
  let curr = Object.entries(res);
  for(i=0;i<curr.length;i++){
   let opt=`<option value="${curr[i][0]}">${curr[i][0]}</option>`
    select[0].innerHTML+=opt
    select[1].innerHTML+=opt
  }
}

userinp.addEventListener('input',()=>{
   let curr1=select[0].value;
   let curr2=select[1].value;
   let inpval=userinp.value;

   if(curr1==curr2){
    alert("choose different currencies");

   }
   else{
    convert(curr1,curr2,inpval)
   }

})

function convert(curr1,curr2,inpval){
    const host = 'api.frankfurter.app';
   fetch(`https://${host}/latest?amount=${inpval}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    // alert(`10 GBP = ${data.rates.USD} USD`);
  result.value=Object.values(data.rates)[0]
  });
}