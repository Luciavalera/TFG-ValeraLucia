import {api} from './base.js'

export default {
    async getBoda(){
        return await api().get('Boda')
    }
}