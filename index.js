/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// javascript




const inputEl = document.getElementById("input-el")
const convertEl=document.getElementById("convert-el")



const myArray=[document.getElementById("length-el"),
document.getElementById("volume-el"),
document.getElementById("mass-el")]
const myConversionFactor=[3.281,0.264,2.204]
const myMetric=["metres","litres","kilograms"]
const myImperial=["feet","gallons","pounds"]
const myUnitString=["Length(Metres/Feet)", "Volume(Litres/Gallons)", "Mass(Kilograms/Pounds)"]

let inputValue = 1

render(myArray,myConversionFactor,myMetric,myImperial,myUnitString,inputValue)

convertEl.addEventListener("click", function(){
render(myArray,myConversionFactor,myMetric,myImperial,myUnitString,inputValue)
     })



function render(arr,cVf,metric,imperial,unitString,inputValue){
 inputValue= inputEl.value   
    for (let i=0; i<arr.length; i++){
        
    
      arr[i].innerHTML=  `<p>  ${unitString[i]}</p>
      <p>${inputValue} ${metric[i]} is ${(inputValue*cVf[i]).toFixed(3)} ${imperial[i]} 
       ${inputValue} ${imperial[i]} is ${(inputValue/cVf[i]).toFixed(3)} ${metric[i]}
       </p>`        
       
    }
}


function render(arr,cVf,metric,imperial,unitString,inputValue){
 inputValue= inputEl.value   
    for (let i=0; i<arr.length; i++){
        
    
      arr[i].innerHTML=  `<p>  ${unitString[i]}</p>
      <p>${inputValue} ${metric[i]} is ${(inputValue*cVf[i]).toFixed(3)} ${imperial[i]} 
       ${inputValue} ${imperial[i]} is ${(inputValue/cVf[i]).toFixed(3)} ${metric[i]}
       </p>`        
       
    }
}
