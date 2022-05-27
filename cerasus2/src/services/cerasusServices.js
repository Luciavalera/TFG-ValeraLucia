import {api} from './base.js'

export default{
    async getHome(){
        return await api().get('Home')
    },
    async getProducto(){
        return await api().get('Producto')
    }
}