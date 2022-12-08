import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createCat = async (cat) => {
    const {data} = await $authHost.post('api/cat', cat)
    return data
}

export const fetchCats = async () => {
    const {data} = await $host.get('api/cat')
    return data
}

export const createIng = async (ing) => {
    const {data} = await $authHost.post('api/ing', ing)
    return data
}

export const fetchIngs = async () => {
    const {data} = await $host.get('api/ing')
    return data
}

export const createRecepte = async (recepte) => {
    const {data} = await $authHost.post('api/rec', recepte)
    return data
}

export const fetchReceptes = async (typeId, categoryId, page, limit = 5) => {
    const {data} = await $host.get('api/rec', {params: {
        typeId, categoryId, page, limit
    }})
    return data
}

export const fetchOneRecepte = async (id) => {
    const {data} = await $host.get('api/rec/' + id)
    return data
}


// Удаление
export const deleteRecepte = async (id) => {
    const {data} = await $authHost.delete('api/rec/' + id)
    return data
}

// Избранное 
export const addFav = async (recepteId, userId) => {
    const {data} = await $authHost.post('api/user/favorite', {recepteId, userId})
    return data
}
export const fetchFav = async () => {
    const {data} = await $authHost.get('api/user/favorite')
    return data
}
export const deleteFav = async (id) => {
    const {data} = await $authHost.delete('api/user/favorite/' + id)
    return data
}
export const fetchisFav = async (recepteId, userId) => {
    const {data} = await $authHost.post('api/user/isfavorite', {recepteId, userId})
}