export default function ModalDelete() {
	return (
		<>
			
				<div
					class="modal fade"
					id="staticModalDelete"
					data-bs-backdrop="static"
					data-bs-keyboard="false"
					tabindex="-1"
					aria-labelledby="staticModalDeleteLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered font-inter">
						<div class="modal-content">
							<div class="modal-header bg-danger">
								<h1
									class="modal-title fs-5 text-white fw-bold"
									id="staticModalDeleteLabel"
								>
									Delete
								</h1>
								<div
									className="text-white fw-bold me-1 border rounded px-2"
									type="button"
									data-bs-dismiss="modal"
									aria-label="Close"
								>
									X
								</div>
							</div>
							<div class="modal-body fs-16">
								Are you sure want to delete? This action is PERMANENT and cannot be
								undone.
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn border rounded"
									data-bs-dismiss="modal"
								>
									No
								</button>
								<button type="button" class="btn btn-danger text-white fw-bold">
									Yes
								</button>
							</div>
						</div>
					</div>
				</div>
			
		</>
	);
}
