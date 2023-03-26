import React from "react";

const PostItem = (
    {
        post = {
            "avatarIcon": "/images/elon.jpg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "comment": "Amazing show about @Inspiration4x mission!",
            "image": "/images/countdown.jpg",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "summary": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
            "from": "netflix.com",
            "comments": "4.2K",
            "retweets": "3.5K",
            "likes": "37.5K"
        }
    }
) => {
    return(
        <li className="wd-posts list-group-item mb-2">
            <div className="row">
                <div className="col-1">
                    <img className="wd-post-avatar" src={post.avatarIcon}/>
                </div>
                <div className="col-11">
                    <div className="row">
                        <div className="col-10">
                            <div className="row">
                                <div className="col-12">
                                    {post.userName}
                                    <i className="fa fa-check-circle fa-1x"/>
                                    <span className="wd-post-handle">
                                        @ {post.handle}
                                    </span>
                                    <span className="wd-post-time">
                                        &middot; {post.time}
                                    </span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="wd-post-comment col-12">
                                    {post.comment}
                                </div>
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <a href="#" className="wd-post-more">
                                <i className="fa fa-ellipsis-h"/>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        {/*image + summary of posts*/}
                        <ul className="wd-post-image-text list-group mt-2 mb-2">
                            <img className="wd-post-img img-fluid" src={post.image}/>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="wd-post-title col-12">
                                        {post.title}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="wd-post-summary col-12">
                                        {post.summary}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="wd-post-from col-12">
                                        <i className="fa fa-chain fa-1x"></i>
                                        {post.from}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/*icons*/}
                    <div className="wd-post-icons row">
                        <div className="wd-post-comments col-3">
                            <i className="fa fa-comment fa-1x"></i>
                            {post.comments}
                        </div>
                        <div className="wd-post-retweets col-3">
                            <i className="fa fa-retweet fa-1x"></i>
                            {post.retweets}
                        </div>
                        <div className="wd-post-likes col-3">
                            <i className="fa fa-heart fa-1x"></i>
                            {post.likes}
                        </div>
                        <div className="wd-post-downloads col-3">
                            <i className="fa fa-download fa-1x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;