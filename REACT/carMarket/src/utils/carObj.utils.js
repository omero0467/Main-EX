import {carMarket} from '../carObj.js'

function getObjElementsName (obj){
    return Object.keys(obj)
}

function filterUnderScores(elem){
    return elem.split('_').join(' ')
}
export default {filterUnderScores,getObjElementsName}