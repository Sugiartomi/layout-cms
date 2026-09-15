import { Fragment, useMemo, useState } from "react";
import { FilterCircle } from "react-bootstrap-icons";
import Layout from "../components/Reusble/Layout";
import useLocalData from "../hooks/useLocalData";

export default function PointCashout() {
	const [cashouts, setCashouts] = useLocalData("cashouts", []);
	const [packages] = useLocalData("packages", {});
	const [query, setQuery] = useState("");
	const [expandedId, setExpandedId] = useState(null);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return cashouts;
		return cashouts.filter((c) =>
			`${c.id} ${c.name} ${c.status} ${c.date} ${c.amount}`
				.toLowerCase()
				.includes(q)
		);
	}, [cashouts, query]);

	const updateStatus = (id, status) => {
		setCashouts((prev) =>
			prev.map((c) => (c.id === id ? { ...c, status } : c))
		);
	};

	const viewDetail = (c) => {
		setExpandedId((prev) => (prev === c.id ? null : c.id));
		alert(
			`Cashout Detail\nID: ${c.id}\nName: ${c.name}\nDate: ${c.date}\nPoints: ${c.point}\nAmount: ${Number(c.amount || 0).toLocaleString("en-US")}\nStatus: ${c.status}`
		);
	};

	const statusClass = (status) => {
		const s = String(status || "").toLowerCase();
		if (s === "rejected") return "text-danger";
		if (s === "pending") return "text-warning";
		return "text-success";
	};

	return (
		<>
			<Layout>
				<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
					Point Cashout Approval
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
								<th scope="col ">
									<p className=" m-0">Transaction ID</p>
								</th>
								<th scope="col ">
									<p className=" m-0">Name</p>
								</th>
								<th scope="col ">
									<p className=" m-0">Date</p>
								</th>
								<th scope="col ">
									<p className=" m-0">Amount</p>
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
							{filtered.map((c) => (
								<Fragment key={c.id}>
									<tr>
										<td>{c.id}</td>
										<td>{c.name}</td>
										<td>{c.date}</td>
										<td>{Number(c.amount || 0).toLocaleString("en-US")}</td>
										<td className={statusClass(c.status)}>{c.status}</td>
										<td>
											<div className="d-flex gap-1 flex-wrap">
												<div
													className="btn btn-sm btn-primary px-2"
													onClick={() => viewDetail(c)}
												>
													<p className="m-0 text-white fs-12">view</p>
												</div>
												{String(c.status).toLowerCase() === "pending" && (
													<>
														<div
															className="btn btn-sm btn-success px-2"
															onClick={() =>
																updateStatus(c.id, "Approved")
															}
														>
															<p className="m-0 text-white fs-12">
																Approve
															</p>
														</div>
														<div
															className="btn btn-sm btn-danger px-2"
															onClick={() =>
																updateStatus(c.id, "Rejected")
															}
														>
															<p className="m-0 text-white fs-12">
																Reject
															</p>
														</div>
													</>
												)}
											</div>
										</td>
									</tr>
									{expandedId === c.id && (
										<tr>
											<td colSpan={6} className="bg-light fs-14">
												Points: {c.point} · Amount:{" "}
												{Number(c.amount || 0).toLocaleString("en-US")} ·
												Status: {c.status}
											</td>
										</tr>
									)}
								</Fragment>
							))}
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
