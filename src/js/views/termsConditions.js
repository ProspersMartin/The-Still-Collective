import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/index.scss";

export class Terms extends React.Component {
	render() {
		return (
			<div className="container bg-transparent">
				<Context.Consumer>
					{({ store }) => {
						return store.termsNConditions.map((item, index) => {
							return (
								<div key={index} className="m-auto">
									<h3>{item.header}</h3>
									<p>{item.tcSectionBody}</p>
								</div>
							);
						});
					}}
				</Context.Consumer>
			</div>
		);
	}
}
