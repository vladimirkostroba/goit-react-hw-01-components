import React from 'react';
import PropTypes from 'prop-types';

import defaultIMG from './defaultIMG.png';


function Profile ({name,tag,avatar,location,stats}){
    return(
        <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="user avatar"
      class="avatar"
    />
    <p class="name">{name}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
    )

}

Profile.defaultProps = {
    avatar: defaultIMG
    
}

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.number,

};


export default Profile