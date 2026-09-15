import { useMemo, useState } from "react";
import { FilterCircle } from "react-bootstrap-icons";
import ModalPaymentApproval from "../components/PaymentApproval/ModalApproval";
import PaymentReportModal from "../components/PaymentApproval/ModalReport";
import Layout from "../components/Reusble/Layout";
import useLocalData from "../hooks/useLocalData";

export default function PaymentApproval() {
	const [payments, setPayments] = useLocalData("payments", []);
	const [purchases, setPurchases] = useLocalData("purchases", []);
	const [packages] = useLocalData("packages", {});
	const [query, setQuery] = useState("");
	const [filterStatus, setFilterStatus] = useState("");
	const [filterItem, setFilterItem] = useState("");
	const [filterDate, setFilterDate] = useState("");
	const [entries, setEntries] = useState(10);
	const [selectedId, setSelectedId] = useState(null);

	const filtered = useMemo(() => {
		return payments.filter((p) => {
			const q = query.trim().toLowerCase();
			if (
				q &&
				!`${p.invoice} ${p.name} ${p.type} ${p.status}`
					.toLowerCase()
					.includes(q)
			) {
				return false;
			}
			if (filterStatus && String(p.status).toLowerCase() !== filterStatus.toLowerCase()) {
				return false;
			}
			if (filterItem && String(p.type).toLowerCase() !== filterItem.toLowerCase()) {
				return false;
			}
			if (filterDate && p.date !== filterDate) return false;
			return true;
		});
	}, [payments, query, filterStatus, filterItem, filterDate]);

	const shown = filtered.slice(0, entries || filtered.length);
	const selected = payments.find((p) => p.id === selectedId) || null;
	const selectedPurchase =
		purchases.find(
			(p) =>
				p.invoice === selected?.invoice ||
				p.id === selected?.purchaseId
		) || null;

	const syncStatus = (paymentId, status) => {
		const payment = payments.find((p) => p.id === paymentId);
		if (!payment) return;
		setPayments((prev) =>
			prev.map((p) => (p.id === paymentId ? { ...p, status } : p))
		);
		setPurchases((prev) =>
			prev.map((p) =>
				p.invoice === payment.invoice || p.id === payment.purchaseId
					? { ...p, status }
					: p
			)
		);
	};

	const approvePayment = () => {
		if (!selectedId) return;
		syncStatus(selectedId, "Approved");
		setSelectedId(null);
	};

	const rejectPayment = () => {
		if (!selectedId) return;
		syncStatus(selectedId, "Rejected");
		setSelectedId(null);
	};

	const isPending = (status) =>
		["pending", "waiting", "waiting approval"].includes(
			String(status || "").toLowerCase()
		);

	return (
		<>
			<Layout>
				<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
					Payment Approval
				</div>
				<div className="row mt-4">
					<div className="col-4">
						<div className="card p-4">
							<p className="font-inter fw-600 fs-16 ">Total App Package Stock</p>
							<p className="font-inter fw-600" style={{ fontSize: 22 }}>
								{packages.appPackage?.stock ?? 0}
							</p>
							<div
								className="progress"
								role="progressbar"
								aria-valuenow="25"
								aria-valuemin="0"
								aria-valuemax="100"
								style={{ height: 10 }}
							>
								<div
									className="progress-bar bg-warning"
									style={{ width: "50%" }}
								></div>
							</div>
							<div className="d-flex justify-content-between mt-3">
								<p className="font-inter fw-400 fs-16 ">Average</p>
								<p className="font-inter fw-400 fs-16 text-warning">+67</p>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card p-4">
							<p className="font-inter fw-600 fs-16 ">Total Crystal Stock</p>
							<p className="font-inter fw-600" style={{ fontSize: 22 }}>
								{packages.crystal?.stock ?? 0}
							</p>
							<div
								className="progress"
								role="progressbar"
								aria-valuenow="25"
								aria-valuemin="0"
								aria-valuemax="100"
								style={{ height: 10 }}
							>
								<div
									className="progress-bar bg-primary"
									style={{ width: "50%" }}
								></div>
							</div>
							<div className="d-flex justify-content-between mt-3">
								<p className="font-inter fw-400 fs-16 ">Average</p>
								<p className="font-inter fw-400 fs-16 text-primary">+67</p>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card p-4">
							<p className="font-inter fw-600 fs-16 ">
								Total Activation Key Stock
							</p>
							<p className="font-inter fw-600" style={{ fontSize: 22 }}>
								{packages.activationKey?.stock ?? 0}
							</p>
							<div
								className="progress"
								role="progressbar"
								aria-valuenow="25"
								aria-valuemin="0"
								aria-valuemax="100"
								style={{ height: 10 }}
							>
								<div
									className="progress-bar bg-success"
									style={{ width: "50%" }}
								></div>
							</div>
							<div className="d-flex justify-content-between mt-3">
								<p className="font-inter fw-400 fs-16 ">Average</p>
								<p className="font-inter fw-400 fs-16 text-success">+67</p>
							</div>
						</div>
					</div>
				</div>
				<form
					className="d-flex mt-5"
					style={{ width: "30%" }}
					role="search"
					onSubmit={(e) => e.preventDefault()}
				>
					<input
						className="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<li className="nav-item dropdown list-unstyled pointer">
						<button
							className="btn btn-primary d-flex"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							type="button"
						>
							<FilterCircle className="m-1 me-2" />
							Filter
						</button>
						<div
							className="dropdown-menu p-3 font-inter list-unstyled"
							style={{ width: "30vw" }}
						>
							<ul className="row">
								<div className="col-3">
									<p>Date</p>
									<p>Status</p>
									<p>Item</p>
								</div>
								<div className="col">
									<input
										type="date"
										className="form-control"
										value={filterDate}
										onChange={(e) => setFilterDate(e.target.value)}
									/>
									<select
										className="form-select"
										aria-label="Default select example"
										value={filterStatus}
										onChange={(e) => setFilterStatus(e.target.value)}
									>
										<option value="">All status</option>
										<option value="Pending">Pending</option>
										<option value="Approved">Approved</option>
										<option value="Rejected">Rejected</option>
									</select>
									<select
										className="form-select"
										aria-label="Default select example"
										value={filterItem}
										onChange={(e) => setFilterItem(e.target.value)}
									>
										<option value="">All items</option>
										<option value="App Package">App Package</option>
										<option value="Crystal">Crystal</option>
										<option value="Activation Key">Activation Key</option>
									</select>
								</div>
							</ul>
							<div className="d-flex justify-content-end">
								<div className="btn btn-primary">submit</div>
							</div>
						</div>
					</li>
				</form>
				<div className="d-flex align-items-center mt-3">
					<div className="font-inter fw-400 fs-16">Show</div>
					<input
						type="number"
						className="mx-3 form-control"
						style={{ width: "7%" }}
						value={entries}
						onChange={(e) => setEntries(Number(e.target.value) || 10)}
					/>
					<div className="font-inter fw-400 fs-16">entries</div>
				</div>
				<div className="card p-4 mt-4">
					<table className="table table-borderless font-inter fs-16">
						<thead>
							<tr className="border-bottom">
								<th scope="col ">
									<p className=" m-0">Transaction ID</p>
								</th>
								<th scope="col ">
									<p className=" m-0">Name</p>
								</th>
								<th scope="col ">
									<p className=" m-0">Items</p>
								</th>
								<th scope="col ">
									<p className=" m-0">Total Price</p>
								</th>
								<th scope="col ">
									<p className=" m-0">Date Upload</p>
								</th>
								<th scope="col ">
									<p className=" m-0">Status</p>
								</th>
								<th scope="col ">
									<p className=" m-0">Action</p>
								</th>
							</tr>
						</thead>
						<hr className="mt-1" />
						<tbody>
							{shown.map((p) => (
								<tr key={p.id}>
									<td>{p.invoice}</td>
									<td>{p.name}</td>
									<td>{p.type}</td>
									<td>{Number(p.amount || 0).toLocaleString("en-US")}</td>
									<td>{p.date}</td>
									{isPending(p.status) ? (
										<>
											<td>
												<div className="bg-warning rounded px-2 py-1 fs-12 text-center">
													waiting approval
												</div>
											</td>
											<td>
												<div
													className="btn btn-sm btn-primary"
													data-bs-toggle="modal"
													data-bs-target="#ModalPaymentApproval"
													onClick={() => setSelectedId(p.id)}
												>
													<p className="m-0 fs-12">Proccess</p>
												</div>
											</td>
										</>
									) : (
										<>
											<td>
												<div
													className={`${
														String(p.status).toLowerCase() === "rejected"
															? "bg-danger"
															: "bg-success"
													} text-white rounded px-2 py-1 fs-12 text-center`}
												>
													{String(p.status || "").toLowerCase()}
												</div>
											</td>
											<td>
												<div
													className="btn btn-sm btn-primary"
													data-bs-toggle="modal"
													data-bs-target="#PaymentReportModal"
													onClick={() => setSelectedId(p.id)}
												>
													<p className="m-0 fs-12">view</p>
												</div>
												<div className="btn btn-sm btn-secondary ms-2">
													<p className="m-0 fs-12">download invoice</p>
												</div>
											</td>
										</>
									)}
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="d-flex justify-content-between mt-5">
					<div className="font-inter fw-400 fs-12">
						Showing 1 to {shown.length} of {filtered.length} entries
					</div>
					<nav aria-label="...">
						<ul className="pagination pagination-sm">
							<li className="page-item disabled">
								<span className="page-link">Previous</span>
							</li>
							<li className="page-item active">
								<a className="page-link" href="#">
									1
								</a>
							</li>
							<li className="page-item" aria-current="page">
								<span className="page-link">2</span>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									3
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									Next
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</Layout>
			<ModalPaymentApproval
				payment={selected}
				purchase={selectedPurchase}
				onApprove={approvePayment}
				onReject={rejectPayment}
			/>
			<PaymentReportModal payment={selected} purchase={selectedPurchase} />
		</>
	);
}
