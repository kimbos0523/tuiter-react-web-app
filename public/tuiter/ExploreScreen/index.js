/* eslint-env jquery */

import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(
        `<div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
              <!-- Naviagtion Sidebar -->
              ${NavigationSidebar('explore')}
            </div>
            <div class="col-10 col-lg-7 col-xl-6">
              <!-- Explore Component -->
              ${ExploreComponent()}
            </div>
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
              <!-- WhoToFollowList -->
              ${WhoToFollowList()}
            </div>
          </div>
    `);
}

$(exploreComponent);