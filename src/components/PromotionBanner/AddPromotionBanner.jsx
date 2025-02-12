import { InfoCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../Reusble/Navbar";
import Sidebar from "../Reusble/Sidebar";

export default function AddPromotionBanner() {
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
						<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
							Promotion Banner -Add
						</div>
						<div className="row mt-3">
							<div className="col">
								<div className="card p-4 font-inter">
									<div className="d-flex justify-content-between">
										<p>
											Images <span className="text-danger">*</span>
										</p>
										<input type="file" className="form-control w-75" />
									</div>
									<div className="d-flex justify-content-between mt-3">
										<p>
											Type <span className="text-danger">*</span>
										</p>
										<select
											class="form-select w-75"
											aria-label="Default select example"
										>
											<option selected>Open this select menu</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
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
									</div>
                                    <div className="d-flex justify-content-end mt-5">
								<div className="btn btn-secondary px-3" onClick={() => navigate("/promotion-banner")}>Back</div>
								<div className="btn btn-primary px-3 ms-2">Submit</div>
							</div>
								</div>
							</div>
							<div className="col-5">
								<div
									className="card p-3 border-0 text-primary"
									style={{ backgroundColor: "#DEEBFF" }}
								>
									<div className="row">
										<div className="col-2 text-center">
											<InfoCircleFill
												className="text-center"
												style={{ fontSize: 22 }}
											/>
										</div>
										<div className="col">
											<div className="font-inter fw-600 text-dark">Info</div>
											<ul className="font-inter fw-400 fs-14">
												<li>
													<a>Only jpg, jpeg and png images are acceted</a>
												</li>
												<li>
													<a>Maximum file size 5 Mb</a>
												</li>
												<li>
													<a>Suggested image centre image - 1000x600</a>
												</li>
												<li>
													<a>Carousel - 400x200</a>
												</li>
											</ul>
										</div>
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
