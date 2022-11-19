function freezObj(){
    "use strict";
    const MATHS_CONSTANT = {
        "PI" : 3.14
    };

    // Object.freeze(MATHS_CONSTANT)

    try{
        MATHS_CONSTANT.EXP=99
    }
    catch(ex){
        console.log("ex");
    }
    return MATHS_CONSTANT.PI
}


console.log(freezObj())

