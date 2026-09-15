import img_ktp from "../../assets/img/ktp.svg";
import img_people from "../../assets/img/people-1.svg";
import VerificationApproveModal from "./VerificationApprove";
import VerificationRejectModal from "./VerificationReject";

export default function KYCVerificationModal({ item, onApprove, onReject }) {
	return (
		<>
			<div
				className="modal modal-xl fade"
				id="KYCVerificationModal"
				tabIndex="-1"
				aria-labelledby="KYCVerificationModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<div className="row">
								<div className="col">
									<div
										className="font-roboto fw-700 mx-3 border-bottom"
										style={{ fontSize: 20 }}
									>
										KYC Verification - Detail
									</div>
								</div>
								<div className="col">
									<div
										className="font-roboto fw-700 mx-3 border-bottom"
										style={{ fontSize: 20 }}
									>
										Personal Data
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col p-3">
									<div className="row">
										<div className="col d-flex">
											<img src={img_ktp} alt="" className="img-fluid" />
										</div>
										<div className="col d-flex">
											<img src={img_people} alt="" className="img-fluid" />
										</div>
									</div>
									<div className="row mt-3 font-inter fw-bold">
										<div className="col text-center">ID Card</div>
										<div className="col text-center">Photo</div>
									</div>
								</div>
								<div className="col p-3">
									<div className="row mt-3">
										<div className="col-4 font-inter fw-400 fs-16">
											<p>
												Fullname <span className="text-danger">*</span>
											</p>
											<p>
												Birtday Location{" "}
												<span className="text-danger">*</span>
											</p>
											<p>
												Gender <span className="text-danger">*</span>
											</p>
											<p>
												Country<span className="text-danger">*</span>
											</p>
											<p>
												Job <span className="text-danger">*</span>
											</p>
											<p>
												Address <span className="text-danger">*</span>
											</p>
											<p>
												Province <span className="text-danger">*</span>
											</p>
											<p>
												City <span className="text-danger">*</span>
											</p>
											<p>
												Postal Code <span className="text-danger">*</span>
											</p>
										</div>
										<div className="col  font-inter fw-400 fs-16">
											<p>{item?.name || "-"}</p>
											<p>{item?.city || "-"}</p>
											<p>{item?.gender || "-"}</p>
											<p>{item?.country || "-"}</p>
											<p>{item?.job || "-"}</p>
											<p>{item?.address || "-"}</p>
											<p>{item?.province || "-"}</p>
											<p>{item?.city || "-"}</p>
											<p>{item?.postalCode || "-"}</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div
										className="font-roboto fw-700 mx-3 border-bottom"
										style={{ fontSize: 20 }}
									>
										Emergency Contant
									</div>
									<div className="row ms-3 mt-3">
										<div className="col-4 font-inter fw-400 fs-16">
											<p>
												Name <span className="text-danger">*</span>
											</p>
											<p>
												Relation <span className="text-danger">*</span>
											</p>
											<p>
												Phone Number <span className="text-danger">*</span>
											</p>
										</div>
										<div className="col  font-inter fw-400 fs-16">
											<p>{item?.emergencyContact || "-"}</p>
											<p>{item?.emergencyRelation || "-"}</p>
											<p>{item?.phone || "-"}</p>
										</div>
									</div>
								</div>
								<div className="col"></div>
							</div>
						</div>
						<div className="d-flex justify-content-end mx-5 mb-4">
							<button
								type="button"
								className="btn btn-primary me-3 px-4"
								data-bs-toggle="modal"
								data-bs-target="#VerificationApprove"
							>
								Approve
							</button>
							<button
								type="button"
								className="btn btn-danger px-4"
								data-bs-toggle="modal"
								data-bs-target="#VerificationReject"
							>
								Reject
							</button>
						</div>
					</div>
				</div>
			</div>
			<VerificationApproveModal onConfirm={onApprove} />
			<VerificationRejectModal onConfirm={onReject} />
		</>
	);
}
