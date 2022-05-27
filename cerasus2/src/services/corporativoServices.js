import {api} from './base.js'

export default {
    async getCorporativo(){
        return await api().get('Corporativo')
    },
    async getColaborador(){
        return await api().get('Colaborador')
    }
}