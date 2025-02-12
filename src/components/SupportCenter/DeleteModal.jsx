export default function SupportCenterDeleteModal() {
	return (
		<>
			<div
				class="modal fade"
				id="SupportCenterDeleteModal"
				tabindex="-1"
				aria-labelledby="SupportCenterDeleteModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header bg-danger">
							<h1
								class="modal-title fs-5 text-white font-inter fw-bold"
								id="SupportCenterDeleteModalLabel"
							>
								Delete
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body font-inter">
							<p>Are you sure want to delete ?</p>
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
