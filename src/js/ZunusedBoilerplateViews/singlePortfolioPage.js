// import React from "react";
// import "../../styles/index.scss";
// import { Context } from "../store/appContext";
// import PropTypes from "prop-types";

// export class SinglePortfolioPage extends React.Component {
// 	render() {
// 		return (
// 			<Context.Consumer>
// 				{({ store, actions }) => {
// 					console.log(this);
// 					const serviceId = this.props.match.params.theindex;
// 					let service = store.serviceCatalog.find(s => s.id == serviceId);
// 					if (typeof service == "undefined") return "service not found";
// 					return (
// 						<div className="container">
// 							<div className="row">
// 								<div className="col-md-6 m-auto">
// 									<h1>{service.service_name}</h1>
// 								</div>
// 							</div>
// 							<div className="row">
// 								{/* <h1>{service.service_name}</h1> */}

// 								<div className="col-md-6 m-auto">{service.description}</div>
// 							</div>
// 							<div className="row">
// 								<div className="col-md-6 m-auto">
// 									<span>${service.price} </span>
// 									<button
// 										type="button"
// 										className="btn btn-info"
// 										onClick={() => {
// 											const serviceInfo = {
// 												name: service.service_name,
// 												id: service.id,
// 												price: service.price
// 											};
// 											actions.addToShoppingBag(serviceInfo);
// 										}}>
// 										Add to Cart
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					);
// 				}}
// 			</Context.Consumer>
// 		);
// 	}
// }
// SinglePortfolioPage.propTypes = {
// 	match: PropTypes.object
// };
