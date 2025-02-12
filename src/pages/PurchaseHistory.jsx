import { FilterCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";

export default function PurchaseHistory() {
	const navigate = useNavigate();
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
							Package Purchase History
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
							<button className="btn btn-primary d-flex" type="submit">
								<FilterCircle className="m-1 me-2" />
								Filter
							</button>
						</form>
						<div className="card p-4 mt-4">
							<table className="table table-borderless font-inter fs-16">
								<thead>
									<tr className="border-bottom">
										<th scope="col">Date</th>
										<th scope="col ">
											<p className=" m-0">Transaction ID</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Product</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Qty</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Price</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Qty</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Unique Code</p>
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
												<td>12 July 2022</td>
												<td>QT20220712267</td>
												<td>App package</td>
												<td>100</td>
												<td>15,000,000</td>
												<td>1,650,000</td>
												<td>516</td>
												<td>
													<div className="bg-danger text-white rounded text-center py-1 fs-12">
														pending
													</div>
												</td>
												<td>
													{/* <div className="btn btn-sm btn-primary"> */}
													<input
														type="file"
														id="fileUploadPH"
														style={{ display: "none" }}
													/>
													<button
														className="btn btn-sm btn-primary"
														onClick={() => thisFileUpload()}
													>
														<p className="m-0 fs-12">Upload</p>
													</button>
													{/* </div> */}
												</td>
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
		</>
	);
}
