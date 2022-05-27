import {api} from './base.js'

export default {
    async getComunion(){
        return await api().get('Comunion')
    }
}