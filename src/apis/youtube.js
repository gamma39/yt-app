import axios from 'axios'

const KEY = 'AIzaSyDjYkwiUL3UKlLT_YlKpfo1_qeKzftEzHQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY

    }
})