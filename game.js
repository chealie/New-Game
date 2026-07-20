let currentRound = 0;


let players = [

{
name:"",
money:100000,
choice:""
},

{
name:"",
money:100000,
choice:""

}

];



const rounds = [


{


title:"Round 1: Inflation Remains Sticky",


market:`

<h3>Market Update</h3>

Global inflation has declined from its peak but remains above central bank targets.


<br><br>


<h3>Statement A — Crude Palm Oil (CPO)</h3>


Palm oil production in Malaysia and Indonesia improves after favourable weather conditions.

<br><br>

However, demand from India and China remains strong as importers rebuild inventories after earlier stock reductions.


<br><br>


<h3>Statement B — Gold</h3>


Inflation remains elevated, but investors expect central banks to maintain higher interest rates for longer.

<br><br>

Geopolitical uncertainty encourages investors to maintain exposure to safe-haven assets.


<br><br>


<h3>Decision</h3>

Choose:

<br>

☐ CPO

<br>

☐ Gold

<br>

☐ Both

<br>

☐ Cash

`,


cpo:3,

gold:1,


cpoPrice:"RM4,500 → RM4,635",

goldPrice:"USD3,400 → USD3,434",


reason:`

<strong>Why?</strong>

<br>

Strong import demand offsets higher production.

<br><br>

<strong>Learning Point:</strong>

<br>

Commodity prices depend on the balance between supply growth and consumption growth.

`


},



{


title:"Round 2: Central Banks Begin Easing",


market:`

<h3>Market Update</h3>


After several months of improving inflation data, major central banks signal that monetary policy may become less restrictive.


<br><br>


<h3>Statement A — CPO</h3>


Lower interest rates improve economic confidence.

However, a stronger harvest season results in higher palm oil production.


<br><br>


<h3>Statement B — Gold</h3>


Markets increase expectations for rate cuts.

Investors anticipate lower real yields, increasing demand for gold.


<br><br>


<h3>Decision</h3>

☐ CPO

<br>

☐ Gold

<br>

☐ Both

<br>

☐ Cash

`,


cpo:-2.5,

gold:5,


cpoPrice:"RM4,635 → RM4,520",

goldPrice:"USD3,434 → USD3,605",


reason:`

Gold benefits because lower real yields reduce the opportunity cost of holding gold.

`

},



{


title:"Round 3: Economic Growth Concerns Return",


market:`

<h3>Market Update</h3>


Economic indicators begin showing signs of slowing growth.


<br><br>


<h3>Statement A — CPO</h3>


Major importing countries reduce purchases as food manufacturers manage costs.

Palm oil inventories begin rising.


<br><br>


<h3>Statement B — Gold</h3>


Equity markets decline as investors become concerned about economic slowdown.

Central banks continue accumulating gold reserves.


<br><br>


Decision:

<br>

☐ CPO

<br>

☐ Gold

<br>

☐ Both

<br>

☐ Cash

`,


cpo:-5,

gold:6,


cpoPrice:"RM4,520 → RM4,295",

goldPrice:"USD3,605 → USD3,820",


reason:`

Safe-haven demand increases gold buying.

`

},



{


title:"Round 4: Energy Transition Changes Palm Oil Demand",


market:`

<h3>Market Update</h3>


Governments increase focus on renewable energy and energy security.


<br><br>


<h3>Statement A — CPO</h3>


Indonesia raises biodiesel blending requirements, increasing domestic palm oil consumption.


<br><br>


<h3>Statement B — Gold</h3>


Inflation continues declining.

Investors rotate back into equities.


<br><br>


Decision:

<br>

☐ CPO

<br>

☐ Gold

<br>

☐ Both

<br>

☐ Cash

`,


cpo:6.5,

gold:-3,


cpoPrice:"RM4,295 → RM4,575",

goldPrice:"USD3,820 → USD3,705",


reason:`

Policy-driven biodiesel demand outweighs export weakness.

`

},



{


title:"Round 5: Global Recovery Returns",


market:`

<h3>Market Update</h3>


Economic activity improves and investors become more confident.


<br><br>


<h3>Statement A — CPO</h3>


Global food demand improves.

Soybean oil supply faces disruption, increasing substitution demand toward palm oil.


<br><br>


<h3>Statement B — Gold</h3>


Interest rates decline, but stronger economic growth reduces defensive demand.


<br><br>


Decision:

<br>

☐ CPO

<br>

☐ Gold

<br>

☐ Both

<br>

☐ Cash

`,


cpo:6,

gold:0,


cpoPrice:"RM4,575 → RM4,850",

goldPrice:"USD3,705 → USD3,705",


reason:`

Strong demand plus substitution effect supports palm oil.

`

},



{


title:"Round 6: Final Market Shock",


market:`

<h3>Market Update</h3>


Markets enter a new uncertainty phase after unexpected policy changes.


<br><br>


<h3>Statement A — CPO</h3>


Weather forecasts indicate potential production disruptions next season.

However, current inventories remain comfortable.


<br><br>


<h3>Statement B — Gold</h3>


Geopolitical tensions escalate, increasing demand for safe-haven assets.

However, the US Dollar strengthens sharply.


<br><br>


Decision:

<br>

☐ CPO

<br>

☐ Gold

<br>

☐ Both

<br>

☐ Cash

`,


cpo:3,

gold:0,


cpoPrice:"RM4,850 → RM5,000",

goldPrice:"USD3,705 → USD3,705",


reason:`

Markets price future supply risks.

`

}


];





function loadGame(){


document.getElementById("roundTitle").innerHTML =
rounds[currentRound].title;


document.getElementById("marketText").innerHTML =
rounds[currentRound].market;


}




function choose(player,choice){


players[player-1].choice = choice;


document.getElementById(
"choice"+player
).innerHTML =

"Selected: "+choice;


}




function reveal(){


players[0].name =
document.getElementById("p1").value;


players[1].name =
document.getElementById("p2").value;



localStorage.setItem(
"round",
currentRound
);


localStorage.setItem(
"players",
JSON.stringify(players)
);


window.location="reveal.html";


}


loadGame();
