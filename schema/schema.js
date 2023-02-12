// const { projects, clients } = require('../data');

// Modelos
const Client = require('../models/Client');
const Project = require('../models/Project');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
} = require('graphql');

// Client type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
});

// Projects type
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args) {
                // return clients.find(client => client.id === parent.id)  // Busca el cliente con id igual al del proyecto
                return Client.findById(parent.clientId)
            }
        }
    })
});


// Queries:
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({

        // Todos los clientes
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                // return clients;
                return Client.find();
            }
        },

        // Cliente segun id
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },      // Le pasamos un id a la consulta
            resolve(parent, args) {
                // return clients.find(client => client.id === args.id);
                return Client.findById(args.id);
            }
        },

        // Todos los proyectos
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return Project.find();
            }
        },

        // Proyecto segun id
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Project.findById(args.id);
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});

