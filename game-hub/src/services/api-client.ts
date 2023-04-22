import axios from 'axios'

// export default axios.create({
//     baseUrl: 'https://api.rawg.io/api',
//     params:{
//         key: '51dfd04c620d41bd98ff6547b399e460'
//     },
// })
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: '51dfd04c620d41bd98ff6547b399e460'
    }
})