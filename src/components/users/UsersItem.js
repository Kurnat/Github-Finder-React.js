import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const UsersItem = ({user: { avatar_url, html_url, login }}) => {

    return (
        <div className="card text-center">
            <img 
                src={avatar_url} 
                alt={`Iamage of ${login}`}
                className="round-img" 
                style={{width: '60px'}}
            />
            <h3>{login}</h3>
            <div>
                <Link 
                    to={`user/${login}`} 
                    className="btn btn-dark btn-sm my-1"
                >More
                </Link>
            </div>
        </div>
    )
}

UsersItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UsersItem
