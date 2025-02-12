import { useNavigate } from "react-router-dom";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";

export default function UserAdminDetail() {
	const navigate = useNavigate();
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
							User Detail
						</div>
						<div className="card p-4 mt-4">
							<div className="row mt-3">
								<div className="col-2 font-inter fw-400 fs-16">
									<p>
										Nama <span className="text-danger">*</span>
									</p>
									<p>
										Username <span className="text-danger">*</span>
									</p>
									<p>
										Email <span className="text-danger">*</span>
									</p>
									<p>
										Phone <span className="text-danger">*</span>
									</p>
									<p>
										Status <span className="text-danger">*</span>
									</p>
								</div>
								<div className="col  font-inter fw-400 fs-16">
									<p className="text-secondary">Jhon Andri</p>
									<p className="text-secondary">andriygy</p>
									<p className="text-secondary">testadmin1@gmail.com</p>
									<p className="text-secondary">081234567890</p>
									<p className="text-success">Active</p>
								</div>
							</div>
							<div className="d-flex mt-4">
								<div className="btn btn-primary px-4">
									<p
										className="p-0 m-0 font-inter fs-18"
										onClick={() => navigate("/user-admin")}
									>
										Kembali
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
