

const WhoToFollowListItem = (who) => {
    return(`
      <li class="list-group-item">
        <div class="row">
          <div class="col-2">
            <img class="wd-right-nav-img" src="../images/java.jpg"/>
          </div>
          <div class="col-7">
            <div class="wd-right-nav-item-title col-12">
              ${who.userName}
              <i class="fa fa-check-circle fa-1x"></i>
            </div>
            <div class="wd-right-nav-item-hash col-12">@${who.handle}</div>
          </div>
          <div class="col-3 align-self-center">
            <button type="button" class="wd-right-nav-button blue-btn btn btn-primary float-end">Follow</button>
          </div>
        </div>
      </li>
    `);
}

export default WhoToFollowListItem;