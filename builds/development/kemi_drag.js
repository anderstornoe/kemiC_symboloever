

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

var JsonObj;

var Names;
var NameArray = [];

var DummyElement = '<div class="DummyElement"></div>';

var ElementDummyNumbers = "_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_17_21_22_23_24_25_26_27_28_29_30_39_40_41_42_43_44_45_46_47_48_";

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
    console.log("JsonObj - AjaxCallback: " + JSON.stringify(JSONdata));
}

function loadData(url) {
    $.ajax({
        url: url,
        // contentType: "application/json; charset=utf-8",  // Blot en test af tegnsaettet....
        dataType: 'json', // <------ VIGTIGT: Saadan boer en angivelse til en JSON-fil vaere! 
        // dataType: 'text', // <------ VIGTIGT: Pga. ???, saa bliver vi noedt til at angive JSON som text. 
        async: false, // <------ VIGTIGT: Sikring af at JSON hentes i den rigtige raekkefoelge (ikke asynkront). 
        success: function(data, textStatus, jqXHR) {

            console.log("data: " + JSON.stringify(data));
            JsonObj = JSON.parse(JSON.stringify(data));
            console.log("JsonObj 1 : " + JSON.stringify(JsonObj));

            AjaxCallback(JsonObj);

            for(var key in data){
                console.log("JsonObj[key].name: " + JsonObj[key].name);
                NameArray.push( JsonObj[key].name );
            }

            console.log("NameArray 1: " + NameArray);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error!!!\njqXHR:" + jqXHR + "\ntextStatus: " + textStatus + "\nerrorThrown: " + errorThrown);
        }
    });

}


function MakePeriodicTable(JsonObj){
    var Z = 0;
    var x = 0;
    var HTML = "";
    for (var r = 1; r <= 7; r++) {
        HTML += '<div class="row">';
        for (var i = 1; i <= 18; i++) {
            ++x;
            if (ElementDummyNumbers.indexOf( "_"+String(x)+"_" ) !== -1){
                HTML += DummyElement;
            } else {
                if (Z < 18){ // Midlertidig if-else-konstruktion:
                    console.log("Z: " + Z + ", JsonObj[Z].sym: " + JsonObj[Z].Z);
                    var AtomNum = String(JsonObj[Z].Z);
                    var AtomSymbol = JsonObj[Z].sym;
                    var AtomName = JsonObj[Z].name;
                    var AtomWeight = String(Math.round(10000*JsonObj[Z].A)/10000);
                    HTML += ElementBox(AtomNum, AtomSymbol, AtomName, AtomWeight);
                    ++Z;
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


function QuizSetup(JsonObj){

}


//########################################################################
//                        Run code....
//########################################################################


$( document ).ready(function() {


    console.log("JsonObj: " + JSON.stringify(JsonObj));

    console.log("NameArray 2: " + NameArray);

    // QuizSetup(JsonObj);

    MakePeriodicTable(JsonObj);

    $(".IndexWrapper").html(CreateNumberDivs(0, 8, "IndexNum DragNum btn btn-info draggable", false));  
    $(".ChargeWrapper").html(CreateNumberDivs(-4, 3, "ChargeNum DragNum btn btn-info draggable", true));
    $(".CoeffWrapper").html(CreateNumberDivs(0, 5, "CoeffNum DragNum btn btn-info draggable", false));

    SetAcceptedElements(1);
    SetAcceptedNumbers("1", ".IndexNum", "Index_OK");  // PRINCIP 1
    SetAcceptedNumbers("1+", ".ChargeNum", "Char_OK"); // PRINCIP 2
    SetAcceptedNumbers("1", ".CoeffNum", "Coeff_OK");  // PRINCIP 3

    // Get CSS font-sizes
    var AtomSymbolFontSizeStr = $( ".AtomSymbol" ).css("font-size");
    var ElementBoxFontSizeStr = $( ".ElementBox" ).css("font-size");
    var DragNumFontSizeStr = $( ".DragNum" ).css("font-size");
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

        console.log("WindowWidth: " + $( window ).width());

        // $( ".ElementBox" ).css( "font-size", String(50)+"%" );
    });

    // Naar vinduet resizes rescales elementerne:
    $(window).resize(function () {
        // Scale the height on all ElmentBox
        $( ".ElementBox" ).height( 4/3*$( ".ElementBox" ).width() );

        // Scale the height on all small and large boxes
        $( ".lbox" ).height( $( ".lbox" ).width() );
        $( ".xlbox" ).height( $( ".xlbox" ).width() );
        $( ".sbox" ).height( $( ".sbox" ).width() );

        FontSizeScaler(AtomSymbolFontSizeStr, LineHeight, ".AtomSymbol, .NumberHeading");
        FontSizeScaler(ElementBoxFontSizeStr, LineHeight, ".ElementBox");
        FontSizeScaler(DragNumFontSizeStr, LineHeight, ".DragNum");
    });


    // Nedenstaaende udfoeres naar der trykkes paa TryAgain anchor-tag'et:
    $( document ).on('click', ".TryAgain", function(event){
        window.location.reload();
    });


    $( document ).on('mousedown', ".ElementBox", function(event){
        $(".AtomNum, .AtomName, .AtomWeight", this).hide();
        $(".AtomSymbol", this).css("font-size", "400%");
    });


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
    var TResultObj = JSON.parse(JSON.stringify(EventObj));

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
                    // $(this).css({"width": "10%", "height": "50%", "font-size": "300%"});
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

