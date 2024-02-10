import React from "react";
import { useAppSelector } from "../../hook";
import { Link } from "react-router-dom";

const FullPost: React.FC = () => {
  const post = useAppSelector((state) => state.posts.openPost);
  const users = useAppSelector((state) => state.posts.allUsers);
  return (
    <div  className="full_post">
      <div key={post?.id} className="post">
        <div className="post_main">
          {post && (
            <div>
              <>
                <div className="post_header">
                  <p className="post_number">{post.id}</p>
                  {users && (
                    <p className="post_author">
                      {users?.find((user) => user.id === post.userId)?.name}
                    </p>
                  )}
                </div>
                <h3 className="post_title">{post.title}</h3>
                <p className="post_text">{post.body}</p>
              </>
            </div>
          )}
          <Link to="/" className="post_button">
            Вернуться к списку постов
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullPost;