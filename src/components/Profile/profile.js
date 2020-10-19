import React from 'react';
import PropTypes from 'prop-types';

import defaultIMG from './defaultIMG.png';


function Profile ({name,tag,avatar,location,stats}){
    return(
        <div >
  <div >
    <img
      src={avatar}
      alt="user avatar"
      class="avatar"
    />
    <p class="name">{name}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul>
    <li>
      <span >Followers</span>
      <span >{stats.followers}</span>
    </li>
    <li>
      <span >Views</span>
      <span >{stats.views}</span>
    </li>
    <li>
      <span >Likes</span>
      <span >{stats.likes}</span>
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