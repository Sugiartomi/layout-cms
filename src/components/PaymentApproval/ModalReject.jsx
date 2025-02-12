export default function PaymentRejectModal() {
	return (
		<>
			<div
				class="modal fade"
				id="PaymentReject"
				tabindex="-1"
				aria-labelledby="PaymentRejectLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header bg-danger">
							<h1
								class="modal-title fs-5 text-white font-inter fw-bold"
								id="PaymentRejectLabel"
							>
								Approved
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body font-inter">
							<p>Are you sure want to Reject ?</p>
							<textarea class="form-control" aria-label="With textarea"></textarea>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn border" data-bs-dismiss="modal">
								No
							</button>
							<button type="button" class="btn btn-danger">
								Yes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
