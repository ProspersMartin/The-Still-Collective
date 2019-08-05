// import React from "react";
// import "../../styles/index.scss";
// import Carousel from "react-bootstrap/Carousel";
// import { Context } from "../store/appContext";

// class MarketingCarousel extends React.Component {
// 	constructor(props, context) {
// 		super(props, context);

// 		this.handleSelect = this.handleSelect.bind(this);

// 		this.state = {
// 			index: 0,
// 			direction: null
// 		};
// 	}

// 	handleSelect(selectedIndex, e) {
// 		this.setState({
// 			index: selectedIndex,
// 			direction: e.direction
// 		});
// 	}

// 	render() {
// 		const { index, direction } = this.state;

// 		return (
// 			<Context.Consumer>
// 				{({ store }) => {
// 					return (
// 						<Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect}>
// 							{/* This is the content for the first slide of the first Carousel called "Strategy". 
// 							The content is comprised of the tem (for image), and a caption (for the blurb of info)*/}
// 							<Carousel.Item>
// 								<img
// 									className="d-block w-100"
// 									src={store.strategyCarouselContent[0].image}
// 									alt="First slide"
// 								/>
// 								<Carousel.Caption>
// 									<h1>{store.strategyCarouselContent[0].title}</h1>
// 									<h3>{store.strategyCarouselContent[0].header}</h3>
// 									<p>{store.strategyCarouselContent[0].info}</p>
// 								</Carousel.Caption>
// 							</Carousel.Item>

// 							{/* This is the content for the second slide of the second Carousel. */}
// 							<Carousel.Item>
// 								<img
// 									className="d-block w-100"
// 									src={store.strategyCarouselContent[1].image}
// 									alt="Second slide"
// 								/>
// 								<Carousel.Caption>
// 									<h1>{store.strategyCarouselContent[1].title}</h1>
// 									<h3>{store.strategyCarouselContent[1].header}</h3>
// 									<p>{store.strategyCarouselContent[1].info}</p>
// 								</Carousel.Caption>
// 							</Carousel.Item>

// 							{/* This is the content for the third slide of the second Carousel. */}
// 							<Carousel.Item>
// 								<img
// 									className="d-block w-100"
// 									src={store.strategyCarouselContent[2].image}
// 									alt="Third slide"
// 								/>
// 								<Carousel.Caption>
// 									<h1>{store.strategyCarouselContent[2].title}</h1>
// 									<h3>{store.strategyCarouselContent[2].header}</h3>
// 									<p>{store.strategyCarouselContent[2].info}</p>
// 								</Carousel.Caption>
// 							</Carousel.Item>
// 						</Carousel>
// 					);
// 				}}
// 			</Context.Consumer>
// 		);
// 	}
// }

// // render(<ControlledCarousel />);
// export default MarketingCarousel;
