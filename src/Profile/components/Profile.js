import React from 'react'
import propTypes from 'prop-types';

const Profile = ({n,p,a,children,bio,alert}) => {
    return (
        <div className="text">
            {children} My name is {n} i am a {p} and my age is {a} <br></br> {bio}<br></br>Lifestyle | Sport | Travel
            {alert()}
        </div>
    )
}
Profile.propTypes={
    n:propTypes.string
}
Profile.defaultProps={
    n:"Do"
}

export default Profile
