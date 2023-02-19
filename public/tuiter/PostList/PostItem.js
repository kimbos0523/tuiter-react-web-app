const PostItem = (post) => {
    return(`
      <li class="wd-posts list-group-item mb-2">
        <div class="row">
          <div class="col-1">
            <img class="wd-post-avatar" src=${post.avatarIcon} />
          </div>
          <div class="col-11">
            <div class="row">
              <div class="col-10">
                <div class="row">
                  <div class="col-12">
                    ${post.userName}
                    <i class="fa fa-check-circle fa-1x"></i>
                    <span class="wd-post-handle">
                      @ ${post.handle}
                    </span>
                    <span class="wd-post-time">
                      &middot; ${post.time}
                    </span>
                  </div>
                </div>
                <div class="row">
                  <div class="wd-post-comment col-12">
                    ${post.comment}
                  </div>
                </div>
              </div>
              <div class="col-2 text-center">
                <a href="#" class="wd-post-more"><i class="fa fa-ellipsis-h fa-1x align-middle"></i></a>
              </div>
            </div>
            <div class="row">
              <!-- image + summary of posts -->
              <ul class="wd-post-image-text list-group mt-2 mb-2">
                <img class="wd-post-img img-fluid" src=${post.image} />
                <li class="list-group-item">
                  <div class="row">
                    <div class="wd-post-title col-12">
                      ${post.title}  
                    </div>
                  </div>
                  <div class="row">
                    <div class="wd-post-summary col-12">
                      ${post.summary}  
                    </div>
                  </div>
                  <div class="row">
                    <div class="wd-post-from col-12">
                      <i class="fa fa-chain fa-1x"></i>
                      ${post.from}  
                    </div>
                  </div>
                </li>
              </ul>              
            </div>    
            <!-- icons -->
            <div class="wd-post-icons row">
              <div class="wd-post-comments col-3">
                <i class="fa fa-comment fa-1x"></i>
                ${post.comments}  
              </div>
              <div class="wd-post-retweets col-3">
                <i class="fa fa-retweet fa-1x"></i>
                ${post.retweets}  
              </div>
              <div class="wd-post-likes col-3">
                <i class="fa fa-heart fa-1x"></i>
                ${post.likes}  
              </div>
              <div class="wd-post-downloads col-3">
                <i class="fa fa-download fa-1x"></i> 
              </div>
            </div>
          </div>             
        </div>
      </li>`);
}

export default PostItem;