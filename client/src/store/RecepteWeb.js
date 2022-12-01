import {makeAutoObservable} from 'mobx';
import cake from '../assets/Test.jpg'


export default class RecepteWeb {
    constructor() {
        this._types = []
        this._cats = []
        this._ings = []
        this._receptes = []
        this._selectedType = {}
        this._selectedCat = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setCats(cats) {
        this._cats = cats
    }
    setIngs(ings) {
        this._ings = ings
    }
    setReceptes(receptes) {
        this._receptes = receptes
    }
 

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedCat(cat) {
        this._selectedCat = cat
    }




    get types() {
        return this._types
    }
    get cats() {
        return this._cats
    }
    get ings() {
        return this._ings
    }
    get receptes() {
        return this._receptes
    }






    get selectedType() {
        return this._selectedType
    }
    get selectedCat() {
        return this._selectedCat
    }
    
}