import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
    margin: '10px 0px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const ImageLink: React.FC = () => {
  const classes = useStyles();

  return (
    <a
      href={
        'https://intelligence.weforum.org/topics/a1Gb0000000LHOUEA4?tab=publications'
      }
    >
      <img
        onClick={() => null}
        className={classes.img}
        src={
          'https://assets.weforum.org/topic/transformation_map_image/responsive_medium_kSAv4-JRsZFgQTylLjadZR9D-Zag1ieUZA2IiQwd_zQ.png'
        }
        alt={'Serendipity Map'}
      />
    </a>
  );
};

export default ImageLink;
