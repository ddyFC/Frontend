import React from 'react';

const Playerpost = ({posts, loading}) => {
    return (
        <>
        {loading && <div> loading... </div>}
        <div className="playerlist">
        <ul>
            { posts.map(post=>(
                <li key={post.id}>
                    {post.name}
                </li>
            ))}
        </ul>
        </div>
        </>
    );
};
export default Playerpost;