import styles from './styles.module.css';

import imageNews from '../../assets/images/News.jpg';

interface Props {
  image: string;
}

const Image = ({ image }: Props) => {
  return (
    <div className={styles.wrapper}>
      {image && (
        <img
          src={image !== 'None' ? image : imageNews}
          alt='news'
          className={styles.image}
        />
      )}
    </div>
  );
};

export default Image;
