import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<div className="m-auto">
			<div className="row my-1 foot">
				<div className="mr-3">
					<Link to="/Contact" className="footer-item">
						<div>
							<span id="contact_conFoot">Con</span>
							<span id="contact_TFoot">T</span>
							<span id="contact_actFoot">act</span>
						</div>
					</Link>
				</div>
				<div className="mr-3">
					<Link to="/terms" className="footer-item">
						<div>
							<span id="terms_TFoot">T</span>
							<span id="terms_ermsFoot">erms &amp; </span>
							<span id="conditions_condiFoot">Condi</span>
							<span id="conditions_TFoot">T</span>
							<span id="conditions_ionsFoot">ions</span>
						</div>
					</Link>
				</div>
				<div className="footer-item2 mr-1">A ©</div>
				<div className="footer-item3 mr-1">
					<span id="still_sFooter">s</span>
					<span id="still_TFooter">T</span>
					<span id="still_illFooter">ill</span>
				</div>
				<div className="footer-item2 mx-2">x</div>
				<div className="footer-item4 mr-3 ">The [A.M.P.D.] Life</div>
				<div className="footer-item2 ">2017-2019</div>
			</div>
		</div>
	);
};
