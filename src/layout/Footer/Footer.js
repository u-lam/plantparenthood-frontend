import React from 'react';
import '../../index.css';
import Container from '@material-ui/core/Container';


function Footer() {

  return (
    <footer className='footer'>
        <Container maxWidth="sm">
          <h4>Plant Parenthood &copy; 2020</h4>
          <h5>Created by Uyen Lam</h5>
        </Container>
    </footer>
  );
};

export default Footer;