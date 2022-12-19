



const myArray=[document.getElementById("length-el"),
document.getElementById("volume-el"),
document.getElementById("mass-el")]
const myConversionFactor=[3.281,0.264,2.204]
const myMetric=["metres","litres","kilograms"]
const myImperial=["feet","gallons","pounds"]
const myUnitString=["Length(Metres/Feet)", "Volume(Litres/Gallons)", "Mass(Kilograms/Pounds)"]



render(myArray,myConversionFactor,myMetric,myImperial,myUnitString,1)

document.getElementById("convert-el").addEventListener("click", () =>{
render(myArray,myConversionFactor,myMetric,myImperial,myUnitString,inputValue)
     })



function render(arr,cVf,metric,imperial,unitString,inputValue){
  
    for (let i=0; i<arr.length; i++){
        
    
      arr[i].innerHTML=  `<p>  ${unitString[i]}</p>
      <p>${inputValue} ${metric[i]} is ${(inputValue*cVf[i]).toFixed(3)} ${imperial[i]} 
       ${inputValue} ${imperial[i]} is ${(inputValue/cVf[i]).toFixed(3)} ${metric[i]}
       </p>`        
       
    }
}



