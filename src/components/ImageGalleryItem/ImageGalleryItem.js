// import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = (
  { webformatURL, tags, largeImageURL, onClickItem },
  index,
) => {
  <li id={index} className="ImageGalleryItem">
    <img
      // item={item}
      // onClick={this.onClickItem}
      src={webformatURL}
      // largeImageURL={largeImageURL}
      alt={tags}
      className="ImageGalleryItem-image"
      onClick={onClickItem}
    />
  </li>;
};

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string,
//   tags: PropTypes.string,
//   onClickItem: PropTypes.func,
// };

export default ImageGalleryItem;
