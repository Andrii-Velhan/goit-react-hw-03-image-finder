import PropTypes from 'prop-types';

function ImageGalleryItem({ item }) {
  return item.hits.map(
    ({ id, webformatURL, largeImageURL, tags, onClickItem }) => (
      <li id={webformatURL} className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={onClickItem}
        />
      </li>
    ),
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  onClickItem: PropTypes.func,
};

export default ImageGalleryItem;
