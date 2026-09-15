export default function ModalDelete({ onConfirm, name }) {
	return (
		<div
			className="modal fade"
			id="staticModalDelete"
			data-bs-backdrop="static"
			data-bs-keyboard="false"
			tabIndex="-1"
			aria-labelledby="staticModalDeleteLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered font-inter">
				<div className="modal-content">
					<div className="modal-header bg-danger">
						<h1 className="modal-title fs-5 text-white fw-bold" id="staticModalDeleteLabel">
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
					<div className="modal-body fs-16">
						Are you sure want to delete{name ? ` ${name}` : ""}? This action is
						PERMANENT and cannot be undone.
					</div>
					<div className="modal-footer">
						<button type="button" className="btn border rounded" data-bs-dismiss="modal">
							No
						</button>
						<button
							type="button"
							className="btn btn-danger text-white fw-bold"
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
