import axios from './http'

const questionnaire ={
    getQues(params){
        return axios.get('/get',params )
    },
    postQues(params){
        return axios.post('/add',params )
    },
    updateQues(params){
        return axios.post('/update',params )
    },
}
export default questionnaire