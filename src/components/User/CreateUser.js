import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag';

class CreateUser extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData(this.form);
        this.props
            .mutate({ variables: {
                email: formData.get('email'),
                name: formData.get('name')
            } })
            .then( ({ data }) => {
                console.log('got data', data);
                if (data.addUser) {
                    window.location.replace(`/`)
                } else {
                    console.log(data.errors)
                }
            })
            .catch(err => {
                console.log('Network error!', err)
            })
    }

    render() {
        return (
            <div>
                <h1>Create New User</h1>
                <form
                    ref={ref => (this.form = ref)}
                    onSubmit={e => this.handleSubmit(e)}
                >
                    Email : <input name="email" type="email"/> <br/>
                    Name : <input name="name"/> <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mutation = gql`
mutation CreateUser($email : String!, $name: String!) {
  addUser(data : {
    email : $email,
    name : $name
  }) {
    email
    name
  }
}
`

CreateUser = graphql(mutation)(CreateUser)

export default CreateUser