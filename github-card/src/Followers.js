import React from 'react'


export default function Followers(props) {
    return(
        <>
            <h2>Followers</h2>
            {props.followers.map(follower =>(
                <div key={follower.id} id="followersContainer">
                    <div className="followersCard">
                    <h4>{follower.login}</h4>
                    <img src={follower.avatar_url}></img>
                    </div>
                </div>
            ))}
        </>
    )
}