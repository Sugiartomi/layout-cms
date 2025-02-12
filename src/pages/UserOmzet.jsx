import { FilterCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";

export default function UserOmzet() {
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
							User Omzet Report
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
										<th scope="col">Name</th>
										<th scope="col ">
											<p className=" m-0 text-center">Total Point</p>
										</th>
										<th scope="col ">
											<p className=" m-0 text-center">BV Direct</p>
										</th>
										<th scope="col ">
											<p className=" m-0 text-center">BV Network</p>
										</th>
										<th scope="col text-end">
											<p className=" m-0 text-end">BV Peringkat</p>
										</th>										
									</tr>
								</thead>
								<hr className="mt-1" />
								<tbody>
									{loop.map((e) => {
										return (
											<tr>
												<td>Maria Lusiana</td>
												<td className="text-center ">91.450</td>
												<td className="text-center ">600.000</td>
												<td className="text-center ">600.000</td>
												<td className="text-end">600.000</td>												
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
