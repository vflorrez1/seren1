/* eslint-disable no-undef */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    paddingTop: '10px',
    fontSize: '1.4em',
    fontWeight: 300,
  },
}));

const getHeader = async (setter: Dispatch<SetStateAction<string>>) => {
  try {
    const resp = await fetch(
      `${process.env.REACT_APP_HEADER_ENDPOINT}`,
      // {
      //   method: 'GET',
      //   mode: 'cors',
      //   credentials: 'include',
      // },
    );
    const respData: string = await resp.json();
    // eslint-disable-next-line no-console
    console.log(respData);
    setter(respData);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return '';
  }
};

const Header: React.FC = () => {
  const classes = useStyles();
  const [headerText, setHeaderText] = useState<string>(
    'Financial and Monetary Systems',
  );

  useEffect(() => {
    getHeader(setHeaderText);
  }, []);

  return <div className={classes.header}>{headerText}</div>;
};

export default Header;
