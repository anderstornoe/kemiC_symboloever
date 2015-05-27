
//########################################################################
//         JSON-objekter som senere skal have sine egne JSON-filer:
//########################################################################

var XXX = "";

var JsonObj_PeriodicTable = [
    {"name": "Hydrogen",   "sym":"H",  "num":1,   "Z":1,  "A":1.0079},       // SKAL 1
    {"name": "Helium",     "sym":"He", "num":18,  "Z":2,  "A":4.002602},
    {"name": "Lithium",    "sym":"Li", "num":19,  "Z":3,  "A":6.94},         // SKAL 2
    {"name": "Beryllium",  "sym":"Be", "num":20,  "Z":4,  "A":9.0121831},
    {"name": "Bor",        "sym":"B",  "num":31,  "Z":5,  "A":10.81},
    {"name": "Carbon",     "sym":"C",  "num":32,  "Z":6,  "A":12.011},
    {"name": "Nitrogen",   "sym":"N",  "num":33,  "Z":7,  "A":14.007},
    {"name": "Ilt",        "sym":"O",  "num":34,  "Z":8,  "A":15.999},
    {"name": "Fluor",      "sym":"F",  "num":35,  "Z":9,  "A":18.998403163},
    {"name": "Neon",       "sym":"Ne", "num":36,  "Z":10, "A":17.1797},
    {"name": "Natrium",    "sym":"Na", "num":37,  "Z":11, "A":22.98976928},
    {"name": "Magnesium",  "sym":"Mg", "num":38,  "Z":12, "A":24.305},
    {"name": "Aluminium",  "sym":"Al", "num":49,  "Z":13, "A":26.9815385},
    {"name": "Silicium",   "sym":"Si", "num":50,  "Z":14, "A":28.085},
    {"name": "Fosfor",     "sym":"P",  "num":51,  "Z":15, "A":30.973761998},
    {"name": "Svovl",      "sym":"S",  "num":52,  "Z":16, "A":32.06},
    {"name": "Chlor",       "sym":"Cl", "num":53,  "Z":17, "A":35.45},
    {"name": "Argon",      "sym":"Ar", "num":54,  "Z":18, "A":39.948},
    {"name": "Kalium",     "sym":"K",  "num":55,  "Z":19, "A":39.0983},     // SKAL 3
    {"name": "Calcium",    "sym":"Ca", "num":56,  "Z":20, "A":40.078},
    {"name": "Scandium",   "sym":"Sc", "num":57,  "Z":21, "A":44.955908},
    {"name": "Titan",      "sym":"Ti", "num":58,  "Z":22, "A":47.867},
    {"name": "Vanadium",   "sym":"V",  "num":59,  "Z":23, "A":50.9415},
    {"name": "Krom",       "sym":"Cr", "num":60,  "Z":24, "A":51.9961},
    {"name": "Mangan",     "sym":"Mn", "num":61,  "Z":25, "A":54.938044},
    {"name": "Jern",       "sym":"Fe", "num":62,  "Z":26, "A":55.845},
    {"name": "Kobolt",     "sym":"Co", "num":63,  "Z":27, "A":58.933194},
    {"name": "Nikkel",     "sym":"Ni", "num":64,  "Z":28, "A":58.6934},
    {"name": "Kobber",     "sym":"Cu", "num":65,  "Z":29, "A":63.546},
    {"name": "Zink",       "sym":"Zn", "num":66,  "Z":30, "A":65.38},
    {"name": "Gallium",    "sym":"Ga", "num":67,  "Z":31, "A":69.723},
    {"name": "Germanium",  "sym":"Ge", "num":68,  "Z":32, "A":72.63},
    {"name": "Arsen",      "sym":"As", "num":69,  "Z":33, "A":74.921595},
    {"name": "Selen",      "sym":"Se", "num":70,  "Z":34, "A":78.971},
    {"name": "Brom",       "sym":"Br", "num":71,  "Z":35, "A":79.904},
    {"name": "Krypton",    "sym":"Kr", "num":72,  "Z":36, "A":83.798},
    {"name": "Rubidium",   "sym":"Rb", "num":73,  "Z":37, "A":85.4678}, // SKAL 4
    {"name": "Strontium",  "sym":"Sr", "num":74,  "Z":38, "A":87.62},
    {"name": "Yttrium",    "sym":"Y", "num":75,  "Z":39, "A":88.90584},
    {"name": "Zirconium",  "sym":"Zr", "num":76,  "Z":40, "A":91.224},
    {"name": "Niobium",    "sym":"Nb", "num":77,  "Z":41, "A":92.90637},
    {"name": "Molybdæn",   "sym":"Mo", "num":78,  "Z":42, "A":95.95},
    {"name": "Technetium", "sym":"Tc", "num":79,  "Z":43, "A":98},
    {"name": "Ruthenium",  "sym":"Ru", "num":80,  "Z":44, "A":101.07},
    {"name": "Rhodium",    "sym":"Rh", "num":81,  "Z":45, "A":102.90550},
    {"name": "Palladium",  "sym":"Pd", "num":82,  "Z":46, "A":106.42},
    {"name": "Sølv",       "sym":"Ag", "num":83,  "Z":47, "A":107.8682},
    {"name": "Cadmium",    "sym":"Cd", "num":84,  "Z":48, "A":112.414},
    {"name": "Indium",     "sym":"In", "num":85,  "Z":49, "A":114.818},
    {"name": "Tin",        "sym":"Sn", "num":86,  "Z":50, "A":118.710},
    {"name": "Antimon",    "sym":"Sb", "num":87,  "Z":51, "A":121.760},
    {"name": "Tellur",     "sym":"Te", "num":88,  "Z":52, "A":127.60},
    {"name": "Jod",        "sym":"I", "num":89,   "Z":53, "A":126.90447},
    {"name": "Xenon",      "sym":"Xe", "num":90,  "Z":54, "A":131.293},
    {"name": "Cæsium",     "sym":"Cs", "num":91,  "Z":55, "A":132.90545196},   // SKAL 5
    {"name": "Barium",     "sym":"Ba", "num":92,  "Z":56, "A":137.327},
    {"name": "",           "sym":"57-71", "num":93,  "Z":0, "A":XXX},
    {"name": "Hafnium",    "sym":"Hf", "num":94,  "Z":72, "A":178.49},
    {"name": "Tantal",     "sym":"Ta", "num":95,  "Z":73, "A":180.94788},
    {"name": "Wolfram",    "sym":"W",  "num":96,  "Z":74, "A":183.84},
    {"name": "Rhenium",    "sym":"Re", "num":97,  "Z":75, "A":186.207},
    {"name": "Osmium",     "sym":"Os", "num":98,  "Z":76, "A":190.23},
    {"name": "Iridium",    "sym":"Ir", "num":99,  "Z":77, "A":192.217},
    {"name": "Platin",     "sym":"Pt", "num":100,  "Z":78, "A":195.084},
    {"name": "Guld",       "sym":"Au", "num":101,  "Z":79, "A":196.966569},
    {"name": "Kviksølv",   "sym":"Hg", "num":102,  "Z":80, "A":200.59},
    {"name": "Thallium",   "sym":"Tl", "num":103,  "Z":81, "A":204.38},
    {"name": "Bly",        "sym":"Pb", "num":104,  "Z":82, "A":207.2},
    {"name": "Bismuth",    "sym":"Bi", "num":105,  "Z":83, "A":208.98040},
    {"name": "Polonium",   "sym":"Po", "num":106,  "Z":84, "A":209},
    {"name": "Astat",      "sym":"At", "num":107,  "Z":85, "A":210},
    {"name": "Radon",      "sym":"Rn", "num":108,  "Z":86, "A":222},
    {"name": "Francium",      "sym":"Fr", "num":109,  "Z":87, "A":223},      // SKAL 6
    {"name": "Radium",        "sym":"Ra", "num":110,  "Z":88, "A":226},
    {"name": "",           "sym":"89-103", "num":111,  "Z":0, "A":XXX}, 
    {"name": "Rutherfordium", "sym":"Rf", "num":112,  "Z":104, "A":267}, 
    {"name": "Dubnium",       "sym":"Db", "num":113,  "Z":105, "A":268}, 
    {"name": "Seaborgium",    "sym":"Sg", "num":114,  "Z":106, "A":271}, 
    {"name": "Bohrium",       "sym":"Bh", "num":115,  "Z":107, "A":272}, 
    {"name": "Hassium",       "sym":"Hs", "num":116,  "Z":108, "A":270}, 
    {"name": "Meitnerium",    "sym":"Mt", "num":117,  "Z":109, "A":276}, 
    {"name": "Darmstadtium",  "sym":"Ds", "num":118,  "Z":110, "A":281}, 
    {"name": "Røntgenium",    "sym":"Rg", "num":119,  "Z":111, "A":280}, 
    {"name": "Copernicium",   "sym":"Cn", "num":120,  "Z":112, "A":285}, 
    {"name": "Ununtrium",     "sym":"Uut", "num":121,  "Z":113, "A":284}, 
    {"name": "Flerovium",     "sym":"Fl", "num":122,  "Z":114, "A":289}, 
    {"name": "Ununpentium",   "sym":"Uup", "num":123,  "Z":115, "A":288}, 
    {"name": "Livermorium",   "sym":"Lv", "num":124,  "Z":116, "A":293}, 
    {"name": "Ununseptium",   "sym":"Uus", "num":125,  "Z":117, "A":294}, 
    {"name": "Ununoctium",    "sym":"Uuo", "num":126,  "Z":118, "A":294}
];

var JsonObj_Questions = [
    {"AtomSym": "H",   "Name": "Hydrogen", "TName": "Dihydrogen",         "AtomNum": 1,  "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":1,  "Coeff": 1},
    {"AtomSym": "He",  "Name": "Helium",   "TName": "Helium (ballongas)", "AtomNum": 2,  "Principle": [1,3], "ChemType": "molecule", "Index": 1, "Charge":0,  "Coeff": 1},
    {"AtomSym": "N",   "Name": "Nitrogen", "TName": "Dinitrogen",         "AtomNum": 7,  "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":0,  "Coeff": 1},
    {"AtomSym": "O",   "Name": "Oxygen",   "TName": "Dioxygen",           "AtomNum": 8,  "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":0,  "Coeff": 1},
    {"AtomSym": "O",   "Name": "Oxygen",   "TName": "Ozon",               "AtomNum": 8,  "Principle": [1,3], "ChemType": "molecule", "Index": 3, "Charge":0,  "Coeff": 1},
    {"AtomSym": "Ne",  "Name": "Neon",     "TName": "Neongas",            "AtomNum": 10, "Principle": [1,3], "ChemType": "molecule", "Index": 1, "Charge":0,  "Coeff": 1},
    {"AtomSym": "S",   "Name": "Svovl",    "TName": "Svovl",              "AtomNum": 16, "Principle": [1,3], "ChemType": "molecule", "Index": 8, "Charge":0,  "Coeff": 1},
    {"AtomSym": "Cl",  "Name": "chlor",     "TName": "Dichlor",              "AtomNum": 17, "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":-1, "Coeff": 1},
    {"AtomSym": "Br",  "Name": "Brom",     "TName": "Dibrom",             "AtomNum": 35, "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":-1, "Coeff": 1},
    {"AtomSym": "I",   "Name": "Iod",      "TName": "Diiod",              "AtomNum": 53, "Principle": [1,3], "ChemType": "molecule", "Index": 2, "Charge":-1, "Coeff": 1}
]; 


//########################################################################
//                      Interne JS-objekter:
//########################################################################

var ResultStr = "";

var MemObj = {  // MemObj is permanent through program execution 
                CloneArray:[]   // Keeps track of the clone-numbers, eg. 1,2,3,..., denoted: "Clone_1", "Clone_2", "Clone_3",...
            };

var EventObj = {    
                    Dragging: false,
                    DraggableLeft: null,
                    DraggableTop: null,
                    Element: {AtomNum: null, AtomName: null, drop: false}, 
                    Index: {val: null, drop: false },
                    Charge: {val: null, drop: false },
                    Coeff: {val: null, drop: false }
                };
// var TEventObj = JSON.parse(JSON.stringify(EventObj));   // Used for resetting EventObj
// var TEventObj  = jQuery.extend(true, {}, EventObj);

// ResultObj is used for keeping track of correct/wrong anwsers regarding assembly of a single molecule:
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

// TotResultObj is used for keeping track of correct/wrong anwsers of the whole quiz:
var TotResultObj = {  
                        TotAttempt: 0, 
                        TotCorrect: 0, 
                        TotFail: 0, 
                        LastDraggableAccepted: false,  // Status of the last draggable: "true" if successfully dropped, otherwise "false".
                        LastDragged: {Type: null, Left: null, Right: null},  // The last (attempted) dragged draggable
                        LastDropped: null,  // The last (attempted) dropped droppable
                        Element: {Correct: 0, Fail: 0, Attempt: 0}, 
                        Index:   {Correct: 0, Fail: 0, Attempt: 0},
                        Charge:  {Correct: 0, Fail: 0, Attempt: 0},
                        Coeff:   {Correct: 0, Fail: 0, Attempt: 0}
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


// This function surrounds all letters (or clusters of letters) in LetterArray with span-tags with a class specified in LetterClassArray.
// NOTE: The delimiter should be a character (eg. "#"), or a combination of characters (eg. "-X-"), that does not exist in the target text.
// IMPORTANT: HTML-tags must not be present in the target-text. This could result in invalid/broken markup.
// EXAMPLE CALL:
//          MarkCertainCharactersAsSpecial([".AtomName", ".AtomSymbol"], ["H","L", "S"], ["FontGreen", "FontRed", "FontBlue"], "#");
// - which will make all L's red and all H's green in the text-strings associated with the target CSS classes ".AtomName" and ".AtomSymbol".
function MarkCertainCharactersAsSpecial(TargetSelectorArray, LetterArray, LetterClassArray, Delimiter){
    for (var TargetSelector in TargetSelectorArray){
        $(TargetSelectorArray[TargetSelector]).each(function( index, element ) {
            for (var l in LetterArray){ // First surround all letters (or clusters of letters) in LetterArray with delimiters, eg. If letter = L and delimiter = #, then #L#.
                var ElementText = $(element).text();
                if (ElementText.indexOf(LetterArray[l]) !== -1){
                    $(element).html( ElementText.replace(LetterArray[l], Delimiter + LetterArray[l] + Delimiter) );
                }
            }

            for (var l in LetterArray){// second, replace all delimited letters, eg. #L#, with <span class="MyClass">L</span>
                var LetterClass = (LetterClassArray.length == LetterArray.length) ? LetterClassArray[l] : LetterClassArray[0]; 
                var ElementText = $(element).text();
                if (ElementText.indexOf(LetterArray[l]) !== -1){
                    $(element).html( ElementText.replace( Delimiter + LetterArray[l] + Delimiter, '<span class="'+LetterClass+'">'+LetterArray[l]+'</span>' ) );
                }
            }
        });
    }
}


// throw new Error("TEST STOP ENABLED!!!");



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
    HTML += "<h1>Niveau 1: Kemiske formler - &eacute;t grundstof</h1>";
    HTML += "<div class='QuestionWrap'>";
    HTML += "<h2 class='QuestionText'>" +
                "Træk grundstofsymbol og indekstal til det rette felt.<br/>" +
                "<span class='QuestionCorrect'>Lav molekylet bestående af <span class='QuestionTask'>"+JOQ[Inx]["Index"]+" "+JOQ[Inx]["Name"].toLowerCase()+"atom"+((JOQ[Inx]["Index"]==1)?"":"er")+"</span></span>" + 
            "</h2>" + QuestionCountStr;
    HTML += "</div>";
    HTML += "<div class='FeedbackWrap'></div>";
    // HTML += "<div class='QuestionWrap'><h2 class='AnswerText'>TEST</h2></div>";

    // Write the heading and question for the student:
    $(".QuizHeadingText").html( HTML );

    // $(".ElementBox").removeClass("Elem_OK");
    // $(".DragNum").removeClass("Index_OK Char_OK Coeff_OK");
    $(".draggable").removeClass("Elem_OK Index_OK Char_OK Coeff_OK Dropped");


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
    HTML += "<h2 class='QuestionText'>" +
                "Træk grundstofsymbol og indekstal til det rette felt.<br/>" +
                "Lav <span class='QuestionTask'>"+JOQ[Inx]["Index"]+" "+JOQ[Inx]["Name"].toLowerCase()+"atom"+((JOQ[Inx]["Index"]==1)?"":"er")+"</span>" + 
            "</h2>" + QuestionCountStr;
    HTML += "</div>";
    HTML += "<div class='FeedbackWrap'></div>";

    // Write the heading and question for the student:
    $(".QuizHeadingText").html( HTML );

    // $(".ElementBox").removeClass("Elem_OK");
    // $(".DragNum").removeClass("Index_OK Char_OK Coeff_OK");
    $(".draggable").removeClass("Elem_OK Index_OK Char_OK Coeff_OK Dropped");

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
        HTML += "Rigtigt, du har lavet formlen for <span class='QuestionTask'>" + JsonObj_Questions[ ArrayIndex ].TName.toLowerCase() + "</span>";
        console.log("GivePosetiveFeedback: " + HTML);

        $(".QuestionCorrect").html( HTML );

        // Get 
        if ($.isEmptyObject(CssObj)){
            CssObj.Element = $(".ElementBox").css(["background-color"]);
            CssObj.Index =  $(".IndexNum").css(["background-color"]);
            CssObj.Charge =  $(".ChargeNum").css(["background-color"]);
            CssObj.Coeff =  $(".CoeffNum").css(["background-color"]);
            CssObj.lbox =  $(".lbox").css(["border-top-color", "border-right-color", "border-bottom-color", "border-left-color"]); // Note: "border-color" will not work, you have to explicitly name the sides
            CssObj.sbox =  $(".sbox").css(["border-top-color", "border-right-color", "border-bottom-color", "border-left-color"]); // Note: "border-color" will not work, you have to explicitly name the sides
        }
        console.log("CssObj: " + JSON.stringify(CssObj));

        // Fade out borders on the droppables 
        $( ".lbox, .sbox" ).animate({
            "border-color": "transparent"
        }, 500 );
        
        if (ResultObj.Dropped.Element) $(".Elem_OK").animate({"background-color": "transparent"}, 500);
        if (ResultObj.Dropped.Index)  $(".Index_OK").animate({"background-color": "transparent"}, 500);
        if (ResultObj.Dropped.Charge)  $(".Char_OK").animate({"background-color": "transparent"}, 500);
        if (ResultObj.Dropped.Coeff)  $(".Coeff_OK").animate({"background-color": "transparent"}, 500);

        if (ResultObj.Dropped.Index) { // If the value of the index number equal 1, then it need to fadeout in order to be chemically correct:
            // if (parseInt($(".Index_OK").text()) == 1) $(".Index_OK").fadeOut(500);
        }

        console.log("IndexNumValue: " + typeof($(".Index_OK").text()) );

        //////////////////////////////////////////////////////
        //                      TEST   
        //////////////////////////////////////////////////////


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

        if (IndexLeft == null){  // TEST: Dette giver ikke udslag på work-flowets lint'er - find fejlen i gulpfile.js!

        } 
    }
}


function GiveNegativeFeedback(JsonObj_Questions, ResultObj, TotResultObj){
    if ((TotResultObj.TotFail >= 3) && (TotResultObj.LastDraggableAccepted == false)){  // LastDraggableAccepted == false prevent error message if you ajust the draggables position in the droppable.
        var Inx = ResultObj.PrincipleArray[ResultObj.Qcount]; 
        var JOQ = JsonObj_Questions;
        var HTML = "<h2 id='Feedbackhide'>";
        if (TotResultObj.LastDropped == "Coeff") 
            HTML += "Denne kasse er til koefficienter, som angiver hvor mange <b>"+(((JOQ[Inx]["AtomNum"]==2)||(JOQ[Inx]["AtomNum"]==10))?"atomer":"molekyler")+"</b> der er. Her er der kun tale om et molekyle, derfor skal der ikke stå noget tal.";
        if (TotResultObj.LastDropped == "Element") 
            HTML += "Denne kasse er til atomsymbolet. Find symbolet for <b>"+JOQ[Inx]["Name"].toLowerCase()+"atomet</b> i grundstoffernes periodesystem og træk det op i kassen.";
        if (TotResultObj.LastDropped == "Charge") 
            HTML += "Denne kasse er til ladninger, men da <b>"+(((JOQ[Inx]["AtomNum"]==2)||(JOQ[Inx]["AtomNum"]==10))?"atomer":"molekyler")+"</b> er uden ladninger, skal der ikke stå noget her.";
        if (TotResultObj.LastDropped == "Index")
            HTML += "Denne kasse er til indekstal, tallet der skal stå her angiver hvor mange atomer der er i molekylet. Find tallet til højre og træk det hen i kassen.";
        HTML += "</h2> ";

        if ( (TotResultObj.LastDropped != TotResultObj.LastDragged.Type) && (TotResultObj.LastDropped !== null) ){ // LastDropped != LastDragged.Type: Do not give wrong-type feedback if e.g. index = 3 is dragged to the .DropIndex instead of index = 2
            $(".FeedbackWrap").html(HTML);                                                                         // LastDropped = null if a draggable is not dropped in a droppable.

            $("#Feedbackhide").slideDown( "slow", function() {
                $("#Feedbackhide").append('<a class="FeekbackOkBtn btn-default btn btn-default" href="#">OK</a>');

                $( ".draggable" ).draggable( "disable" ); // Disable all draggables. This is the simplest way of advoiding errors due to unexpected user behavior.

            });
        }

        $( document ).on('click', ".FeekbackOkBtn", function(event){
            event.preventDefault();  // Prevents sending the user to "href".
            $("#Feedbackhide").slideUp( "slow" , function() {

                $( ".draggable" ).draggable( "enable" ); // Enable all draggables

            });
        });

    }

    var TTT = $( ".draggable" ).draggable('option', 'enable');
    console.log("TTT: " + JSON.stringify(TTT));
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


function ElementBox(AtomNum, AtomSymbol, AtomName, AtomWeight, ExtraCssClasses){   
    var HTML = '<div class="ElementBox btn btn-info draggable '+ExtraCssClasses+'">' + 
                    '<div class="AtomNum">' + ((AtomNum > 0)? AtomNum : "&nbsp;") + '</div>' +
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
                if (Zn < 118){ // Midlertidig if-else-konstruktion:
                    // console.log("Zn: " + Zn + ", JsonObj_PeriodicTable[Zn].sym: " + JsonObj_PeriodicTable[Zn].Z);
                    var AtomNum = String(JsonObj_PeriodicTable[Zn].Z);
                    var AtomSymbol = JsonObj_PeriodicTable[Zn].sym;
                    var AtomName = JsonObj_PeriodicTable[Zn].name;
                    var AtomWeight = String(Math.round(10000*JsonObj_PeriodicTable[Zn].A)/10000);
                    HTML += ElementBox(AtomNum, AtomSymbol, AtomName, AtomWeight, "");
                    ++Zn;
                } else {
                    HTML += ElementBox("34", "X", "Xxxx", "34", "");
                }
            }
        };
        HTML += '</div>';
    };
    $(".PeriodicTableWrapper").html(HTML);
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
        // if (i != 0) HTML += '<div class="'+Class+'">' + Math.abs(i) + ((BoolSetSign && i>0) ? "+" : ((BoolSetSign && i<0) ? "-" : "") )  + '</div>';
        HTML += '<div class="'+Class+'">' + Math.abs(i) + ((BoolSetSign && i>0) ? "+" : ((BoolSetSign && i<0) ? "-" : "") )  + '</div>';
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



function UpdateResultFeedback(ResultObj, TotResultObj, ObjKey ,BoolCorrectOrFail){
    ResultObj.Attempt += 1;
    TotResultObj.TotAttempt += 1;
    TotResultObj[ObjKey].Attempt += 1;
    TotResultObj.LastDragged.Type = ObjKey;
    if (BoolCorrectOrFail){
        ResultObj.Correct += 1;
        TotResultObj.TotCorrect += 1;
        TotResultObj[ObjKey].Correct += 1;
        TotResultObj.LastDraggableAccepted = true;
    }
    else{
        ResultObj.Fail += 1;
        TotResultObj.TotFail += 1;
        TotResultObj[ObjKey].Fail += 1;
        TotResultObj.LastDraggableAccepted = false;
    }
    $(".ScoreAttempts").text( ResultObj.Attempt ); 
    $(".ScoreCorrect").text( ResultObj.Correct );
    $(".ScoreFail").text( ResultObj.Fail );
    $(".ScoreStat").text( (ResultObj.Correct/ResultObj.Attempt*100).toFixed(2) + "%" ); 
    // alert(typeof((ResultObj.Correct/ResultObj.Attempt*100).toFixed(2)))     
    console.log("TotResultObj: " + JSON.stringify(TotResultObj));          
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
    $(".AtomNum, .AtomName, .AtomWeight Index_OK").show(); // Index_OK needs to be showen since all indexvalues = 1 is hidden.
    $(".AtomSymbol").css("font-size", "160%");


    // Make borders and background-color on the draggables visible: 
    if (ResultObj.Dropped.Element) $(".Elem_OK").css(CssObj.Element);
    if (ResultObj.Dropped.Index)  $(".Index_OK").css(CssObj.Index);
    if (ResultObj.Dropped.Charge)  $(".Char_OK").css(CssObj.Charge);
    if (ResultObj.Dropped.Coeff)  $(".Coeff_OK").css(CssObj.Coeff);
    // $(".lbox").css(CssObj.lbox);
    // $(".sbox").css(CssObj.sbox);
    $( ".lbox" ).animate(CssObj.lbox, 1000 ); // The droppables will fadein 
    $( ".sbox" ).animate(CssObj.sbox, 1000 ); // The droppables will fadein 

    // Reset memory:
    EventObj = {    
                    Dragging: false,
                    DraggableLeft: null,
                    DraggableTop: null,
                    Element: {AtomNum: null, AtomName: null, drop: false}, 
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

    // Remove all Clone droppables
    $(".Clone").remove();

    $(".draggable").removeClass("Dropped");

    // Remove background-color from the correct droppables:  Dropped
    $(".droppable").removeClass( "DropHighlight" );
}

function IsInsideBox(Selector, Left, Top){
    var Con  = $(Selector).offset(); 
    Con.width = $(Selector).width();
    Con.height = $(Selector).height();
    if ((Con.left <= Left) && (Left <= Con.left + Con.width) && (Con.top <= Top) && (Top <= Con.top + Con.height)) 
        return true;
    else
        return false;
}

function FindAttemptedDroppable(TotResultObj){
    var Left = TotResultObj.LastDragged.Left;
    var Top = TotResultObj.LastDragged.Top;

    TotResultObj.LastDropped = null;

    if (IsInsideBox(".DropCoeff", Left, Top)) TotResultObj.LastDropped = "Coeff";
    if (IsInsideBox(".DropElement", Left, Top)) TotResultObj.LastDropped = "Element";
    if (IsInsideBox(".DropCharge", Left, Top)) TotResultObj.LastDropped = "Charge";
    if (IsInsideBox(".DropIndex", Left, Top))  TotResultObj.LastDropped = "Index";
}



function ReturnLowestCloneNum(MemObj){
    MemObj.CloneArray = MemObj.CloneArray.sort(); // Sort the array
    var Count = 1;
    for (var Num in MemObj.CloneArray){
        if (Count < MemObj.CloneArray[Num]){  // Compare elements
            MemObj.CloneArray.push(Count);
            console.log("ReturnLowestCloneNum 1 - Num: " + MemObj.CloneArray[Num] + ", CloneArray: " + MemObj.CloneArray);
            return Count;
        }
        ++Count;
    }
    console.log("ReturnLowestCloneNum 2 - CloneArray: " + MemObj.CloneArray);
    MemObj.CloneArray.push(Count);
    return Count;
}


// Problem: Several clones of a clone can be made. These clones are identified by having classes ".HasClone" and ".Clone" and 
// having the same absolute position.
function DestroyIdenticalClones(){
    var CloneObj = {};
    var Count = 0;
    $(".Clone").each(function( index, element ) {  // First populate CloneObj with the absolute position of all DOM elements with classes ".HasClone" and ".Clone"
        // if ($(this).hasClass(".HasClone")){
            CloneObj[Count] = $(this).offset();
            ++Count;
        // }
    });
    console.log("DestroyIdenticalClones - CloneObj: " + JSON.stringify(CloneObj) );
}


//########################################################################
//                        Run code....
//########################################################################


$( document ).ready(function() {  // CapitalI

    MakeQuestionObj(JsonObj_Questions, QuestionObj);


    console.log("JsonObj_PeriodicTable 1: " + JSON.stringify(JsonObj_PeriodicTable));
    console.log("JsonObj_Questions 1: " + JSON.stringify(JsonObj_Questions));

    console.log("NameArray 2: " + NameArray);

    // Create the periodic table:
    MakePeriodicTable(JsonObj_PeriodicTable);

    // MarkCertainCharactersAsSpecial([".AtomName", ".AtomSymbol"], ["I"], ["CapitalI"], "#");
    MarkCertainCharactersAsSpecial([".AtomName", ".AtomSymbol"], ["H","L", "S", "I"], ["FontRed", "FontGreen", "FontBlue", "CapitalI"], "#");

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
        $( ".DropSpacer" ).height( $( ".DropSpacer" ).width() );

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
        $( ".DropSpacer" ).height( $( ".DropSpacer" ).width() );

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

        // if ($( ".draggable" ).draggable('option', 'disabled') != true){
        //     $(".AtomNum, .AtomName, .AtomWeight", this).hide();
        //     $(".AtomSymbol", this).css("font-size", "400%");
        // }
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

            // // Hide .AtomNum, .AtomName, .AtomWeight "on drag" instead of hide "on mousedown":
            // if ($( ".draggable" ).draggable('option', 'disabled') != true){
            //     $(".AtomNum, .AtomName, .AtomWeight", this).hide();
            //     $(".AtomSymbol", this).css("font-size", "400%");
            //     console.log("XXX TEST");
            // }
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
                    UpdateResultFeedback(ResultObj, TotResultObj, "Element", true);
                    ResultObj.Element.AtomNum = EventObj.Element.AtomNum;
                    ResultObj.Dropped.Element = true;
                    console.log("B2:\n EventObj.Element.AtomNum: " + EventObj.Element.AtomNum + ", ResultObj.Element.AtomNum: " + ResultObj.Element.AtomNum );
                } 

                // Ensures that you can't get a higher fail-score once the right accepted draggable element is dropped.
                if (ResultObj.Element.AtomNum === null){  // accepted draggable not counted before.
                    ErrStr += "B3,";
                    UpdateResultFeedback(ResultObj, TotResultObj, "Element", false);
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
                    UpdateResultFeedback(ResultObj, TotResultObj, "Index", true);
                    ResultObj.Index.val = EventObj.Index.val;
                    ResultObj.Dropped.Index = true;
                    console.log("C2:\n EventObj.Index.val: " + EventObj.Index.val + ", ResultObj.Index.val: " + ResultObj.Index.val );
                } 

                // Ensures that you can't get a higher fail-score once the right accepted draggable element is dropped.
                if (ResultObj.Index.val === null){  // accepted draggable not counted before.
                    ErrStr += "C3,";
                    UpdateResultFeedback(ResultObj, TotResultObj, "Index", false);
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
                    UpdateResultFeedback(ResultObj, TotResultObj, "Charge", true);
                    ResultObj.Charge.val = EventObj.Charge.val;
                    ResultObj.Dropped.Charge = true;
                    console.log("D2:\n EventObj.Charge.val: " + EventObj.Charge.val + ", ResultObj.Charge.val: " + ResultObj.Charge.val );
                } 

                // Ensures that you can't get a higher fail-score once the right accepted draggable element is dropped.
                if (ResultObj.Charge.val === null){  // accepted draggable not counted before.
                    ErrStr += "D3,";
                    UpdateResultFeedback(ResultObj, TotResultObj, "Charge", false);
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
                    UpdateResultFeedback(ResultObj, TotResultObj, "Coeff", true);
                    $(this).css({"width": "10%", "height": "50%", "font-size": "300%"});
                    ResultObj.Coeff.val = EventObj.Coeff.val;
                    ResultObj.Dropped.Coeff = true;
                    console.log("E2:\n EventObj.Coeff.val: " + EventObj.Coeff.val + ", ResultObj.Coeff.val: " + ResultObj.Coeff.val );
                    // alert($(this).css("font-size"));
                } 

                // Ensures that you can't get a higher fail-score once the right accepted draggable element is dropped.
                if (ResultObj.Coeff.val === null){  // accepted draggable not counted before.
                    ErrStr += "E3,";
                    UpdateResultFeedback(ResultObj, TotResultObj, "Coeff", false);
                }
            }

            if (TotResultObj.LastDraggableAccepted)
                $(this).addClass("Dropped"); // Add class "Dropped", which is used for avoiding cloning once dropped.

            console.log("ErrStr: " + ErrStr);
            ErrStr = "";

            GivePosetiveFeedback(JsonObj_Questions, ResultObj);

            FindAttemptedDroppable(TotResultObj);

            GiveNegativeFeedback(JsonObj_Questions, ResultObj, TotResultObj);

            // Reset EventObj:
            EventObj = {    
                            Dragging: false,
                            DraggableLeft: null,
                            DraggableTop: null,
                            Element: {AtomNum: null, AtomName: null, drop: false}, 
                            Index: {val: null, drop: false },
                            Charge: {val: null, drop: false },
                            Coeff: {val: null, drop: false }
                        };

            DestroyIdenticalClones();
        },

        drag: function(event, ui){

            var TestEvent = jQuery.extend(true, {}, event); 

            var offset = $(this).offset();
            var Left = offset.left;
            var Top = offset.top;
            var Width = $(this).width();
            var Height = $(this).height();
            TotResultObj.LastDragged.Left = Left + Math.round(Width/2); // Pass on center-point
            TotResultObj.LastDragged.Top = Top + Math.round(Height/2);  // Pass on center-point
            $('#DragLeft').text(Left);
            $('#DragTop').text(Top);

            var LeftFirst = null; var TopFirst = null;
            var Pos = $(this).position();
            if (!EventObj.Dragging) EventObj.DraggableLeft = String(Pos.left);
            if (!EventObj.Dragging) EventObj.DraggableTop = String(Pos.top);
            console.log("EventObj - drag: " + JSON.stringify( EventObj ));

            if ( (!EventObj.Dragging) && (!$(this).hasClass("Dropped")) ) {  // Only clone the element if it has not been dropped

                var IdStr = "Clone_" + String(ReturnLowestCloneNum(MemObj));
                var Clone = $(this).clone();
                // var Clone = $(this).clone(true); // VIRKER IKKE EFTER HENSIGTEN
                $(this).after(Clone);
                $(this).next().prop( "id", IdStr );
                $(this).next().addClass("Clone");  // Add class "Clone" for easily destruction of the Clone elements.
                // $(this).next().addClass("Clone draggable");  // TEST TEST TEST 
                $(this).next().removeClass("ui-draggable-dragging"); // Remove the class ui-draggable-dragging automatically given to dragged draggables.
                $(this).addClass("HasClone");

                EventObj.Dragging = true;
                $("#"+IdStr).css({position: "absolute", left: EventObj.DraggableLeft+"px", top: EventObj.DraggableTop+"px"});
                $("#"+IdStr).height( $(this).width() );
                $(".Clone").draggable({
                    helper: 'clone',      // SE: http://stackoverflow.com/questions/2458817/jquery-ui-drag-and-clone-from-original-div-but-keep-clones
                    revert: 'invalid',
                    drag: function(){
                        // if ($( ".draggable" ).draggable('option', 'disabled') != true){
                            // $(".AtomNum, .AtomName, .AtomWeight", this).hide();
                            // $(".AtomSymbol", this).css("font-size", "400%");
                            // console.log("XXX TEST2");
                        // }
                        
                    },
                    start: function(event, ui){
                        if ($( ".draggable" ).draggable('option', 'disabled') != true){
                            var CloneObj = $(".ui-draggable-dragging");
                            $(".AtomNum, .AtomName, .AtomWeight", CloneObj).hide();
                            $(".AtomSymbol", CloneObj).css("font-size", "400%");
                            console.log("XXX TEST2");
                        }

                        console.log("ui 1: " + JSON.stringify( ui ));
                        console.log("event.target 1: " + JSON.stringify( event.target ));
                    },
                    stop: function(){
                        // DestroyIdenticalClones();
                    }
                });  
                $("#"+IdStr).removeClass("Elem_OK Index_OK Char_OK Coeff_OK");   // Remove acceptedness of the elements
                console.log("XTEST - drag: " + $("#"+IdStr).length);

                console.log("ui 2: " + JSON.stringify( ui ));
                console.log("event.target 2: " + JSON.stringify(  event.target ));
            }

            // Hide .AtomNum, .AtomName, .AtomWeight "on drag" instead of hide "on mousedown":
            if ($( ".draggable" ).draggable('option', 'disabled') != true){
                $(".AtomNum, .AtomName, .AtomWeight", this).hide();
                $(".AtomSymbol", this).css("font-size", "400%");
                console.log("XXX TEST");
            }

           
        }
    });


    $( ".DropElement" ).droppable({
        accept: ".Elem_OK",

        // SEQUENCE 2:
        drop: function( event, ui ) {
            // $( this ).addClass( "DropHighlight" );
            ResultStr += "Drop";
            EventObj.Element.drop = true;
            console.log("EventObj X: " + JSON.stringify( EventObj ));

            // TEST TEST TEST:
            // Access the currently dragged element and its clone:  http://stackoverflow.com/questions/16733241/removing-clone-and-deleting-draggable-in-jquerys-drag-and-drop
            // var drag_id = $(ui.draggable).attr("id");
            // var targetElem = $(this).attr("id");
            var drag_text = $(ui.draggable).text();
            var target_text = $(this).text();
            var drag_obj = $(ui.draggable);
            console.log("drag_text: " + drag_text + ", target_text: " + target_text + "\ndrag_obj: " + JSON.stringify(drag_obj) );
        }
    });
    $( ".DropCoeff" ).droppable({
        accept: ".Coeff_OK",
        // accept: ".Coeff_OK, .draggable",  // <-------- TEST
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

