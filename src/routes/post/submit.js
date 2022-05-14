const axios = require('axios')

module.exports = async (req, res) => {

    const mutation = `
        mutation createPost ($textBlock: String, $userId: String ){
            createPost( textBlock: $textBlock, userId: $userId )
            }`

    try {
        const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT, 
            { 
                query: mutation,
                variables: {
                    textBlock: req.body.postBox,
                    userId: req.verifiedUser.user._id,
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            });   
            console.log("notworking")
            console.log(data)
            console.log({
                textBlock: req.body.textBlock,
                userId: req.verifiedUser.user._id,
            })
    } catch(e) {
        console.log(e)
    }   

    res.redirect(`/`)
};