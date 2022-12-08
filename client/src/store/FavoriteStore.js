import {makeAutoObservable} from 'mobx';
import { addFav, fetchFav } from '../http/recepteAPI';

export default class FavoriteStore {
    constructor() {
        this._fav = []
        makeAutoObservable(this)
    }
    setFav(fav) {
        this._fav = fav
    }
    setSelectedFav(fav) {
        this._selectedFav = fav   
    }

    get fav() {
        return this._fav
    }
    get selectedFav() {
        return this._selectedFav
    }

    fetchFav = async (email) => {
        try {
            const response = await fetchFav(email)
            this.setFav(response)
        } catch (e) {

        }
    }
    async addFav(email, id)  {
        try {
            const response = await addFav(id, email)
            this.setFav([...this.fav, response])
        } catch (e) {

        }
    }
}