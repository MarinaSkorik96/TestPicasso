import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hook";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../../guery/posts";
import { IPost } from "../../models/models";

const FullPost: React.FC = () => {
  const { id }: any = useParams();

  const {
    data: postData,
    isLoading: postLoading,
    isError: postError,
  } = useGetPostQuery(id);
  const post: null | IPost = useAppSelector((state) => state.posts.openPost);
  const users = useAppSelector((state) => state.posts.allUsers);
  const [fullPost, setFullPost] = useState<IPost | undefined | null>(post);
  useEffect(() => {
    if (post === null) {
      setFullPost(postData);
    }
  }, [postData]);
  return (
    <>
      <>
        {postError ? (
          <p className="no-posts">
            Ошибка загрузки поста, попробуйте позже *_*
          </p>
        ) : postLoading ? (
          <p>Подождите, пост загружаются...</p>
        ) : (
          <div className="full_post">
            <div key={fullPost?.id} className="post">
              <div className="post_main">
                {postData && (
                  <div>
                    <>
                      <div className="post_header">
                        <p className="post_number">{fullPost?.id}</p>
                        {users && (
                          <p className="post_author">
                            {
                              users?.find(
                                (user) => user.id === fullPost?.userId
                              )?.name
                            }
                          </p>
                        )}
                      </div>
                      <h3 className="post_title">{fullPost?.title}</h3>
                      <p className="post_text">{fullPost?.body}</p>
                    </>
                  </div>
                )}
                <Link to="/" className="post_button">
                  Вернуться к списку постов
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default FullPost;
