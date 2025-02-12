import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";
import img_star_ticket from "../assets/img/star-ticket.png";
import ActivationKeyBuyModal from "../components/ActivationKey/ModalBuyActivationKey";

export default function ActivationKey() {
	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-2 pe-0 border-end">
						<Sidebar />
					</div>
					<div className="col p-4" style={{ backgroundColor: "#EDEDED" }}>
						<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
							Package Purchase - Activation Key
						</div>
						<div className="row mt-5">
							<div className="col-5">
								<div className="card ps-4 gradient-silver-sky h-100">
									<div className="p-3">
										<div className="d-flex align-items-center">
											<img
												src={img_star_ticket}
												className="img-fluid me-4 h-75"
												alt=""
											/>
											<div>
												<div
													className="font-inter text-dark fw-400"
													style={{ fontSize: 24, fontWeight: 400 }}
												>
													Activation Key
												</div>
												<div className="font-inter text-dark fs-14 fw-600">
													Stock 992
												</div>
												<div className="font-inter text-dark fs-14 fw-400">
													(Exclude PPN)
												</div>
												<div className="font-inter text-dark my-2 fs-14 fw-400">
													Activation Key digunakan untuk mengaktifkan
													semua fasilitas pada aplikasi
												</div>
												<div className="font-inter text-dark fs-14 fw-400">
													1 ticket for package activation
												</div>
												<div className="font-roboto text-dark fw-48 fw-700">
													10.000 <span className="fs-16">IDR</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card h-100 d-flex justify-content-center">
									<div className="d-flex justify-content-center">
										<div className="d-flex">
											<div className="font-inter py-2 fs-16 fw-400">
												Quantity
											</div>
											<input
												type="number"
												className="form-control form-control-sm w-75 mx-3"
											/>
										</div>
										<div
											className="btn btn-success px-4"
											data-bs-toggle="modal"
											data-bs-target="#ActivationKeyBuyModal"
										>
											Buy
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ActivationKeyBuyModal />
		</>
	);
}
