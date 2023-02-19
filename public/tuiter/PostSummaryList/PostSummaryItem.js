const PostSummaryItem = (post) => {
    return(`
      <li class="list-group-item">
        <div class="row">
          <div class="col-10">
            <div class="row">
              <div class="wd-post-topic col-12">
                ${post.topic}
              </div>
            </div>
            <div class="row">
              <div class="wd-post-userName col-12">
                ${post.userName}
                <i class="fa fa-circle fa-1x"></i>
                <span class="wd-post-time">
                   - ${post.time}
                </span>
              </div>
            </div>
            <div class="row">
              <div class="wd-post-title col-12">
                ${post.title}
              </div>
            </div>
        
          </div>
          <div class="col-2 text-center">
            <img class="wd-postsum-img img-fluid" src=${post.image} />
          </div>
        </div>
      </li>
    `);
}

export default PostSummaryItem;