import React from 'react';

class UserCard extends React.Component{
    render() {
        return(
            <card className='cardDetails'>
                <div className='cardHeader'>
                    <h3>{this.props.users.name}</h3>
                </div>
                <div className='cardInfo'>
                    <p>Location: {this.props.users.location}</p>
                    <p>Profile: {this.props.users.profile}</p>
                    <p>Followers: {this.props.users.followers}</p>
                    <p>Following: {this.props.users.following}</p>
                </div>
            </card>
        )
    }
}

export default UserCard;