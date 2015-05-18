
//########################################################################
//         JSON-objekter som senere skal have sine egne JSON-filer:
//########################################################################

var JsonObj_PeriodicTable = [
    {"name": "Hydrogen",  "sym":"H",  "num":1,   "Z":1,  "A":1.0079},
    {"name": "Helium",    "sym":"He", "num":18,  "Z":2,  "A":4.002602},
    {"name": "Lithium",   "sym":"Li", "num":19,  "Z":3,  "A":6.94},
    {"name": "Beryllium", "sym":"Be", "num":20,  "Z":4,  "A":9.0121831},
    {"name": "Bor",       "sym":"B",  "num":31,  "Z":5,  "A":10.81},
    {"name": "Carbon",    "sym":"C",  "num":32,  "Z":6,  "A":12.011},
    {"name": "Nitrogen",  "sym":"N",  "num":33,  "Z":7,  "A":14.007},
    {"name": "Ilt",       "sym":"O",  "num":34,  "Z":8,  "A":15.999},
    {"name": "Fluor",     "sym":"F",  "num":35,  "Z":9,  "A":18.998403163},
    {"name": "Neon",      "sym":"Ne", "num":36,  "Z":10, "A":17.1797},
    {"name": "Natrium",   "sym":"Na", "num":37,  "Z":11, "A":22.98976928},
    {"name": "Magnesium", "sym":"Mg", "num":38,  "Z":12, "A":24.305},
    {"name": "Aluminium", "sym":"Al", "num":49,  "Z":13, "A":26.9815385},
    {"name": "Silicium",  "sym":"Si", "num":50,  "Z":14, "A":28.085},
    {"name": "Fosfor",    "sym":"P",  "num":51,  "Z":15, "A":30.973761998},
    {"name": "Svovl",     "sym":"S",  "num":52,  "Z":16, "A":32.06},
    {"name": "Klor",      "sym":"Cl", "num":53,  "Z":17, "A":35.45},
    {"name": "Argon",     "sym":"Ar", "num":54,  "Z":18, "A":39.948}
];

var JsonObj_Questions = [
    {"AtomSym": "H",   "Name": "Hydrogen", "TName": "Dihydrogen",         "AtomNum": 1,  "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":1,  "Coeff": 1},
    {"AtomSym": "He",  "Name": "Helium",   "TName": "Helium (ballongas)", "AtomNum": 2,  "Principle": [1,3], "ChemType": "molecule", "Index": 1, "Charge":0,  "Coeff": 1},
    {"AtomSym": "N",   "Name": "Nitrogen", "TName": "Dinitrogen",         "AtomNum": 7,  "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":0,  "Coeff": 1},
    {"AtomSym": "O",   "Name": "Oxygen",   "TName": "Dioxygen",           "AtomNum": 8,  "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":0,  "Coeff": 1},
    {"AtomSym": "O",   "Name": "Oxygen",   "TName": "Ozon",               "AtomNum": 8,  "Principle": [1,3], "ChemType": "molecule", "Index": 3, "Charge":0,  "Coeff": 1},
    {"AtomSym": "Ne",  "Name": "Neon",     "TName": "Neongas",            "AtomNum": 10, "Principle": [1,3], "ChemType": "molecule", "Index": 1, "Charge":0,  "Coeff": 1},
    {"AtomSym": "S",   "Name": "Svovl",    "TName": "Svovl",              "AtomNum": 16, "Principle": [1,3], "ChemType": "molecule", "Index": 8, "Charge":0,  "Coeff": 1},
    {"AtomSym": "Cl",  "Name": "Klor",     "TName": "Dilor",              "AtomNum": 17, "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":-1, "Coeff": 1},
    // {"AtomSym": "Br",  "Name": "Brom",     "TName": "Dibrom",          "AtomNum": 35, "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":-1, "Coeff": 1},
    // {"AtomSym": "I",   "Name": "Iod",      "TName": "Diiod",           "AtomNum": 53, "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":-1, "Coeff": 1}
];


//########################################################################
//                      Interne JS-objekter:
//########################################################################

var ResultStr = "";
var EventObj = {    Element: {AtomNum: null, AtomName: null, drop: false}, 
                    Index: {val: null, drop: false },
                    Charge: {val: null, drop: false },
                    Coeff: {val: null, drop: false }
                };
// var TEventObj = JSON.parse(JSON.stringify(EventObj));   // Used for resetting EventObj
// var TEventObj  = jQuery.extend(true, {}, EventObj);

var ResultObj = {   Attempt: 0, 
                    Correct: 0, 
                    Fail: 0, 

                    Qcount: 0,
                    PrincipleArray: [],

                    Element: {AtomNum: null, Attempt: 0 }, 
                    Index: {val: null, Attempt: 0 },
                    Charge: {val: null, Attempt: 0 },
                    Coeff: {val: null, Attempt: 0 },

                    Dropped: {Element: false, Index: false, Charge: false, Coeff: false} 
                };

var CssObj = {};

// var TResultObj = JSON.parse(JSON.stringify(ResultObj));  // Used for resetting ResultObj
// var TResultObj  = jQuery.extend(true, {}, ResultObj);

var FontSizeScalerObj = {};

// TEST:
$( document ).ready(function() {

    var TestArray = [1,2,3,4,5,6,7,8,9,10];
    console.log("ShuffelArray: " + ShuffelArray(TestArray));

    // GiveQuestion(JsonObj_Questions, QuestionObj, ResultObj, PrincipleNum);

    // GivePosetiveFeedback(JsonObj_Questions, 0);
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

// LINK til "objekter" på visningssitet:
// http://eundervisning-wp.dk/objekter/kemi_drag/builds/development/

// MARK 

var PrincipleNum = 1;

var JsonObj_PeriodicTable;

var Names;
var NameArray = [];

var DummyElement = '<div class="DummyElement"></div>';

var ElementDummyNumbers = "_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_17_21_22_23_24_25_26_27_28_29_30_39_40_41_42_43_44_45_46_47_48_";

var QuestionObj =   { 
                        P1 : [],  // Princip 1 - P1-array consists of the array-index of all the JsonObj_Questions which have Principle: [1]
                        P2 : [],  // Princip 2 - P2-array consists of the array-index of all the JsonObj_Questions which have Principle: [2]
                        P3 : [],  // Princip 3 - P3-array consists of the array-index of all the JsonObj_Questions which have Principle: [3]
                        P4 : []   // Princip 1+2+3 - P4-array consists of the array-index 
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


function MakeQuestionObj(JsonObj_Questions, QuestionObj){

    for (var ElmObjNr in JsonObj_Questions){
        console.log("JsonObj_Questions["+String(ElmObjNr)+"].Principle: " + JsonObj_Questions[ElmObjNr].Principle);
        for (var p in JsonObj_Questions[ElmObjNr].Principle){
            console.log("p: " + p, ", JsonObj_Questions["+String(ElmObjNr)+"].Principle["+p+"]: " + ElmObjNr);
            if (JsonObj_Questions[ElmObjNr].Principle[p] == 1) QuestionObj.P1.push( ElmObjNr );
            if (JsonObj_Questions[ElmObjNr].Principle[p] == 2) QuestionObj.P2.push( ElmObjNr );
            if (JsonObj_Questions[ElmObjNr].Principle[p] == 3) QuestionObj.P3.push( ElmObjNr );
        }
        QuestionObj.P4.push( ElmObjNr );
    }

    console.log("QuestionObj: " + JSON.stringify(QuestionObj));
}


function Principle1(JOQ, PrincipleArray, Qcount){

    var Inx = PrincipleArray[Qcount];

    var ArrayLength = PrincipleArray.length;
    var QuestionCountStr = "<h2><span class='QuizHeadingTextCount'>" + String(Qcount + 1) + "/" + String(ArrayLength) + "</span></h2>" + 
                           "<span class='QuizNextQuestion'>" + 
                                '<a class="NextQuestion btn-default btn btn-default" href="#">Næste spørgsmål</a>' +
                           "</span>";

    var HTML = "";
    HTML += "<h1>Princip 1-a-1: et grundstof - letteste niveau</h1>";
    HTML += "<div class='QuestionWrap'>";
    HTML += "<h2 class='QuestionText'>Skriv formlen for stoffet der indeholder <span class='QuestionTask'>"+JOQ[Inx]["Index"]+" "+JOQ[Inx]["Name"].toLowerCase()+"atom"+((JOQ[Inx]["Index"]==1)?"":"er")+"</span>.</h2>" + QuestionCountStr;
    HTML += "</div>";
    // HTML += "<div class='QuestionWrap'><h2 class='AnswerText'>TEST</h2></div>";

    // Write the heading and question for the student:
    $(".QuizHeadingText").html( HTML );

    $(".ElementBox").removeClass("Elem_OK");
    $(".DragNum").removeClass("Index_OK Char_OK Coeff_OK");

    SetAcceptedElements( JOQ[Inx]["AtomNum"] );                        // The draggable element
    SetAcceptedNumbers(  JOQ[Inx]["Index"], ".IndexNum", "Index_OK");  // Principle 1: index numbers
}


function Principle4(JOQ, PrincipleArray, Qcount){

    var Inx = PrincipleArray[Qcount];

    var ArrayLength = PrincipleArray.length;
    var QuestionCountStr = "<h2><span class='QuizHeadingTextCount'>" + String(Qcount + 1) + "/" + String(ArrayLength) + "</span></h2>" + 
                           "<span class='QuizNextQuestion'>" + 
                                '<a class="NextQuestion btn-default btn btn-default" href="#">Næste spørgsmål</a>' +
                           "</span>";

    var HTML = "";
    HTML += "<h1>Princip 1, 2 og 3 - <b>TEST</b> - med alle draggable tal</h1>";
    HTML += "<div class='QuestionWrap'>";
    HTML += "<h2>Skriv formlen for stoffet der indeholder <span class='QuestionTask'>"+JOQ[Inx]["Index"]+" "+JOQ[Inx]["Name"].toLowerCase()+"atom"+((JOQ[Inx]["Index"]==1)?"":"er")+"</span>.</h2>" + QuestionCountStr + "";
    HTML += "</div>";

    // Write the heading and question for the student:
    $(".QuizHeadingText").html( HTML );

    $(".ElementBox").removeClass("Elem_OK");
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
        ResultObj.Qcount = Qcount;
        ResultObj.PrincipleArray = TPrincipleArray; 


        $(".QuizHeadingTextCount").text( String(Qcount + 1) + "/" + String(ArrayLength) );

        $(".CoeffHeadingWrapper, .CoeffWrapper").hide();  // Hide placeholders for the coefficients - they are not in use in principle 1 anyway.

        $( document ).on('click', ".NextQuestion", function(event){
            event.preventDefault();  // Prevents sending the user to "href".


            // if ( ResultObj.Correct < 2) {
            //     alert("Du skal placere både grundstof og indeks tal korrekt før du kan fortsætte!");
            //     return 0;
            // }
            // console.log("GiveQuestion - ResultObj" + JSON.stringify(ResultObj) )

            ResetQuiz(500);
            ++Qcount;
            Principle1(JOQ, TPrincipleArray, Qcount);
            ResultObj.Qcount = Qcount;
            ResultObj.PrincipleArray = TPrincipleArray; 

            FontSizeScalerNew([".AtomSymbol", ".NumberHeading", ".ElementBox", ".DragNum", ".ScoreHeaderH3", 
                            ".ScoreHeader", ".ScoreNum", ".TryAgain", ".NextQuestion", ".QuizHeadingText h2", 
                            ".QuizHeadingText h1", ".QuizHeadingTextCount"], 1425);
            
            // $(".QuestionWrap").append( "<span class='QuizHeadingTextCount'>" + String(Qcount + 1) + "/" + String(ArrayLength) + "</span>");
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
        PrincipleArray = QuestionObj["P4"];  // <---------------------------  HUSK AT RETTE DENNE!!!
        TPrincipleArray = ShuffelArray( PrincipleArray );  // Random index relating to the sub-objects in JsonObj_Questions.
        ArrayLength = TPrincipleArray.length;

        $(".IndexWrapper").html(CreateNumberDivs(1, 8, "IndexNum DragNum btn btn-info draggable", false));  
        $(".ChargeWrapper").html(CreateNumberDivs(-3, 3, "ChargeNum DragNum btn btn-info draggable", true));
        $(".CoeffWrapper").html(CreateNumberDivs(1, 5, "CoeffNum DragNum btn btn-info draggable", false));

        Principle4(JOQ, TPrincipleArray, Qcount);
        ResultObj.Qcount = Qcount;
        ResultObj.PrincipleArray = TPrincipleArray; 

        $(".QuizHeadingTextCount").text( String(Qcount + 1) + "/" + String(ArrayLength) );

        // $(".CoeffHeadingWrapper, .CoeffWrapper").hide();  // Hide placeholders for the coefficients - they are not in use in principle 1 anyway.

        $( document ).on('click', ".NextQuestion", function(event){
            event.preventDefault();  // Prevents sending the user to "href".


            // if ( ResultObj.Correct < 2) {
            //     alert("Du skal placere både grundstof og indeks tal korrekt før du kan fortsætte!");
            //     return 0;
            // }
            // console.log("GiveQuestion - ResultObj" + JSON.stringify(ResultObj) )

            ResetQuiz(500);
            ++Qcount;
            Principle4(JOQ, TPrincipleArray, Qcount);
            ResultObj.Qcount = Qcount;
            ResultObj.PrincipleArray = TPrincipleArray; 

            FontSizeScalerNew([".AtomSymbol", ".NumberHeading", ".ElementBox", ".DragNum", ".ScoreHeaderH3", 
                            ".ScoreHeader", ".ScoreNum", ".TryAgain", ".NextQuestion", ".QuizHeadingText h2", 
                            ".QuizHeadingText h1", ".QuizHeadingTextCount"], 1425);
            
            // $(".QuestionWrap").append( "<span class='QuizHeadingTextCount'>" + String(Qcount + 1) + "/" + String(ArrayLength) + "</span>");
        });

        console.log("ScoreCorrect XXX: " + parseInt($(".ScoreCorrect").text())   );
        console.log("ArrayLength: " + ArrayLength);
    }

    // Write the heading and question for the student:
    // $(".QuizHeading").html( HTML );

}


function GivePosetiveFeedback(JsonObj_Questions, ResultObj){

    console.log("GivePosetiveFeedback - ResultObj: " + JSON.stringify(ResultObj) );

    var NumOfCorrectAnswers;
    if ((1 <= PrincipleNum) && (PrincipleNum <= 3)) NumOfCorrectAnswers = 2;  // Principle 1 OR 2 OR 3
    if (PrincipleNum == 4) NumOfCorrectAnswers = 3;                           // Principle 1 AND 2 AND 3

    if (ResultObj.Correct == NumOfCorrectAnswers){

        ArrayIndex = ResultObj.PrincipleArray[ ResultObj.Qcount ];

        console.log("ArrayIndex: " + ArrayIndex);

        var HTML = "";
        HTML += "RIGTIGT: Du har skrevet formlen for " + JsonObj_Questions[ ArrayIndex ].TName.toLowerCase() + ".";
        console.log("GivePosetiveFeedback: " + HTML);

        $(".QuestionText").html( HTML );

        // Get 
        if ($.isEmptyObject(CssObj)){
            CssObj.Element = $(".ElementBox").css(["background-color", "border-color"]);
            CssObj.Index =  $(".IndexNum").css(["background-color", "border-color"]);
            CssObj.Charge =  $(".ChargeNum").css(["background-color", "border-color"]);
            CssObj.Coeff =  $(".CoeffNum").css(["background-color", "border-color"]);
            CssObj.lbox =  $(".lbox").css(["background-color", "border-color"]);
            CssObj.sbox =  $(".sbox").css(["background-color", "border-color"]);
        }
        console.log("CssObj: " + JSON.stringify(CssObj));

        // Fade out borders on the droppables 
        $( ".lbox, .sbox" ).animate({
            "border-color": "transparent"
        }, 500 );

        // Fade out borders and background-color on the draggables: 
        if (ResultObj.Dropped.Element) $(".Elem_OK").animate({"background-color": "transparent", "border-color": "transparent"}, 500);
        if (ResultObj.Dropped.Index)  $(".Index_OK").animate({"background-color": "transparent", "border-color": "transparent"}, 500);
        if (ResultObj.Dropped.Charge)  $(".Char_OK").animate({"background-color": "transparent", "border-color": "transparent"}, 500);
        if (ResultObj.Dropped.Coeff)  $(".Coeff_OK").animate({"background-color": "transparent", "border-color": "transparent"}, 500);


        // var Offset = $(DivObj).offset();     // absolute
        // var Position = $(DivObj).position();    // relative

        var OIndexPos = $(".Index_OK").offset();

        var OElemPos = $(".Elem_OK").offset();
        var ElemWidth = $(".Elem_OK").width();

        var PIndexPos = $(".Index_OK").position();

        var PElemPos = $(".Elem_OK").position();

        console.log("TT2 - PIndexPos: " + JSON.stringify(PIndexPos) + ", OIndexPos: " + JSON.stringify(OIndexPos));
        console.log("TT2 - PElemPos: " + JSON.stringify(PElemPos) + ", OElemPos: " + JSON.stringify(OElemPos));

        var IndexTop = String(-(OIndexPos.top - OElemPos.top));
        var IndexLeft = String(OIndexPos.left - OElemPos.left);

        // // Move all draggables to their initial positions
        // $(".Index_OK").animate({
        //     top: IndexTop+"px",
        //     left: IndexLeft+"px"
        // }, 500, function() {  // When animation complete, do...
        //     // FEJL: Hvis nedenstående kode placeres her, så køres det mange gange (ca 90), derfor er det placeret forneden - check console.log
        //     console.log("ResetQuiz - 0");
        // });
    }
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
                    // '<div class="AtomWeight">' + AtomWeight + '</div>' +
                '</div>';
    return HTML;
}

function AjaxCallback(JSONdata){
    console.log("JsonObj_PeriodicTable - AjaxCallback: " + JSON.stringify(JSONdata));
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
                    // console.log("Zn: " + Zn + ", JsonObj_PeriodicTable[Zn].sym: " + JsonObj_PeriodicTable[Zn].Z);
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


function FontSizeScalerNew(SelectorClassArr, NativeWindowWidth){
    console.log("FontSizeScalerObj 1:" + JSON.stringify(FontSizeScalerObj) );
    var FontSize;
    if ($.isEmptyObject(FontSizeScalerObj)){  // If the window reloades, then FontSizeScalerObj is empty and therefore store all font-sizes.
        for (var i = 0; i < SelectorClassArr.length; i++) { 
            FontSize = $( SelectorClassArr[i] ).css("font-size");
            console.log("FontSizeScalerObj FontSize - SelectorClass: " + SelectorClassArr[i] + ", font-size: " + FontSize );
            if (typeof FontSize != 'undefined') // Check in case a CSS-class in SelectorClassArr does not exist:
                FontSizeScalerObj[ SelectorClassArr[i] ] = parseInt( FontSize.replace(/px/g, '') );
        }
    } 

    // Resize all fonts:
    var WindowWidth = $( window ).width();
    var Ratio = Math.round(1000*( WindowWidth/NativeWindowWidth ))/1000; // Rounded to 3 digit precision.
    for (var Selector in FontSizeScalerObj ) { 
        $( Selector ).css("font-size", String(FontSizeScalerObj[ Selector ]*Ratio)+"px");
    }
    console.log("FontSizeScalerObj 2:" + JSON.stringify(FontSizeScalerObj) );
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


    // Make borders and background-color on the draggables visible: 
    if (ResultObj.Dropped.Element) $(".Elem_OK").css(CssObj.Element);
    if (ResultObj.Dropped.Index)  $(".Index_OK").css(CssObj.Index);
    if (ResultObj.Dropped.Charge)  $(".Char_OK").css(CssObj.Charge);
    if (ResultObj.Dropped.Coeff)  $(".Coeff_OK").css(CssObj.Coeff);
    $(".lbox").css(CssObj.lbox);
    $(".sbox").css(CssObj.sbox);

    // Reset memory:
    EventObj = { Element: {AtomNum: null, AtomName: null, drop: false}, 
                    Index: {val: null, drop: false },
                    Charge: {val: null, drop: false },
                    Coeff: {val: null, drop: false }
                };

    // Reset memory:
    ResultObj = {   Attempt: 0, 
                    Correct: 0, 
                    Fail: 0, 

                    Qcount: 0,
                    PrincipleArray: [],

                    Element: {AtomNum: null, Attempt: 0 }, 
                    Index: {val: null, Attempt: 0 },
                    Charge: {val: null, Attempt: 0 },
                    Coeff: {val: null, Attempt: 0 },

                    Dropped: {Element: false, Index: false, Charge: false, Coeff: false} 
                };

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

    // Create the periodic table:
    MakePeriodicTable(JsonObj_PeriodicTable);

    // Make the H1 heading, eg. "Princip 1...", and the H2 question, eg. "Skriv formlen for stoffet der..."
    GiveQuestion(JsonObj_Questions, QuestionObj, PrincipleNum);

    // When the window loades, scale all elements:
    $(window).load(function () {
        // Scale the height on all ElmentBox
        // $( ".ElementBox" ).height( 4/3*$( ".ElementBox" ).width() ); // Rektangulære boxe
        $( ".ElementBox" ).height( $( ".ElementBox" ).width() );        // Kvardratiske boxe  

        // Scale the height on all small and large boxes
        $( ".lbox" ).height( $( ".lbox" ).width() );
        // $( ".xlbox" ).height( $( ".xlbox" ).width() );
        $( ".sbox" ).height( $( ".sbox" ).width() );

        FontSizeScalerNew([".AtomSymbol", ".NumberHeading", ".ElementBox", ".DragNum", ".ScoreHeaderH3", 
                            ".ScoreHeader", ".ScoreNum", ".TryAgain", ".NextQuestion", ".QuizHeadingText h2", 
                            ".QuizHeadingText h1", ".QuizHeadingTextCount"], 1425);

        $( ".DragNum" ).width( $( ".DragNum" ).height() );

        console.log("WindowWidth: " + $( window ).width());

        // $( ".ElementBox" ).css( "font-size", String(50)+"%" );
    });

    // When the window resizes, scale all elements: 
    $(window).resize(function () {
        // Scale the height on all ElmentBox
        // $( ".ElementBox" ).height( 4/3*$( ".ElementBox" ).width() );  // Rektangulære boxe
        $( ".ElementBox" ).height( $( ".ElementBox" ).width() );       // Kvardratiske boxe

        // Scale the height on all small and large boxes
        $( ".lbox" ).height( $( ".lbox" ).width() );
        // $( ".xlbox" ).height( $( ".xlbox" ).width() );
        $( ".sbox" ).height( $( ".sbox" ).width() );

        FontSizeScalerNew([".AtomSymbol", ".NumberHeading", ".ElementBox", ".DragNum", ".ScoreHeaderH3", 
                            ".ScoreHeader", ".ScoreNum", ".TryAgain", ".NextQuestion", ".QuizHeadingText h2", 
                            ".QuizHeadingText h1", ".QuizHeadingTextCount"], 1425);

        $( ".DragNum" ).width( $( ".DragNum" ).height() );
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

                ResultObj.Element.Attempt += 1;  // Update the number pf attempts.

                // Ensures that only the accepted draggable element gets a correct-score, and that only one correct-score is given if the accepted draggable is re-dragged.
                if (EventObj.Element.drop && (ResultObj.Element.AtomNum === null)){ // accepted draggable is in droppable AND not counted before.
                    ErrStr += "B2,";
                    UpdateResultFeedback(ResultObj, true);
                    ResultObj.Element.AtomNum = EventObj.Element.AtomNum;
                    ResultObj.Dropped.Element = true;
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

                ResultObj.Index.Attempt += 1;  // Update the number pf attempts.

                // Ensures that only the accepted draggable element gets a correct-score, and that only one correct-score is given if the accepted draggable is re-dragged.
                if (EventObj.Index.drop && (ResultObj.Index.val === null)){ // accepted draggable is in droppable AND not counted before.
                    ErrStr += "C2,";
                    UpdateResultFeedback(ResultObj, true);
                    ResultObj.Index.val = EventObj.Index.val;
                    ResultObj.Dropped.Index = true;
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

                ResultObj.Charge.Attempt += 1;  // Update the number pf attempts.

                // Ensures that only the accepted draggable element gets a correct-score, and that only one correct-score is given if the accepted draggable is re-dragged.
                if (EventObj.Charge.drop && (ResultObj.Charge.val === null)){ // accepted draggable is in droppable AND not counted before.
                    ErrStr += "D2,";
                    UpdateResultFeedback(ResultObj, true);
                    ResultObj.Charge.val = EventObj.Charge.val;
                    ResultObj.Dropped.Charge = true;
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

                ResultObj.Coeff.Attempt += 1;  // Update the number pf attempts.

                // Ensures that only the accepted draggable element gets a correct-score, and that only one correct-score is given if the accepted draggable is re-dragged.
                if (EventObj.Coeff.drop && (ResultObj.Coeff.val === null)){ // accepted draggable is in droppable AND not counted before.
                    ErrStr += "E2,";
                    UpdateResultFeedback(ResultObj, true);
                    $(this).css({"width": "10%", "height": "50%", "font-size": "300%"});
                    ResultObj.Coeff.val = EventObj.Coeff.val;
                    ResultObj.Dropped.Coeff = true;
                    console.log("E2:\n EventObj.Coeff.val: " + EventObj.Coeff.val + ", ResultObj.Coeff.val: " + ResultObj.Coeff.val );
                    // alert($(this).css("font-size"));
                } 

                // Ensures that you can't get a higher fail-score once the right accepted draggable element is dropped.
                if (ResultObj.Coeff.val === null){  // accepted draggable not counted before.
                    ErrStr += "E3,";
                    UpdateResultFeedback(ResultObj, false);
                }
            }

            console.log("ErrStr: " + ErrStr);
            ErrStr = "";

            GivePosetiveFeedback(JsonObj_Questions, ResultObj);

            // Reset EventObj:
            EventObj = {    Element: {AtomNum: null, AtomName: null, drop: false}, 
                            Index: {val: null, drop: false },
                            Charge: {val: null, drop: false },
                            Coeff: {val: null, drop: false }
                        };
        },

        drag: function(){
            var offset = $(this).offset();
            var xPos = offset.left;
            var yPos = offset.top;
            $('#DragLeft').text(xPos);
            $('#DragTop').text(yPos);
        }
    });

    $( ".DropElement" ).droppable({
        accept: ".Elem_OK",

        // SEQUENCE 2:
        drop: function( event, ui ) {
            // $( this ).addClass( "DropHighlight" );
            ResultStr += "Drop";
            EventObj.Element.drop = true;
            console.log("EventObj.Element.obj: " + JSON.stringify( EventObj.Element.obj ));
        }
    });
    $( ".DropCoeff" ).droppable({
        accept: ".Coeff_OK",
        drop: function( event, ui ) {
            // $( this ).addClass( "DropHighlight" );
            EventObj.Coeff.drop = true;
        }
    });
    $( ".DropCharge" ).droppable({
        accept: ".Char_OK",
        drop: function( event, ui ) {
            // $( this ).addClass( "DropHighlight" );
            EventObj.Charge.drop = true;
        }
    });
    $( ".DropIndex" ).droppable({
        accept: ".Index_OK",
        drop: function( event, ui ) {
            // $( this ).addClass( "DropHighlight" );
            EventObj.Index.drop = true;
        }
    });


});

