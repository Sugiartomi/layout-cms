export default function VerificationApproveModal({ onConfirm }) {
	return (
		<>
			<div
				className="modal fade"
				id="VerificationApprove"
				tabIndex="-1"
				aria-labelledby="VerificationApproveLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header bg-primary">
							<h1
								className="modal-title fs-5 text-white font-inter fw-bold"
								id="VerificationApproveLabel"
							>
								Approved
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body font-inter">Are you sure want to aprrove ?</div>
						<div className="modal-footer">
							<button type="button" className="btn border" data-bs-dismiss="modal">
								No
							</button>
							<button
								type="button"
								className="btn btn-primary"
								data-bs-dismiss="modal"
								onClick={onConfirm}
							>
								Yes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
