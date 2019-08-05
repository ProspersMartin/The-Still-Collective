import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export class DashboardHome extends React.Component {
	render() {
		return (
			<div>
				<div className="container mb-3">
					<div className="row">
						<div className="col">
							<h1 className="text-center">sTill Dashboard</h1>
						</div>
					</div>
				</div>
				<div className="container mb-3">
					<div className="row">
						<div className="col">
							<h1 className="text-center">Orders | Last 30 Days</h1>
						</div>
					</div>
					<div className="row">
						<table className="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Order</th>
									<th scope="col">Status</th>
									<th scope="col">Client Manager</th>
									<th scope="col">View Details</th>
								</tr>
							</thead>
							<tbody>
								<tr className="dbHover">
									<th scope="row">1</th>
									<td>002352</td>
									<td>Pending</td>
									<td>Tiarra</td>
									<td>
										<button type="button" className="btn btn-primary">
											View
										</button>
									</td>
								</tr>
								<tr className="dbHover">
									<th scope="row">2</th>
									<td>002361</td>
									<td>Complete</td>
									<td>Joao</td>
									<td>
										<button type="button" className="btn btn-primary">
											View
										</button>
									</td>
								</tr>
								<tr className="dbHover">
									<th scope="row">3</th>
									<td>002363</td>
									<td>Complete</td>
									<td>Martin</td>
									<td>
										<button type="button" className="btn btn-primary">
											View
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="container mb-3">
					<div className="row">
						<div className="col">
							<h1 className="text-center">Orders | Last 60 Days</h1>
						</div>
					</div>
					<div className="row">
						<table className="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Order</th>
									<th scope="col">Status</th>
									<th scope="col">Client Manager</th>
									<th scope="col">View Details</th>
								</tr>
							</thead>
							<tbody>
								<tr className="dbHover">
									<th scope="row">1</th>
									<td>002352</td>
									<td>Pending</td>
									<td>Tiarra</td>
									<td>
										<button type="button" className="btn btn-primary">
											View
										</button>
									</td>
								</tr>
								<tr className="dbHover">
									<th scope="row">2</th>
									<td>002361</td>
									<td>Complete</td>
									<td>Joao</td>
									<td>
										<button type="button" className="btn btn-primary">
											View
										</button>
									</td>
								</tr>
								<tr className="dbHover">
									<th scope="row">3</th>
									<td>002363</td>
									<td>Complete</td>
									<td>Martin</td>
									<td>
										<button type="button" className="btn btn-primary">
											View
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="container mb-3">
					<div className="row">
						<div className="col">
							<h1 className="text-center">Orders | Last 90 Days</h1>
						</div>
					</div>
					<div className="row">
						<table className="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Order</th>
									<th scope="col">Status</th>
									<th scope="col">Client Manager</th>
									<th scope="col">View Details</th>
								</tr>
							</thead>
							<tbody>
								<tr className="dbHover">
									<th scope="row">1</th>
									<td>002352</td>
									<td>Pending</td>
									<td>Tiarra</td>
									<td>
										<button type="button" className="btn btn-primary">
											View
										</button>
									</td>
								</tr>
								<tr className="dbHover">
									<th scope="row">2</th>
									<td>002361</td>
									<td>Complete</td>
									<td>Joao</td>
									<td>
										<button type="button" className="btn btn-primary">
											View
										</button>
									</td>
								</tr>
								<tr className="dbHover">
									<th scope="row">3</th>
									<td>002363</td>
									<td>Complete</td>
									<td>Martin</td>
									<td>
										<button type="button" className="btn btn-primary">
											View
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
