import img_browser from "../../assets/img/browser-safari.png"
import PaymentApproveModal from "./ModalApprove";
import PaymentRejectModal from "./ModalReject";
export default function ModalPaymentApproval({setStatus}) {
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
									<p>: QT20220712326</p>
									<p>: Maria</p>
									<p>: App Package</p>
									<p>: 200.000</p>
									<p>: 2</p>
									<p>: 5</p>
									<p>: Rp400.000</p>
									<p>: Rp44,000</p>
									<p>: Rp374</p>
									<p>: Rp444,374</p>
									<p>: 12-07-2022 17:14:17</p>
                                    <img src={img_browser} alt="" className="img-fluid" />
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
								back
							</button>
							<button type="button" class="btn btn-primary" data-bs-dismiss="modal"  data-bs-toggle="modal" data-bs-target="#PaymentApprove">
								Approve
							</button>
							<button type="button" class="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#PaymentReject ">
								Reject
							</button>
						</div>
					</div>
				</div>
			</div>
            <PaymentApproveModal setStatus={setStatus}/>
            <PaymentRejectModal/>
		</>
	);
}
