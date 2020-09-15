import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import ImageLink from './ImageLink';
import FooterLink from './FooterLink';
import Title from './Title';

const useStyles = makeStyles(() => ({
  root: {
    display: 'block',
    width: '100%',
    borderTop: '3px solid #141414',
  },
  title: {
    borderBottom: '1px solid #d5e0e8',
  },
}));

const Index: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title />
      <Header />
      <ImageLink />
      <FooterLink />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('the_root'));
