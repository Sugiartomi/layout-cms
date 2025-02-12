export default function PaymentApproveModal({setStatus}) {
	return (
		<>
			<div
				class="modal fade"
				id="PaymentApprove"
				tabindex="-1"
				aria-labelledby="PaymentApproveLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header bg-primary">
							<h1 class="modal-title fs-5 text-white font-inter fw-bold" id="PaymentApproveLabel">
								Approved
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body font-inter">Are you sure want to aprrove ?</div>
						<div class="modal-footer">
							<button type="button" class="btn border" data-bs-dismiss="modal">
								No
							</button>
							<button type="button" class="btn btn-primary"  data-bs-dismiss="modal" onClick={() => setStatus("approved")}>
								Yes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
