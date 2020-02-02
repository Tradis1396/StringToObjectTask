function strToObject(str) {
    let re_intent = /\@[a-z]{1,}/gi;
    let re_symbol = /#[a-z]{1,}/gi;
    let symb = /\W[|| | $$ | &&]+/gi;
    let obj = {};
    console.log();

    let re_intent_array = str.match(re_intent);
    let re_entity_array = str.match(re_symbol);
    let re_symbols = str.match(symb);
    newarr = []

    re_intent_array.forEach(element => {
        obj = {
            type: "entity",
            value: element
        }
        newarr.push(obj);

    });
    re_entity_array.forEach(element => {
        obj = {
            type: "intent",
            value: element
        }
        newarr.push(obj);

    });
    re_symbols.forEach(element => {
        if (["||", "&&", "$$", "|$|"].indexOf(element) > -1) {
            obj = {
                type: "operator",
                value: element
            }
            newarr.push(obj);

        }

    })

    console.log(newarr);


}
strToObject("#ashikdd@word||#subash|$|#test&&assfd&@car")