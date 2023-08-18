const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    isAdmin: Boolean
    events:[Event]!
    stalls:[Stall]!
  }

  type Event {
    _id: ID
    title: String
    description: String
    location: String
    start_date: String
    end_date: String
    start_time: String
    end_time: String
    ticketInformation: String
    max_stalls:Int
    createdBy: User
    createdAt: String
    image: String
    stalls: [Stall]!
    attendees: [User]!
  }
  type Product {
    _id: ID
    name: String
    description: String
  }
  type Stall {
    _id: ID
    title: String
    description: String
    createdAt: String
    number:String
    contact_number:String
    image:String
    owner:User
    events:[Event]!
    products:[Product]!

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    events: [Event]
    event(eventId:ID!):Event
    userevents(userId:ID!):[Event]
    eventstalls(eventId:ID!):[Stall]
    userstalls(userId:ID!):[Stall]
    stall(stallId:ID!):Stall
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    # addThought(thoughtText: String!): Thought
    # addComment(thoughtId: ID!, commentText: String!): Thought
    # removeThought(thoughtId: ID!): Thought
    # removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
