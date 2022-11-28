import {makeAutoObservable} from 'mobx';
import cake from '../assets/Test.jpg'

export default class RecepteWeb {
    constructor() {
        this._types = [
            {id: 1, name: "Русская"},
            {id: 2, name: "Японская"},
            {id: 3, name: "Китайская"},
            {id: 4, name: "Арабская"},
            {id: 5, name: "Германская"},

        ]
        this._cats = [
            {id: 1, name: "Выпечка"},
            {id: 2, name: "Горячее"},
            {id: 3, name: "Холодное"},
            {id: 4, name: "Теплое"},
            {id: 5, name: "Патрик"},
            {id: 6, name: "Спанч-Боб"}
        ]
        this._ings = [
            {id: 1, name: "Яблоко"},
            {id: 2, name: "Апельсин"}
        ]
        this._receptes = [
            {id: 1, name: "Пельмени", description: "Вкусное", rating: 5, img: cake},
            {id: 2, name: "Борщ",description: "Вкусное", rating: 5, img: cake},
            {id: 3, name: "Роллы", description: "Вкусное", rating: 5, img: cake},
            {id: 4, name: "Суши", description: "Вкусное", rating: 5, img: cake},
        ]
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