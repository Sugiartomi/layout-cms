import { FilterCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";
import ModalDelete from "../components/UserList/ModalDelete";
import ModalResend from "../components/UserList/ModalResend";
import ModalSuspend from "../components/UserList/ModalSuspend";

export default function UserList() {
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
						<div className="font-roboto fw-700 p-2" style={{ fontSize: 22 }}>
							User List
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
						<div className="p-4 bg-white mt-3 rounded">
							<table className="table table-borderless bg-white rounded fs-16 font-inter">
								<thead>
									<tr className="border-bottom">
										<th scope="col">Name</th>
										<th scope="col">Username</th>
										<th scope="col">Email</th>
										<th scope="col">Phone</th>
										<th scope="col">Status</th>
										<th scope="col">Register Date</th>
										<th scope="col">Reffered By</th>
										<th scope="col" className="text-center">Action</th>
									</tr>
								</thead>
								<tbody className="">
									{looping.map((e) => {
										return (
											<tr>
												<td
													className="pointer"
													onClick={() => navigate("/user-list/account")}
												>
													Thya Septia
												</td>
												<td>Vince1603</td>
												<td>xxx@gmail.com</td>
												<td>081234567890</td>
												<td className="text-success">Active</td>
												<td>10-09-1990</td>
												<td>April Test</td>
												<td className="d-flex justify-content-end">
													<div
														className="btn btn-sm btn-outline-primary"
														onClick={() =>
															navigate("/user-list/account")
														}
													>
														<p className="p-0 m-0 fs-12"> Detail</p>
													</div>
													<div
														className="btn btn-sm mx-2 btn-outline-danger"
														data-bs-toggle="modal"
														data-bs-target="#staticModalDelete"
													>
														<p className="p-0 m-0 fs-12"> Deleted</p>
													</div>
													<div
														className="btn btn-sm btn-outline-warning"
														data-bs-toggle="modal"
														data-bs-target="#staticModalSuspend"
													>
														<p className="p-0 m-0 fs-12"> Suspend</p>
													</div>
													<div
														className="btn btn-sm btn-outline-success ms-2"
														data-bs-toggle="modal"
														data-bs-target="#staticModalResend"
													>
														<p className="p-0 m-0 fs-12"> Resend</p>
													</div>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<ModalSuspend />
			<ModalDelete />
			<ModalResend />
		</>
	);
}
