export default function BannerDeleteModal({ onConfirm }) {
	return (
		<>
			<div
				className="modal fade"
				id="BannerDeleteModal"
				tabIndex="-1"
				aria-labelledby="BannerDeleteModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header bg-danger">
							<h1
								className="modal-title fs-5 text-white font-inter fw-bold"
								id="BannerDeleteModalLabel"
							>
								Delete
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body font-inter">
							<p>Are you sure want to delete ?</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn border" data-bs-dismiss="modal">
								No
							</button>
							<button
								type="button"
								className="btn btn-danger"
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
