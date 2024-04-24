//cockroach clicker game by Aiden S... disord @aidenboomhero121#2709

//these are all the varibles
var R = 0;
var C = 0;
var CC = 0;
var rps = 0;
var SCN = 0;
var SCC = 0;
var MCN = 0;
var MCC = 0;
var GCN = 0;
var UCN = 0;
var OCN = 0;
var GCC = 0;
var UCC = 0;
var OCC = 0;
var MR = 1;
var GR = 1;
var rps2 = 0;
var rebirths = 1;

//base setup
button("clickCounter", "0");
setProperty("clickCounter", "x", "108.5");
setProperty("clickCounter", "y", "11.5");
button("rebirth","Rebirth");
setProperty("rebirth", "y", "385");
setProperty("rebirth", "width", "110");
setProperty("rebirth", "height", "40");
setProperty("rebirth","background-color","black");
setProperty("clickCounter", "background-color", "transparent");
setProperty("clickCounter", "border-color", "transparent");
setProperty("clickCounter", "text-color", "black");
setProperty("Clickers", "text-color", "black");
hideElement("NEF");
setProperty("upgradeButton", "background-color", "black");
setProperty("upgradeButton", "text-color", "white");
setProperty("buy1", "background-color", "black");
setProperty("buy1", "text-color", "white");
setProperty("buy2", "background-color", "black");
setProperty("buy2", "text-color", "white");
setProperty("Mclicker", "background-color", "black");
setProperty("Gclicker", "background-color", "black");
setProperty("ultra", "background-color", "black");
setProperty("Oclicker", "background-color", "black");

//setup for rebirth screen
setScreen( "RebirthScreen" );
button("rebirth-yes","yes" );
setProperty("rebirth-yes","background-color","green");
setProperty("rebirth-yes","text-color","white");
setProperty("rebirth-yes","x","30");
setProperty("rebirth-yes","y","350");
setProperty( "rebirth-yes", "width", "100" );
button( "rebirth-no", "no" );
setProperty( "rebirth-no", "background-color", "red" );
setProperty( "rebirth-no", "text-color", "white" );
setProperty( "rebirth-no", "x", "50" );
setProperty( "rebirth-no", "y", "350" );
setProperty( "rebirth-no", "width", "100" );
setScreen("mainScreen");




// Rebirth buttons
onEvent("rebirth", "click",function(){
  setScreen("RebirthScreen");
});
onEvent("rebirth-yes", "click",function(){
  if (R >= 1000000) {
    rebirths = rebirths + 1;
    R = 0;
     C = 0;
     CC = 0;
     rps = 0;
     SCN = 0;
     SCC = 0;
     MCN = 0;
     MCC = 0;
     GCN = 0;
     UCN = 0;
     OCN = 0;
     GCC = 0;
     UCC = 0;
     OCC = 0;
     MR = 1;
     GR = 1;
     rps2 = 0;
     setText("GRYNT", "no");
     setProperty("GRYNT", "text-color", "#8b0000");
     setText("RpsNumber", rps);
     setProperty("OCN", "text", OCN);
     setProperty("OCN2", "text", OCN);
     setText("clickCounter", R);
     setProperty("ClickerNumber", "text", C);
     setProperty("ClickerNumber2", "text", C);
     setProperty("UCN", "text", UCN);
     setProperty("UCN2", "text", UCN);
     setProperty("GCN", "text", GCN);
     setProperty("GCN2", "text", GCN);
     setProperty("MCN", "text", MCN);
     setProperty("MCN2", "text", MCN);
     setProperty("SC", "text", SCN);
     setProperty("SC2", "text", SCN);
     setText("clickCounter", R);
     setText("money", R);
     showElement("Tutorial");
     setScreen("mainScreen");
     setProperty("MRyesno", "text", "no");
     setProperty("MRyesno", "text-color", "#8b0000");
     hideElement("NEF");
     setProperty("cockroach", "image", "assets/downl.jpeg");
     setText("rps2n", rps2);
    setScreen("mainScreen");
  } else {
    setProperty("Rebirth-text","text","You need 1,000,000 cockroaches to rebirth");
  }
});
onEvent("rebirth-no", "click",function(){
  setScreen("mainScreen");
});


//upgrade button
onEvent("upgradeButton", "click", function() {
 setScreen("upgradeScreen");
});

//back button
onEvent("back", "click", function() {
 setScreen("mainScreen");
});

//Roach button
onEvent("cockroach", "click", function() {
 R = R + 1 * MR * GR;
 hideElement("Tutorial");
 setText("clickCounter", R);
 if (R < 100000000) {
  setText("money", R);
 }
 setPosition("cockroach", 110, 135, 100, 100);

 setTimeout(function() { setPosition("cockroach", 115, 145, 100, 100); }, 25);
});

//basic clicker button
onEvent("buy1", "click", function() {
 if (50 <= R) {
  R = R - 50;
  C = C + 1;
  CC = CC + 1 * MR * GR;
  rps = rps + 1 * MR * GR;
  rps2 = rps2 + 1 * MR * GR;
  setText("clickCounter", R);
  showElement("ClickerNumber");
  setProperty("ClickerNumber", "text", C);
  setProperty("ClickerNumber2", "text", C);
  setProperty("RpsNumber", "text", rps);
  if (R < 100000000) {
   setText("money", R);
  }
 } else {
  showElement("NEF");
  setTimeout(function() { hideElement("NEF"); }, 500);
 }
});

//loop that updates the total roaches for the auto clickers
timedLoop(500, function() {
 setTimeout(function() {
  R = R + ( CC + SCC + MCC + GCC + UCC + OCC * MR * GR) * rebirths;
 }, 10000);
 setText("clickCounter", R);
 setProperty("rebirth", "x", "-35");
 if (R < 100000000) {
  setText("money", R);
 }
 setProperty("rps2n", "text", rps2 * rebirths);
  setProperty("RpsNumber", "text", rps * rebirths);
 if (R >= 10000000000000) {
  setText("money", "infinite");
  setText("clickCounter", "infinite");
 }
  if (R >= 10) {
    setProperty("rebirth", "y", "385");
  }
});

//super clicker button
onEvent("buy2", "click", function() {
 if (R >= 125) {
  R = R - 125;
  SCN = SCN + 1;
  rps = rps + 2.5 * MR * GR;
  rps2 = rps2 + 2.5 * MR * GR;
  SCC = SCC + 2.5 * MR * GR;
  showElement("SC");
  setProperty("SC", "text", SCN);
  setProperty("SC2", "text", SCN);
  setProperty("RpsNumber", "text", rps);
  if (R < 100000000) {
   setText("money", R);
  }
 } else {
  showElement("NEF");
  setTimeout(function() { hideElement("NEF"); }, 500);
 }
});

//mega clicker button
onEvent("Mclicker", "click", function() {
 if (R >= 200) {
  R = R - 200;
  MCN = MCN + 1;
  MCC = MCC + 6 * MR * GR;
  rps = rps + 6 * MR * GR;
  rps2 = rps2 + 6 * MR * GR;
  setProperty("MCN", "text", MCN);
  setProperty("MCN2", "text", MCN);
  setProperty("RpsNumber", "text", rps);
  if (R < 100000000) {
   setText("money", R);
  }
 } else {
  showElement("NEF");
  setTimeout(function() { hideElement("NEF"); }, 500);
 }
});

//giga clicker button
onEvent("Gclicker", "click", function() {
 if (R >= 500) {
  R = R - 500;
  GCN = GCN + 1;
  rps = rps + 15 * MR * GR;
  GCC = GCC + 15 * MR * GR;
  rps2 = rps2 + 15 * MR * GR;
  setProperty("GCN", "text", GCN);
  setProperty("GCN2", "text", GCN);
  setProperty("RpsNumber", "text", rps);
  if (R < 100000000) {
   setText("money", R);
  }
 } else {
  showElement("NEF");
  setTimeout(function() { hideElement("NEF"); }, 500);
 }
});

//ultra clicker button
onEvent("ultra", "click", function() {
 if (R >= 1200) {
  R = R - 1200;
  UCN = UCN + 1;
  rps = rps + 40 * MR * GR;
  rps2 = rps2 + 40 * MR * GR;
  UCC = UCC + 40 * MR * GR;
  setProperty("UCN", "text", UCN);
  setProperty("UCN2", "text", UCN);
  setProperty("RpsNumber", "text", rps);
  if (R < 100000000) {
   setText("money", R);
  }
 } else {
  showElement("NEF");
  setTimeout(function() { hideElement("NEF"); }, 500);
 }
});

//omega clicker button
onEvent("Oclicker", "click", function() {
 if (R >= 5000) {
  R = R - 5000;
  OCN = OCN + 1;
  rps = rps + 250 * MR * GR;
  rps2 = rps2 + 250 * MR * GR;
  OCC = OCC + 250 * MR * GR;
  setProperty("OCN", "text", OCN);
  setProperty("OCN2", "text", OCN);
  setProperty("RpsNumber", "text", rps);
  if (R < 100000000) {
   setText("money", R);
  }
 } else {
  showElement("NEF");
  setTimeout(function() { hideElement("NEF"); }, 500);
 }
});

//meme roach button, theres 2 if statments to limit it to one buy
onEvent("MRbutton", "click", function() {
 if (1 == MR) {
  if (R >= 50000) {
   MR = MR + 1;
   R = R - 50000;
   rps = rps * 2;
   rps2 = rps2 * 2;
   setProperty("cockroach", "image", "assets/s-l1600.jpg");
   setText("MRyesno", "yes");
   setText("RpsNumber", rps);
   setProperty("MRyesno", "text-color", "009200");
   if (R < 100000000) {
    setText("money", R);
   }
  } else {
   showElement("NEF");
   setTimeout(function() { hideElement("NEF"); }, 500);
  }
 }
});

//this is the reset screen  
onEvent("reset1", "click", function() {
 setScreen("resetScreen");
});
onEvent("no", "click", function() {
 setScreen("mainScreen");
});
onEvent("yes", "click", function() {
 R = 0;
 C = 0;
 CC = 0;
 rps = 0;
 SCN = 0;
 SCC = 0;
 MCN = 0;
 MCC = 0;
 GCN = 0;
 UCN = 0;
 OCN = 0;
 GCC = 0;
 UCC = 0;
 OCC = 0;
 MR = 1;
 GR = 1;
 rps2 = 0;
 setText("GRYNT", "no");
 setProperty("GRYNT", "text-color", "#8b0000");
 setText("RpsNumber", rps);
 setProperty("OCN", "text", OCN);
 setProperty("OCN2", "text", OCN);
 setText("clickCounter", R);
 setProperty("ClickerNumber", "text", C);
 setProperty("ClickerNumber2", "text", C);
 setProperty("UCN", "text", UCN);
 setProperty("UCN2", "text", UCN);
 setProperty("GCN", "text", GCN);
 setProperty("GCN2", "text", GCN);
 setProperty("MCN", "text", MCN);
 setProperty("MCN2", "text", MCN);
 setProperty("SC", "text", SCN);
 setProperty("SC2", "text", SCN);
 setText("clickCounter", R);
 setText("money", R);
 showElement("Tutorial");
 setScreen("mainScreen");
 setProperty("MRyesno", "text", "no");
 setProperty("MRyesno", "text-color", "#8b0000");
 hideElement("NEF");
 setProperty("cockroach", "image", "assets/downl.jpeg");
 setText("rps2n", rps2);
});

//giga roach setup
setScreen("upgradeScreen");
button("gigaRoach", "giga roach $100000");
setPosition("gigaRoach", 6, 368, 115, 50);
setPosition("GRYNT", 110, 380, 60, 20);
setProperty("GRYNT", "text-color", "#8b0000");
setScreen("mainScreen");
setProperty("gigaRoach", "background-color", "black");

//giga roach button
onEvent("gigaRoach", "click", function() {
 if (GR == 1) {
  if (R >= 100000) {
   GR = 5;
   R = R - 100000;
   rps = rps * 5;
   rps2 = rps2 * 5;
   setProperty("cockroach", "image", "assets/chadRoach.jpg");
   setProperty("GRYNT", "text", "yes");
   setProperty("GRYNT", "text-color", "009200");
   setPosition("GRYNT", 110, 380, 80, 50);
   setText("RpsNumber", rps);
   if (R < 100000000) {
    setText("money", R);
   }
  } else {
   showElement("NEF");
   setTimeout(function() { hideElement("NEF"); }, 500);
  }
 }
});



