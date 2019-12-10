import axios from "axios"

export const getTopics = () => {
    return axios
        .get("https://sm-ncnews.herokuapp.com/api/topics")
            .then(({data}) => {
                return data.topics
            })

}

export const getArticles = (topic) => {
    return axios
        .get("https://sm-ncnews.herokuapp.com/api/articles", {params: {topic}})
        .then(({data}) => {
            return data.articles
        })
}

export const getSingleArticle = (article) => {
    return axios
        .get(`https://sm-ncnews.herokuapp.com/api/articles/${article}`)
        .then(({data}) => {
            return data.article
        })
}

export const getComments = (article) => {
    return axios
        .get(`https://sm-ncnews.herokuapp.com/api/articles/${article}/comments`)
        .then(({data}) => {
            console.log(data.comments)
            return data.comments
        })
}

export const postComment = (article, comment) => {
    axios
    .post(`https://sm-ncnews.herokuapp.com/api/articles/${article}/comments`, {comment})
    .then(() => {
        console.log('complete')
    })
}