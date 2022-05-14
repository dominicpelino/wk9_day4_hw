const axios = require('axios');
const { GraphQLID } = require('graphql');

const userData = async (req, res, next) => {
    if (!req.verifiedUser) {
        next()
        return
    }

    const query = `
        query user($id: ID!) { 
            user( id: $id ) {
                id,
                posts {
                    textBlock,
                    user{
                        username
                    }
                }
            }
        }` 

    console.log(req.verifiedUser.user._id)
    let data = {}
    try {
        data = await axios.post(process.env.GRAPHQL_ENDPOINT, 
        { 
            query,
            variables: {
                id: req.verifiedUser.user._id
            }
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }); 
    } catch(e) {
        console.log(e.response.data.errors)
    }
    req.verifiedUser.user.posts = data.data.data.user?.posts ?? []
    console.log(data.data.data)
    next()
};

module.exports = { userData }