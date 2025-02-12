import AppPackageBuyModal from "../components/AppPackage/ModalBuyAppPackage";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";

export default function AppPackage() {
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
							Package Purchase - App Package
						</div>
						<div className="row mt-5">
							<div className="col-5">
								<div className="card ps-4 h-100 gradient-blue">
									<div className="p-3">
										<div
											className="font-inter text-white"
											style={{ fontSize: 20, fontWeight: 400 }}
										>
											App Package
										</div>
										<div className="font-roboto text-white fs-48 fw-700">
											50.000 <span className="fs-16">IDR</span>
										</div>
										<div
											className="font-inter text-white fs-14 fw-400"
											style={{ marginTop: -10 }}
										>
											(Exclude PPN)
										</div>
										<div className="font-inter text-white mt-3 fs-14 fw-400">
											1. Capacity = IDR 100.000 per clicks
										</div>
										<div className="font-inter text-white fs-14 fw-400">
											2. 6 Basic Pairs
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
										<div className="btn btn-success px-4"  data-bs-toggle="modal" data-bs-target="#AppPackageBuyModal">Buy</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            <AppPackageBuyModal/>
		</>
	);
}
