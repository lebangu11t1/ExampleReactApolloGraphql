import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'

class UserList extends React.Component {
    render() {
        const { data } = this.props
        if (data.loading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h1>List User</h1>

                <Link to={`/create-user/`}>
                    Create User
                </Link>

                {data.Users.map((item, index) => (
                    <p key={item._id}>
                        <Link to={`/user/${item._id}/`}>
                            {item.email}
                        </Link>
                    </p>
                ))}
            </div>
        )
    }
}

// We use the gql tag to parse our query string into a query document
const query = gql`
  query {
	Users {
	  _id
	  email
	  name
	}
}
`;

UserList = graphql(query)(UserList)

export default UserList