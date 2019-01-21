import React, { Component } from 'react';
import axios from 'axios'
import Slide from '../Slide/slide';
import Arrow from '../Arrow/arrow';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [],
      currentImage: 0
    };
  }

  componentDidMount() {
    this._getSlides()
  }


  render () {
    return (
      <div className="carousel">
          {      console.log(this.state.currentImage)
          }
        {
          this.state.slides && this.state.slides.map((image, i) => (
              (i >= this.state.currentImage) && (i < this.state.currentImage + 5) && <Slide key={i} image={image}/>
          ))
        }
        <Arrow direction="left" onSlideAction={ () => this._slideAction(-1) } />
        <Arrow direction="right" onSlideAction={ () => this._slideAction(1) } />
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

  _slideAction (newSlide) {
      const last = this.state.slides.length - 1;
      const { currentImage } = this.state;
      const reset = currentImage + 4 === last || currentImage + newSlide <= 0;
      const index =  reset ? 0 : currentImage + newSlide;

      this.setState({currentImage: index})
  }
}