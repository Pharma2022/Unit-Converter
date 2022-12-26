const myUnitObjArray=[
    
    {
    elementId:"length-el",
    conversionFactor:3.281,
    metric: "metres", 
    imperial: "feet", 
    html:"Length(Metres/Feet)"  
    },
    {
    elementId:"volume-el",
    conversionFactor:0.264,
    metric: "litres",
    imperial: "gallons",
    html:"Volume(Litres/Gallons)",  
    },
      {
    elementId:"mass-el",
    conversionFactor:0.264,
    metric:"kilos",
    imperial: "pounds",
    html:"Mass(Kilos/Pounds)",  
    },
    
]
const  render=data=>{

    let inputValue = document.getElementById("input-el").value? 
    document.getElementById("input-el").value:1
 
    for (let element of data){
    let {elementId,conversionFactor,metric,imperial,html}= element
        
    let multiply= (inputValue*element.conversionFactor)
      
   document.getElementById(`${elementId}`).innerHTML=    `<h3>  ${html}</h3>
            <p>${inputValue} ${metric} is ${multiply.toFixed(3)}  ${imperial} |  ${inputValue} ${imperial} is ${(1/multiply).toFixed(3)} ${metric}
            </p>`}
            }       

document.getElementById("convert-el").addEventListener("click",()=>render(myUnitObjArray))
     render(myUnitObjArray)