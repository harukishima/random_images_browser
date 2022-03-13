import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const renderImages = (images: string[]) => {
  return images.map((url) => {
    return (
      <div key={url} style={{ display: 'flex', justifyContent: 'center' }}>
        <LazyLoadImage src={url} alt="loading..." height={850} effect="blur" />
      </div>
    );
  });
};

const PhotoAlbum = (props: { images: string[] }) => {
  const { images } = props;
  return <div>{renderImages(images)}</div>;
};

export default PhotoAlbum;
