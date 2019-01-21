import React, { Component } from 'react';
import axios from 'axios'
import Slide from '../Slide/slide';
import Arrow from '../Arrow/arrow';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [],
      currentImage: 2
    };
  }

  componentDidMount() {
    this._getSlides()
  }


  render () {
    return (
      <div>
        <div className="carousel uk-visible@s">
            {
                this.state.slides && this.state.slides.map((image, i) => (
                    (i <= this.state.currentImage + 2) && (i >= this.state.currentImage - 2) && <Slide key={i} image={image}/>
                ))
            }
            { this.state.currentImage > 2 && <Arrow direction="left" onSlideAction={ () => this._slideAction(-1) } /> }
            { this.state.currentImage < (this.state.slides.length - 1) - 2 && <Arrow direction="right" onSlideAction={ () => this._slideAction(1) } /> }
        </div>
        <div className="carousel uk-hidden@s">
            {
                this.state.slides && this.state.slides.map((image, i) => (
                    (i == this.state.currentImage - 2) && <Slide key={i} image={image}/>
                ))
            }
            { this.state.currentImage - 2 > 0 && <Arrow direction="left" onSlideAction={ () => this._slideAction(-1) } /> }
            { this.state.currentImage - 2 < (this.state.slides.length - 1) && <Arrow direction="right" onSlideAction={ () => this._slideAction(1) } /> }
        </div>
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
      const reset = null //currentImage + 4 === last || currentImage + newSlide <= 0;
      const index =  reset ? 0 : currentImage + newSlide;

      this.setState({currentImage: index})
  }
}