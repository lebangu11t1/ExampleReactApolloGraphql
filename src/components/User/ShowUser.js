import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

class ShowUser extends React.Component {
    render() {
        const { data } = this.props
        if (data.loading) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h1>Show User</h1>
                <p>Email : {data.User.email}</p>
                <p>Name : {data.User.name}</p>
            </div>
        )
    }
}

// We use the gql tag to parse our query string into a query document
const query = gql`
  query ShowUser($id : ID!) {
    User(id : $id) {
        email,
        name
    }
  }
`;

const queryOptions = {
    options: props => ({
        variables: {
            id: props.match.params.id,
        },
    }),
}

ShowUser = graphql(query, queryOptions)(ShowUser)
export default ShowUser