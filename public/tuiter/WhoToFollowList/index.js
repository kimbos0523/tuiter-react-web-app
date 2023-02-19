import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return(`
      <ul class="list-group">
        <li class="list-group-item" href="/">
          <h3 class="wd-whotofollow">Who to follow</h3>
        </li>
        ${
            who.map(p => {
                return(WhoToFollowListItem(p));
            }).join('')
        }        
      </ul>
    `);
}
export default WhoToFollowList;
