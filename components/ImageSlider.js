import { Component } from "react";
import { SliderBox } from "react-native-image-slider-box";

export default class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
    };
  }

  render() {
    return (
      <SliderBox
        autoplay
        circleLoop
        ImageComponentStyle={{ borderRadius: 15, width: "97%", marginTop: 5 }}
        dotColor="#E42C6A"
        inactiveDotColor="#FCD02C"
        images={this.state.images}
      />
    );
  }
}
