// javascript




const inputEl = document.getElementById("input-el")
const convertEl=document.getElementById("convert-el")
const lengthEl=document.getElementById("length-el")
const volumeEl=document.getElementById("volume-el")
const massEl=document.getElementById("mass-el")


const myArray=[lengthEl,volumeEl,massEl]
const myConversionFactor=[3.281,0.264,2.204]
const myMetric=["metres","litres","kilograms"]
const myImperial=["feet","gallons","pounds"]
const myUnitString=["Length(Metres/Feet)", "Volume(Litres/Gallons)", "Mass,(Kilograms/Pounds)"]

let inputValue = 0


render(myArray,myConversionFactor,myMetric,myImperial,myUnitString,inputValue)

convertEl.addEventListener("click", function(){
render(myArray,myConversionFactor,myMetric,myImperial,myUnitString,inputValue)
     })



function render(arr,cVf,metric,imperial,unitString,inputValue){
 inputValue= inputEl.value   
    for (let i=0; i<arr.length; i++){
        let multiply= inputValue*cVf[i]
        let divide= inputValue/cVf[i]
    
      arr[i].innerHTML=  `<p>  ${unitString[i]}</p>
      <p>${inputValue} ${metric[i]} is ${multiply.toFixed(3)} ${imperial[i]} 
       ${inputValue} ${imperial[i]} is ${divide.toFixed(3)} ${metric[i]}
       </p>`        
       
    }
}
