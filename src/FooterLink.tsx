/* eslint-disable no-undef */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  footerLink: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #d5e0e8',
    paddingBottom: '10px',
    textDecoration: 'none',
    color: '#84919c',
    fontSize: '1em',
    fontWeight: 600,
    '&:hover': {
      cursor: 'pointer',
      color: '#005c9c',
    },
  },
}));

const getFooter = async (setter: Dispatch<SetStateAction<string>>) => {
  try {
    const resp = await fetch(
      `${process.env.REACT_APP_FOOTER_ENDPOINT}`,
      // {
      //   method: 'GET',
      //   mode: 'cors',
      //   credentials: 'include',
      // },
    );
    const respData: string = await resp.json();
    setter(respData);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return '';
  }
};

const Footer: React.FC = () => {
  const classes = useStyles();
  const [footerText, setFooterText] = useState<string>(
    'Explore the latest strategic trends, research and analysis',
  );

  useEffect(() => {
    getFooter(setFooterText);
  }, []);

  return (
    <a
      className={classes.footerLink}
      href={
        'https://intelligence.weforum.org/topics/a1Gb0000000LHOUEA4?tab=publications'
      }
    >
      <span>{footerText}</span>
      <ArrowRightAlt />
    </a>
  );
};

export default Footer;
