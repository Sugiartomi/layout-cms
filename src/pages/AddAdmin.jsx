import { useNavigate } from "react-router-dom";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";

export default function AddAdmin() {
    const navigate = useNavigate()
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
							User Admin - Add
						</div>
						<div className="card w-50 p-4">
							<form action="">
								<div className="row">
									<div className="col-5">
										<p className="font-inter fs-16 fw-400">
											Fullname <span className="text-danger">*</span>
										</p>
									</div>
									<div className="col">
										<input
											type="text"
											className="form-control form-control-sm"
											style={{ backgroundColor: "#EBECF0" }}
										/>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-5">
										<p className="font-inter fs-16 fw-400">
											Username <span className="text-danger">*</span>
										</p>
									</div>
									<div className="col">
										<input
											type="text"
											className="form-control form-control-sm"
											style={{ backgroundColor: "#EBECF0" }}
										/>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-5">
										<p className="font-inter fs-16 fw-400">
											Email <span className="text-danger">*</span>
										</p>
									</div>
									<div className="col">
										<input
											type="text"
											className="form-control form-control-sm"
											style={{ backgroundColor: "#EBECF0" }}
										/>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-5">
										<p className="font-inter fs-16 fw-400">
											Phone <span className="text-danger">*</span>
										</p>
									</div>
									<div className="col">
										<input
											type="text"
											className="form-control form-control-sm"
											style={{ backgroundColor: "#EBECF0" }}
										/>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-5">
										<p className="font-inter fs-16 fw-400">
											Role <span className="text-danger">*</span>
										</p>
									</div>
									<div className="col">
										<select
											className="form-select form-select-sm"
											aria-label="Default select example"
											style={{ backgroundColor: "#EBECF0" }}
										>
											<option selected disabled className="fs-14">
												-- Choose --
											</option>
											<option value="1">Admin</option>
											<option value="2">Super Admin</option>
											<option value="3">Owner</option>
										</select>
									</div>
								</div>
								<div className="d-flex justify-content-end mt-4">
									<button className="btn btn-outline-secondary" onClick={() => navigate("/user-admin")}>Kembali</button>
									<button type="submit" className="btn btn-primary ms-3">
										submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
