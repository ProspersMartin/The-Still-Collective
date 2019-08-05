// import React from "react";
// import "../../styles/index.scss";
// import { Context } from "../store/appContext";
// import PropTypes from "prop-types";

// export class SingleService extends React.Component {
// 	render() {
// 		return (
// 			<Context.Consumer>
// 				{({ store, action }) => {
// 					let index = this.props.match.params.theindex;
// 					console.log(index);
// 					return (
// 						<div className="container">
// 							<div className="row">
// 								<div className="col-md-6 m-auto">
// 									<h1>{store.strategyCardContent[index].title}</h1>
// 								</div>
// 							</div>

// 							<div className="row">
// 								<div className="col-md-6 m-auto">
// 									<button type="button" className="btn btn-info">
// 										{store.strategyCardContent[index].header}
// 									</button>
// 									{store.strategyCardContent[index].info}
// 								</div>
// 							</div>
// 						</div>
// 					);
// 				}}
// 			</Context.Consumer>
// 		);
// 	}
// }
// SingleService.propTypes = {
// 	match: PropTypes.object
// };
