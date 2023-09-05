const axios = require('axios')
const graphql = require('graphql')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql


const fetchUsers = async (id) => {
    const res = await axios.get(`http://localhost:3000/users/${id}`)
    return res.data
}

const fetchCompanyByUserId = async (id) => {
    const res = await axios.get(`http://localhost:3000/companies/${id}`)
    return res.data
}

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
    }
})

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: {
            type: CompanyType,
            resolve(parentValue, args) {
                return fetchCompanyByUserId(parentValue.companyId)
            }

        },
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            async resolve(parentValue, args) { // we go into our database or call a third-party API
                return fetchUsers(args.id)
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
})