import img_ktp from "../../assets/img/ktp.svg";
import img_people from "../../assets/img/people-1.svg";
import VideoApproveModal from "./VideoApprove";
import VideoRejectModal from "./VideoReject";
export default function KYCVideoModal() {
	return (
		<>
			<div
				className="modal modal-xl fade"
				id="KYCVideoModal"
				tabindex="-1"
				aria-labelledby="KYCVideoModalLabel"
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
										KYC Video - Detail
									</div>
									<div className="row mt-3 ms-3">
										<div className="col-4 font-inter fw-400 fs-16">
											<p>
												Name <span className="text-danger">*</span>
											</p>
											<p>
												Email <span className="text-danger">*</span>
											</p>
											<p>
												Username<span className="text-danger">*</span>
											</p>
											<p>
												Phone <span className="text-danger">*</span>
											</p>
											<p>
												Video <span className="text-danger">*</span>
											</p>
										</div>
										<div className="col  font-inter fw-400 fs-16">
											<p>Thya Septiani</p>
											<p>thya@gmail.com</p>
											<p>test123</p>
											<p>081234567890</p>
											<p>video.3gp</p>
										</div>
									</div>
								</div>
								<div className="col">
									<object
										className="mt-4"
										width="100%"
										height="100%"
										type="application/x-shockwave-flash"
										data="http://www.youtube.com/v/ZuNNhOEzJGA&hl=fr&fs=1&rel=0&color1=0x006699&color2=0x54abd6&border=1"
									>
										<param
											name="movie"
											value="http://www.youtube.com/v/ZuNNhOEzJGA&hl=fr&fs=1&rel=0&color1=0x006699&color2=0x54abd6&border=1"
										/>
										<p>Interview of Philippe Le Hégaret about Video codec</p>
									</object>
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-end mx-5 mb-4 mt-5">
							<button
								type="button"
								className="btn btn-primary me-3 px-4"
								data-bs-toggle="modal"
								data-bs-target="#VideoApprove"
							>
								Approve
							</button>
							<button
								type="button"
								className="btn btn-danger px-4"
								data-bs-toggle="modal"
								data-bs-target="#VideoReject"
							>
								Reject
							</button>
						</div>
					</div>
				</div>
			</div>
			<VideoApproveModal />
			<VideoRejectModal />
		</>
	);
}
