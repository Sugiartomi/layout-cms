import { Clipboard } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Layout from "../Reusble/Layout";
import useLocalData from "../../hooks/useLocalData";

function formatRp(n) {
	return `Rp${Number(n || 0).toLocaleString("en-US")}`;
}

export default function PurchaseReportCrystal() {
	const navigate = useNavigate();
	const [purchases] = useLocalData("purchases", []);
	const latest =
		purchases.find(
			(p) =>
				p.type === "Crystal" && String(p.status || "").toLowerCase() === "pending"
		) || purchases.find((p) => p.type === "Crystal");

	const subtotal = latest?.amount || 750000;
	const ppn = Math.round(subtotal * 0.11);
	const uniqueCode = latest?.uniqueCode ?? 673;
	const total = subtotal + ppn + uniqueCode;
	const invoice = latest?.invoice || "DT20230215400";
	const totalStr = formatRp(total);
	const uniquePart = String(uniqueCode);

	return (
		<>
			<Layout>
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
								<p>: {invoice}</p>
								<p>: {formatRp(subtotal)}</p>
								<p>: {formatRp(ppn)}</p>
								<p>: {formatRp(uniqueCode)}</p>
								<p>: {totalStr}</p>
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
							{totalStr.replace(uniquePart, "")}
							<span className="text-danger">{uniquePart}</span>
							<span>
								<Clipboard className="ms-3 fs-18" style={{ marginTop: -5 }} />
							</span>
						</div>
						<p className="font-inter fs-16 mt-4 w-50">
							Silahkan upload bukti pembayaran Anda lewat menu Package Purchase
							History atau dengan menekan tombol berikut :
						</p>
						<div
							className="btn btn-primary mb-5"
							onClick={() => navigate("/purchase-history")}
						>
							<p className="p-0 m-0 font-inter fs-16">
								Ke halaman Package Purchase History
							</p>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
