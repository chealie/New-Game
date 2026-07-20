let round =
Number(localStorage.getItem("round"));


let players =
JSON.parse(localStorage.getItem("players"));



const rounds=[


{
title:"Round 1: Inflation Remains Sticky",

cpo:3,

gold:1,

cpoPrice:"RM4,500 → RM4,635",

goldPrice:"USD3,400 → USD3,434",

reason:

"Strong import demand offsets higher production. Lower inventories among buyers support physical demand."

},



{
title:"Round 2: Central Banks Begin Easing",

cpo:-2.5,

gold:5,

cpoPrice:"RM4,635 → RM4,520",

goldPrice:"USD3,434 → USD3,605",

reason:

"Lower expected rates reduce the opportunity cost of holding gold, increasing investment demand."

},



{
title:"Round 3: Economic Growth Concerns Return",

cpo:-5,

gold:6,

cpoPrice:"RM4,520 → RM4,295",

goldPrice:"USD3,605 → USD3,820",

reason:

"Safe-haven demand increases while weaker demand pressures palm oil."

},



{
title:"Round 4: Energy Transition Changes Palm Oil Demand",

cpo:6.5,

gold:-3,

cpoPrice:"RM4,295 → RM4,575",

goldPrice:"USD3,820 → USD3,705",

reason:

"Biodiesel demand creates a significant new source of palm oil consumption."

},



{
title:"Round 5: Global Recovery Returns",

cpo:6,

gold:0,

cpoPrice:"RM4,575 → RM4,850",

goldPrice:"USD3,705 → USD3,705",

reason:

"Strong food demand and soybean oil supply disruption support palm oil."

},



{
title:"Round 6: Final Market Shock",

cpo:3,

gold:0,

cpoPrice:"RM4,850 → RM5,000",

goldPrice:"USD3,705 → USD3,705",

reason:

"Markets price future supply risks while strong USD limits gold upside."

}


];



let r=rounds[round];





// Display title

document.getElementById("title").innerHTML=
r.title;



// Market reveal

document.getElementById("result").innerHTML=


`

<div class="price-card">

<h2>🌴 Crude Palm Oil</h2>

<h3>${r.cpoPrice}</h3>

<h2>

${r.cpo > 0 ? "📈 +" : "📉 "}

${r.cpo}%

</h2>


</div>



<div class="price-card">


<h2>🪙 Gold</h2>


<h3>${r.goldPrice}</h3>


<h2>

${r.gold > 0 ? "📈 +" : "📉 "}

${r.gold}%

</h2>


</div>



<hr>


<h3>Market Explanation</h3>


<p>

${r.reason}

</p>

`;





// Calculate player result

players.forEach(p=>{


let change=0;


if(p.choice=="CPO")

{

change=p.money*r.cpo/100;

}



else if(p.choice=="Gold")

{

change=p.money*r.gold/100;

}



else if(p.choice=="Both")

{

change=

p.money*((r.cpo+r.gold)/200);

}



p.money+=change;


});





document.getElementById("result").innerHTML +=


`

<hr>


<h2>Trader Performance</h2>


<p>

${players[0].name}

<br>

Choice:

${players[0].choice}

<br>

Portfolio:

RM ${Math.round(players[0].money).toLocaleString()}


</p>


<hr>


<p>

${players[1].name}

<br>

Choice:

${players[1].choice}

<br>

Portfolio:

RM ${Math.round(players[1].money).toLocaleString()}


</p>


`;





// Create chart


new Chart(

document.getElementById("chart"),


{


type:"line",


data:{


labels:[

"Start",

"Round 1",

"Round 2",

"Round 3",

"Round 4",

"Round 5",

"Round 6"

],



datasets:[


{

label:"CPO (RM/MT)",

data:[

4500,

4635,

4520,

4295,

4575,

4850,

5000

]

},


{


label:"Gold (USD/oz)",

data:[

3400,

3434,

3605,

3820,

3705,

3705,

3705

]


}



]

}


}

);







function next(){


round++;



if(round>=6)

{


localStorage.setItem(

"players",

JSON.stringify(players)

);


window.location="final.html";


}

else

{


localStorage.setItem(

"round",

round

);



localStorage.setItem(

"players",

JSON.stringify(players)

);



window.location="index.html";


}



}
