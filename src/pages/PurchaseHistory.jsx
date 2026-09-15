import { useMemo, useState } from "react";
import { FilterCircle } from "react-bootstrap-icons";
import Layout from "../components/Reusble/Layout";
import useLocalData from "../hooks/useLocalData";

export default function PurchaseHistory() {
	const [purchases, setPurchases] = useLocalData("purchases", []);
	const [packages] = useLocalData("packages", {});
	const [query, setQuery] = useState("");

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return purchases;
		return purchases.filter((p) =>
			`${p.invoice} ${p.type} ${p.userName} ${p.status} ${p.date}`
				.toLowerCase()
				.includes(q)
		);
	}, [purchases, query]);

	const handleUpload = (purchaseId, file) => {
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			setPurchases((prev) =>
				prev.map((p) =>
					p.id === purchaseId ? { ...p, proof: reader.result } : p
				)
			);
		};
		reader.readAsDataURL(file);
	};

	const statusClass = (status) => {
		const s = String(status || "").toLowerCase();
		if (s === "approved") return "bg-success text-white";
		if (s === "rejected") return "bg-secondary text-white";
		return "bg-danger text-white";
	};

	return (
		<>
			<Layout>
				<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
					Package Purchase History
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
					<button className="btn btn-primary d-flex" type="submit">
						<FilterCircle className="m-1 me-2" />
						Filter
					</button>
				</form>
				<div className="card p-4 mt-4">
					<table className="table table-borderless font-inter fs-16">
						<thead>
							<tr className="border-bottom">
								<th scope="col">Date</th>
								<th scope="col ">
									<p className=" m-0">Transaction ID</p>
								</th>
								<th scope="col ">
									<p className=" m-0">Product</p>
								</th>
								<th scope="col ">
									<p className=" m-0">Qty</p>
								</th>
								<th scope="col ">
									<p className=" m-0">Price</p>
								</th>
								<th scope="col ">
									<p className=" m-0">Qty</p>
								</th>
								<th scope="col ">
									<p className=" m-0">Unique Code</p>
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
							{filtered.map((p) => {
								const unitPrice =
									p.qty > 0 ? Math.round(p.amount / p.qty) : p.amount;
								return (
									<tr key={p.id}>
										<td>{p.date}</td>
										<td>{p.invoice}</td>
										<td>{p.type}</td>
										<td>{p.qty}</td>
										<td>{Number(p.amount || 0).toLocaleString("en-US")}</td>
										<td>{Number(unitPrice || 0).toLocaleString("en-US")}</td>
										<td>{p.uniqueCode ?? "-"}</td>
										<td>
											<div
												className={`${statusClass(
													p.status
												)} rounded text-center py-1 fs-12`}
											>
												{String(p.status || "pending").toLowerCase()}
											</div>
										</td>
										<td>
											<input
												type="file"
												id={`fileUploadPH_${p.id}`}
												style={{ display: "none" }}
												accept="image/*,.pdf"
												onChange={(e) => {
													handleUpload(p.id, e.target.files?.[0]);
													e.target.value = "";
												}}
											/>
											<button
												className="btn btn-sm btn-primary"
												onClick={() => {
													document
														.getElementById(`fileUploadPH_${p.id}`)
														?.click();
												}}
											>
												<p className="m-0 fs-12">
													{p.proof ? "Re-upload" : "Upload"}
												</p>
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<div className="d-flex justify-content-between mt-5">
					<div className="font-inter fw-400 fs-12">
						Showing 1 to {filtered.length} of {filtered.length} entries
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
		</>
	);
}
