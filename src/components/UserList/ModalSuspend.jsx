export default function ModalSuspend({ onConfirm, name }) {
	return (
		<div
			className="modal fade"
			id="staticModalSuspend"
			data-bs-backdrop="static"
			data-bs-keyboard="false"
			tabIndex="-1"
			aria-labelledby="staticModalSuspendLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered font-inter">
				<div className="modal-content">
					<div className="modal-header bg-warning">
						<h1
							className="modal-title fs-5 text-white fw-bold"
							id="staticModalSuspendLabel"
						>
							Suspend
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
					<div className="modal-body fs-16">
						Are you sure want to suspend{name ? ` ${name}` : ""}?
					</div>
					<div className="modal-footer">
						<button type="button" className="btn border rounded" data-bs-dismiss="modal">
							No
						</button>
						<button
							type="button"
							className="btn btn-warning text-white fw-bold"
							data-bs-dismiss="modal"
							onClick={onConfirm}
						>
							Yes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
