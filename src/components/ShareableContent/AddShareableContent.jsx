import { InfoCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../Reusble/Navbar";
import Sidebar from "../Reusble/Sidebar";

export default function AddShareableContent() {
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
						<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
							Shareable Content - Add
						</div>
						<div className="row mt-3">
							<div className="col-7">
								<div className="card p-4 font-inter">
									<div className="d-flex justify-content-between">
										<p>
											Images <span className="text-danger">*</span>
										</p>
										<input type="file" className="form-control w-75" />
									</div>
							
									<div className="d-flex mt-3">
										<p className="me-5">
											Show <span className="text-danger">*</span>
										</p>
										<div className="form-check form-switch ms-5">
											<input
												class="form-check-input  border border-secondary border-2"
												type="checkbox"
												role="switch"
												id="flexSwitchCheckChecked"
											/>
										</div>
										<p className="ms-3 text-danger fs-12 mt-1">
										Actuating this options will hide other files 
										</p>
									</div>
									<div className="d-flex justify-content-end mt-5">
										<div
											className="btn btn-secondary px-3"
											onClick={() => navigate("/promotion-banner")}
										>
											Back
										</div>
										<div className="btn btn-primary px-3 ms-2">Submit</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
