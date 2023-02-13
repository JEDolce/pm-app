import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
    mutation addProject($name: String!, $email: String!, $phone: String!) {
      addProject(name: $name, email: $email, phone: $phone) {
        id,
        name,
        email,
        phone
      }  
    }
`;

const DELETE_PROJECT = gql`
    mutation deleteProject($id: ID!) {
        deleteProject(id: $id) {
            id,
            name,
            email,
            phone
        }
    }
`;

export {
    ADD_PROJECT,
    DELETE_PROJECT
};