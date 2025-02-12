import { useNavigate } from "react-router-dom";

export default function CrystalBuyModal() {
	const navigate = useNavigate();
	return (
		<>
			<div
				class="modal fade"
				id="CrystalBuyModal"
				tabindex="-1"
				aria-labelledby="CrystalBuyModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered font-inter">
					<div class="modal-content">
						<div class="modal-header" style={{ backgroundColor: "#2752E7" }}>
							<h1
								class="modal-title fs-5 text-white fw-bold"
								id="staticModalResendLabel"
							>
								Confirmation
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
						<div class="modal-body fs-16">Are you sure want to buy Crystal ?</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn border rounded"
								data-bs-dismiss="modal"
							>
								No
							</button>
							<button
								type="button"
								class="btn text-white fw-bold"
								style={{ backgroundColor: "#2752E7" }}
								data-bs-dismiss="modal"
								onClick={() => navigate("/crystal/report")}
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
