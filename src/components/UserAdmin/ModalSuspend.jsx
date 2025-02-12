export default function ModalSuspend() {
	return (
		<>
			<div
				class="modal fade"
				id="staticModalSuspend"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabindex="-1"
				aria-labelledby="staticModalSuspendLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered font-inter">
					<div class="modal-content">
						<div class="modal-header bg-warning">
							<h1
								class="modal-title fs-5 text-white fw-bold"
								id="staticModalSuspendLabel"
							>
								Suspend
							</h1>
							<div className="text-white fw-bold me-1 border rounded px-2" type="button" data-bs-dismiss="modal" aria-label="Close">
								X
							</div>
						</div>
						<div class="modal-body fs-16">Are you sure want to suspend?</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn border rounded"
								data-bs-dismiss="modal"
							>
								No
							</button>
							<button type="button" class="btn btn-warning text-white fw-bold">
								Yes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
