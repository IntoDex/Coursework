import {makeAutoObservable} from 'mobx';

export default class RecepteWeb {
    constructor() {
        this._types = [
            {id: 1, name: "Русская"},
            {id: 2, name: "Японская"}
        ]
        this._cats = [
            {id: 1, name: "Выпечка"},
            {id: 2, name: "Горячее"}
        ]
        this._ings = [
            {id: 1, name: "Яблоко"},
            {id: 2, name: "Апельсин"}
        ]
        this._receptes = [
            {id: 1, name: "Пельмени", description: "Вкусное", rating: 5},
            {id: 2, name: "Борщ",description: "Вкусное", rating: 5},
            {id: 3, name: "Роллы", description: "Вкусное", rating: 5},
            {id: 4, name: "Суши", description: "Вкусное", rating: 5},
        ]
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
    // setIsAuth(bool) {
    //     this._isAuth = bool
    // }
    // setUser(user) {
    //     this._user = user
    // }

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
    
}