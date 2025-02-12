import { FilterCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";

export default function PointSummary() {
	const navigate = useNavigate();
	const looping = [
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
		"1",
	];
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
							Point Summary
						</div>
						<div className="row mt-4">
							<div className="col-4">
								<div className="card p-4">
									<p className="font-inter fw-600 fs-16 ">Total User Point</p>
									<p className="font-inter fw-600" style={{ fontSize: 22 }}>
										Rp2,159,500
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
									<p className="font-inter fw-600 fs-16 ">Total PT Point</p>
									<p className="font-inter fw-600" style={{ fontSize: 22 }}>
										Rp2,159,500
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
						</div>
						<form className="d-flex mt-4" style={{ width: "30%" }} role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-primary d-flex me-2" type="submit">
								<FilterCircle className="m-1 me-2" />
								Filter
							</button>
							<button className="btn btn-success w-100" type="submit">
								<p className="m-0 fs-14">Export Excel</p>
							</button>
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
						<div className="card p-4">
							<table className="table table-borderless bg-white rounded mt-3 fs-14 text-center">
								<thead>
									<tr className="border-bottom">
										<th scope="col">Date</th>
										<th scope="col">Name</th>
										<th scope="col">Product</th>
										<th scope="col">Transaction ID</th>
										<th scope="col">Qty</th>
										<th scope="col">Point</th>
										<th scope="col">From</th>
									</tr>
								</thead>
								<tbody>
									{looping.map((e) => {
										return (
											<tr>
												<td>03 Auguts 2022 </td>
												<td>maria lusiana</td>
												<td>Activaion Key</td>
												<td>TT20222064238</td>
												<td>2</td>
												<td className="text-success">3000</td>
												<td>Admin 000</td>
										
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
