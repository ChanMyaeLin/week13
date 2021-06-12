var sel_moneyunit1=document.getElementById('exchange_valueunit1')
var sel_moneyunit2=document.getElementById('exchange_valueunit2')

var inputvalue1=document.getElementById('selectinput1')
var inputvalue2=document.getElementById('selectinput2')


inputvalue1.value=1500;
inputvalue2.value=1;

inputvalue1.onkeyup = MMKtoUSD ;
inputvalue2.onkeyup = USDtoMMK;


    function MMKtoUSD1(){
        inputvalue2.value=inputvalue1.value*1500
    }
    function USDtoMMK1(){
        inputvalue1.value=inputvalue2.value/1500
    }
    function YwantoMMK1(){
        inputvalue2.value=inputvalue1.value*170
    }
    function MMKtoYwan1(){
        inputvalue1.value=inputvalue2.value/170
    }
    function MMKtoBath1(){
        inputvalue2.value=inputvalue1.value*50
    }
    function BathtoMMK1(){
        inputvalue1.value=inputvalue2.value/50
    }

        function MMKtoUSD() {
            inputvalue2.value=inputvalue1.value/1500
        }

        function USDtoMMK(){
            inputvalue1.value =inputvalue2.value*1500;
        }

        function YwantoMMK(){
            var MMK= inputvalue2.value*170;
            inputvalue1.value =MMK;
        }

        function MMKtoYwan1(){
            var Ywan=inputvalue1.value/170;
            inputvalue2.value=Ywan;
        }

        function BathtoMMK(){
            var MMK=inputvalue2.value*50;
            inputvalue1.value =MMK;
        }

        function MMKtoBath(){
            var Bath=inputvalue1.value/50;
            inputvalue2.value=Bath;
        }

     
            
sel_moneyunit1.addEventListener('change',change1)   
money_type1=sel_moneyunit1.value;
function change1(){


console.log(money_type1);
inputvalue2.value=""
inputvalue1.value=""

if(money_type1=="usd" ) {
    inputvalue1.onkeyup = MMKtoUSD1 ;
    inputvalue2.onkeyup = USDtoMMK1;

    
}
else if(money_type1=="ywan"){
    inputvalue1.onkeyup = YwantoMMK1;
    inputvalue2.onkeyup = MMKtoYwan1;
   
}
else if  (money_type1=="bath")
{
    inputvalue2.onkeyup= BathtoMMK1;
    inputvalue1.onkeyup = MMKtoBath1;
    
}



}

     

sel_moneyunit2.addEventListener('change',change2)
money_type2=sel_moneyunit2.value
function change2() {
    
    console.log(money_type2);
    inputvalue1.value=""
    inputvalue2.value=""
    if(money_type2=="usd" ) {
        inputvalue1.onkeyup = MMKtoUSD ;
        inputvalue2.onkeyup = USDtoMMK;  
      

    }
    else if(money_type2=="ywan"){
        inputvalue2.onkeyup = YwantoMMK;
        inputvalue1.onkeyup = MMKtoYwan;
       

    }
    else if  (money_type2=="bath")
    {
        inputvalue2.onkeyup= BathtoMMK;
        inputvalue1.onkeyup =  MMKtoBath;
        
    }
}

var cchange1 = sel_moneyunit1.onchange
function cchange1(){
   
    if (money_type1==money_type2 && money_type1=="mmk"){
        money_type2="usd"
    }
    
    else if (money_type1==money_type2 && money_type1=="usd"){
    money_type2="mmk"
    }
    else if (money_type1==money_type2 && money_type1=="ywan"){
     money_type2="mmk"
    }
    else if (money_type1==money_type2 && money_type1=="bath"){
     money_type2="mmk"
    }  
}
 
