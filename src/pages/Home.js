import React from 'react';
import Sidebar from '~src/components/Sidebar';
import Footer from '~src/components/Footer';
import TemplatesContainer from '~src/components/TemplatesContainer';

const Home = () => (
  <React.Fragment>
    <Sidebar />
    <TemplatesContainer />
    <Footer />
  </React.Fragment>
);

export default Home;
