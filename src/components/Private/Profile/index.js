import React, { useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Tweet from '../Tweet';

const Profile = () => {
    const params = useParams();

    const [tweets, setTweets] = useState();

    const getTweets = () => {
        const host = process.env.REACT_APP_API_URL;
        const url = `${host}/users/${params.userId}/tweets`;
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('jwt')
            }
        }).then(res => res.json())
        .then(json => {
            setTweets(json)
        });
    }
    
    useEffect(() => {
        getTweets()
    }, [])

    return (
        <>
            <h2>Tweets @{params.username}</h2>
            <p><Link to="/">Return to home</Link></p>
            
            {
                tweets && tweets.map(t => 
                    <Tweet key={t._id} tweet={t}/> 
                )
            }
        </>
    );
}

export default Profile;