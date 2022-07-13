let bill = document.getElementById("bill");
let msgBill = document.querySelector(".msg-bill");
let tip = document.getElementById("tip");
let custom = document.querySelector(".custom")
let people = document.getElementById("people");
let msgPeople = document.querySelector(".msg-people");
let tipAmount = document.getElementById("tip-amount");
let total = document.getElementById("total");
let resetBtn = document.getElementById("reset-btn");

let billAmount;
let numPeople;
let tipPercent = 0;
let prevTarget;

bill.addEventListener('focusout',(e)=>{
    if(e.target.value==""){
        msgBill.classList.add('error');
        bill.classList.add('error');
        msgBill.innerHTML = "Can't be empty."
    }else if(e.target.value=="0"){
        msgBill.classList.add('error');
        bill.classList.add('error');
        msgBill.innerHTML = "Can't be zero."
    }else{
        msgBill.classList.remove("error");
        bill.classList.remove('error');
        billAmount = e.target.value;

    }

    if(bill.value!="" && tip.value!="" && !Number.isNaN(tipPercent) && people.value!=""){
        calculate();
    }
})

tip.addEventListener('click', (e)=>{
    //set prev target back to default style
    if(tipPercent!=e.target.value && tipPercent!=""){
        if(!prevTarget.target.classList.contains("custom")){
            prevTarget.target.style.background = "#00474B";
            prevTarget.target.style.color = "white";
        }else{
            prevTarget.target.value = "";
        }
    }
    //record current target
    prevTarget = e;
    //get tip percent and set to selected style
    tipPercent = Number.parseInt(e.target.value)/100;
    if(!e.target.classList.contains("custom")){
        e.target.style.background = "#26C2AE";
        e.target.style.color = "#00474B";
    }

    console.log(tipPercent===NaN);
    
    if(bill.value!="" && tip.value!="" && !Number.isNaN(tipPercent) && people.value!=""){
        calculate();
    }
})

custom.addEventListener('focusout',(e)=>{
    tipPercent = Number.parseInt(e.target.value)/100;
    if(bill.value!="" && tip.value!="" && !Number.isNaN(tipPercent) && people.value!=""){
        calculate();
    }
})

people.addEventListener('focusout',(e)=>{
    if(e.target.value==""){
        msgPeople.classList.add('error');
        people.classList.add('error');
        msgPeople.innerHTML = "Can't be empty."
    }else if(e.target.value=="0"){
        msgPeople.classList.add('error');
        people.classList.add('error');
        msgPeople.innerHTML = "Can't be zero."
    }else{
        msgPeople.classList.remove("error");
        people.classList.remove('error');
        numPeople = e.target.value;

    }
    if(bill.value!="" && tip.value!="" && !Number.isNaN(tipPercent) && people.value!=""){
        calculate();
    }
})

resetBtn.addEventListener('click', ()=>{
    resetBtn.disabled = true;
    bill.value = "";
    if(!prevTarget.target.classList.contains("custom")){
        prevTarget.target.style.background = "#00474B";
        prevTarget.target.style.color = "white";
    }else{
        prevTarget.target.value = "";
    }
    people.value = "";

    tipAmount.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
})

function calculate(){
    console.log("in calculate")
    resetBtn.disabled = false;
    let resultTip, resultTotal;
    resultTip = (billAmount*tipPercent)/numPeople;
    resultTotal = (Number(billAmount) + Number(billAmount*tipPercent))/numPeople;

    tipAmount.innerHTML = `$${resultTip.toFixed(2)}`;
    total.innerHTML = `$${resultTotal.toFixed(2)}`;
    
}
