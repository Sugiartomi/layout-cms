import { FilterCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";

export default function CompanyOmzet() {
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
							Company Omzet Report
						</div>
						<div className="row mt-4">
							<div className="col-4">
								<div className="card p-4 h-100">
									<p className="font-inter fw-600 fs-16 ">Package Omzet</p>
									<p className="font-inter fw-600" style={{ fontSize: 22 }}>
										Rp. 28.254.318
									</p>
								</div>
							</div>
							<div className="col-4">
								<div className="card p-4 h-100">
									<p className="font-inter fw-600 fs-16 ">Ticket Omzet</p>
									<p className="font-inter fw-600" style={{ fontSize: 22 }}>
										Rp. 461.780
									</p>
								</div>
							</div>
							<div className="col-4">
								<div className="card p-4 h-100">
									<p className="font-inter fw-600 fs-16 ">Crystal Omzet</p>
									<p className="font-inter fw-600" style={{ fontSize: 22 }}>
										Rp. 6.440.765
									</p>
								</div>
							</div>
						</div>
						<form className="d-flex mt-5" style={{ width: "50%" }} role="search">
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
							<button className="btn btn-success fs-14 ms-2" type="submit">
								<p className="mb-0 fs-14" style={{ width: 80 }}>
									Export Excel
								</p>
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
						<div className="card p-4 mt-4">
							<table className="table table-borderless font-inter fs-16">
								<thead>
									<tr className="border-bottom">
										<th scope="col">Date</th>
										<th scope="col">Name</th>
										<th scope="col ">
											<p className=" m-0">Product</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Transaction ID</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Price</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Qty</p>
										</th>
										<th scope="col ">
											<p className=" m-0">PPN</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Unique Code</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Total Price</p>
										</th>
										<th scope="col ">
											<p className=" m-0">Status</p>
										</th>
										
									</tr>
								</thead>
								<hr className="mt-1" />
								<tbody>
									{loop.map((e) => {
										return (
											<tr>
												<td>12 July 2022</td>
												<td>Maria Lusiana</td>
												<td>Crystal</td>
												<td>QT20220712267</td>
												<td>10.000</td>
												<td>1</td>
												<td>0</td>
												<td>433</td>
												<td>10.433</td>
												
												<td>
													<div className="bg-danger text-white rounded text-center py-1 fs-12">
														pending
													</div>
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
