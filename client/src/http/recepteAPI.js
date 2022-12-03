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

export const fetchReceptes = async () => {
    const {data} = await $host.get('api/rec?limit=30')
    return data
}

export const fetchOneRecepte = async (id) => {
    const {data} = await $host.get('api/rec/' + id)
    return data
}
