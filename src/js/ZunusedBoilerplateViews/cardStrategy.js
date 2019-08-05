// import React from "react";
// import "../../styles/index.scss";
// import { Context } from "../store/appContext";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { SingleService } from "../views/singleService";

// export class CardStrategy extends React.Component {
// 	render() {
// 		return (
// 			<Context.Consumer>
// 				{({ store, action }) => {
// 					return store.strategyCardContent.map((item, index) => {
// 						return (
// 							<div className="card text-white" key={{ index }}>
// 								<img
// 									className="card-img-top"
// 									src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"
// 									alt="Card image cap"
// 								/>
// 								<div className="card-img-overlay">
// 									<div className="dark-transparent">
// 										<h5 className="card-title">{item.title}</h5>
// 										<p className="card-text">{item.info}</p>
// 									</div>
// 								</div>
// 							</div>
// 						);
// 					});
// 				}}
// 			</Context.Consumer>
// 		);
// 	}
// }
// SingleService.propTypes = {
// 	match: PropTypes.object
// };
