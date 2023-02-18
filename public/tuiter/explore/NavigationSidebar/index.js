const NavigationSidebar = () => {
    return(`
      <div class="list-group">
        <!-- Twitter Mark -->
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i>
        </a>
        <!-- Home -->
        <a href="../home.html" class="list-group-item">
          <div class="nav-left-item row">
            <div class="col-2"><i class="fa fa-home fa-1x align-middle"></i></div>
            <span class="d-none d-xl-inline col-10">Home</span>
          </div>
        </a>
        <!-- Explore -->
        <a href="../explore/index.html" class="list-group-item active">
          <div class="nav-left-item row">
            <div class="col-2"><i class="fas fa-hashtag fa-1x align-middle"></i></div>
            <span class="d-none d-xl-inline col-10">Explore</span>
          </div>
        </a>
        <!-- Notification -->
        <a href="../notification.html" class="list-group-item">
          <div class="nav-left-item row">
            <div class="col-2"><i class="far fa-bell fa-1x align-middle"></i></div>
            <span class="d-none d-xl-inline col-10">Notification</span>
          </div>
        </a>
        <!-- Messages -->
        <a href="../messages.html" class="list-group-item">
          <div class="nav-left-item row">
            <div class="col-2"><i class="fa fa-envelope fa-1x align-middle"></i></div>
            <span class="d-none d-xl-inline col-10">Messages</span>
          </div>
        </a>
        <!-- Bookmarks -->
        <a href="../bookmarks/index.html" class="list-group-item">
          <div class="nav-left-item row">
            <div class="col-2"><i class="fa fa-bookmark fa-1x align-middle"></i></div>
            <span class="d-none d-xl-inline col-10">Bookmarks</span>
          </div>
        </a>
        <!-- Lists -->
        <a href="../lists.html" class="list-group-item">
          <div class="nav-left-item row">
            <div class="col-2"><i class="fa fa-list fa-1x align-middle"></i></div>
            <span class="d-none d-xl-inline col-10">Lists</span>
          </div>
        </a>
        <!-- Profile -->
        <a href="../profile.html" class="list-group-item">
          <div class="nav-left-item row">
            <div class="col-2"><i class="fa fa-user fa-1x align-middle"></i></div>
            <span class="d-none d-xl-inline col-10">Profile</span>
          </div>
        </a>
        <!-- More -->
        <a href="../more.html" class="list-group-item">
          <div class="nav-left-item row">
            <div class="col-2"><i class="fa fa-circle fa-1x align-middle"></i></div>
            <span class="d-none d-xl-inline col-10">More</span>
          </div>
        </a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
          Tweet
        </a>
      </div>
    `);
}
export default NavigationSidebar;
