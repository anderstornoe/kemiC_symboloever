//########################################################################
//         JSON-objekter som senere skal have sine egne JSON-filer:
//########################################################################


var JsonObj_Questions = [

    // {
    //     "MolSym": "H<sub>2</sub>",
    //     "TName": "Dihydrogen",
    //     "Principle": [1, 3],
    //     "Mol": [{
    //         "AtomSym": "H",
    //         "Index": 2
    //     }]
    // }, {
    //     "MolSym": "He",
    //     "TName": "Helium (ballongas)",
    //     "Principle": [1, 3],
    //     "Mol": [{
    //         "AtomSym": "He",
    //         "Index": 1
    //     }]
    // }, {
    //     "MolSym": "N<sub>2</sub>",
    //     "TName": "Dinitrogen",
    //     "Principle": [1, 3],
    //     "Mol": [{
    //         "AtomSym": "N",
    //         "Index": 2
    //     }]
    // }, {
    //     "MolSym": "O<sub>2</sub>",
    //     "TName": "Dioxygen",
    //     "Principle": [1, 3],
    //     "Mol": [{
    //         "AtomSym": "O",
    //         "Index": 2
    //     }]
    // }, {
    //     "MolSym": "O<sub>3</sub>",
    //     "TName": "Ozon",
    //     "Principle": [1, 3],
    //     "Mol": [{
    //         "AtomSym": "O",
    //         "Index": 3
    //     }]
    // }, {
    //     "MolSym": "Ne",
    //     "TName": "Neongas",
    //     "Principle": [1, 3],
    //     "Mol": [{
    //         "AtomSym": "Ne",
    //         "Index": 1
    //     }]
    // }, {
    //     "MolSym": "S<sub>8</sub>",
    //     "TName": "Svovl",
    //     "Principle": [1, 3],
    //     "Mol": [{
    //         "AtomSym": "S",
    //         "Index": 8
    //     }]
    // }, {
    //     "MolSym": "Cl<sub>2</sub>",
    //     "TName": "Dichlor",
    //     "Principle": [1, 3],
    //     "Mol": [{
    //         "AtomSym": "Cl",
    //         "Index": 2
    //     }]
    // }, 
    {
        "MolSym": "Br<sub>2</sub>",
        "TName": "Dibrom",
        "Principle": [1, 3],
        "Mol": [{
            "AtomSym": "Br",
            "Index": 2
        }]
    }, {
        "MolSym": "I<sub>2</sub>",
        "TName": "Diiod",
        "Principle": [1, 3],
        "Mol": [{
            "AtomSym": "I",
            "Index": 2
        }]
    },

    // {"MolSym": "HHH",                           "TName": "HHH",                             "Principle": [2], "Mol": [{"AtomSym": "H", "Index": 1},{"AtomSym": "H", "Index": 1}, {"AtomSym": "H", "Index": 2}] },
    {
        "MolSym": "H<sub>2</sub>O",
        "TName": "Vand",
        "Principle": [2, 3],
        "Mol": [{
            "AtomSym": "H",
            "Index": 2
        }, {
            "AtomSym": "O",
            "Index": 1
        }]
    }, {
        "MolSym": "CO<sub>2</sub>",
        "TName": "Carbondioxid",
        "Principle": [2, 3],
        "Mol": [{
            "AtomSym": "C",
            "Index": 1
        }, {
            "AtomSym": "O",
            "Index": 2
        }]
    }, {
        "MolSym": "CO",
        "TName": "Carbonmonoxid (kulilte)",
        "Principle": [2, 3],
        "Mol": [{
            "AtomSym": "C",
            "Index": 1
        }, {
            "AtomSym": "O",
            "Index": 1
        }]
    }, {
        "MolSym": "SO<sub>2</sub>",
        "TName": "Svovldioxid",
        "Principle": [2, 3],
        "Mol": [{
            "AtomSym": "S",
            "Index": 1
        }, {
            "AtomSym": "O",
            "Index": 2
        }]
    }, {
        "MolSym": "NO<sub>2</sub>",
        "TName": "Nitrogendioxid",
        "Principle": [2, 3],
        "Mol": [{
            "AtomSym": "N",
            "Index": 1
        }, {
            "AtomSym": "O",
            "Index": 2
        }]
    }, {
        "MolSym": "NO",
        "TName": "Nitrogenmonoxid",
        "Principle": [2, 3],
        "Mol": [{
            "AtomSym": "N",
            "Index": 1
        }, {
            "AtomSym": "O",
            "Index": 1
        }]
    }, {
        "MolSym": "HCl",
        "TName": "Hydrogenchlorid (saltsyre)",
        "Principle": [2, 3],
        "Mol": [{
            "AtomSym": "H",
            "Index": 1
        }, {
            "AtomSym": "Cl",
            "Index": 1
        }]
    }, {
        "MolSym": "N<sub>2</sub>O",
        "TName": "Dinitrogenoxid (lattergas)",
        "Principle": [2, 3],
        "Mol": [{
            "AtomSym": "N",
            "Index": 2
        }, {
            "AtomSym": "O",
            "Index": 1
        }]
    }, {
        "MolSym": "NH<sub>3</sub>",
        "TName": "Ammoniak",
        "Principle": [2, 3],
        "Mol": [{
            "AtomSym": "N",
            "Index": 1
        }, {
            "AtomSym": "H",
            "Index": 3
        }]
    }, {
        "MolSym": "CH<sub>4</sub>",
        "TName": "Methan (naturgas)",
        "Principle": [2, 3],
        "Mol": [{
            "AtomSym": "C",
            "Index": 1
        }, {
            "AtomSym": "H",
            "Index": 4
        }]
    }, {
        "MolSym": "H<sub>2</sub>CO<sub>3</sub>",
        "TName": "Dihydrogencarbonat (kulsyre)",
        "Principle": [2, 3],
        "Mol": [{
            "AtomSym": "H",
            "Index": 2
        }, {
            "AtomSym": "C",
            "Index": 1
        }, {
            "AtomSym": "O",
            "Index": 3
        }]
    }, {
        "MolSym": "NH<sub>4</sub>Cl",
        "TName": "Ammoniumchlorid (salmiak)",
        "Principle": [2, 3],
        "Mol": [{
            "AtomSym": "N",
            "Index": 1
        }, {
            "AtomSym": "H",
            "Index": 4
        }, {
            "AtomSym": "Cl",
            "Index": 1
        }]
    }, {
        "MolSym": "H<sub>2</sub>O<sub>2</sub>",
        "TName": "Hydrogenperoxid (brintoverilte)",
        "Principle": [2, 3],
        "Mol": [{
            "AtomSym": "H",
            "Index": 2
        }, {
            "AtomSym": "O",
            "Index": 2
        }]
    }, {
        "MolSym": "HNO<sub>3</sub>O",
        "TName": "Salpetersyre",
        "Principle": [2, 3],
        "Mol": [{
            "AtomSym": "H",
            "Index": 1
        }, {
            "AtomSym": "N",
            "Index": 1
        }, {
            "AtomSym": "O",
            "Index": 3
        }]
    }, {
        "MolSym": "H<sub>3</sub>PO<sub>4</sub>",
        "TName": "Phosphorsyre",
        "Principle": [2, 3],
        "Mol": [{
            "AtomSym": "H",
            "Index": 3
        }, {
            "AtomSym": "P",
            "Index": 1
        }, {
            "AtomSym": "O",
            "Index": 4
        }]
    },

    {
        "MolSym": "Na<sup>1+</sup>",
        "TName": "Natriumion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "Na",
            "Charge": "1+"
        }]
    }, {
        "MolSym": "K<sup>1+</sup>",
        "TName": "Kaliumion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "K",
            "Charge": "1+"
        }]
    }, {
        "MolSym": "Mg<sup>2+</sup>",
        "TName": "Magnesiumion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "Mg",
            "Charge": "2+"
        }]
    }, {
        "MolSym": "Ca<sup>3+</sup>",
        "TName": "Calciumion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "Ca",
            "Charge": "2+"
        }]
    }, {
        "MolSym": "Ba<sup>2+</sup>",
        "TName": "Bariumion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "Ba",
            "Charge": "2+"
        }]
    }, {
        "MolSym": "Al<sup>3+</sup>",
        "TName": "Aluminiumion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "Al",
            "Charge": "3+"
        }]
    }, {
        "MolSym": "Pb<sup>2+</sup>",
        "TName": "Bly(&#73;&#73;)ion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "Pb",
            "Charge": "2+"
        }]
    }, {
        "MolSym": "Cu<sup>2+</sup>",
        "TName": "Kobber(&#73;&#73;)ion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "Cu",
            "Charge": "2+"
        }]
    }, {
        "MolSym": "Cu<sup>1+</sup>",
        "TName": "Kobber(&#73;)ion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "Cu",
            "Charge": "1+"
        }]
    }, {
        "MolSym": "Ag<sup>1+</sup>",
        "TName": "Sølv(&#73;)ion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "Ag",
            "Charge": "1+"
        }]
    }, {
        "MolSym": "Fe<sup>2+</sup>",
        "TName": "Jern(&#73;&#73;)ion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "Fe",
            "Charge": "2+"
        }]
    }, {
        "MolSym": "Fe<sup>3+</sup>",
        "TName": "jern(&#73;&#73;&#73;)ion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "Fe",
            "Charge": "3+"
        }]
    }, {
        "MolSym": "Cl<sup>1-</sup>",
        "TName": "Chloridion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "Cl",
            "Charge": "1-"
        }]
    }, {
        "MolSym": "O<sup>2-</sup>",
        "TName": "Oxidion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "O",
            "Charge": "2-"
        }]
    }, {
        "MolSym": "S<sup>2-</sup>",
        "TName": "Sulfidion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "S",
            "Charge": "2-"
        }]
    }, {
        "MolSym": "F<sup>1-</sup>",
        "TName": "fluoridion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "F",
            "Charge": "1-"
        }]
    }, {
        "MolSym": "Br<sup>1-</sup>",
        "TName": "Bromidion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "Br",
            "Charge": "1-"
        }]
    }, {
        "MolSym": "I<sup>1-</sup>",
        "TName": "Iodidion",
        "Principle": [4],
        "Mol": [{
            "AtomSym": "I",
            "Charge": "1-"
        }]
    },

    {
        "MolSym": "NH<sub>4</sub><sup>+</sup>",
        "TName": "Amoniumion",
        "Principle": [5],
        "Mol": [{
            "AtomSym": "N",
            "Index": 1
        }, {
            "AtomSym": "H",
            "Index": 4,
            "Charge": "1+"
        }]
    }, {
        "MolSym": "H<sub>3</sub><sup>+</sup>",
        "TName": "Oxoniumion",
        "Principle": [5],
        "Mol": [{
            "AtomSym": "H",
            "Index": 3
        }, {
            "AtomSym": "O",
            "Index": 1,
            "Charge": "1+"
        }]
    }, {
        "MolSym": "OH<sup>-</sup>",
        "TName": "Hydroxidion",
        "Principle": [5],
        "Mol": [{
            "AtomSym": "O",
            "Index": 1
        }, {
            "AtomSym": "H",
            "Index": 1,
            "Charge": "1-"
        }]
    }, {
        "MolSym": "SO<sub>3</sub><sup>-</sup>",
        "TName": "sulfition",
        "Principle": [5],
        "Mol": [{
            "AtomSym": "S",
            "Index": 1
        }, {
            "AtomSym": "O",
            "Index": 3,
            "Charge": "2-"
        }]
    }, {
        "MolSym": "SO<sub>4</sub><sup>-</sup>",
        "TName": "sulfation",
        "Principle": [5],
        "Mol": [{
            "AtomSym": "S",
            "Index": 1
        }, {
            "AtomSym": "O",
            "Index": 4,
            "Charge": "2-"
        }]
    }, {
        "MolSym": "NO<sub>2</sub><sup>-</sup>",
        "TName": "nitrition",
        "Principle": [5],
        "Mol": [{
            "AtomSym": "N",
            "Index": 1
        }, {
            "AtomSym": "O",
            "Index": 2,
            "Charge": "1-"
        }]
    }, {
        "MolSym": "NO<sub>3</sub><sup>-</sup>",
        "TName": "nitration",
        "Principle": [5],
        "Mol": [{
            "AtomSym": "N",
            "Index": 1
        }, {
            "AtomSym": "O",
            "Index": 3,
            "Charge": "1-"
        }]
    }, {
        "MolSym": "PO<sub>4</sub><sup>3-</sup>",
        "TName": "Phosphation",
        "Principle": [5],
        "Mol": [{
            "AtomSym": "P",
            "Index": 1
        }, {
            "AtomSym": "O",
            "Index": 4,
            "Charge": "3-"
        }]
    }, {
        "MolSym": "CO<sub>3</sub><sup>2-</sup>",
        "TName": "Carbonation",
        "Principle": [5],
        "Mol": [{
            "AtomSym": "C",
            "Index": 1
        }, {
            "AtomSym": "O",
            "Index": 3,
            "Charge": "2-"
        }]
    }
];


//########################################################################
//                      Interne JS-objekter:
//########################################################################

var JsonData;

var ResultStr = "";

var TimerId_FadeOut;
var TimerId_FadeIn;

var MemObj = { // MemObj is permanent through program execution 
    CloneArray: [], // Keeps track of the clone-numbers, eg. 1,2,3,..., denoted: "Clone_1", "Clone_2", "Clone_3",...
    NewestClone: null, // The latest clone.
    NewestOriginal: null, // The latest cloned orignal.
    OrgCloneAssoc: {}, // Format: {1:[1,2,3], 2:[4,5], 3:[6,7], ...}, where keys are ref. to orignals and arrays are ref. to clones.
    TEST: 1
};

var EventObj = {
    Dragging: false,
    DraggableLeft: null,
    DraggableTop: null,
    Element: {
        AtomNum: null,
        AtomName: null,
        drop: false
    },
    Index: {
        val: null,
        drop: false
    },
    Charge: {
        val: null,
        drop: false
    },
    Coeff: {
        val: null,
        drop: false
    },
    LastDroppedOn: null, // The last dropped droppable
    LastDroppedOnParent: null // The parent of the last dropped droppable - NOT the attempted
};
// var TEventObj = JSON.parse(JSON.stringify(EventObj));   // Used for resetting EventObj
// var TEventObj  = jQuery.extend(true, {}, EventObj);

// ResultObj is used for keeping track of correct/wrong anwsers regarding assembly of a single molecule:
var ResultObj = {
    Attempt: 0,
    Correct: 0,
    Fail: 0,

    Qcount: 0,
    PrincipleArray: [],

    Element: {
        AtomNum: null,
        Attempt: 0
    },
    Index: {
        val: null,
        Attempt: 0
    },
    Charge: {
        val: null,
        Attempt: 0
    },
    Coeff: {
        val: null,
        Attempt: 0
    },

    Dropped: {
        Element: false,
        Index: false,
        Charge: false,
        Coeff: false
    }
};

// TotResultObj is used for keeping track of correct/wrong anwsers of the whole quiz:
var TotResultObj = {
    NewTotFail: 0, // This counts the total wrong answers in an "forgiving" manner.
    TotAttempt: 0, // This counts the total attemps in an "unforgiving" manner.
    TotCorrect: 0, // This counts the total correct answers in an "unforgiving" manner.
    TotFail: 0, // This counts the total wrong answers in an "unforgiving" manner.
    LastDraggableAccepted: false, // Status of the last draggable: "true" if successfully dropped, otherwise "false".
    LastDragged: {
        Type: null,
        Left: null,
        Right: null
    }, // The last (attempted) dragged draggable
    LastAttemptedDroppedOn: null, // The last attempted dropped droppable
    LastAttemptedDroppedOnParent: null,
    Element: {
        Correct: 0,
        Fail: 0,
        Attempt: 0
    },
    Index: {
        Correct: 0,
        Fail: 0,
        Attempt: 0
    },
    Charge: {
        Correct: 0,
        Fail: 0,
        Attempt: 0
    },
    Coeff: {
        Correct: 0,
        Fail: 0,
        Attempt: 0
    }
};


var CssObj = {};

var CssAtomSymbolFontSize;

// var TResultObj = JSON.parse(JSON.stringify(ResultObj));  // Used for resetting ResultObj
// var TResultObj  = jQuery.extend(true, {}, ResultObj);

var FontSizeScalerObj = {};


//########################################################################
//                          Funktioner
//########################################################################

// GODT CLONE EKSEMPEL HVOR CLONEN ER DRAGGABLE OG KAN DROPPES:
// http://www.placona.co.uk/166/javascript/a-more-elaborated-jquery-drag-drop-cloning/
// http://examples.placona.co.uk/drag_drop

// Perodisk system på dansk og andre sprog:
// http://www.ptable.com/?lang=da
// http://www.ptable.com/?lang=en
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

// MARK - MARK2

var DebugMode = false; // Boolean that turns on/off help-information while debugging.
var Debug_OnlyGiveQuestion = null; // Set to "null" for deaktivation _OR_ 0, 1, 2, 3,... for the question in JsonObj_Questions. IMPORTANT: DebugMode has to be true! 

// var PrincipleNum = 1;  // Principle: "1-a-1"
// var PrincipleNum = 2;  // Principle: "1-b-1"
// var PrincipleNum = 3;  // Principle: "1-b-2"
// var PrincipleNum = 4;  // Principle: "2-a-1"
var PrincipleNum = 5; // Principle: "2-a-2"

var Level = 2; //  Level = 1: Questions are posesed based on the molecular spiecies: "Lav molekylet mestående af 2 hydrogenatomer". Level = 2: Questions are posesed based on the produckt: "Lav molekylet dihydrogen". 

var MaxNumOfElements = 10; // MaxNumOfElements is the maximum number of random questions given to the student from each principle - we have choosen to limit this number to 10 henceforth.

var Reload = false;

var Names;
var NameArray = [];

var DummyElement = '<div class="DummyElement"></div>';

var QuestionObj = {
    P1: [], // P1-array consists of the array-index of all the JsonObj_Questions which have Principle: "1-a-1"
    P2: [], // P2-array consists of the array-index of all the JsonObj_Questions which have Principle: "1-b-1"
    P3: [], // P3-array consists of the array-index of all the JsonObj_Questions which have Principle: "1-b-2"
    P4: [], // P3-array consists of the array-index of all the JsonObj_Questions which have Principle: "2-a-1"
    P5: [], // P3-array consists of the array-index of all the JsonObj_Questions which have Principle: "2-b-1"
    P6: []
}

function ReturnAjaxData(Type, Url, Async, DataType) {
    $.ajax({
        type: Type,
        url: Url,
        async: Async,
        dataType: DataType,
        success: function(Data) {
            console.log("ReturnAjaxData: " + JSON.stringify(Data));
            JsonData = JSON.parse(JSON.stringify(Data));
            // JsonExternalData = JSON.parse(JSON.stringify(Data));
        }
    });
}


function SetTimerAndFadeout(Selector, TimeTimeout, TimeFadeOut) {
    TimerId_FadeOut = setTimeout(function() {
        $(Selector).fadeOut(TimeFadeOut, function() {
            $(Selector).animate({
                // opacity: 0,
                width: "0%"
            }, 1000, function() {
                // Animation complete.
                $(Selector).remove();
            });
            // $( Selector ).remove();
            console.log("SetTimerAndFadeout - OK");
        });
    }, TimeTimeout);
}


function SetTimerAndFadeIn(Selector, TimeTimeout, TimeFadeIn) {
    TimerId_FadeIn = setTimeout(function() {
        $(Selector).fadeIn(TimeFadeIn, function() {
            console.log("SetTimerAndFadeIn - OK");
        });
    }, TimeTimeout);
}


function ReturnElementInfo(JsonObj_PeriodicTable, ArgObjKey, ArgObjVal, TargetObjKey) {
    for (var key in JsonObj_PeriodicTable) {
        if (JsonObj_PeriodicTable[key][ArgObjKey] == ArgObjVal) {
            return JsonObj_PeriodicTable[key][TargetObjKey];
        }
    }
}

// TEST - korrekt svar: "Jern":
// console.log("ReturnElementInfo: " + ReturnElementInfo(JsonObj_PeriodicTable, "Z", 26, "name") );




// Returns a chemical structure in HTML-format (and NOT LaTex) for a molecule (eg. "H_2O" or "CO_2") from the object JsonObj_Questions:
function ReturnMolecule(JsonObj_Questions, ResultObj) {
    var JOQ = JsonObj_Questions;
    var JOQ_index = ResultObj.PrincipleArray[ResultObj.Qcount];
    var MObj = JOQ[JOQ_index];
    console.log("ReturnMolecule - JOQ_index:" + JOQ_index);
    var ChargeComp = "";
    var HTML = "";
    for (var Key2 in JOQ[JOQ_index]["Mol"]) { // Molecule Array
        console.log("ReturnMolecule - JOQ[" + JOQ_index + "]][Mol][" + Key2 + "]: " + JSON.stringify(JOQ[JOQ_index]["Mol"][Key2])); // TestOutput

        if (MObj.Mol[Key2].hasOwnProperty("AtomSym"))
            HTML += '<span class="HtmlElement">' + JOQ[JOQ_index]["Mol"][Key2]["AtomSym"] + '</span>';

        if (MObj.Mol[Key2].hasOwnProperty("Index"))
            HTML += "<sub" + ((JOQ[JOQ_index]["Mol"][Key2]["Index"] == 1) ? " class='IndexFadeOut'" : "") + ">" + JOQ[JOQ_index]["Mol"][Key2]["Index"] + "</sub>";

        if (MObj.Mol[Key2].hasOwnProperty("Charge")) {
            if (JOQ[JOQ_index]["Mol"][Key2]["Charge"].replace("+", "").replace("-", "") == "1")
                HTML += "<sup class='IndexFadeOut'>1</sup><sup>" + ((MObj.Mol[Key2]["Charge"].indexOf("+") !== -1) ? "+" : "-") + "</sup>";
            else
                HTML += "<sup>" + JOQ[JOQ_index]["Mol"][Key2]["Charge"] + "</sup>";
        }
    }
    return HTML;
}



function ReturnChemicalStructureComposition(JsonObj_PeriodicTable, MoleculeObj) { // ReturnChemicalStructureComposition
        var MObj = MoleculeObj;
        var HTML = "";
        console.log("ReturnChemicalStructureComposition - MObj.Mol: " + JSON.stringify(MObj.Mol));
        var MolLength = MObj.Mol.length;
        var Count = 1;
        for (var Key1 in MObj.Mol) { // Molecule Array
            console.log("ReturnChemicalStructureComposition - MObj.Mol[" + Key1 + "]: " + JSON.stringify(MObj.Mol[Key1]));
            // for (var Key2 in MObj.Mol[Key1]){ // Molecule sub object
            var AtomName = ReturnElementInfo(JsonObj_PeriodicTable, "sym", MObj.Mol[Key1]["AtomSym"], "name");
            HTML += MObj.Mol[Key1]["Index"] + " " + AtomName.toLowerCase() + "atom" + ((MObj.Mol[Key1]["Index"] == 1) ? "" : "er") + ((Count < MolLength - 1) ? ", " : +(Count == MolLength - 1) ? " og " : "");
            // }
            ++Count;
        }
        console.log("ReturnChemicalStructureComposition - HTML: " + HTML);

        return HTML;
    }
    // console.log( "ReturnChemicalStructureComposition - TEST: " + ReturnChemicalStructureComposition(JsonObj_PeriodicTable, {"MolSym": "H<sub>2</sub>CO<sub>3</sub>",   "TName": "Dihydrogencarbonat (kulsyre)",    "Principle": [2], "Mol": [{"AtomSym": "H", "Index": 2},{"AtomSym": "C", "Index": 1}, {"AtomSym": "O", "Index": 3}] } ) );



function ReturnChemicalIonComposition(JsonObj_PeriodicTable, MoleculeObj) {
        var MObj = MoleculeObj;
        var HTML = "";
        console.log("ReturnChemicalIonComposition - MObj.Mol: " + JSON.stringify(MObj.Mol));
        var MolLength = MObj.Mol.length;
        var Count = 1;
        var ChargeComp = "";
        for (var Key1 in MObj.Mol) { // Molecule Array
            console.log("ReturnChemicalIonComposition - MObj.Mol[" + Key1 + "]: " + JSON.stringify(MObj.Mol[Key1]));
            console.log('ReturnChemicalIonComposition - hasOwnProperty("Index"): ' + MObj.Mol[Key1].hasOwnProperty("Index"));
            var AtomName = ReturnElementInfo(JsonObj_PeriodicTable, "sym", MObj.Mol[Key1]["AtomSym"], "name");
            if (MObj.Mol[Key1].hasOwnProperty("Charge")) ChargeComp = " med ladningen " + ((MObj.Mol[Key1]["Charge"].indexOf("+") !== -1) ? "+" : "-") + MObj.Mol[Key1]["Charge"].replace("+", "").replace("-", "");
            HTML += ((MObj.Mol[Key1].hasOwnProperty("Index")) ? MObj.Mol[Key1]["Index"] : "1") + " " + AtomName.toLowerCase() + "atom" + ((MObj.Mol[Key1]["Index"] > 1) ? "er" : "") + ChargeComp + ((Count < MolLength - 1) ? ", " : +(Count == MolLength - 1) ? ", " : "");
            ++Count;
        }
        console.log("ReturnChemicalIonComposition - HTML: " + HTML);

        return HTML;
    }
    // console.log( "ReturnChemicalIonComposition - TEST: " + ReturnChemicalIonComposition( JsonObj_PeriodicTable, {"MolSym": "Fe<sup>3+</sup>",  "TName": "jern(&#73;&#73;&#73;)ion", "Principle": [4], "Mol": [{"AtomSym": "Fe", "Index": 1, "Charge": "3+"}] } ) );
    // console.log( "ReturnChemicalIonComposition - TEST: " + ReturnChemicalIonComposition( JsonObj_PeriodicTable, {"MolSym": "NH<sub>4</sub><sup>+</sup>",  "TName": "Amoniumion",    "Principle": [5], "Mol": [{"AtomSym": "N", "Index": 1},{"AtomSym": "H",  "Index": 4, "Charge": "1+"}] } ) );



// This function surrounds all letters (or clusters of letters) in LetterArray with span-tags with a class specified in LetterClassArray.
// NOTE: The delimiter should be a character (eg. "#"), or a combination of characters (eg. "-X-"), that does not exist in the target text.
// IMPORTANT: HTML-tags must not be present in the target-text. This could result in invalid/broken markup.
// EXAMPLE CALL:
//          MarkCertainCharactersAsSpecial([".AtomName", ".AtomSymbol"], ["H","L", "S"], ["FontGreen", "FontRed", "FontBlue"], "#");
// - which will make all L's red and all H's green in the text-strings associated with the target CSS classes ".AtomName" and ".AtomSymbol".
function MarkCertainCharactersAsSpecial(TargetSelectorArray, LetterArray, LetterClassArray, Delimiter) {
    for (var TargetSelector in TargetSelectorArray) {
        $(TargetSelectorArray[TargetSelector]).each(function(index, element) {
            for (var l in LetterArray) { // First surround all letters (or clusters of letters) in LetterArray with delimiters, eg. If letter = L and delimiter = #, then #L#.
                var ElementText = $(element).text();
                if (ElementText.indexOf(LetterArray[l]) !== -1) {
                    $(element).html(ElementText.replace(LetterArray[l], Delimiter + LetterArray[l] + Delimiter));
                }
            }

            for (var l in LetterArray) { // second, replace all delimited letters, eg. #L#, with <span class="MyClass">L</span>
                var LetterClass = (LetterClassArray.length == LetterArray.length) ? LetterClassArray[l] : LetterClassArray[0];
                var ElementText = $(element).text();
                if (ElementText.indexOf(LetterArray[l]) !== -1) {
                    $(element).html(ElementText.replace(Delimiter + LetterArray[l] + Delimiter, '<span class="' + LetterClass + '">' + LetterArray[l] + '</span>'));
                }
            }
        });
    }
}


// throw new Error("TEST STOP ENABLED!!!");



function MakeQuestionObj(JsonObj_Questions, QuestionObj) {

    for (var ElmObjNr in JsonObj_Questions) {
        console.log("JsonObj_Questions[" + String(ElmObjNr) + "].Principle: " + JsonObj_Questions[ElmObjNr].Principle);
        for (var p in JsonObj_Questions[ElmObjNr].Principle) {
            console.log("p: " + p, ", JsonObj_Questions[" + String(ElmObjNr) + "].Principle[" + p + "]: " + ElmObjNr);
            if (JsonObj_Questions[ElmObjNr].Principle[p] == 1) QuestionObj.P1.push(ElmObjNr);
            if (JsonObj_Questions[ElmObjNr].Principle[p] == 2) QuestionObj.P2.push(ElmObjNr);
            if (JsonObj_Questions[ElmObjNr].Principle[p] == 3) QuestionObj.P3.push(ElmObjNr);
            if (JsonObj_Questions[ElmObjNr].Principle[p] == 4) QuestionObj.P4.push(ElmObjNr);
            if (JsonObj_Questions[ElmObjNr].Principle[p] == 5) QuestionObj.P5.push(ElmObjNr);
        }
        QuestionObj.P6.push(ElmObjNr);
    }

    console.log("MakeQuestionObj - QuestionObj: " + JSON.stringify(QuestionObj));
}


function ReturnQuestionLevel(JsonObj_PeriodicTable, MoleculeObj, Level) {
    var QuestionLevel = "";

    if ((1 <= PrincipleNum) && (PrincipleNum <= 3)) {
        if (Level == 1)
            QuestionLevel += "<span class='QuestionCorrect'>så formlen for stoffet bestående af <span class='QuestionTask'>" +
            ReturnChemicalStructureComposition(JsonObj_PeriodicTable, MoleculeObj) +
            "</span> dannes.</span>";
        if (Level == 2)
            QuestionLevel += "<span class='QuestionCorrect'>så formlen for stoffet <span class='QuestionTask'>" +
            MoleculeObj.TName.toLowerCase() +
            "</span> dannes.</span>";
    }

    if ((4 <= PrincipleNum) && (PrincipleNum <= 6)) {
        if (Level == 1)
            QuestionLevel += "<span class='QuestionCorrect'>så formlen for ionen bestående af <span class='QuestionTask'>" +
            ReturnChemicalIonComposition(JsonObj_PeriodicTable, MoleculeObj) +
            "</span> dannes.</span>";
        if (Level == 2)
            QuestionLevel += "<span class='QuestionCorrect'>så formlen for en <span class='QuestionTask'>" +
            MoleculeObj.TName.toLowerCase() +
            "</span> dannes.</span>";
    }

    return QuestionLevel;
}


function ReturnQuestionHeading(PrincipleNum, Level) {
    var HTML = "";
    if (PrincipleNum == 1) HTML = "Ét grundstof";
    if (PrincipleNum == 2) HTML = "Flere grundstoffer";
    if (PrincipleNum == 3) HTML = "Ét og flere grundstoffer";
    if (PrincipleNum == 4) HTML = "Simple ioners formler";
    if (PrincipleNum == 5) HTML = "Sammensatte ioners formler";
    HTML += ' <img class="TaskNumberImg" src="../../../library/img/TaskNumbers_' + Level + '.svg"/>';
    return HTML;
}


function ReturMaxNumOfElements(PrincipleArray, MaxNumOfElements) {
    if (PrincipleArray.length > MaxNumOfElements)
        return PrincipleArray.slice(0, MaxNumOfElements);
    else
        return PrincipleArray;
}
console.log("ReturMaxNumOfElements: " + ReturMaxNumOfElements([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 6));


function PrincipleRepeat(JOQ, PrincipleArray, Qcount, ShowObj) {

    var Inx = PrincipleArray[Qcount];

    if ((Debug_OnlyGiveQuestion !== null) && (DebugMode))
        Inx = Debug_OnlyGiveQuestion;
    console.log("Debug_OnlyGiveQuestion: " + Debug_OnlyGiveQuestion + ", Inx:" + Inx);

    var MoleculeObj = JOQ[Inx];

    console.log("PrincipleRepeat - Inx: " + Inx + ", MoleculeObj:" + MoleculeObj);

    for (var i = 1; i <= MoleculeObj.Mol.length; i++) { // MoleculeObj.Mol.length is the number of atoms in the molecule.
        $("#DropWrap" + String(i)).removeClass("Hide"); // Show the necessary DropWraps.
    };


    var ArrayLength = PrincipleArray.length;
    var QuestionCountStr = "<br/><h5>Spørgsmål: <span class='QuizHeadingTextCount QuestionTask'>" + String(Qcount + 1) + "/" + String(ArrayLength) + "</span> Fejl: <span class='ErrorCount QuestionTask'>" + TotResultObj.NewTotFail + "</span> </h5>" +
        "<span class='QuizNextQuestion'>" +
        '<a class="NextQuestion btn-default btn btn-default" href="#">Næste spørgsmål</a>' +
        "</span>";

    var HTML = "";
    HTML += (DebugMode) ? '<h1 class="DebugMode">DebugMode: PRINCIP 1-B-1</h1>' : '';
    HTML += "<h1>" + ReturnQuestionHeading(PrincipleNum, Level) + "</h1>";
    HTML += "<div class='QuestionWrap'>";
    HTML += "<h4 class='QuestionText'>" +
        "<span class='QustionActionText'>Træk grundstofsymbol<span class='QustionActionElements'>" + ReturnActions(ShowObj) + "</span> til de hvide felter, </span><br/>" +
        ReturnQuestionLevel(JsonObj_PeriodicTable, MoleculeObj, Level) +
        "</h4>" + QuestionCountStr;
    HTML += "</div>";
    HTML += "<div class='FeedbackWrap'></div>";

    // Write the heading and question for the student:
    $(".QuizHeadingText").html(HTML);

    SetAcceptedDraggables(MoleculeObj);
}


function GiveQuestion(JsonObj_Questions, QuestionObj, PrincipleNum) {
    var PrincipleArray;
    var TPrincipleArray;
    var ArrayLength;
    var JOQ = JsonObj_Questions; // JsonObj_Questions[ArrayIndexNum][KeyName];
    var HTML = "";
    var Qcount = 0;

    PrincipleArray = QuestionObj["P" + String(PrincipleNum)];
    TPrincipleArray = ShuffelArray(PrincipleArray); // Random index relating to the sub-objects in JsonObj_Questions.
    console.log("GiveQuestion - TPrincipleArray 1: " + TPrincipleArray);

    TPrincipleArray = ReturMaxNumOfElements(TPrincipleArray, MaxNumOfElements); // This limits the maximum number of returned elements to MaxNumOfElements
    console.log("GiveQuestion - TPrincipleArray 2: " + TPrincipleArray);

    ArrayLength = TPrincipleArray.length;

    var ShowObj = ReturnShowObj(JsonObj_Questions, TPrincipleArray, Qcount);

    if (ShowObj.Index) $(".IndexWrapper").html(CreateNumberDivs(1, 8, "IndexNum DragNum btn btn-info draggable", false));
    if (ShowObj.Charge) $(".ChargeWrapper").html(CreateNumberDivs(-3, 3, "ChargeNum DragNum btn btn-info draggable", true));
    if (ShowObj.Coeff) $(".CoeffWrapper").html(CreateNumberDivs(1, 5, "CoeffNum DragNum btn btn-info draggable", false));

    ResultObj.Qcount = Qcount;
    ResultObj.PrincipleArray = TPrincipleArray;
    if (Qcount <= MaxNumOfElements - 1)  // Because IE ver 9 breaks when the last answer is given.
        PrincipleRepeat(JOQ, TPrincipleArray, Qcount, ShowObj);

    console.log("GiveQuestion - Qcount 1:" + Qcount + "");

    $(".QuizHeadingTextCount").text(String(Qcount + 1) + "/" + String(ArrayLength));

    if (!ShowObj.Index) $(".IndexNumberHeading, .IndexWrapper").hide();
    if (!ShowObj.Charge) $(".ChargeNumberHeading, .ChargeWrapper").hide();
    if (!ShowObj.Coeff) $(".CoeffNumberHeading, .CoeffWrapper").hide();


    $(document).on('click', ".NextQuestion", function(event) {
        event.preventDefault(); // Prevents sending the user to "href".

        console.log("GiveQuestion: Antal spm:" + ResultObj.PrincipleArray.length);

        if (Reload) {
            location.reload();
        }

        // length the student feedback:
        if (Qcount == ResultObj.PrincipleArray.length - 1) { // NOTE: Due to the placement of the ++Qcount increasement, Qcount == 9 equals 10 questions.
            ShowStudentScore(true);
            $(".NextQuestion").text("Prøv igen");
            Reload = true;
        }


        if (ResultObj.Correct < ReturnNumOfCorrectAnswers(JsonObj_Questions, ResultObj)) {
            // alert("Du skal placere både grundstof og indeks tal korrekt før du kan fortsætte!");
            // UserMsgBox("body", "Du skal placere både grundstof og indeks tal korrekt før du kan fortsætte!");
            UserMsgBox("body", "Du skal placere både grundstof" + ReturnActions(ShowObj) + " korrekt før du kan fortsætte!");
            return 0;
        }

        // console.log("GiveQuestion - ResultObj" + JSON.stringify(ResultObj) )

        ResetQuiz(500);
        ++Qcount;

        ResultObj.Qcount = Qcount;
        ResultObj.PrincipleArray = TPrincipleArray;
        PrincipleRepeat(JOQ, TPrincipleArray, Qcount, ShowObj);

        FontSizeScalerNew(".PeriodicTableWrapper", [".AtomSymbol", ".NumberHeading", ".ElementBox", ".DragNum", ".ScoreHeaderH3",
            ".ScoreHeader", ".ScoreNum", ".TryAgain",
            "#UserMsgBox"
        ], 1425);

        console.log("GiveQuestion - Qcount 2:" + Qcount + "");

    });

}


function BtnShowScore() {
    // var Inx = ResultObj.PrincipleArray[ResultObj.Qcount];
    // var MObj = JsonObj_Questions[Inx];
    if ((ResultObj.Qcount == ResultObj.PrincipleArray.length - 1) && (ResultObj.Correct == ReturnNumOfCorrectAnswers(JsonObj_Questions, ResultObj))) { // NOTE: Due to the placement of the ++Qcount increasement, Qcount == 9 equals 10 questions.
        $(".NextQuestion").text("Se din score");
    }
}


// Counts the number of necessary draggable numbers (Index, Coefficient and Charge) needed to complete the chemical structure. 
function ReturnNumOfActions(ShowObj) {
    var NumOfActions = 0;
    for (var i in ShowObj) {
        if (ShowObj[i]) ++NumOfActions;
    }
    console.log("ReturnNumOfActions - NumOfActions: " + NumOfActions);
    return NumOfActions;
}

// Counts the number of necessary draggable numbers (Index, Coefficient and Charge) needed to complete the chemical structure. 
function ReturnActions(ShowObj) {
    var ActionStr = "";
    var NumOfActions = 0;
    for (var i in ShowObj) {
        if (ShowObj[i]) ++NumOfActions;
    }
    for (var i in ShowObj) {
        if (ShowObj[i]) {
            ActionStr += ((NumOfActions > 1) ? ", " : " og ") + ((i == "Index") ? "indekstal" : "") + ((i == "Charge") ? "ladning" : "") + ((i == "Coeff") ? "koefficient" : "");
            --NumOfActions;
        }
    }
    console.log("ReturnActions - NumOfActions: " + NumOfActions + ", ActionStr: " + ActionStr);
    return ActionStr;
}


function ReturnShowObj(JsonObj_Questions, TPrincipleArray, Qcount) {
    var ShowObj = {
        Index: false,
        Coeff: false,
        Charge: false
    };
    var Inx = TPrincipleArray[Qcount];
    var JOQ = JsonObj_Questions;
    var MObj = JOQ[Inx];
    for (var Key1 in MObj.Mol) {
        for (var Key2 in MObj.Mol[Key1]) {
            console.log("ReturnShowObj - MObj.Mol[" + Key1 + "]: " + JSON.stringify(MObj.Mol[Key1]));
            if (MObj.Mol[Key1].hasOwnProperty("Index")) ShowObj.Index = true;
            if (MObj.Mol[Key1].hasOwnProperty("Coeff")) ShowObj.Coeff = true;
            if (MObj.Mol[Key1].hasOwnProperty("Charge")) ShowObj.Charge = true;
        }
    }
    console.log("ReturnShowObj - ShowObj: " + JSON.stringify(ShowObj));
    return ShowObj;
}


function ShowStudentScore_OLD(Use_UserMsgBox) {
    var HTML = '';

    HTML += '<div class="ScoreWrapper">';
    HTML += '<h3 class="ScoreHeaderH3">Resultater</h3>';
    HTML += '<div>';
    HTML += '<span class="ScoreHeader left">Forsøg:</span><span class="ScoreAttempts ScoreNum right">0</span>';
    HTML += '<div class="clear"></div>';
    HTML += '</div>';
    HTML += '<div>';
    HTML += '<span class="ScoreHeader left">Korrekt:</span><span class="ScoreCorrect ScoreNum right">0</span>';
    HTML += '<div class="clear"></div>';
    HTML += '</div>';
    HTML += '<div>';
    HTML += '<span class="ScoreHeader left">Fejl:</span><span class="ScoreFail ScoreNum right">0</span>';
    HTML += '<div class="clear"></div>';
    HTML += '</div>';
    HTML += '<div>';
    HTML += '<span class="ScoreHeader left">Score:</span><span class="ScoreStat ScoreNum right">0%</span>';
    HTML += '<div class="clear"></div>';
    HTML += '</div>';
    HTML += '</div>';

    if (Use_UserMsgBox)
        UserMsgBox("body", "Du klarede det med " + TotResultObj.TotFail + " fejl Se resultaterne her <br/>" + HTML);
    else
        $(".ShowStudentScore").html(HTML);

    // Update numbers:
    $(".ScoreAttempts").text(TotResultObj.TotAttempt);
    $(".ScoreCorrect").text(TotResultObj.TotCorrect);
    $(".ScoreFail").text(TotResultObj.TotFail);
    $(".ScoreStat").text((TotResultObj.TotCorrect / TotResultObj.TotAttempt * 100).toFixed(2) + "%");

    if (Use_UserMsgBox)
        return 0;
}


function ShowStudentScore(Use_UserMsgBox) {
    var HTML = '';

    if (Use_UserMsgBox)
        UserMsgBox("body", "<span class='feedbackbox_txtstyle_overskrift'>Flot</span><br/>Du har lavet " + MaxNumOfElements + " opgaver korrekt. <br/> Du havde " + TotResultObj.NewTotFail + ' fejl undervejs. <br/><br/>Klik på "Prøv igen" knappen for at løse ' + MaxNumOfElements + ' nye opgaver.');
    else
        $(".ShowStudentScore").html(HTML);

    // Update numbers:
    $(".ScoreAttempts").text(TotResultObj.TotAttempt);
    $(".ScoreCorrect").text(TotResultObj.TotCorrect);
    $(".ScoreFail").text(TotResultObj.TotFail);
    $(".ScoreStat").text((TotResultObj.TotCorrect / TotResultObj.TotAttempt * 100).toFixed(2) + "%");

    if (Use_UserMsgBox)
        return 0;
}



// The number of correct answers (NumOfCorrectAnswers) is defined as being the total number of properties of a molecular data-structure. 
// This is by far the best way of determining the number of correct answers and the type of avaliable draggable numbers (".DragNum", eg: index, 
// charge and coefficient), since the data-structure is shared among all functions.
// Example:
//      "Mol": [{"AtomSym": "H", "Index": 2},{"AtomSym": "O", "Index": 1}]  has NumOfCorrectAnswers = 4 
//      "Mol": [{"AtomSym": "N", "Index": 1},{"AtomSym": "H",  "Index": 4, "Charge": "1+"}]  has NumOfCorrectAnswers = 5 
// NOTE: At a later point in the development, a function that turns a LaTex molecular expression into the above data-structure may be devised.
//       Here properties may be added that this definition does not support - therefore remove all unnecessary properties from the data-structure, 
//       so the definition can still be used. 
function ReturnNumOfCorrectAnswers(JsonObj_Questions, ResultObj) {
    var Inx = ResultObj.PrincipleArray[ResultObj.Qcount];
    var JOQ = JsonObj_Questions;
    var MObj = JOQ[Inx];
    var Count = 0;
    for (var Key1 in MObj.Mol) {
        for (var Key2 in MObj.Mol[Key1]) {
            console.log("ReturnNumOfCorrectAnswers - MObj.Mol[" + Key1 + "]: " + JSON.stringify(MObj.Mol[Key1]));
            ++Count;
        }
    }
    console.log("ReturnNumOfCorrectAnswers - Count: " + Count);
    return Count;
}


function GivePosetiveFeedback(JsonObj_Questions, ResultObj) {

    console.log("GivePosetiveFeedback - ResultObj: " + JSON.stringify(ResultObj));

    console.log("GivePosetiveFeedback - Current question:" + ResultObj.PrincipleArray[ResultObj.Qcount]);

    if (ResultObj.Correct == ReturnNumOfCorrectAnswers(JsonObj_Questions, ResultObj)) {

        $(".QustionActionText").fadeOut("slow");

        ArrayIndex = ResultObj.PrincipleArray[ResultObj.Qcount];

        console.log("GivePosetiveFeedback - ArrayIndex: " + ArrayIndex);

        var HTML = "";
        HTML += "Du har lavet formlen for " + (((PrincipleNum == 4) || (PrincipleNum == 5)) ? "en" : "") + "<br/> <span class='QuestionTask'>" + JsonObj_Questions[ArrayIndex].TName.toLowerCase() + "</span>";
        console.log("GivePosetiveFeedback: " + HTML);

        // $(".QuestionCorrect").html( HTML );
        $(".QuestionCorrect").html('<span class="QuestionTask"> Rigtigt! </span>'); // Insert a blank space to avoid text "jumping up and down"

        var CssGet = ["background-color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color", "color"];
        var CssSet = {
            "background-color": "transparent",
            "border-top-color": "transparent",
            "border-right-color": "transparent",
            "border-bottom-color": "transparent",
            "border-left-color": "transparent",
            "color": "transparent"
        };

        // Get 
        if ($.isEmptyObject(CssObj)) {
            CssObj.Element = $(".ElementBox").css(CssGet);
            CssObj.Index = $(".IndexNum").css(CssGet);
            CssObj.Charge = $(".ChargeNum").css(CssGet);
            CssObj.Coeff = $(".CoeffNum").css(CssGet);
            CssObj.lbox = $(".lbox").css(["background-color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color"]); // Note: "border-color" will not work, you have to explicitly name the sides
            CssObj.sbox = $(".sbox").css(["background-color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color"]); // Note: "border-color" will not work, you have to explicitly name the sides
        }
        console.log("GivePosetiveFeedback - CssObj: " + JSON.stringify(CssObj));

        // Fade out borders on the droppables 
        $(".lbox, .sbox").animate({
            "border-color": "transparent",
            "background-color": $(".container-fluid").css("background-color") // Set background-color to the same background-color as the class container-fluid.
        }, 500);

        $(".Clone").animate(CssSet, 500); // This fades the clones.

        $("#DropWrap1").before('<div class="MoleculeHtmlStr">' + ReturnMolecule(JsonObj_Questions, ResultObj) + '</div>');

        MarkCertainCharactersAsSpecial([".HtmlElement"], ["I", "l"], ["CapitalI"], "#"); // Change the font-style on iodine...

        $(".MoleculeHtmlStr").append('<span class="QuestionCorrectNew">' + HTML + '<span>');

        SetTimerAndFadeout(".IndexFadeOut", 500, 1000); // If index = 1 the timeout the index-number after a delay
        SetTimerAndFadeIn(".QuestionCorrectNew", 1000, 500);


        console.log("IndexNumValue: " + typeof($(".Index_OK").text()));

    }
}



function GiveNegativeFeedback(JsonObj_Questions, ResultObj, TotResultObj) {
    if ((TotResultObj.TotFail >= 3) && (TotResultObj.LastDraggableAccepted == false) && (TotResultObj.LastAttemptedDroppedOnParent !== null)) { // LastDraggableAccepted == false prevent error message if you ajust the draggables position in the droppable.
        // LastAttemptedDroppedOnParent !== null is to prevent error if the FIRST draggable is attempted dropped outside the droppables
        var Inx = ResultObj.PrincipleArray[ResultObj.Qcount];
        var JOQ = JsonObj_Questions;
        var MObj = JOQ[Inx];
        var HTML = '';
        var Num = parseInt(TotResultObj.LastAttemptedDroppedOnParent.replace("DropWrap", "")) - 1;
        console.log("GiveNegativeFeedback - Num: " + Num);
        var AtomNum = ReturnElementInfo(JsonObj_PeriodicTable, "sym", MObj.Mol[Num]["AtomSym"], "Z");
        var AtomName = ReturnElementInfo(JsonObj_PeriodicTable, "sym", MObj.Mol[Num]["AtomSym"], "name");
        console.log("GiveNegativeFeedback - Num: " + Num + ", AtomNum: " + AtomNum + ", AtomName: " + AtomName);
        if (TotResultObj.LastAttemptedDroppedOn == "Coeff") {
            HTML += "Denne kasse er til koefficienter, som angiver hvor mange <b>" + (((AtomNum == 2) || (AtomNum == 10)) ? "atomer" : "molekyler") + "</b> der er. Her er der kun tale om et molekyle, derfor skal der ikke stå noget tal.";
        }
        if (TotResultObj.LastAttemptedDroppedOn == "Element") {
            HTML += "Denne kasse er til atomsymbolet. Find symbolet for <b>" + AtomName.toLowerCase() + "atomet</b> i grundstoffernes periodesystem og træk det op i kassen.";
        }
        if (TotResultObj.LastAttemptedDroppedOn == "Charge") {
            HTML += "Denne kasse er til ladninger, men da <b>" + (((AtomNum == 2) || (AtomNum == 10)) ? "atomer" : "molekyler") + "</b> er uden ladninger, skal der ikke stå noget her.";
        }
        if (TotResultObj.LastAttemptedDroppedOn == "Index") {
            HTML += "Denne kasse er til indekstal, tallet der skal stå her angiver hvor mange atomer der er i molekylet. Find tallet til højre og træk det hen i kassen.";
        }
        if ((TotResultObj.LastAttemptedDroppedOn != TotResultObj.LastDragged.Type) && (TotResultObj.LastAttemptedDroppedOn !== null)) { // LastAttemptedDroppedOn != LastDragged.Type: Do not give wrong-type feedback if e.g. index = 3 is dragged to the .DropIndex instead of index = 2
            // LastAttemptedDroppedOn = null if a draggable is not dropped in a droppable.
            // UserMsgBox(".FeedbackWrap", HTML);
            UserMsgBox("body", HTML);
        }
    }
}


// Funktionen laver en kopi af arrayet i argumentet, og blander elementerne tilfaeldigt
function ShuffelArray(ItemArray) {
    var NumOfItems = ItemArray.length;
    var NewArray = ItemArray.slice(); // Copy the array...
    var Item2;
    var TempItem1;
    var TempItem2;
    for (var Item1 = 0; Item1 < NumOfItems; Item1++) {
        Item2 = Math.floor(Math.random() * NumOfItems);
        TempItem1 = NewArray[Item1];
        TempItem2 = NewArray[Item2];
        NewArray[Item2] = TempItem1;
        NewArray[Item1] = TempItem2;
    }
    return NewArray;
}


function ElementBox(AtomNum, AtomSymbol, AtomName, AtomWeight, ExtraCssClasses) {
    var HTML = '<div class="ElementBox btn btn-info draggable ' + ExtraCssClasses + '">' +
        '<div class="AtomNum">' + ((AtomNum > 0) ? AtomNum : "&nbsp;") + '</div>' +
        '<div class="AtomSymbol">' + AtomSymbol + '</div>' +
        '<div class="AtomName">' + AtomName + '</div>' +
        // '<div class="AtomWeight">' + AtomWeight + '</div>' +
        '</div>';
    return HTML;
}

function AjaxCallback(JSONdata) {
    console.log("JsonObj_PeriodicTable - AjaxCallback: " + JSON.stringify(JSONdata));
}


function MakePeriodicTable(JsonObj_PeriodicTable) {
    var Zn = 0;
    var x = 0;
    var HTML = "";
    var ElementNumberStr = "_";
    for (var s in JsonObj_PeriodicTable) {
        ElementNumberStr += JsonObj_PeriodicTable[s].num + "_";
    }
    console.log("ElementNumberStr :" + ElementNumberStr);

    for (var r = 1; r <= 7; r++) {
        HTML += '<div class="row">';
        for (var i = 1; i <= 18; i++) {
            ++x;
            if (ElementNumberStr.indexOf("_" + String(x) + "_") === -1) {
                HTML += DummyElement;
            } else {
                if (Zn < 118) { // Midlertidig if-else-konstruktion:
                    // console.log("Zn: " + Zn + ", JsonObj_PeriodicTable[Zn].sym: " + JsonObj_PeriodicTable[Zn].Z);
                    var AtomNum = String(JsonObj_PeriodicTable[Zn].Z);
                    var AtomSymbol = JsonObj_PeriodicTable[Zn].sym;
                    var AtomName = JsonObj_PeriodicTable[Zn].name;
                    var AtomWeight = Math.round(10000 * JsonObj_PeriodicTable[Zn].A) / 10000;
                    var ExtraCssClasses = JsonObj_PeriodicTable[Zn].Class;
                    HTML += ElementBox(AtomNum, AtomSymbol, AtomName, AtomWeight, ExtraCssClasses);
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


function FontSizeScalerNew(ParentSelector, SelectorClassArr, NativeWindowWidth) {
    console.log("FontSizeScalerObj 1:" + JSON.stringify(FontSizeScalerObj));
    var FontSize;
    if ($.isEmptyObject(FontSizeScalerObj)) { // If the window reloades, then FontSizeScalerObj is empty and therefore store all font-sizes.
        for (var i = 0; i < SelectorClassArr.length; i++) {
            FontSize = $(SelectorClassArr[i]).css("font-size");
            console.log("FontSizeScalerObj FontSize - SelectorClass: " + SelectorClassArr[i] + ", font-size: " + FontSize);
            if (typeof FontSize != 'undefined') // Check in case a CSS-class in SelectorClassArr does not exist:
                FontSizeScalerObj[SelectorClassArr[i]] = parseInt(FontSize.replace(/px/g, ''));
        }
    }

    // Resize all fonts:
    var WindowWidth = $(ParentSelector).width();
    var Ratio = Math.round(1000 * (WindowWidth / NativeWindowWidth)) / 1000; // Rounded to 3 digit precision.
    var ArgStr = SelectorClassArr.join();
    for (var Selector in FontSizeScalerObj) {
        if (ArgStr.indexOf(Selector) !== -1) // Only ajust the fontsizes given in SelectorClassArr:
            $(Selector).css("font-size", String(FontSizeScalerObj[Selector] * Ratio) + "px");
    }
    console.log("FontSizeScalerObj 2:" + JSON.stringify(FontSizeScalerObj));
}


// NOTE: BoolSetPlusSign = true sætter "+" foran alle tal større end nul, dvs: 
function CreateNumberDivs(Min, Max, Class, BoolSetSign) {
    var HTML = "";
    for (var i = Min; i <= Max; i++) {
        // if (i != 0) HTML += '<div class="'+Class+'">' + Math.abs(i) + ((BoolSetSign && i>0) ? "+" : ((BoolSetSign && i<0) ? "-" : "") )  + '</div>';
        HTML += '<div class="' + Class + '">' + Math.abs(i) + ((BoolSetSign && i > 0) ? "+" : ((BoolSetSign && i < 0) ? "-" : "")) + '</div>';
    };
    return HTML;
}


function SetAcceptedElements(AtomNumOk, Class_OK) {
    $(".ElementBox").each(function(index, element) {
        var AtomNum = parseInt($(".AtomNum", element).text());
        console.log("AtomNum: " + AtomNum);
        if (AtomNumOk == AtomNum) {
            $(element).addClass(Class_OK);
        }
    });
}

function SetAcceptedNumbers(NumStrOk, Selector, Class_OK) {
    $(Selector).each(function(index, element) {
        var NumStr = $(element).text();
        console.log("SetAcceptedNumbers NumStr: " + NumStr);
        if (NumStrOk == NumStr) {
            $(element).addClass(Class_OK);
        }
    });
}


function SetAcceptedDraggables(MoleculeObj) {
    var MObj = MoleculeObj;
    console.log("SetAcceptedDraggables - MObj: " + JSON.stringify(MObj));
    var Coeff = null;
    var AtomNum = null;
    var Index = null;
    var Charge = null;
    for (var i = 0; i < MObj.Mol.length; i++) { // MObj.Mol.length is the number of atoms in the molecule.

        if (MObj.Mol[i].hasOwnProperty("AtomSym")) {
            var AtomNum = ReturnElementInfo(JsonObj_PeriodicTable, "sym", MObj.Mol[i]["AtomSym"], "Z");
            SetAcceptedElements(AtomNum, "Elem_OK" + String(i + 1)); // The draggable element
        }

        if (MObj.Mol[i].hasOwnProperty("Index"))
            SetAcceptedNumbers(MObj.Mol[i]["Index"], ".IndexNum", "Index_OK" + String(i + 1)); // The draggabl index numbers

        if (MObj.Mol[i].hasOwnProperty("Charge"))
            SetAcceptedNumbers(MObj.Mol[i]["Charge"], ".ChargeNum", "Char_OK" + String(i + 1)); // The draggabl index numbers

        if (MObj.Mol[i].hasOwnProperty("Coeff"))
            SetAcceptedNumbers(MObj.Mol[i]["Coeff"], ".CoeffNum", "Coeff_OK" + String(i + 1)); // The draggabl index numbers

        // // Returns "X+" if X > 0, "X-" if X < 0 or 0 if X = 0, where X = charge.
        // Charge = String(Math.abs(JOQ[Inx]["Charge"])) + ((JOQ[Inx]["Charge"] > 0)?"+":((JOQ[Inx]["Charge"] < 0)?"-":""));  

        // SetAcceptedElements( JOQ[Inx]["AtomNum"], "Elem_OK" );                        // The draggable element
        // SetAcceptedNumbers(  JOQ[Inx]["Index"], ".IndexNum", "Index_OK");  // Principle 1: index numbers
        // SetAcceptedNumbers(  Charge, ".ChargeNum", "Char_OK");             // Principle 2: charge numbers
        // SetAcceptedNumbers(  JOQ[Inx]["Coeff"], ".CoeffNum", "Coeff_OK");  // Principle 3: coefficient numbers
    }
    console.log("SetAcceptedDraggables - MObj.Mol.length: " + MObj.Mol.length);
}



function UpdateResultFeedback(ResultObj, TotResultObj, ObjKey, BoolCorrectOrFail) {
    ResultObj.Attempt += 1;
    TotResultObj.TotAttempt += 1;
    TotResultObj[ObjKey].Attempt += 1;
    TotResultObj.LastDragged.Type = ObjKey;
    if (BoolCorrectOrFail) {
        ResultObj.Correct += 1;
        TotResultObj.TotCorrect += 1;
        TotResultObj[ObjKey].Correct += 1;
        TotResultObj.LastDraggableAccepted = true;
    } else {
        ResultObj.Fail += 1;
        TotResultObj.TotFail += 1;
        TotResultObj[ObjKey].Fail += 1;
        TotResultObj.LastDraggableAccepted = false;
        TotResultObj.NewTotFail += 1;
    }
    // $(".ScoreAttempts").text( ResultObj.Attempt ); 
    // $(".ScoreCorrect").text( ResultObj.Correct );
    // $(".ScoreFail").text( ResultObj.Fail );
    // $(".ScoreStat").text( (ResultObj.Correct/ResultObj.Attempt*100).toFixed(2) + "%" ); 

    $(".ErrorCount").text(TotResultObj.NewTotFail);

    // alert(typeof((ResultObj.Correct/ResultObj.Attempt*100).toFixed(2)))     
    console.log("UpdateResultFeedback - TotResultObj: " + JSON.stringify(TotResultObj));
}


function ResetQuiz(Milliseconds) {

    clearTimeout(TimerId_FadeOut); // fjerner tidligere timere.  
    clearTimeout(TimerId_FadeIn);

    $(".MoleculeHtmlStr").remove();
    // $(".MoleculeHtmlStr").hide();

    // Move all draggables to their initial positions
    $(".draggable").animate({
        top: "0px",
        left: "0px"
    }, Milliseconds, function() { // When animation complete, do...
        // FEJL: Hvis nedenstående kode placeres her, så køres det mange gange (ca 90), derfor er det placeret forneden - check console.log
        console.log("ResetQuiz - 0");
    });

    // Reset element when an unaccepted element returns to its position in the periodic table
    $(".AtomNum, .AtomName, .AtomWeight Index_OK").show(); // Index_OK needs to be showen since all indexvalues = 1 is hidden.
    $(".AtomSymbol").css("font-size", "160%");
    // $(".Index_OK").css({"color": CssObj.IndexNum["color"], "border-color": CssObj.IndexNum["border-color"]});


    // Make borders and background-color on the draggables visible: 
    if (ResultObj.Dropped.Element) $(".Elem_OK").css(CssObj.Element);
    if (ResultObj.Dropped.Index) $(".Index_OK").css(CssObj.Index);
    if (ResultObj.Dropped.Charge) $(".Char_OK").css(CssObj.Charge);
    if (ResultObj.Dropped.Coeff) $(".Coeff_OK").css(CssObj.Coeff);
    // $(".lbox").css(CssObj.lbox);
    // $(".sbox").css(CssObj.sbox);

    $(".sbox").animate(CssObj.sbox, 1000); // The droppables will fadein 
    $(".lbox").animate(CssObj.lbox, 1000); // The droppables will fadein 

    // Reset memory:
    EventObj = {
        Dragging: false,
        DraggableLeft: null,
        DraggableTop: null,
        Element: {
            AtomNum: null,
            AtomName: null,
            drop: false
        },
        Index: {
            val: null,
            drop: false
        },
        Charge: {
            val: null,
            drop: false
        },
        Coeff: {
            val: null,
            drop: false
        },
        LastDroppedOn: null, // The last dropped droppable
        LastDroppedOnParent: null // The parent of the last dropped droppable - NOT the attempted
    };

    // Reset memory:
    ResultObj = {
        Attempt: 0,
        Correct: 0,
        Fail: 0,

        Qcount: 0,
        PrincipleArray: [],

        Element: {
            AtomNum: null,
            Attempt: 0
        },
        Index: {
            val: null,
            Attempt: 0
        },
        Charge: {
            val: null,
            Attempt: 0
        },
        Coeff: {
            val: null,
            Attempt: 0
        },

        Dropped: {
            Element: false,
            Index: false,
            Charge: false,
            Coeff: false
        }
    };

    // Remove all Clone droppables
    $(".Clone").remove();

    $(".Original").removeAttr("id");

    $(".draggable").removeClass("Dropped Original");

    // Remove background-color from the correct droppables:  Dropped
    $(".droppable").removeClass("DropHighlight");

    $(".DropWrapper").each(function(index, element) {
        $(element).addClass("Hide"); // Hide all DropWraps upon reset.
    });

    for (var i = 1; i <= 3; i++) {
        var s = String(i);
        $(".draggable").removeClass("Elem_OK" + s + " Index_OK" + s + " Char_OK" + s + " Coeff_OK" + s + " Dropped");
    };

}


function IsInsideBox(Selector, Left, Top) {
    var Con = $(Selector).offset();
    Con.width = $(Selector).width();
    Con.height = $(Selector).height();
    if ((Con.left <= Left) && (Left <= Con.left + Con.width) && (Con.top <= Top) && (Top <= Con.top + Con.height))
        return true;
    else
        return false;
}


function FindAttemptedDroppable(TotResultObj) {
    var Left = TotResultObj.LastDragged.Left;
    var Top = TotResultObj.LastDragged.Top;

    TotResultObj.LastAttemptedDroppedOn = null;

    $(".DropWrapper").each(function(index, element) {
        var Id = $(element).prop("id");
        if (IsInsideBox("#" + Id + " .DropCoeff", Left, Top)) {
            TotResultObj.LastAttemptedDroppedOn = "Coeff";
            TotResultObj.LastAttemptedDroppedOnParent = Id;
        }
        if (IsInsideBox("#" + Id + " .DropElement", Left, Top)) {
            TotResultObj.LastAttemptedDroppedOn = "Element";
            TotResultObj.LastAttemptedDroppedOnParent = Id;
        }
        if (IsInsideBox("#" + Id + " .DropCharge", Left, Top)) {
            TotResultObj.LastAttemptedDroppedOn = "Charge";
            TotResultObj.LastAttemptedDroppedOnParent = Id;
        }
        if (IsInsideBox("#" + Id + " .DropIndex", Left, Top)) {
            TotResultObj.LastAttemptedDroppedOn = "Index";
            TotResultObj.LastAttemptedDroppedOnParent = Id;
        }
    });

    console.log("FindAttemptedDroppable - TotResultObj: " + JSON.stringify(TotResultObj));
}


// IMPORTANT: Class "draggable" (and NOT clases: "ui-draggable", "ui-draggable-handle" and "ui-draggable-dragging") makes all the problems of cloning from ouside and into a droppable.
function SimpleClone(TargetSelector) {
    var Clone = $(TargetSelector).clone().removeClass("draggable").css({
        'position': 'absolute',
        'top': 'auto',
        'left': 'auto'
    }); // This is necessary for cloning inside the droppable to work properly!!!
    Clone = Clone.removeAttr("id").removeClass("ui-draggable ui-draggable-handle ui-draggable-dragging"); // This just cleans the attributes so the DOM-element looks nicer.
    // Clone = Clone.addClass("Clone");
    return Clone;
}



// TEST URL:
// file:///Users/THAN/main-gulp-folder/objekter/kemi_drag/builds/development/index.html?var0=val0&var1=val1&amp;var2=val2%26var3=val3
function ReturnURLPerameters() {
    UlrVarObj = {};
    var UrlVarStr = window.location.search.substring(1);
    console.log("ReturnURLPerameters - UrlVarStr: " + UrlVarStr);
    var UrlVarPairArray = decodeURIComponent(UrlVarStr).split("&"); // decodeURIComponent handles %26" for the char "&" AND "%3D" for the char "=".
    console.log("ReturnURLPerameters - UrlVarPairArray: " + UrlVarPairArray);
    for (var i in UrlVarPairArray) {
        var UrlVarSubPairArray = UrlVarPairArray[i].split("="); // & = %3D
        if (UrlVarSubPairArray.length == 2) {
            UlrVarObj[UrlVarSubPairArray[0]] = UrlVarSubPairArray[1];
        }
    }
    console.log("ReturnURLPerameters - UlrVarObj: " + JSON.stringify(UlrVarObj));
    return UlrVarObj;
}



// TEST URL:
// file:///Users/THAN/main-gulp-folder/objekter/kemi_drag/builds/development/index.html?pn=1&dm=1    NOTE: 0 = false, 1 = true
// file:///Users/THAN/main-gulp-folder/objekter/kemi_drag/builds/development/index.html?pn=1&dm=0    NOTE: 0 = false, 1 = true
function SetProgramPerameter(UlrVarObj) {
    if (UlrVarObj.hasOwnProperty("pn") && (1 <= UlrVarObj["pn"]) && (UlrVarObj["pn"] <= 5)) PrincipleNum = UlrVarObj["pn"]; // PrincipleNum  =  pn
    // if (UlrVarObj.hasOwnProperty("dm") && ((UlrVarObj["dm"] == true) || (UlrVarObj["dm"] == false)) ) DebugMode =  UlrVarObj["dm"];     // DebugMode  =  dm, NOTE: 0 = false, 1 = true
    if (UlrVarObj.hasOwnProperty("l") && ((UlrVarObj["l"] == 1) || (UlrVarObj["l"] == 2))) Level = UlrVarObj["l"]; // PrincipleNum  =  pn
    console.log("SetProgramPerameter - ReturnURLPerameters- PrincipleNum: " + PrincipleNum + ", DebugMode: " + DebugMode + ", Debug_OnlyGiveQuestion: " + Debug_OnlyGiveQuestion);
}


//########################################################################
//                        Run code....
//########################################################################


$(document).ready(function() { // CapitalI

    ReturnAjaxData("GET", "periodisk_system.json", false, "json"); // Get the periodic-table data which is contained in JsonData.
    JsonObj_PeriodicTable = JsonData;

    var UlrVarObj = ReturnURLPerameters();
    SetProgramPerameter(UlrVarObj);

    MakeQuestionObj(JsonObj_Questions, QuestionObj);

    if (DebugMode) ShowStudentScore(false); // TEST

    console.log("JsonObj_PeriodicTable 1: " + JSON.stringify(JsonObj_PeriodicTable));
    console.log("JsonObj_Questions 1: " + JSON.stringify(JsonObj_Questions));

    console.log("NameArray 2: " + NameArray);

    // Create the periodic table:
    MakePeriodicTable(JsonObj_PeriodicTable);

    MarkCertainCharactersAsSpecial([".AtomName", ".AtomSymbol"], ["I", "l"], ["CapitalI"], "#");
    // MarkCertainCharactersAsSpecial([".AtomName", ".AtomSymbol"], ["H","L", "S", "I"], ["FontRed", "FontGreen", "FontBlue", "CapitalI"], "#");

    // Make the H1 heading, eg. "Princip 1...", and the H2 question, eg. "Skriv formlen for stoffet der..."
    GiveQuestion(JsonObj_Questions, QuestionObj, PrincipleNum);

    // $(".IndexWrapper").append('<div id="Original_10" class="Index_OK IndexNum DragNum btn btn-info draggable">X</div>'); // TEST   

    // When the window loades, scale all elements:
    //$(window).load(function () {

    // Scale the height on all ElmentBox
    // $( ".ElementBox" ).height( 4/3*$( ".ElementBox" ).width() ); // Rektangulære boxe
    $(".ElementBox").height($(".ElementBox").width()); // Kvardratiske boxe  
   // alert("hej");
    // Scale the height on all small and large boxes
    $(".lbox").height($(".lbox").width());
    // $( ".lbox" ).width( $( ".lbox" ).width() );
    // $( ".xlbox" ).height( $( ".xlbox" ).width() );
    $(".sbox").height($(".sbox").width());
   // alert("hej");
    $(".DropSpacer").height($(".DropSpacer").width());

    FontSizeScalerNew(".PeriodicTableWrapper", [".AtomSymbol", ".NumberHeading", ".ElementBox", ".DragNum", ".ScoreHeaderH3",
        ".ScoreHeader", ".ScoreNum", ".TryAgain",
        "#UserMsgBox", ".ScoreWrapper", ".MoleculeHtmlStr"
    ], 1425);

    $(".DragNum").width($(".DragNum").height());

    // $( ".DropWrapper" ).height( $( ".DropZone" ).height() );

    console.log("WindowWidth: " + $(window).width());

    // $( ".ElementBox" ).css( "font-size", String(50)+"%" );
    //});

    // When the window resizes, scale all elements: 
    $(window).resize(function() {
        // Scale the height on all ElmentBox
        // $( ".ElementBox" ).height( 4/3*$( ".ElementBox" ).width() );  // Rektangulære boxe
        $(".ElementBox").height($(".ElementBox").width()); // Kvardratiske boxe

        // Scale the height on all small and large boxes
        $(".lbox").height($(".lbox").width());
        // $( ".xlbox" ).height( $( ".xlbox" ).width() );
        $(".sbox").height($(".sbox").width());
        $(".DropSpacer").height($(".DropSpacer").width());

        FontSizeScalerNew(".PeriodicTableWrapper", [".AtomSymbol", ".NumberHeading", ".ElementBox", ".DragNum", ".ScoreHeaderH3",
            ".ScoreHeader", ".ScoreNum", ".TryAgain",
            "#UserMsgBox", ".ScoreWrapper", ".MoleculeHtmlStr"
        ], 1425);

        $(".DragNum").width($(".DragNum").height());
    });


    // Nedenstaaende udfoeres naar der trykkes paa TryAgain anchor-tag'et:
    $(document).on('click', ".TryAgain", function(event) {
        event.preventDefault(); // Prevents sending the user to "href".

        ResetQuiz(500);
    });


    var ErrStr = "";


    $(".ElementSpace").removeClass("draggable");  // Prevents the two draggables "ElementSpace" of moving. 

    $(".draggable").draggable({
        revert: 'invalid', // Makes the draggable revert back if does not have class "Elem_OK", "Coeff_OK", "Char_OK" or "Index_OK". 

        // SEQUENCE 1:
        start: function(event, ui) {
            ResultStr += "Start ";
            EventObj.Element.AtomNum = $(this).hasClass("ElementBox") ? $(".AtomNum", this).text() : null;
            EventObj.Element.AtomName = $(this).hasClass("ElementBox") ? $(".AtomName", this).text() : null;
            EventObj.Index.val = $(this).hasClass("IndexNum") ? $(this).text() : null;
            EventObj.Charge.val = $(this).hasClass("ChargeNum") ? $(this).text() : null;
            EventObj.Coeff.val = $(this).hasClass("CoeffNum") ? $(this).text() : null;

            // // Hide .AtomNum, .AtomName, .AtomWeight "on drag" instead of hide "on mousedown":
            if ($(".draggable").draggable('option', 'disabled') != true) {
                $(".AtomNum, .AtomName, .AtomWeight", this).hide();
                CssAtomSymbolFontSize = $(".AtomSymbol", this).css("font-size"); // Save the font-size
                $(".AtomSymbol", this).css("font-size", "400%");
                console.log("XXX TEST");
            }
        },

        // SEQUENCE 3:
        stop: function(event, ui) {
            ResultStr += "Stop ";
            console.log("ResultStr C: " + ResultStr);


            FindAttemptedDroppable(TotResultObj);


            //==================================================================
            //  ELEMENT:    Check for the right element in the periodic table:
            //==================================================================
            if (EventObj.Element.AtomNum !== null) { // if draggable is an element of the perodic table.

                ErrStr += "B1,";

                ResultObj.Element.Attempt += 1; // Update the number pf attempts.

                // Ensures that only the accepted draggable element gets a correct-score, and that only one correct-score is given if the accepted draggable is re-dragged.
                // if (EventObj.Element.drop && (ResultObj.Element.AtomNum === null)){ // accepted draggable is in droppable AND not counted before.
                if (EventObj.Element.drop) {
                    ErrStr += "B2,";
                    UpdateResultFeedback(ResultObj, TotResultObj, "Element", true);
                    ResultObj.Element.AtomNum = EventObj.Element.AtomNum;
                    ResultObj.Dropped.Element = true;
                    console.log("B2:\n EventObj.Element.AtomNum: " + EventObj.Element.AtomNum + ", ResultObj.Element.AtomNum: " + ResultObj.Element.AtomNum);
                }

                // Ensures that you can't get a higher fail-score once the right accepted draggable element is dropped.
                if (ResultObj.Element.AtomNum === null) { // accepted draggable not counted before.
                    // if (TotResultObj.LastAttemptedDroppedOn != "Element"){  // accepted draggable not counted before.
                    ErrStr += "B3,";
                    UpdateResultFeedback(ResultObj, TotResultObj, "Element", false);
                }

                // Prevents reset for an accepted draggable, if one tries to ajust the the accepted draggable element in the droppable zone.
                // It also ensures that any non-acceppted draggable is reset if dragged.
                if (EventObj.Element.AtomNum != ResultObj.Element.AtomNum) { // if not equal to accepted draggable.
                    ErrStr += "B4,";
                    // Reset element when an unaccepted element returns to its position in the periodic table
                    // $(".AtomNum, .AtomName, .AtomWeight", this).show();
                    // $(".AtomSymbol", this).css("font-size", "160%");
                }
            }

            //==================================================================
            //  INDEX:    Check for the right index 
            //==================================================================
            if (EventObj.Index.val !== null) { // if draggable is an element of the perodic table.

                ErrStr += "C1,";

                ResultObj.Index.Attempt += 1; // Update the number pf attempts.

                // Ensures that only the accepted draggable element gets a correct-score, and that only one correct-score is given if the accepted draggable is re-dragged.
                // if (EventObj.Index.drop && (ResultObj.Index.val === null)){ // accepted draggable is in droppable AND not counted before.
                if (EventObj.Index.drop) {
                    ErrStr += "C2,";
                    UpdateResultFeedback(ResultObj, TotResultObj, "Index", true);
                    ResultObj.Index.val = EventObj.Index.val;
                    ResultObj.Dropped.Index = true;
                    console.log("C2:\n EventObj.Index.val: " + EventObj.Index.val + ", ResultObj.Index.val: " + ResultObj.Index.val);
                }

                // Ensures that you can't get a higher fail-score once the right accepted draggable element is dropped.
                if (ResultObj.Index.val === null) { // accepted draggable not counted before.
                    // if (TotResultObj.LastAttemptedDroppedOn != "Index"){  // accepted draggable not counted before.
                    ErrStr += "C3,";
                    UpdateResultFeedback(ResultObj, TotResultObj, "Index", false);
                }
            }

            //==================================================================
            //  CHARGE:    Check for the right charge 
            //==================================================================
            if (EventObj.Charge.val !== null) { // if draggable is an element of the perodic table.

                ErrStr += "D1,";

                ResultObj.Charge.Attempt += 1; // Update the number pf attempts.

                // Ensures that only the accepted draggable element gets a correct-score, and that only one correct-score is given if the accepted draggable is re-dragged.
                // if (EventObj.Charge.drop && (ResultObj.Charge.val === null)){ // accepted draggable is in droppable AND not counted before.
                if (EventObj.Charge.drop) { // accepted draggable is in droppable AND not counted before.
                    ErrStr += "D2,";
                    UpdateResultFeedback(ResultObj, TotResultObj, "Charge", true);
                    ResultObj.Charge.val = EventObj.Charge.val;
                    ResultObj.Dropped.Charge = true;
                    console.log("D2:\n EventObj.Charge.val: " + EventObj.Charge.val + ", ResultObj.Charge.val: " + ResultObj.Charge.val);
                }

                // Ensures that you can't get a higher fail-score once the right accepted draggable element is dropped.
                if (ResultObj.Charge.val === null) { // accepted draggable not counted before.
                    ErrStr += "D3,";
                    UpdateResultFeedback(ResultObj, TotResultObj, "Charge", false);
                }
            }

            //==================================================================
            //  COEFFICIENT:    Check for the right coefficient 
            //==================================================================  
            if (EventObj.Coeff.val !== null) { // if draggable is an element of the perodic table.

                ErrStr += "E1,";

                ResultObj.Coeff.Attempt += 1; // Update the number pf attempts.

                // Ensures that only the accepted draggable element gets a correct-score, and that only one correct-score is given if the accepted draggable is re-dragged.
                // if (EventObj.Coeff.drop && (ResultObj.Coeff.val === null)){ // accepted draggable is in droppable AND not counted before.
                if (EventObj.Coeff.drop) { // accepted draggable is in droppable AND not counted before.
                    ErrStr += "E2,";
                    UpdateResultFeedback(ResultObj, TotResultObj, "Coeff", true);
                    $(this).css({
                        "width": "10%",
                        "height": "50%",
                        "font-size": "300%"
                    });
                    ResultObj.Coeff.val = EventObj.Coeff.val;
                    ResultObj.Dropped.Coeff = true;
                    console.log("E2:\n EventObj.Coeff.val: " + EventObj.Coeff.val + ", ResultObj.Coeff.val: " + ResultObj.Coeff.val);
                    // alert($(this).css("font-size"));
                }

                // Ensures that you can't get a higher fail-score once the right accepted draggable element is dropped.
                if (ResultObj.Coeff.val === null) { // accepted draggable not counted before.
                    ErrStr += "E3,";
                    UpdateResultFeedback(ResultObj, TotResultObj, "Coeff", false);
                }
            }

            if (TotResultObj.LastDraggableAccepted) {
                $(this).addClass("Dropped"); // Add class "Dropped", which is used for avoiding cloning once dropped.
                console.log("TotResultObj.LastDraggableAccepted: OK");

                $(this).css({
                    top: "0px",
                    left: "0px"
                }); // Move the original back to its origanal position.
                $("#" + EventObj.LastDroppedOnParent + " " + "." + EventObj.LastDroppedOn).append(SimpleClone($(this)).addClass("Clone")); // Place a clone inside the droppable and add class "Clone" to it.

                // // Reset element when an unaccepted element returns to its position in the periodic table
                // $(".AtomNum, .AtomName, .AtomWeight", this).show();
                // $(".AtomSymbol", this).css("font-size", "160%");

                TotResultObj.LastDraggableAccepted = false;
            }


            // Reset element when an unaccepted element (does not have class "Clone") returns to its position in the periodic table.
            if (!$(this).hasClass("ElementBox Clone")) {
                $(".AtomNum, .AtomName, .AtomWeight", this).show();
                // $(".AtomSymbol", this).css("font-size", "160%");
                $(".AtomSymbol", this).css("font-size", CssAtomSymbolFontSize); // Use the saved font-size to resize the AtomSymbol
            }

            console.log("ErrStr: " + ErrStr);
            ErrStr = "";

            GivePosetiveFeedback(JsonObj_Questions, ResultObj);

            // FindAttemptedDroppable(TotResultObj);

            GiveNegativeFeedback(JsonObj_Questions, ResultObj, TotResultObj);

            if (DebugMode) ShowStudentScore(false); // TEST

            BtnShowScore(); // Show score after the last question has been given.


            console.log("ProgramEnd - EventObj: " + JSON.stringify(EventObj));

            // Reset EventObj:
            EventObj = {
                Dragging: false,
                DraggableLeft: null,
                DraggableTop: null,
                Element: {
                    AtomNum: null,
                    AtomName: null,
                    drop: false
                },
                Index: {
                    val: null,
                    drop: false
                },
                Charge: {
                    val: null,
                    drop: false
                },
                Coeff: {
                    val: null,
                    drop: false
                },
                LastDroppedOn: null, // The last dropped droppable
                LastDroppedOnParent: null // The parent of the last dropped droppable - NOT the attempted
            };


            console.log("ProgramEnd - Content of HiddenElement: " + $("#HiddenElement").html());
        },


        drag: function(event, ui) {

            ResultStr += "Drag ";

            var offset = $(this).offset();
            var Left = offset.left;
            var Top = offset.top;
            var Width = $(this).width();
            var Height = $(this).height();
            TotResultObj.LastDragged.Left = Left + Math.round(Width / 2); // Pass on center-point
            TotResultObj.LastDragged.Top = Top + Math.round(Height / 2); // Pass on center-point
            $('#DragLeft').text(Left);
            $('#DragTop').text(Top);
            // console.log("DRAG - offset: " + JSON.stringify( offset ));

            var LeftFirst = null;
            var TopFirst = null;
            var Pos = $(this).position();
            if (!EventObj.Dragging) EventObj.DraggableLeft = String(Pos.left);
            if (!EventObj.Dragging) EventObj.DraggableTop = String(Pos.top);
            console.log("EventObj - drag: " + JSON.stringify(EventObj));


        }
    });


    $("#DropWrap1 .DropElement").droppable({
        accept: ".Elem_OK1"
    });
    $("#DropWrap1 .DropCoeff").droppable({
        accept: ".Coeff_OK1"
    });
    $("#DropWrap1 .DropCharge").droppable({
        accept: ".Char_OK1"
    });
    $("#DropWrap1 .DropIndex").droppable({
        accept: ".Index_OK1"
    });

    $("#DropWrap2 .DropElement").droppable({
        accept: ".Elem_OK2"
    });
    $("#DropWrap2 .DropCoeff").droppable({
        accept: ".Coeff_OK2"
    });
    $("#DropWrap2 .DropCharge").droppable({
        accept: ".Char_OK2"
    });
    $("#DropWrap2 .DropIndex").droppable({
        accept: ".Index_OK2"
    });

    $("#DropWrap3 .DropElement").droppable({
        accept: ".Elem_OK3"
    });
    $("#DropWrap3 .DropCoeff").droppable({
        accept: ".Coeff_OK3"
    });
    $("#DropWrap3 .DropCharge").droppable({
        accept: ".Char_OK3"
    });
    $("#DropWrap3 .DropIndex").droppable({
        accept: ".Index_OK3"
    });

    $(".DropElement").droppable({
        drop: function(event, ui) {
            // $( this ).addClass( "DropHighlight" );
            ResultStr += "Drop ";
            EventObj.Element.drop = true;
            console.log("EventObj X: " + JSON.stringify(EventObj));

            EventObj.LastDroppedOn = "DropElement"; // The class name
            EventObj.LastDroppedOnParent = $(this).closest(".DropWrapper").prop("id"); // The id name

        }
    });
    $(".DropCoeff").droppable({
        drop: function(event, ui) {
            // $( this ).addClass( "DropHighlight" );
            EventObj.Coeff.drop = true;

            EventObj.LastDroppedOn = "DropCoeff"; // The class name
            EventObj.LastDroppedOnParent = $(this).closest(".DropWrapper").prop("id"); // The id name
        }
    });
    $(".DropCharge").droppable({
        drop: function(event, ui) {
            // $( this ).addClass( "DropHighlight" );
            EventObj.Charge.drop = true;

            EventObj.LastDroppedOn = "DropCharge"; // The class name
            EventObj.LastDroppedOnParent = $(this).closest(".DropWrapper").prop("id"); // The id name
        }
    });
    $(".DropIndex").droppable({
        drop: function(event, ui) {
            // $( this ).addClass( "DropHighlight" );
            EventObj.Index.drop = true;

            EventObj.LastDroppedOn = "DropIndex"; // The class name
            EventObj.LastDroppedOnParent = $(this).closest(".DropWrapper").prop("id"); // The id name

        }
    });

});
