import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
      <div class="row mb-2">
        <!-- search field and cog -->
        <div class="col-10">
          <div class="wd-search-bx input-group">
            <button type="button" class="wd-search-bx-btn btn btn-outline-secondary">
              <i class="fa fa-search fa-1x"></i>
            </button>
            <input type="search" class="wd-search-bx-field form-control" placeholder="Search Tuiter">
          </div>
        </div>
      <div class="wd-search-setting col-2 align-self-center">
        <i class="fa fa-cog fa-lg float-left"></i>
      </div>
      </div>
      <ul class="nav mb-2 nav-tabs">
        <!-- tabs -->
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">For You</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
        </li>
      </ul>
      <!-- image with overlaid text -->
      <div class="position-relative mb-2">
        <img class="wd-posts-img-big img-fluid" src="images/spaceX_starship.jpg">
        <div class="wd-posts-img-text position-absolute bottom-0 left-0 p-2 text-black">
          SpaceX's Starship
        </div>
      </div>
      ${PostSummaryList()}
    `);
}

export default ExploreComponent;