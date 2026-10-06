import { useState } from "react";

function LikeCard({ title }) {

    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="like-card">

            <h2>{title}</h2>

            <p>
                Status: {liked ? "Liked ❤️" : "Not Liked"}
            </p>

            <button onClick={handleLike}>
                {liked ? "Unlike" : "Like"}
            </button>

        </div>
    );
}

export default LikeCard;