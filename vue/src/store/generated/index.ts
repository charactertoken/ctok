// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import CharactertokenCtokCharactertokenCtokCharservice from './charactertoken/ctok/charactertoken.ctok.charservice'
import CharactertokenCtokCharactertokenCtokOfferservice from './charactertoken/ctok/charactertoken.ctok.offerservice'
import CharactertokenCtokCharactertokenCtokTypeservice from './charactertoken/ctok/charactertoken.ctok.typeservice'


export default { 
  CharactertokenCtokCharactertokenCtokCharservice: load(CharactertokenCtokCharactertokenCtokCharservice, 'charactertoken.ctok.charservice'),
  CharactertokenCtokCharactertokenCtokOfferservice: load(CharactertokenCtokCharactertokenCtokOfferservice, 'charactertoken.ctok.offerservice'),
  CharactertokenCtokCharactertokenCtokTypeservice: load(CharactertokenCtokCharactertokenCtokTypeservice, 'charactertoken.ctok.typeservice'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
