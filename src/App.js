import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header'
import MainBody from './Components/MainBody'
import Footer from './Components/Footer'


class App extends React.Component {
  render() {
    return (
      <div class="container-fuild">

        <Header />

        <MainBody />
        <Footer />
      </div>
    )
  }
}

export default App;
