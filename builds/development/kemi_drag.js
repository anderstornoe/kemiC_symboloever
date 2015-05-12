
//########################################################################
//          JSON-objekt som senere skal have sin egen JSON-fil:
//########################################################################

var JsonObj_Questions = [
    {"AtomSym": "H",   "Name": "Hydrogen", "TName": "Dihydrogen",      "AtomNum": 1,  "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":1,  "Coeff": 1},
    {"AtomSym": "He",  "Name": "Helium",   "TName": "Helium (ballon)", "AtomNum": 2,  "Principle": [1,3], "ChemType": "molecule", "Index": 1, "Charge":0,  "Coeff": 1},
    {"AtomSym": "N",   "Name": "Nitrogen", "TName": "Dinitrogen",      "AtomNum": 7,  "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":0,  "Coeff": 1},
    {"AtomSym": "O",   "Name": "Oxygen",   "TName": "Dioxygen",        "AtomNum": 8,  "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":0,  "Coeff": 1},
    {"AtomSym": "O",   "Name": "Oxygen",   "TName": "Ozon",            "AtomNum": 8,  "Principle": [1,3], "ChemType": "molecule", "Index": 3, "Charge":0,  "Coeff": 1},
    {"AtomSym": "Ne",  "Name": "Neon",     "TName": "Neongas",         "AtomNum": 10, "Principle": [1,3], "ChemType": "molecule", "Index": 1, "Charge":0,  "Coeff": 1},
    {"AtomSym": "S",   "Name": "Svovl",    "TName": "Svovl",           "AtomNum": 16, "Principle": [1,3], "ChemType": "molecule", "Index": 8, "Charge":0,  "Coeff": 1},
    {"AtomSym": "Cl",  "Name": "Klor",     "TName": "Dilor",           "AtomNum": 17, "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":-1, "Coeff": 1},
    {"AtomSym": "Br",  "Name": "Brom",     "TName": "Dibrom",          "AtomNum": 35, "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":-1, "Coeff": 1},
    {"AtomSym": "I",   "Name": "Iod",      "TName": "Diiod",           "AtomNum": 53, "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":-1, "Coeff": 1}
];


var ResultStr = "";
var EventObj = {    Success: false,
                    Element: {AtomNum: null, AtomName: null, drop: false}, 
                    Index: {val: null, drop: false},
                    Charge: {val: null, drop: false},
                    Coeff: {val: null, drop: false}
                };
var TEventObj = JSON.parse(JSON.stringify(EventObj));   // Used for resetting EventObj

var ResultObj = {   Attempt: 0, 
                    Correct: 0, 
                    Fail: 0, 

                    Element: {AtomNum: null}, 
                    Index: {val: null},
                    Charge: {val: null},
                    Coeff: {val: null},

                    Dropped: {Element: false, Index: false, Charge: false, Coeff: false} 
                };
var TResultObj = JSON.parse(JSON.stringify(ResultObj));  // Used for resetting ResultObj


// TEST:
$( document ).ready(function() {

    var TestArray = [1,2,3,4,5,6,7,8,9,10];
    console.log("ShuffelArray: " + ShuffelArray(TestArray));

    // GiveQuestion(JsonObj_Questions, QuestionObj, PrincipleNum);
});


//########################################################################
//                          Funktioner
//########################################################################

// Perodisk system på dansk og andre sprog:
// http://www.ptable.com/?lang=da
//
// JQuery-ui "draggable" resources:
// http://api.jqueryui.com/draggable/
//
// JQuery-ui "droppable" resources:
// http://api.jqueryui.com/droppable/
//
// Revert:
// https://jqueryui.com/resources/demos/droppable/revert.html

// MARK 

var PrincipleNum = 4;

var JsonObj_PeriodicTable;

var Names;
var NameArray = [];

var DummyElement = '<div class="DummyElement"></div>';

var ElementDummyNumbers = "_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_17_21_22_23_24_25_26_27_28_29_30_39_40_41_42_43_44_45_46_47_48_";

var QuestionObj =   { 
                        P1 : [],  // Princip 1 - P1-array consists of the array-index of all the JsonObj_Questions which have Principle: [1]
                        P2 : [],  // Princip 2 - P2-array consists of the array-index of all the JsonObj_Questions which have Principle: [2]
                        P3 : []   // Princip 3 - P3-array consists of the array-index of all the JsonObj_Questions which have Principle: [3]
                    }

function MakeQuestionObj(JsonObj_Questions, QuestionObj){

    for (var ElmObjNr in JsonObj_Questions){
        console.log("JsonObj_Questions["+String(ElmObjNr)+"].Principle: " + JsonObj_Questions[ElmObjNr].Principle);
        for (var p in JsonObj_Questions[ElmObjNr].Principle){
            console.log("p: " + p, ", JsonObj_Questions["+String(ElmObjNr)+"].Principle["+p+"]: " + ElmObjNr);
            if (JsonObj_Questions[ElmObjNr].Principle[p] == 1) QuestionObj.P1.push( ElmObjNr );
            if (JsonObj_Questions[ElmObjNr].Principle[p] == 2) QuestionObj.P2.push( ElmObjNr );
            if (JsonObj_Questions[ElmObjNr].Principle[p] == 3) QuestionObj.P3.push( ElmObjNr );
        }
    }

    console.log("QuestionObj: " + JSON.stringify(QuestionObj));
}


function Principle1(JOQ, PrincipleArray, Qcount){

    var Inx = PrincipleArray[Qcount];

    var HTML = "";
    HTML += "<h1>Princip 1-a-1: et grundstof - letteste niveau</h1>";
    HTML += "<h2>Skriv formlen for stoffet der indeholder "+JOQ[Inx]["Index"]+" "+JOQ[Inx]["Name"].toLowerCase()+"atom"+((JOQ[Inx]["Index"]==1)?"":"er")+". <span class='Qcount'></span></h2>";
    
    // Write the heading and question for the student:
    $(".QuizHeading").html( HTML );

    SetAcceptedElements( JOQ[Inx]["AtomNum"] );                        // The draggable element
    SetAcceptedNumbers(  JOQ[Inx]["Index"], ".IndexNum", "Index_OK");  // Principle 1: index numbers
}


function Principle4(JOQ, PrincipleArray, Qcount){

    var Inx = PrincipleArray[Qcount];

    var HTML = "";
    HTML += "<h1>Princip 1, 2 og 3 - <b>TEST</b> - med alle draggable tal</h1>";
    HTML += "<h2>Skriv formlen for stoffet der indeholder "+JOQ[Inx]["Index"]+" "+JOQ[Inx]["Name"].toLowerCase()+"atom"+((JOQ[Inx]["Index"]==1)?"":"er")+". <span class='Qcount'></span></h2>";
    
    // Write the heading and question for the student:
    $(".QuizHeading").html( HTML );

    // $(".IndexWrapper").html(CreateNumberDivs(1, 8, "IndexNum DragNum btn btn-info draggable", false));  
    // $(".ChargeWrapper").html(CreateNumberDivs(-3, 3, "ChargeNum DragNum btn btn-info draggable", true));
    // $(".CoeffWrapper").html(CreateNumberDivs(1, 5, "CoeffNum DragNum btn btn-info draggable", false));

    $(".DragNum").removeClass("Index_OK Char_OK Coeff_OK");

    // Returns "X+" if X > 0, "X-" if X < 0 or 0 if X = 0, where X = charge.
    Charge = String(Math.abs(JOQ[Inx]["Charge"])) + ((JOQ[Inx]["Charge"] > 0)?"+":((JOQ[Inx]["Charge"] < 0)?"-":""));  

    SetAcceptedElements( JOQ[Inx]["AtomNum"] );                        // The draggable element
    SetAcceptedNumbers(  JOQ[Inx]["Index"], ".IndexNum", "Index_OK");  // Principle 1: index numbers
    SetAcceptedNumbers(  Charge, ".ChargeNum", "Char_OK");             // Principle 2: charge numbers
    SetAcceptedNumbers(  JOQ[Inx]["Coeff"], ".CoeffNum", "Coeff_OK");  // Principle 3: coefficient numbers

    // console.log("PrincipleArray: " + PrincipleArray);
    console.log("JOQ: " + JOQ[1]["Name"].toLowerCase());
    console.log("GiveQuestion 1: " + HTML);
    console.log("GiveQuestion 2 - AtomNum: " + JOQ[Inx]["AtomNum"] + ", Name: " + JOQ[Inx]["Name"] + ", Index: " + JOQ[Inx]["Index"] + ", Charge: " + Charge + ", Coeff: " + JOQ[Inx]["Coeff"]);
}


function GiveQuestion(JsonObj_Questions, QuestionObj, PrincipleNum){
    var PrincipleArray; var TPrincipleArray; var ArrayLength;
    var JOQ = JsonObj_Questions;  // JsonObj_Questions[ArrayIndexNum][KeyName];
    var HTML = ""; 
    var Qcount = 0;
    if (PrincipleNum == 1){ // PRINCIPLE 1: index numbers
        PrincipleArray = QuestionObj["P1"]; 
        TPrincipleArray = ShuffelArray( PrincipleArray );  // Random index relating to the sub-objects in JsonObj_Questions.
        ArrayLength = TPrincipleArray.length;

        $(".IndexWrapper").html(CreateNumberDivs(1, 8, "IndexNum DragNum btn btn-info draggable", false));  
        $(".ChargeWrapper").html(CreateNumberDivs(-3, 3, "ChargeNum DragNum btn btn-info draggable", true));

        Principle1(JOQ, TPrincipleArray, Qcount);
        $(".Qcount").text( String(Qcount + 1) + "/" + String(ArrayLength) );

        $(".CoeffHeadingWrapper, .CoeffWrapper").hide();  // Hide placeholders for the coefficients - they are not in use in principle 1 anyway.

        $( document ).on('click', ".NextQuestion", function(event){
            event.preventDefault();  // Prevents sending the user to "href".

            // if ( (parseInt($(".ScoreCorrect").text()) < 2) ) {
            //     alert("Du skal have samtlige spørgsmål korrekt før du kan fortsætte!");
            //     return 0;
            // }

            ResetQuiz(500);
            ++Qcount;
            Principle1(JOQ, TPrincipleArray, Qcount);
            
            $(".Qcount").text( String(Qcount + 1) + "/" + String(ArrayLength) );
        });
    }
    if (PrincipleNum == 2){ // PRINCIPLE 2: charge numbers
        PrincipleArray = QuestionObj["P2"];
        Inx = ShuffelArray( PrincipleArray )[0];  // Random index relating to the sub-objects in JsonObj_Questions.
        HTML += "<h1>Princip 1-b-1: flere grundstoffer - letteste niveau</h1>";
        HTML += "<h2>DETTE PRINCIP ER IKKE LAVET ENDNU...</h2>";
        // SetAcceptedNumbers( JOQ[Inx]["Charge"], ".ChargeNum", "Char_OK"); // Principle 2: charge numbers
    }
    if (PrincipleNum == 3){ // PRINCIPLE 3: coefficient numbers
        PrincipleArray = QuestionObj["P3"];
        Inx = ShuffelArray( PrincipleArray )[0];  // Random index relating to the sub-objects in JsonObj_Questions.
        HTML += "<h1>Princip 1-b-1: sværere niveau - alle formler</h1>";
        HTML += "<h2>DETTE PRINCIP ER IKKE LAVET ENDNU...</h2>";
        // SetAcceptedNumbers( JOQ[Inx]["Coeff"], ".CoeffNum", "Coeff_OK");  // Principle 3: coefficient numbers
    }
    if (PrincipleNum == 4){ // PRINCIPLE 1+2+3 - FOR TESTING 
        PrincipleArray = QuestionObj["P1"];  // <---------------------------  HUSK AT RETTE DENNE!!!
        TPrincipleArray = ShuffelArray( PrincipleArray );  // Random index relating to the sub-objects in JsonObj_Questions.
        ArrayLength = TPrincipleArray.length;

        $(".IndexWrapper").html(CreateNumberDivs(1, 8, "IndexNum DragNum btn btn-info draggable", false));  
        $(".ChargeWrapper").html(CreateNumberDivs(-3, 3, "ChargeNum DragNum btn btn-info draggable", true));
        $(".CoeffWrapper").html(CreateNumberDivs(1, 5, "CoeffNum DragNum btn btn-info draggable", false));

        Principle4(JOQ, TPrincipleArray, Qcount);
        $(".Qcount").text( String(Qcount) + "/" + String(ArrayLength) );

        $( document ).on('click', ".NextQuestion", function(event){
            event.preventDefault();  // Prevents sending the user to "href".

            // if ( (parseInt($(".ScoreCorrect").text()) < 3) ) {
            //     alert("Du skal have samtlige 3 spørgsmål korrekt før du kan fortsætte!");
            //     return 0;
            // }

            ResetQuiz(500);
            Principle4(JOQ, TPrincipleArray, Qcount);
            ++Qcount;
            $(".Qcount").text( String(Qcount) + "/" + String(ArrayLength) );
        });

        console.log("ScoreCorrect XXX: " + parseInt($(".ScoreCorrect").text())   );
        console.log("ArrayLength: " + ArrayLength);
    }

    // Write the heading and question for the student:
    // $(".QuizHeading").html( HTML );

}


function GivePosetiveFeedback(){

}


function GiveNegativeFeedback(){

}


// Funktionen laver en kopi af arrayet i argumentet, og blander elementerne tilfaeldigt
function ShuffelArray(ItemArray){
    var NumOfItems = ItemArray.length;
    var NewArray = ItemArray.slice();  // Copy the array...
    var Item2; var TempItem1; var TempItem2;
    for (var Item1 = 0; Item1 < NumOfItems; Item1++) {
        Item2 = Math.floor( Math.random() * NumOfItems);
        TempItem1 = NewArray[Item1];
        TempItem2 = NewArray[Item2];
        NewArray[Item2] = TempItem1;
        NewArray[Item1] = TempItem2;
    }
    return NewArray;
}


function ElementBox(AtomNum, AtomSymbol, AtomName, AtomWeight){   
    var HTML = '<div class="ElementBox btn btn-info draggable">' + 
                    '<div class="AtomNum">' + AtomNum + '</div>' +
                    '<div class="AtomSymbol">' + AtomSymbol + '</div>' +
                    '<div class="AtomName">' + AtomName + '</div>' +
                    '<div class="AtomWeight">' + AtomWeight + '</div>' +
                '</div>';
    return HTML;
}

function AjaxCallback(JSONdata){
    console.log("JsonObj_PeriodicTable - AjaxCallback: " + JSON.stringify(JSONdata));
}

function loadData(url) {
    $.ajax({
        url: url,
        // contentType: "application/json; charset=utf-8",  // Blot en test af tegnsaettet....
        dataType: 'json', // <------ VIGTIGT: Saadan boer en angivelse til en JSON-fil vaere! 
        // dataType: 'text', // <------ VIGTIGT: Pga. ???, saa bliver vi noedt til at angive JSON som text. 
        async: true, // <------ VIGTIGT: Sikring af at JSON hentes i den rigtige raekkefoelge (ikke asynkront). 
        success: function(data, textStatus, jqXHR) {

            console.log("data: " + JSON.stringify(data));

            JsonObj_PeriodicTable = JSON.parse(JSON.stringify(data));

            // if (url == "kemi_drag.json"){
            //     JsonObj_PeriodicTable = JSON.parse(JSON.stringify(data));
            //     alert("kemi_drag 1");
            // }
            // if (url == "kemi_drag_simple_ions_and_molecules.json"){
            //     JsonObj_Questions = JSON.parse(JSON.stringify(data));
            //     alert("kemi_drag_simple_ions_and_molecules 1");
            // }

            console.log("JsonObj_PeriodicTable 0: " + JSON.stringify(JsonObj_PeriodicTable));
            console.log("JsonObj_Questions 0: " + JSON.stringify(JsonObj_Questions));

            console.log("JsonObj_PeriodicTable 1 : " + JSON.stringify(JsonObj_PeriodicTable));

            AjaxCallback(JsonObj_PeriodicTable);

            for(var key in data){
                console.log("JsonObj_PeriodicTable[key].name: " + JsonObj_PeriodicTable[key].name);
                NameArray.push( JsonObj_PeriodicTable[key].name );
            }

            console.log("NameArray 1: " + NameArray);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error!!!\njqXHR:" + jqXHR + "\ntextStatus: " + textStatus + "\nerrorThrown: " + errorThrown);
        }
    });
}


function MakePeriodicTable(JsonObj_PeriodicTable){
    var Zn = 0;
    var x = 0;
    var HTML = "";
    for (var r = 1; r <= 7; r++) {
        HTML += '<div class="row">';
        for (var i = 1; i <= 18; i++) {
            ++x;
            if (ElementDummyNumbers.indexOf( "_"+String(x)+"_" ) !== -1){
                HTML += DummyElement;
            } else {
                if (Zn < 18){ // Midlertidig if-else-konstruktion:
                    console.log("Zn: " + Zn + ", JsonObj_PeriodicTable[Zn].sym: " + JsonObj_PeriodicTable[Zn].Z);
                    var AtomNum = String(JsonObj_PeriodicTable[Zn].Z);
                    var AtomSymbol = JsonObj_PeriodicTable[Zn].sym;
                    var AtomName = JsonObj_PeriodicTable[Zn].name;
                    var AtomWeight = String(Math.round(10000*JsonObj_PeriodicTable[Zn].A)/10000);
                    HTML += ElementBox(AtomNum, AtomSymbol, AtomName, AtomWeight);
                    ++Zn;
                } else {
                    HTML += ElementBox("34", "X", "Xxxx", "34");
                }
            }
        };
        HTML += '</div>';
    };
    $(".PeriodicTableWrapper").append(HTML);
}


function FontSizeScaler(FontSizeStr, LineHeight, Selector){
    var FontSizeNum = parseInt(FontSizeStr.replace(/px/g, ''));
    var NativeWindowWidth = 1425;   // At WindowWidth = 1426px the .ElementBox font-size = 11px, and scaling linarly.
    var WindowWidth = $( window ).width();
    var Ratio = Math.round(1000*( WindowWidth/NativeWindowWidth ))/1000; // Rounded to 3 digit precision.

    $( Selector ).css("font-size", String(FontSizeNum*Ratio)+"px");

    // Ajust line-height
    // $( Selector ).css("line-height", String(parseInt(LineHeight)*Math.pow(1,Ratio));
    console.log("Ratio : " + Ratio);
    
    console.log("Ratio : " + Ratio);
    console.log("ElementBoxFontSizeNum : " + FontSizeNum);
}

// NOTE: BoolSetPlusSign = true sætter "+" foran alle tal større end nul, dvs: 
function CreateNumberDivs(Min, Max, Class, BoolSetSign){
    var HTML = "";
    for (var i = Min; i <= Max; i++) {
        if (i != 0) HTML += '<div class="'+Class+'">' + Math.abs(i) + ((BoolSetSign && i>0) ? "+" : ((BoolSetSign && i<0) ? "-" : "") )  + '</div>';
    };
    return HTML;
}


function SetAcceptedElements(AtomNumOk){
    $(".ElementBox").each(function( index, element ) {
        var AtomNum = parseInt($(".AtomNum", element).text());
        console.log("AtomNum: " + AtomNum);
        if(AtomNumOk == AtomNum){
            $(element).addClass("Elem_OK");
        }
    });
}

function SetAcceptedNumbers(NumStrOk, Selector, Class_OK){
    $(Selector).each(function( index, element ) {
        var NumStr = $(element).text();
        console.log("SetAcceptedNumbers NumStr: " + NumStr);
        if(NumStrOk == NumStr){
            $(element).addClass(Class_OK);
        }
    });
}



function UpdateResultFeedback(ResultObj, BoolCorrectOrFail){
    ResultObj.Attempt += 1;
    if (BoolCorrectOrFail)
        ResultObj.Correct += 1;
    else
        ResultObj.Fail += 1;
    $(".ScoreAttempts").text( ResultObj.Attempt ); 
    $(".ScoreCorrect").text( ResultObj.Correct );
    $(".ScoreFail").text( ResultObj.Fail );
    $(".ScoreStat").text( (ResultObj.Correct/ResultObj.Attempt*100).toFixed(2) + "%" ); 
    // alert(typeof((ResultObj.Correct/ResultObj.Attempt*100).toFixed(2)))               
}


function ResetQuiz(Milliseconds){

    // Move all draggables to their initial positions
    $(".draggable").animate({
        top: "0px",
        left: "0px"
    }, Milliseconds, function() {  // When animation complete, do...
        // FEJL: Hvis nedenstående kode placeres her, så køres det mange gange (ca 90), derfor er det placeret forneden - check console.log
        console.log("ResetQuiz - 0");
    });

    // Reset element when an unaccepted element returns to its position in the periodic table
    $(".AtomNum, .AtomName, .AtomWeight").show();
    $(".AtomSymbol").css("font-size", "160%");

    console.log("ResetQuiz - ResultObj 1: " + JSON.stringify(ResultObj));
    console.log("ResetQuiz - EventObj 1: " + JSON.stringify(EventObj));

    // Reset memory:
    ResultObj = TResultObj;
    EventObj = TEventObj;

    console.log("ResetQuiz - ResultObj 2: " + JSON.stringify(ResultObj));
    console.log("ResetQuiz - EventObj 2: " + JSON.stringify(EventObj));

    // Reset counters:
    $(".ScoreAttempts").text( 0 ); 
    $(".ScoreCorrect").text( 0 );
    $(".ScoreFail").text( 0 );
    $(".ScoreStat").text( "0%" ); 

    // Remove background-color from the correct droppables:
    $(".droppable").removeClass( "DropHighlight" );
}


function QuizSetup(JsonObj_PeriodicTable){

}


//########################################################################
//                        Run code....
//########################################################################


$( document ).ready(function() {


    MakeQuestionObj(JsonObj_Questions, QuestionObj);


    console.log("JsonObj_PeriodicTable 1: " + JSON.stringify(JsonObj_PeriodicTable));
    console.log("JsonObj_Questions 1: " + JSON.stringify(JsonObj_Questions));

    console.log("NameArray 2: " + NameArray);

    // QuizSetup(JsonObj_PeriodicTable);

    MakePeriodicTable(JsonObj_PeriodicTable);

    // $(".IndexWrapper").html(CreateNumberDivs(0, 8, "IndexNum DragNum btn btn-info draggable", false));  
    // $(".ChargeWrapper").html(CreateNumberDivs(-4, 3, "ChargeNum DragNum btn btn-info draggable", true));
    // $(".CoeffWrapper").html(CreateNumberDivs(0, 5, "CoeffNum DragNum btn btn-info draggable", false));

    // SetAcceptedElements(1);
    // SetAcceptedNumbers("1", ".IndexNum", "Index_OK");  // PRINCIP 1
    // SetAcceptedNumbers("1+", ".ChargeNum", "Char_OK"); // PRINCIP 2
    // SetAcceptedNumbers("1", ".CoeffNum", "Coeff_OK");  // PRINCIP 3

    GiveQuestion(JsonObj_Questions, QuestionObj, PrincipleNum);


    // Get CSS font-sizes
    var AtomSymbolFontSizeStr = $( ".AtomSymbol" ).css("font-size");
    var ElementBoxFontSizeStr = $( ".ElementBox" ).css("font-size");
    var DragNumFontSizeStr = $( ".DragNum" ).css("font-size");
    var ScoreHeaderH3FontSizeStr = $( ".ScoreHeaderH3" ).css("font-size");
    var ScoreHeaderFontSizeStr = $( ".ScoreHeader" ).css("font-size");
    console.log("DragNumFontSizeStr: " + DragNumFontSizeStr);

    // Get CSS line-height
    var LineHeight = $( ".ElementBox" ).css("line-height");


    // Naar vinduet loader scales elementerne:
    $(window).load(function () {
        // Scale the height on all ElmentBox
        $( ".ElementBox" ).height( 4/3*$( ".ElementBox" ).width() );

        // Scale the height on all small and large boxes
        $( ".lbox" ).height( $( ".lbox" ).width() );
        $( ".xlbox" ).height( $( ".xlbox" ).width() );
        $( ".sbox" ).height( $( ".sbox" ).width() );

        FontSizeScaler(AtomSymbolFontSizeStr, LineHeight, ".AtomSymbol, .NumberHeading");
        FontSizeScaler(ElementBoxFontSizeStr, LineHeight, ".ElementBox");
        FontSizeScaler(DragNumFontSizeStr, LineHeight, ".DragNum");
        FontSizeScaler(ScoreHeaderH3FontSizeStr, LineHeight, ".ScoreHeaderH3");
        FontSizeScaler(ScoreHeaderFontSizeStr, LineHeight, ".ScoreHeader, .ScoreNum, .TryAgain, .NextQuestion");

        console.log("WindowWidth: " + $( window ).width());

        // $( ".ElementBox" ).css( "font-size", String(50)+"%" );
    });

    // Naar vinduet resizes rescales elementerne:
    $(window).resize(function () {
        // Scale the height on all ElmentBox
        $( ".ElementBox" ).height( 4/3*$( ".ElementBox" ).width() );
        // $( ".ElementBox" ).height( 1*$( ".ElementBox" ).width() );

        // Scale the height on all small and large boxes
        $( ".lbox" ).height( $( ".lbox" ).width() );
        $( ".xlbox" ).height( $( ".xlbox" ).width() );
        $( ".sbox" ).height( $( ".sbox" ).width() );

        FontSizeScaler(AtomSymbolFontSizeStr, LineHeight, ".AtomSymbol, .NumberHeading");
        FontSizeScaler(ElementBoxFontSizeStr, LineHeight, ".ElementBox");
        FontSizeScaler(DragNumFontSizeStr, LineHeight, ".DragNum");
        FontSizeScaler(ScoreHeaderH3FontSizeStr, LineHeight, ".ScoreHeaderH3");
        FontSizeScaler(ScoreHeaderFontSizeStr, LineHeight, ".ScoreHeader, .ScoreNum, .TryAgain, .NextQuestion");
    });


    // Nedenstaaende udfoeres naar der trykkes paa TryAgain anchor-tag'et:
    $( document ).on('click', ".TryAgain", function(event){
        event.preventDefault();  // Prevents sending the user to "href".

        ResetQuiz(500);
    });

    // Format the ElementBox to reprecent an element seen in chemical equations:
    $( document ).on('mousedown', ".ElementBox", function(event){
        $(".AtomNum, .AtomName, .AtomWeight", this).hide();
        $(".AtomSymbol", this).css("font-size", "400%");
    });


    var ErrStr = "";


    $( ".draggable" ).draggable({ 
        revert: 'invalid',  // Makes the draggable revert back if does not have class "Elem_OK", "Coeff_OK", "Char_OK" or "Index_OK". 

        // SEQUENCE 1:
        start: function(event, ui) { 
            ResultStr += "Start";
            EventObj.Element.AtomNum = $(this).hasClass("ElementBox") ? $(".AtomNum",this).text() : null; 
            EventObj.Element.AtomName = $(this).hasClass("ElementBox") ? $(".AtomName",this).text() : null;
            EventObj.Index.val = $(this).hasClass("IndexNum") ? $(this).text() : null;
            EventObj.Charge.val = $(this).hasClass("ChargeNum") ? $(this).text() : null;
            EventObj.Coeff.val = $(this).hasClass("CoeffNum") ? $(this).text() : null;
            console.log("EventObj.Element: " + JSON.stringify(EventObj.Element) );

            // console.log("EventObj.this: " + JSON.stringify(this) );      // FEJL i Chrome + Safari
            // console.log("start.ui: " + JSON.stringify(ui));                // FEJL i Chrome + Safari
            // console.log("start.ui.helper: " + JSON.stringify(ui.helper));  // FEJL i Chrome + Safari
        },

        // SEQUENCE 3:
        stop: function(event, ui)  
        {
            ResultStr += "Stop";
            // console.log("ResultStr C: " + ResultStr);

            //==================================================================
            //  ELEMENT:    Check for the right element in the periodic table:
            //==================================================================
            if (EventObj.Element.AtomNum !== null){  // if draggable is an element of the perodic table.

                ErrStr += "B1,";

                // Ensures that only the accepted draggable element gets a correct-score, and that only one correct-score is given if the accepted draggable is re-dragged.
                if (EventObj.Element.drop && (ResultObj.Element.AtomNum === null)){ // accepted draggable is in droppable AND not counted before.
                    ErrStr += "B2,";
                    UpdateResultFeedback(ResultObj, true);
                    ResultObj.Element.AtomNum = EventObj.Element.AtomNum;
                    console.log("B2:\n EventObj.Element.AtomNum: " + EventObj.Element.AtomNum + ", ResultObj.Element.AtomNum: " + ResultObj.Element.AtomNum );
                } 

                // Ensures that you can't get a higher fail-score once the right accepted draggable element is dropped.
                if (ResultObj.Element.AtomNum === null){  // accepted draggable not counted before.
                    ErrStr += "B3,";
                    UpdateResultFeedback(ResultObj, false);
                }

                // Prevents reset for an accepted draggable, if one tries to ajust the the accepted draggable element in the droppable zone.
                // It also ensures that any non-acceppted draggable is reset if dragged.
                if (EventObj.Element.AtomNum != ResultObj.Element.AtomNum){ // if not equal to accepted draggable.
                    ErrStr += "B4,";
                    // Reset element when an unaccepted element returns to its position in the periodic table
                    $(".AtomNum, .AtomName, .AtomWeight", this).show();
                    $(".AtomSymbol", this).css("font-size", "160%");
                }
            }

            //==================================================================
            //  INDEX:    Check for the right index 
            //==================================================================
            if (EventObj.Index.val !== null){  // if draggable is an element of the perodic table.

                ErrStr += "C1,";

                // Ensures that only the accepted draggable element gets a correct-score, and that only one correct-score is given if the accepted draggable is re-dragged.
                if (EventObj.Index.drop && (ResultObj.Index.val === null)){ // accepted draggable is in droppable AND not counted before.
                    ErrStr += "C2,";
                    UpdateResultFeedback(ResultObj, true);
                    ResultObj.Index.val = EventObj.Index.val;
                    console.log("C2:\n EventObj.Index.val: " + EventObj.Index.val + ", ResultObj.Index.val: " + ResultObj.Index.val );
                } 

                // Ensures that you can't get a higher fail-score once the right accepted draggable element is dropped.
                if (ResultObj.Index.val === null){  // accepted draggable not counted before.
                    ErrStr += "C3,";
                    UpdateResultFeedback(ResultObj, false);
                }
            }

            //==================================================================
            //  CHARGE:    Check for the right charge 
            //==================================================================
            if (EventObj.Charge.val !== null){  // if draggable is an element of the perodic table.

                ErrStr += "D1,";

                // Ensures that only the accepted draggable element gets a correct-score, and that only one correct-score is given if the accepted draggable is re-dragged.
                if (EventObj.Charge.drop && (ResultObj.Charge.val === null)){ // accepted draggable is in droppable AND not counted before.
                    ErrStr += "D2,";
                    UpdateResultFeedback(ResultObj, true);
                    ResultObj.Charge.val = EventObj.Charge.val;
                    console.log("D2:\n EventObj.Charge.val: " + EventObj.Charge.val + ", ResultObj.Charge.val: " + ResultObj.Charge.val );
                } 

                // Ensures that you can't get a higher fail-score once the right accepted draggable element is dropped.
                if (ResultObj.Charge.val === null){  // accepted draggable not counted before.
                    ErrStr += "D3,";
                    UpdateResultFeedback(ResultObj, false);
                }
            }

            //==================================================================
            //  COEFFICIENT:    Check for the right coefficient 
            //==================================================================  
            if (EventObj.Coeff.val !== null){  // if draggable is an element of the perodic table.

                ErrStr += "E1,";

                // Ensures that only the accepted draggable element gets a correct-score, and that only one correct-score is given if the accepted draggable is re-dragged.
                if (EventObj.Coeff.drop && (ResultObj.Coeff.val === null)){ // accepted draggable is in droppable AND not counted before.
                    ErrStr += "E2,";
                    UpdateResultFeedback(ResultObj, true);
                    $(this).css({"width": "10%", "height": "50%", "font-size": "300%"});
                    ResultObj.Coeff.val = EventObj.Coeff.val;
                    console.log("E2:\n EventObj.Coeff.val: " + EventObj.Coeff.val + ", ResultObj.Coeff.val: " + ResultObj.Coeff.val );
                    // alert($(this).css("font-size"));
                } 

                // Ensures that you can't get a higher fail-score once the right accepted draggable element is dropped.
                if (ResultObj.Coeff.val === null){  // accepted draggable not counted before.
                    ErrStr += "E3,";
                    UpdateResultFeedback(ResultObj, false);
                }
            }

            EventObj = TEventObj; // Reset object.

            console.log("ErrStr: " + ErrStr);
            ErrStr = "";
        }
    });

    $( ".DropElement" ).droppable({
        accept: ".Elem_OK",

        // SEQUENCE 2:
        drop: function( event, ui ) {
            $( this ).addClass( "DropHighlight" );
            ResultStr += "Drop";
            EventObj.Success = true;
            EventObj.Element.drop = true;
        }
    });
    $( ".DropCoeff" ).droppable({
        accept: ".Coeff_OK",
        drop: function( event, ui ) {
            $( this ).addClass( "DropHighlight" );
            EventObj.Success = true;
            EventObj.Coeff.drop = true;
        }
    });
    $( ".DropCharge" ).droppable({
        accept: ".Char_OK",
        drop: function( event, ui ) {
            $( this ).addClass( "DropHighlight" );
            EventObj.Success = true;
            EventObj.Charge.drop = true;
        }
    });
    $( ".DropIndex" ).droppable({
        accept: ".Index_OK",
        drop: function( event, ui ) {
            $( this ).addClass( "DropHighlight" );
            EventObj.Success = true;
            EventObj.Index.drop = true;
        }
    });

    // console.log("inputObj 2: " + JSON.stringify(inputObj.NameArray));
});

