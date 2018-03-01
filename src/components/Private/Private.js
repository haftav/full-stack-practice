import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/users';

class Private extends React.Component {
    constructor(props) {
        super(props);

        this.bankBalance = this.bankBalance.bind(this);
    }

    componentDidMount() {
        this.props.getUser();
    }

    bankBalance() {
        return '$' + Math.floor((Math.random() + 10000) * 200) + '.00';
    }

    render() {
        const user = this.props.user;
        return (
            <div className=''>
                <h1>Community Bank</h1><hr />
                <h4>Account information:</h4>
                { user ? <img className='avatar' src={user.img} /> : null }
                <p>Username: { user ? user.user_name : null }</p>
                <p>ID: { user ? user.auth_id : null }</p>
                <h4>Available balance: { user ? this.bankBalance() : null } </h4>
                <a href='http://localhost:3535/auth/logout'><button>Log out</button></a>
            </div> 
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

let actions = {
    getUser
}

export default connect(mapStateToProps, actions)(Private);