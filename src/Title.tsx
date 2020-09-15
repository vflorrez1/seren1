import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    borderBottom: '1px solid #d5e0e8',
    padding: '10px 0px',
    fontSize: '2em',
    fontWeight: 300,
  },
}));

const Index: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.title}>Explore Content</div>;
};

export default Index;
