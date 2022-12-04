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
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }


    // Основные об
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


    // Пагинация

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }


    // get

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




   // getSelected

    get selectedType() {
        return this._selectedType
    }
    get selectedCat() {
        return this._selectedCat
    }


    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
    
}