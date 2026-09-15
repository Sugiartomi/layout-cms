import img_browser from "../../assets/img/browser-safari.png";
import PaymentApproveModal from "./ModalApprove";
import PaymentRejectModal from "./ModalReject";

export default function ModalPaymentApproval({
	payment,
	purchase,
	onApprove,
	onReject,
}) {
	const amount = payment?.amount || 0;
	const qty = purchase?.qty || 1;
	const unit = qty > 0 ? Math.round(amount / qty) : amount;
	const ppn = Math.round(amount * 0.11);
	const uniqueCode = purchase?.uniqueCode ?? 0;
	const grand = amount + ppn + uniqueCode;

	return (
		<>
			<div
				class="modal fade"
				id="ModalPaymentApproval"
				tabindex="-1"
				aria-labelledby="ModalPaymentApprovalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-body">
							<div
								className="font-roboto fw-700 text-center"
								style={{ fontSize: 20 }}
							>
								Payment Approval - Detail
							</div>
							<hr />
							<div className="row p-3 font-inter fs-14">
								<div className="col-4">
									<p>Transaction ID</p>
									<p>Name</p>
									<p>Item</p>
									<p>Price</p>
									<p>Qty</p>
									<p>Stock</p>
									<p>Total Price</p>
									<p>PPN 11%</p>
									<p>Unique Code</p>
									<p>Grand Total</p>
									<p>Date Upload</p>
									<p>Receipt *</p>
								</div>
								<div className="col fw-600">
									<p>: {payment?.invoice || "-"}</p>
									<p>: {payment?.name || "-"}</p>
									<p>: {payment?.type || "-"}</p>
									<p>: {Number(unit || 0).toLocaleString("en-US")}</p>
									<p>: {qty}</p>
									<p>: -</p>
									<p>: Rp{Number(amount || 0).toLocaleString("en-US")}</p>
									<p>: Rp{Number(ppn || 0).toLocaleString("en-US")}</p>
									<p>: Rp{Number(uniqueCode || 0).toLocaleString("en-US")}</p>
									<p>: Rp{Number(grand || 0).toLocaleString("en-US")}</p>
									<p>: {payment?.date || "-"}</p>
									{purchase?.proof ? (
										<img
											src={purchase.proof}
											alt=""
											className="img-fluid"
										/>
									) : (
										<img src={img_browser} alt="" className="img-fluid" />
									)}
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								back
							</button>
							<button
								type="button"
								class="btn btn-primary"
								data-bs-dismiss="modal"
								data-bs-toggle="modal"
								data-bs-target="#PaymentApprove"
							>
								Approve
							</button>
							<button
								type="button"
								class="btn btn-danger"
								data-bs-toggle="modal"
								data-bs-target="#PaymentReject"
							>
								Reject
							</button>
						</div>
					</div>
				</div>
			</div>
			<PaymentApproveModal onConfirm={onApprove} />
			<PaymentRejectModal onConfirm={onReject} />
		</>
	);
}
