import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";
import img_crystal from "../assets/img/crystal.png";
import CrystalBuyModal from "../components/Crystal/ModalBuyCrystal";

export default function Crystal() {
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
							Package Purchase - Crystal
						</div>
						<div className="row mt-5">
							<div className="col-5">
								<div className="card ps-4 gradient-grey h-100">
									<div className="p-3">
										<div className="d-flex align-items-center">
											<img
												src={img_crystal}
												className="img-fluid me-4 h-75"
												alt=""
											/>
											<div>
												<div
													className="font-inter text-dark"
													style={{ fontSize: 32, fontWeight: 400 }}
												>
													Crystal
												</div>
												<div className="font-inter text-dark my-2 fs-14 fw-400">
													1 Crystal hanya dapat dipakai satu kali, untuk
													mengurangi waktu cooldown 60 detik. (minimal
													pembelian 20 Crystal)
												</div>
												<div className="font-roboto text-dark fs-48 fw-700">
													500 <span className="fs-16">IDR</span>
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
											data-bs-target="#CrystalBuyModal"
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
			<CrystalBuyModal />
		</>
	);
}
