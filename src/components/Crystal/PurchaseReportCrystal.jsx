import { Clipboard } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../Reusble/Navbar";
import Sidebar from "../Reusble/Sidebar";

export default function PurchaseReportCrystal() {
	const navigate = useNavigate()
	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-2 pe-0 border-end">
						<Sidebar />
					</div>
					<div className="col p-4" style={{ backgroundColor: "#EDEDED" }}>
						<div className="card">
							<div
								className="font-roboto fw-700 mt-3 text-center"
								style={{ fontSize: 22 }}
							>
								Package Purchase - Crystal
							</div>
							<hr />
							<div className="px-5">
								<div className="row mt-2 font-inter fs-16">
									<div className="col-4">
										<p>Transaction ID</p>
										<p>Subtotal Pembelian</p>
										<p>PPN</p>
										<p>Kode Unik</p>
										<p>Total Harga Pembelian</p>
										<p>Silahkan lakukan transfer ke rekening berikut </p>
									</div>
									<div className="col fw-bold">
										<p>: DT20230215400</p>
										<p>: Rp750,000</p>
										<p>: Rp82,500</p>
										<p>: Rp673</p>
										<p>: Rp833,173</p>
										<p>: </p>
									</div>
								</div>
								<div className="font-roboto fw-700 my-3" style={{ fontSize: 20 }}>
									BCA 6044208878 PT SMT
									<span>
										<Clipboard className="ms-3 fs-18" style={{ marginTop: -8 }} />
									</span>
								</div>
								<p className="font-inter fs-16 mt-4">
									Pastikan Anda membayar sesuai harga total pembelian :
								</p>
								<div className="font-roboto fw-700 my-3" style={{ fontSize: 18 }}>
									Rp833,<span className="text-danger">173</span>
									<span>
										<Clipboard className="ms-3 fs-18" style={{ marginTop: -5 }} />
									</span>
								</div>
								<p className="font-inter fs-16 mt-4 w-50">
									Silahkan upload bukti pembayaran Anda lewat menu Package
									Purchase History atau dengan menekan tombol berikut :
								</p>
								<div className="btn btn-primary mb-5" onClick={() => navigate("/purchase-history")}>
									<p className="p-0 m-0 font-inter fs-16">
										Ke halaman Package Purchase History
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
