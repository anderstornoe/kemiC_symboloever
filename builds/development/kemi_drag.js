

//########################################################################
//                          Funktioner
//########################################################################

// Perodisk system på dansk og andre sprog:
// http://www.ptable.com/?lang=da


var JsonObj;

var Names;
var NameArray = [];

var ElementBox =    '<div class="ElementBox draggable">' + 
                        '<div class="AtomNum">xxx' + 
                        '</div>' +
                        '<div class="AtomSymbol">' + 
                        '</div>' +
                        '<div class="AtomName"> TESTX' + 
                        '</div>' +
                        '<div class="AtomWeight">' + 
                        '</div>' +
                    '</div>';

var DummyElement = '<div class="DummyElement"></div>';

var ElementDummyNumbers = "_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_17_21_22_23_24_25_26_27_28_29_30_39_40_41_42_43_44_45_46_47_48_";


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
    for (var i = 1; i <= 18*7; i++) {
        if (ElementDummyNumbers.indexOf( "_"+String(i)+"_" ) !== -1){
            $(".PeriodicTableWrapper").append(DummyElement);
        } else {
            $(".PeriodicTableWrapper").append(ElementBox);
            if (Z < 18){
                console.log("Z: " + Z + ", JsonObj[Z].sym: " + JsonObj[Z].Z);
                $(".AtomNum").last().text(JsonObj[Z].Z);
                $(".AtomSymbol").last().text(JsonObj[Z].sym);
                $(".AtomName").last().text(JsonObj[Z].name);
                $(".AtomWeight").last().text(Math.round(10000*JsonObj[Z].A)/10000);  // Rounded to 4 digit precision.
                ++Z;
                console.log("ElementBox TEXT: " + $(".ElementBox").last().html() );
            }
        }
    };
}


function FontSizeScaler(){
    var NativeWindowWidth = 1425;   // At WindowWidth = 1426px the .ElementBox font-size = 11px, and scaling linarly.
    var WindowWidth = $( window ).width();
    var ElementBoxFontSizeNum = 11; // At WindowWidth = 1426px the .ElementBox font-size = 11px, and scaling linarly.
    var AtomSymbolFontSizeNum = 18; // At WindowWidth = 1426px the .AtomSymbol font-size = 18px, and scaling linarly.
    var Ratio = Math.round(1000*( WindowWidth/NativeWindowWidth ))/1000; // Rounded to 3 digit precision.

    $( ".ElementBox" ).css("font-size", String(ElementBoxFontSizeNum*Ratio)+"px");
    $( ".AtomSymbol" ).css("font-size", String(AtomSymbolFontSizeNum*Ratio)+"px");
    
    console.log("Ratio : " + Ratio);
    console.log("ElementBoxFontSizeNum : " + ElementBoxFontSizeNum);
    console.log("AtomSymbolFontSizeNum : " + AtomSymbolFontSizeNum);
}


//########################################################################
//                        Run code....
//########################################################################


$( document ).ready(function() {

    console.log("JsonObj: " + JSON.stringify(JsonObj));

    console.log("NameArray 2: " + NameArray);

    MakePeriodicTable(JsonObj);

    

    // Scale the height on all ElmentBox
    $( ".ElementBox" ).height( 4/3*$( ".ElementBox" ).width() );

    // Scale the height on all small and large boxes
    $( ".lbox" ).height( $( ".lbox" ).width() );
    $( ".xlbox" ).height( $( ".xlbox" ).width() );
    $( ".sbox" ).height( $( ".sbox" ).width() );


    // Naar vinduet loader scales elementerne:
    $(window).load(function () {
        // Scale the height on all ElmentBox
        $( ".ElementBox" ).height( 4/3*$( ".ElementBox" ).width() );

        // Scale the height on all small and large boxes
        $( ".lbox" ).height( $( ".lbox" ).width() );
        $( ".xlbox" ).height( $( ".xlbox" ).width() );
        $( ".sbox" ).height( $( ".sbox" ).width() );

        FontSizeScaler();

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

        FontSizeScaler();
    });


    $( ".draggable" ).draggable();
    $( ".droppable" ).droppable({
        // accept: ".OK",
        drop: function( event, ui ) {
            $( this ).addClass( "DropHighlight" );
            // console.log("event: " + JSON.stringify(event));
            console.log("ui: " + JSON.stringify(ui));
        }
    });

    // console.log("inputObj 2: " + JSON.stringify(inputObj.NameArray));
});

