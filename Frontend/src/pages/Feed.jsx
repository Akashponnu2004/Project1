
import React, { useState } from 'react';

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://ik.imagekit.io/akashsp03/image_R4E6avfMG9.jpg?updatedAt=1793014903649",
            caption: "Beautiful scene",
        }
    ]);

    return (
        <section className="feed-section">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className="post-card">
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <h1>No posts available</h1>
            )}
        </section>
    );
};

export default Feed;
