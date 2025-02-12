import { useState } from "react";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";

export default function Permission() {
	const [comp, setComp] = useState([
		{ title: "User", all: false },
		{ title: "User Admin", all: false },
		{ title: "Permission", all: false },
		{ title: "Approval KYC Verification", all: false },
		{ title: "Approval KYC Video", all: false },
		{ title: "Package Purchase", all: false },
		{ title: "Package Purchase History", all: false },
		{ title: "Payment Approval", all: false },
		{ title: "Promotion Banner", all: false },
		{ title: "Our Support Contact", all: false },
		{ title: "Shareable Content", all: false },
		{ title: "Point Summary", all: false },
		{ tilte: "Company Owner Report", all: false },
		{ title: "Setting", all: false },
	]);
	const handleCheckBox = (e) => {
		const indexArr = e.target.name;
		if( e.target.checked === true) {
			setComp([...comp, (comp[indexArr].all = true)]);
		} else {
			setComp([...comp, (comp[indexArr].all = false)]);
		}
	};
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
							Permission Management
						</div>
						<select
							className="form-select form-select-sm w-25"
							aria-label="Default select example"
						>
							<option selected disabled className="fs-14">
								-- Choose --
							</option>
							<option value="1">Admin</option>
							<option value="2">Super Admin</option>
							<option value="3">Owner</option>
						</select>
						<div className="font-roboto fw-700 mt-5 p-2" style={{ fontSize: 22 }}>
							User Management
						</div>
						<div className="card p-4">
							<table className="table table-borderless font-inter fs-16">
								<thead>
									<tr className="border-bottom">
										<th scope="col">Features</th>
										<th scope="col text-center" style={{ width: "15%" }}>
											<p className="text-center m-0">All</p>
										</th>
										<th scope="col text-center" style={{ width: "15%" }}>
											<p className="text-center m-0">Create</p>
										</th>
										<th scope="col text-center" style={{ width: "15%" }}>
											<p className="text-center m-0">Edit</p>
										</th>
										<th scope="col text-center" style={{ width: "15%" }}>
											<p className="text-center m-0">Delete</p>
										</th>
										<th scope="col text-center" style={{ width: "15%" }}>
											<p className="text-center m-0">View</p>
										</th>
									</tr>
								</thead>
								<hr className="mt-1" />
								<tbody>
									{comp.map((e, i) => {
										return (
											<tr>
												<td>{e.title}</td>
												<td>
													<div className="d-flex justify-content-center">
														<input
															class="form-check-input mt-0"
															type="checkbox"
															value=""
															name={i}
															onChange={handleCheckBox}
														/>
													</div>
												</td>
												{comp[i].all  ? (
													<>
														<td>
															<div className="d-flex justify-content-center">
																<input
																	class="form-check-input mt-0"
																	type="checkbox"
																	value=""
																	checked
																/>
															</div>
														</td>
														<td>
															<div className="d-flex justify-content-center">
																<input
																	class="form-check-input mt-0"
																	type="checkbox"
																	value=""
																	checked
																/>
															</div>
														</td>
														<td>
															<div className="d-flex justify-content-center">
																<input
																	class="form-check-input mt-0"
																	type="checkbox"
																	value=""
																	checked
																/>
															</div>
														</td>
														<td>
															<div className="d-flex justify-content-center">
																<input
																	class="form-check-input mt-0"
																	type="checkbox"
																	value=""
																	checked
																/>
															</div>
														</td>
													</>
												) : (
													<>
												<td>
													<div className="d-flex justify-content-center">
														<input
															class="form-check-input mt-0"
															type="checkbox"
															value=""
														/>
													</div>
												</td>
												<td>
													<div className="d-flex justify-content-center">
														<input
															class="form-check-input mt-0"
															type="checkbox"
															value=""
														/>
													</div>
												</td>
												<td>
													<div className="d-flex justify-content-center">
														<input
															class="form-check-input mt-0"
															type="checkbox"
															value=""
														/>
													</div>
												</td>
												<td>
													<div className="d-flex justify-content-center">
														<input
															class="form-check-input mt-0"
															type="checkbox"
															value=""
														/>
													</div>
												</td>
												</>
												)}
											</tr>
										);
									})}
								</tbody>
							</table>
							<div className="d-flex justify-content-end mt-4">
								<div className="btn btn-primary px-4">Submit</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
