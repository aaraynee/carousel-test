import React, { Component } from 'react';
import axios from 'axios'
import Slide from '../Slide/slide';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: []
    };

  }

  componentDidMount() {
    this._getSlides()
  }


  render () {
    return (
      <div className="carousel">
        {
          this.state.slides.length && this.state.slides.map((image, i) => (
            <Slide key={i} image={image}/>
          ))
        }
      </div>
    );
  }

  async _getSlides () {
    let images = await axios.get('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo')
      .then((response) => {
        if (response.data && response.data.hits.length) return response.data.hits
      })

    this.setState({slides: images})
  }
}