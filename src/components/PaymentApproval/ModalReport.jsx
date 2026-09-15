export default function PaymentReportModal({ payment, purchase }) {
	const amount = payment?.amount || 0;
	const qty = purchase?.qty || 1;
	const ppn = Math.round(amount * 0.11);
	const uniqueCode = purchase?.uniqueCode ?? 0;
	const total = amount + ppn + uniqueCode;

	return (
		<>
			<div
				class="modal modal-lg fade"
				id="PaymentReportModal"
				tabindex="-1"
				aria-labelledby="PaymentReportModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-body">
							<div
								className="font-roboto fw-700 text-center"
								style={{ fontSize: 20 }}
							>
								View Invoice
							</div>
							<hr />
							<div className="container font-roboto">
								<div className="d-flex justify-content-between mx-3">
									<div className=" fw-700 text-primary" style={{ fontSize: 20 }}>
										ARBITGO
									</div>
									<div className="btn btn-secondary">Download</div>
								</div>

								<div
									className="18 fw-400 text-center mt-4"
									style={{ fontSize: 20 }}
								>
									Tanda Terima Pembayaran {payment?.type || "Package"} Anda
								</div>
								<p className="text-center mt-3 mb-1">{payment?.date || "-"}</p>
								<p className="text-center">
									Transaction ID :{" "}
									<span className="fw-bold">
										{payment?.invoice || "-"}
									</span>
								</p>
								<div className="row border border-2 border-dark mx-2">
									<div className="col">
										<p className="mt-3">
											{qty} x {payment?.type || "Item"}
										</p>
										<p className="mt-3">PPN 11%</p>
										<p className="mt-3">Unique Code</p>
									</div>
									<div className="col text-end">
										<p className="mt-3">
											Rp. {Number(amount || 0).toLocaleString("en-US")}
										</p>
										<p className="mt-3">
											Rp. {Number(ppn || 0).toLocaleString("en-US")}
										</p>
										<p className="mt-3">
											Rp. {Number(uniqueCode || 0).toLocaleString("en-US")}
										</p>
									</div>
								</div>
								<div className="row border border-2 border-top-0 border-dark mx-2">
									<div className="col">
										<p className="mt-3">Total</p>
									</div>
									<div className="col text-end">
										<p className="mt-3">
											Rp. {Number(total || 0).toLocaleString("en-US")}
										</p>
									</div>
								</div>
								<p className="text-primary mt-3 ms-2 fs-16">
									*pembayarn ini sudah termasuk PPN
								</p>
								<p className=" mt-3 ms-2 fs-18 mb-1">
									Metode Pembayaran :
									<span className="fw-bold">
										Transfer via Bank BCA 1234567890 PT TDI
									</span>
								</p>
								<p className="  ms-2 fs-18">
									Nama Pengguna :{" "}
									<span className="fw-bold">{payment?.name || "-"}</span>
								</p>
								<p className=" mt-5 ms-2 fs-18 text-center">
									Silahkan hubungi kamu untuk informasi lebih lanjut melalui
								</p>
								<p className=" mt-1 ms-2 fs-18 text-center pointer">
									<span className="text-primary">Helpdesk Email</span>
								</p>
							</div>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button type="button" class="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
