import { FilterCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import KYCVerificationModal from "../components/KYCVerification/VerificationModal";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";


export default function KYCVerification() {
	const navigate = useNavigate();
	const looping = ["1", "1"];
	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-2 pe-0 border-end">
						<Sidebar />
					</div>
					<div className="col p-4" style={{ backgroundColor: "#EDEDED" }}>
						<div className="font-roboto fw-700 p-2" style={{ fontSize: 22 }}>
							KYC Verification
						</div>
						<form className="d-flex mt-3" style={{ width: "30%" }} role="search">
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
						<div className="d-flex align-items-center mt-3">
							<div className="font-inter fw-400 fs-16">Show</div>
							<input
								type="number"
								className="mx-3 form-control"
								style={{ width: "7%" }}
							/>
							<div className="font-inter fw-400 fs-16">entries</div>
						</div>
						<table className="table table-borderless bg-white rounded mt-3 fs-14">
							<thead>
								<tr className="border-bottom">
									<th scope="col">No</th>
									<th scope="col">Name</th>
									<th scope="col">Username</th>
									<th scope="col">Email</th>
									<th scope="col">Phone</th>
									<th scope="col">Status</th>
									<th scope="col">Register Date</th>
									<th scope="col">Action</th>
								</tr>
							</thead>
							<div className="hr mt-3"></div>
							<tbody>
								{looping.map((e, i) => {
									return (
										<tr>
											<td>{i + 1}</td>
											<td
												className="pointer"
												data-bs-toggle="modal" data-bs-target="#KYCVerificationModal"
											>
												Thya Septia
											</td>
											<td>Vince1603</td>
											<td>xxx@gmail.com</td>
											<td>081234567890</td>
											<td className="text-warning">Waiting Approval</td>
											<td>10-09-1990</td>
											<td>
												<div
													className="btn btn-sm btn-outline-primary"
													data-bs-toggle="modal" data-bs-target="#KYCVerificationModal"
												>
													<p className="p-0 m-0 fs-12"> Detail</p>
												</div>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
						<div className="d-flex justify-content-between mt-4">
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
			<KYCVerificationModal/>
		</>
	);
}
