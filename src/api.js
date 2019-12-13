import axios from "axios"

export const getTopics = () => {
    return axios
        .get("https://sm-ncnews.herokuapp.com/api/topics")
            .then(({data}) => {
                return data.topics
            })

}

export const getArticles = (topic, sortBy) => {
    return axios
        .get("https://sm-ncnews.herokuapp.com/api/articles", 
        {params: {
            topic : topic, 
            sort_by: sortBy
        }})
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
            return data.comments
        })
}

export const postComment = (article, comment) => {
    axios
    .post(`https://sm-ncnews.herokuapp.com/api/articles/${article}/comments`, 
    {username: 'jessjelly', body: comment})
    .then(() => {
        console.log('complete')
    })
}

export const deleteComment = (comment) => {
    axios
    .delete(`https://sm-ncnews.herokuapp.com/api/comments/${comment}`)
    .then(() => {
        console.log('deleted')
    })
}

export const updateVotes = (article, vote) => {
    axios
    .patch(`https://sm-ncnews.herokuapp.com//api/articles/${article}`, 
    {inc_votes: vote})
    .then(() => {
        console.log('updated')
    })
}