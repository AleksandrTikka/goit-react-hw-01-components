import PropTypes from 'prop-types';
export default function User (props) {
    ({username,
    tag,
    location,
    avatar,
    stats}) = props
  return (
    <div class="profile">
      <div class="description">
        <img
          src={avatar}
          alt={username}
          class="avatar"
        />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
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
  );
};

User.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }),
};