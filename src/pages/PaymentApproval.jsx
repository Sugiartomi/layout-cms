import { useState } from "react";
import { FilterCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import ModalPaymentApproval from "../components/PaymentApproval/ModalApproval";
import PaymentReportModal from "../components/PaymentApproval/ModalReport";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";

export default function PaymentApproval() {
	const navigate = useNavigate();
	const [status, setStatus] = useState("waiting");
	const loop = ["", "", ""];
	function thisFileUpload() {
		document.getElementById("fileUploadPH").click();
	}
	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-2 pe-0 border-end">
						<Sidebar />
					</div>
					<div className="col p-4" style={{ backgroundColor: "#EDEDED" }}>
						<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
							Payment Approval
						</div>
						<div className="row mt-4">
							<div className="col-4">
								<div className="card p-4">
									<p className="font-inter fw-600 fs-16 ">
										Total App Package Stock
									</p>
									<p className="font-inter fw-600" style={{ fontSize: 22 }}>
										17
									</p>
									<div
										class="progress"
										role="progressbar"
										aria-valuenow="25"
										aria-valuemin="0"
										aria-valuemax="100"
										style={{ height: 10 }}
									>
										<div
											class="progress-bar bg-warning"
											style={{ width: "50%" }}
										></div>
									</div>
									<div className="d-flex justify-content-between mt-3">
										<p className="font-inter fw-400 fs-16 ">Average</p>
										<p className="font-inter fw-400 fs-16 text-warning">+67</p>
									</div>
								</div>
							</div>
							<div className="col-4">
								<div className="card p-4">
									<p className="font-inter fw-600 fs-16 ">Total Crystal Stock</p>
									<p className="font-inter fw-600" style={{ fontSize: 22 }}>
										96
									</p>
									<div
										class="progress"
										role="progressbar"
										aria-valuenow="25"
										aria-valuemin="0"
										aria-valuemax="100"
										style={{ height: 10 }}
									>
										<div
											class="progress-bar bg-primary"
											style={{ width: "50%" }}
										></div>
									</div>
									<div className="d-flex justify-content-between mt-3">
										<p className="font-inter fw-400 fs-16 ">Average</p>
										<p className="font-inter fw-400 fs-16 text-primary">+67</p>
									</div>
								</div>
							</div>
							<div className="col-4">
								<div className="card p-4">
									<p className="font-inter fw-600 fs-16 ">
										Total Activation Key Stock
									</p>
									<p className="font-inter fw-600" style={{ fontSize: 22 }}>
										10
									</p>
									<div
										class="progress"
										role="progressbar"
										aria-valuenow="25"
										aria-valuemin="0"
										aria-valuemax="100"
										style={{ height: 10 }}
									>
										<div
											class="progress-bar bg-success"
											style={{ width: "50%" }}
										></div>
									</div>
									<div className="d-flex justify-content-between mt-3">
										<p className="font-inter fw-400 fs-16 ">Average</p>
										<p className="font-inter fw-400 fs-16 text-success">+67</p>
									</div>
								</div>
							</div>
						</div>
						<form className="d-flex mt-5" style={{ width: "30%" }} role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<li className="nav-item dropdown list-unstyled pointer">
								<button
									className="btn btn-primary d-flex"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<FilterCircle className="m-1 me-2" />
									Filter
								</button>
								<div
									className="dropdown-menu p-3 font-inter list-unstyled"
									style={{ width: "30vw" }}
								>
									<ul className="row">
										<div className="col-3">
											<p>Date</p>
											<p>Status</p>
											<p>Item</p>
										</div>
										<div className="col">
											<input type="date" className="form-control" />
											<select
												class="form-select"
												aria-label="Default select example"
											>
												<option selected>Open this select menu</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</select>
											<select
												class="form-select"
												aria-label="Default select example"
											>
												<option selected>Open this select menu</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</select>
										</div>
									</ul>
									<div className="d-flex justify-content-end">

									<div className="btn btn-primary">submit</div>
									</div>
								</div>
							</li>
						</form>
						<div className="d-flex align-items-center mt-3">
							<div className="font-inter fw-400 fs-16">Show</div>
							<input
								type="number"
								className="mx-3 form-control"
								style={{ width: "7%" }}
							/>
							<div className="font-inter fw-400 fs-16">entries</div>
						</div>
						<div className="card p-4 mt-4">
							<table className="table table-borderless font-inter fs-16">
								<thead>
									<tr className="border-bottom">
										<th scope="col ">
											<p className=" m-0">Transaction ID</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Name</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Items</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Total Price</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Date Upload</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Status</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Action</p>
										</th>
									</tr>
								</thead>
								<hr className="mt-1" />
								<tbody>
									{loop.map((e) => {
										return (
											<tr>
												<td>QT20220712267</td>
												<td>Maria</td>
												<td>App package</td>
												<td>444,347</td>
												<td>12-07-2022 17:14:17</td>
												{status == "waiting" ? (
													<>
														<td>
															<div className="bg-warning rounded px-2 py-1 fs-12 text-center">
																waiting approval
															</div>
														</td>
														<td>
															<div
																className="btn btn-sm btn-primary"
																data-bs-toggle="modal"
																data-bs-target="#ModalPaymentApproval"
															>
																<p className="m-0 fs-12">
																	Proccess
																</p>
															</div>
														</td>
													</>
												) : (
													<>
														<td>
															<div className="bg-success text-white rounded px-2 py-1 fs-12 text-center">
																approved
															</div>
														</td>
														<td>
															<div
																className="btn btn-sm btn-primary"
																data-bs-toggle="modal"
																data-bs-target="#PaymentReportModal"
															>
																<p className="m-0 fs-12">view</p>
															</div>
															<div className="btn btn-sm btn-secondary ms-2">
																<p className="m-0 fs-12">
																	download invoice
																</p>
															</div>
														</td>
													</>
												)}
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
						<div className="d-flex justify-content-between mt-5">
							<div className="font-inter fw-400 fs-12">
								Showing 1 to 1 of 1 entries
							</div>
							<nav aria-label="...">
								<ul class="pagination pagination-sm">
									<li class="page-item disabled">
										<span class="page-link">Previous</span>
									</li>
									<li class="page-item active">
										<a class="page-link" href="#">
											1
										</a>
									</li>
									<li class="page-item" aria-current="page">
										<span class="page-link">2</span>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">
											3
										</a>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">
											Next
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<ModalPaymentApproval setStatus={setStatus} />
			<PaymentReportModal />
		</>
	);
}
