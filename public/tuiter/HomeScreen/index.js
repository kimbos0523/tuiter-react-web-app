/* eslint-env jquery */

import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList";

function homeComponent() {
    // $(".nav-left-item").click(function(event) {
    //     console.log(this);
    //     NavigationSidebar($(".nav-left a", this).attr('id'));
    // });
    $('#wd-explore').append(
        `<div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
              <!-- Naviagtion Sidebar -->             
              ${NavigationSidebar('home')}
            </div>
            <div class="col-10 col-lg-7 col-xl-6">
              <!-- PostList -->
              <div class="row mt-2">
                ${PostList()}
              </div>
            </div>
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
              <!-- WhoToFollowList -->
              <div class="row">
                ${PostSummaryList()}
              </div>
            </div>
        </div>
    `);

}

$(homeComponent);