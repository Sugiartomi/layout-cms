import img_lock from "../assets/img/lock.svg";
import img_people from "../assets/img/people-dashboard.svg";
import img_share from "../assets/img/share.svg";
import img_chart from "../assets/img/chart.svg";
import Layout from "../components/Reusble/Layout";
import AreaChart from "../components/Dashboard/AreaChart";
import { forwardRef, useMemo, useState } from "react";
import PieChart from "../components/Dashboard/PieChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useLocalData from "../hooks/useLocalData";

export default function Dashboard() {
	const [chart, setChart] = useState("assets");
	const [transactions, setTransactions] = useLocalData("transactions", []);
	const [kycVerifications] = useLocalData("kycVerifications", []);
	const [kycVideos] = useLocalData("kycVideos", []);
	const [packages] = useLocalData("packages", {});
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [escrow, setEscrow] = useState("");
	const [status, setStatus] = useState("");
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);
	const pageSize = 5;

	const stats = useMemo(() => {
		const pendingKyc =
			kycVerifications.filter((k) => k.status === "Pending").length +
			kycVideos.filter((k) => k.status === "Pending").length;
		const stock =
			(packages.appPackage?.stock || 0) +
			(packages.activationKey?.stock || 0) +
			(packages.crystal?.stock || 0);
		const totalTx = transactions.reduce((s, t) => s + (t.totalNum || 0), 0);
		return {
			kycVerif: kycVerifications.length,
			kycVideo: kycVideos.length,
			packages: stock,
			pendingKyc,
			totalTx: totalTx.toLocaleString("en-US"),
		};
	}, [kycVerifications, kycVideos, packages, transactions]);

	const filtered = useMemo(() => {
		return transactions.filter((t) => {
			if (escrow && t.escrow !== escrow) return false;
			if (status && t.status !== status) return false;
			if (search && !`${t.txId} ${t.name}`.toLowerCase().includes(search.toLowerCase()))
				return false;
			if (startDate) {
				const d = new Date(t.date);
				if (d < startDate) return false;
			}
			if (endDate) {
				const d = new Date(t.date);
				const end = new Date(endDate);
				end.setHours(23, 59, 59, 999);
				if (d > end) return false;
			}
			return true;
		});
	}, [transactions, escrow, status, search, startDate, endDate]);

	const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
	const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

	const approveTx = (id) => {
		setTransactions((prev) =>
			prev.map((t) =>
				t.id === id && t.status === "Waiting"
					? { ...t, status: "Success", action: "Done" }
					: t
			)
		);
	};

	const BtnStartDate = forwardRef(({ value, onClick }, ref) => (
		<button className="btn btn-sm w-100" onClick={onClick} ref={ref} type="button">
			<p className="mb-0 fs-16 text-start">{value || "Start date"}</p>
		</button>
	));
	const BtnEndDate = forwardRef(({ value, onClick }, ref) => (
		<button className="btn btn-sm w-100" onClick={onClick} ref={ref} type="button">
			<p className="mb-0 fs-16 text-start">{value || "End date"}</p>
		</button>
	));

	return (
		<Layout>
			<div className="font-roboto fw-700 p-2" style={{ fontSize: 22 }}>
				Dashboard
			</div>
			<div className="row g-3">
				<div className="col-6 col-md-3">
					<div className="card h-100 p-3">
						<div className="row">
							<div className="col-8">
								<div className="font-roboto fw-700 fs-18 text-secondary">
									Total KYC Verif
								</div>
								<div className="font-roboto fw-700 fs-18 mt-2">{stats.kycVerif}</div>
							</div>
							<div className="col-4">
								<img src={img_lock} className="img-fluid" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-6 col-md-3">
					<div className="card h-100 p-3">
						<div className="row">
							<div className="col-8">
								<div className="font-roboto fw-700 fs-18 text-secondary">
									Total KYC Video
								</div>
								<div className="font-roboto fw-700 fs-18 mt-2">{stats.kycVideo}</div>
							</div>
							<div className="col-4">
								<img src={img_people} className="img-fluid" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-6 col-md-3">
					<div className="card h-100 p-3">
						<div className="row">
							<div className="col-8">
								<div className="font-roboto fw-700 fs-18 text-secondary">
									Total Package
								</div>
								<div className="font-roboto fw-700 fs-18 mt-2">{stats.packages}</div>
							</div>
							<div className="col-4">
								<img src={img_share} className="img-fluid" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-6 col-md-3">
					<div className="card h-100 p-3">
						<div className="row">
							<div className="col-8">
								<div className="font-roboto fw-700 fs-18 text-secondary">
									Pending KYC
								</div>
								<div className="font-roboto fw-700 fs-18 mt-2">{stats.pendingKyc}</div>
							</div>
							<div className="col-4">
								<img src={img_chart} className="img-fluid" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-3 g-3">
				<div className="col-12 col-lg-8">
					<div className="card h-100 p-3">
						{chart === "assets" ? (
							<div className="d-flex flex-wrap gap-2">
								<div
									className="btn btn-sm text-white"
									style={{ backgroundColor: "#0052D9" }}
								>
									Assets Analytics
								</div>
								<div
									className="btn btn-sm"
									style={{ backgroundColor: "#FFFFFF" }}
									onClick={() => setChart("market")}
								>
									Market Analytics
								</div>
							</div>
						) : (
							<div className="d-flex flex-wrap gap-2">
								<div
									className="btn btn-sm"
									style={{ backgroundColor: "#FFFFFF" }}
									onClick={() => setChart("assets")}
								>
									Assets Analytics
								</div>
								<div
									className="btn btn-sm text-white"
									style={{ backgroundColor: "#0052D9" }}
								>
									Market Analytics
								</div>
							</div>
						)}
						<div className="mt-4">
							<AreaChart mode={chart} />
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-4">
					<div className="card h-100 p-3 d-flex flex-column">
						<div className="font-roboto fw-600 fs-16">Total Transaction</div>
						<div className="font-roboto mt-1 fw-600" style={{ fontSize: 32 }}>
							{stats.totalTx}
						</div>
						<div className="mt-2 flex-grow-1 d-flex align-items-center w-100">
							<PieChart />
						</div>
					</div>
				</div>
			</div>
			<div className="row font-inter fw-400 fs-14 mt-4 g-2 align-items-center">
				<div className="col-12 col-md-4" style={{ backgroundColor: "#FFFFFF" }}>
					<div className="d-flex">
						<DatePicker
							selected={startDate}
							dateFormat="dd/MM/yyyy"
							onChange={(date) => {
								setStartDate(date);
								setPage(1);
							}}
							customInput={<BtnStartDate />}
							isClearable
						/>
						<DatePicker
							selected={endDate}
							dateFormat="dd/MM/yyyy"
							onChange={(date) => {
								setEndDate(date);
								setPage(1);
							}}
							customInput={<BtnEndDate />}
							isClearable
						/>
					</div>
				</div>
				<div className="col-6 col-md-2">
					<select
						className="form-select form-select-sm border-0 rounded-0 shadow-none"
						style={{ backgroundColor: "#FFFFFF" }}
						value={escrow}
						onChange={(e) => {
							setEscrow(e.target.value);
							setPage(1);
						}}
					>
						<option value="">Select Escrow</option>
						<option value="INDODAX">INDODAX</option>
						<option value="OKX">OKX</option>
						<option value="HUOBI">HUOBI</option>
						<option value="DEXID">DEXID</option>
						<option value="BINANCE">BINANCE</option>
					</select>
				</div>
				<div className="col-6 col-md-2">
					<select
						className="form-select form-select-sm border-0 rounded-0 shadow-none"
						style={{ backgroundColor: "#FFFFFF" }}
						value={status}
						onChange={(e) => {
							setStatus(e.target.value);
							setPage(1);
						}}
					>
						<option value="">Select Status</option>
						<option value="Waiting">Waiting</option>
						<option value="Success">Success</option>
					</select>
				</div>
				<div className="col-12 col-md">
					<form
						className="d-flex"
						role="search"
						onSubmit={(e) => {
							e.preventDefault();
							setPage(1);
						}}
					>
						<input
							className="form-control form-control-sm me-2 shadow-none"
							type="search"
							placeholder="Search TxID"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<button className="btn btn-sm btn-outline-primary" type="submit">
							Cari
						</button>
					</form>
				</div>
			</div>
			<div className="card mt-3 p-3">
				<div className="table-responsive">
					<table className="table table-bordered fs-16 text-center align-middle">
						<thead>
							<tr>
								<th scope="col">No</th>
								<th scope="col">User</th>
								<th scope="col">Asset</th>
								<th scope="col">Total</th>
								<th scope="col">Escrow</th>
								<th scope="col">Status</th>
								<th scope="col">Countdown</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							{pageItems.map((e, i) => (
								<tr key={e.id}>
									<td>{(page - 1) * pageSize + i + 1}</td>
									<td>{e.name}</td>
									<td>IDR</td>
									<td>{e.total}</td>
									<td>{e.escrow}</td>
									<td>
										<div
											className="btn bnt-sm rounded text-white w-100"
											style={
												e.status === "Waiting"
													? { backgroundColor: "#F4B946" }
													: { backgroundColor: "#20CB6F" }
											}
										>
											<p className="mb-0 fs-14">{e.status}</p>
										</div>
									</td>
									<td>48 H</td>
									<td>
										<div
											className="btn bnt-sm rounded text-white w-100"
											style={
												e.action === "Approved"
													? { backgroundColor: "#0052D9", cursor: "pointer" }
													: { backgroundColor: "#A6A6A6" }
											}
											onClick={() => {
												if (e.action === "Approved") approveTx(e.id);
											}}
										>
											<p className="mb-0 fs-14">{e.action}</p>
										</div>
									</td>
								</tr>
							))}
							{pageItems.length === 0 && (
								<tr>
									<td colSpan={8} className="text-muted">
										No transactions found
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
				<div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mt-4 gap-2">
					<div className="fs-14">A total of {filtered.length} items of data</div>
					<nav aria-label="pagination">
						<ul className="pagination pagination-sm mb-0 flex-wrap">
							<li className={`page-item ${page <= 1 ? "disabled" : ""}`}>
								<button
									className="page-link"
									type="button"
									onClick={() => setPage((p) => Math.max(1, p - 1))}
								>
									Previous
								</button>
							</li>
							{Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
								<li key={n} className={`page-item ${page === n ? "active" : ""}`}>
									<button
										className="page-link"
										type="button"
										onClick={() => setPage(n)}
									>
										{n}
									</button>
								</li>
							))}
							<li className={`page-item ${page >= totalPages ? "disabled" : ""}`}>
								<button
									className="page-link"
									type="button"
									onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
								>
									Next
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</Layout>
	);
}
