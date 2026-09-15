import { useMemo, useState } from "react";
import { FilterCircle } from "react-bootstrap-icons";
import Layout from "../components/Reusble/Layout";
import useLocalData from "../hooks/useLocalData";

function downloadCsv(filename, headers, rows) {
	const escape = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
	const lines = [
		headers.map(escape).join(","),
		...rows.map((row) => headers.map((h) => escape(row[h])).join(",")),
	];
	const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}

function formatRp(n) {
	return `Rp${Number(n || 0).toLocaleString("en-US")}`;
}

export default function PointSummary() {
	const [rows] = useLocalData("pointSummary", []);
	const [query, setQuery] = useState("");
	const [entries, setEntries] = useState(10);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return rows;
		return rows.filter((r) =>
			`${r.name} ${r.referral} ${r.achievement} ${r.reward} ${r.total}`
				.toLowerCase()
				.includes(q)
		);
	}, [rows, query]);

	const shown = filtered.slice(0, entries || filtered.length);

	const totals = useMemo(() => {
		const total = rows.reduce((s, r) => s + Number(r.total || 0), 0);
		const avg = rows.length ? Math.round(total / rows.length) : 0;
		return { total, avg };
	}, [rows]);

	const exportExcel = (e) => {
		e.preventDefault();
		downloadCsv(
			"point-summary.csv",
			["name", "referral", "achievement", "reward", "total"],
			filtered
		);
	};

	return (
		<Layout>
			<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
				Point Summary
			</div>
			<div className="row mt-4">
				<div className="col-4">
					<div className="card p-4">
						<p className="font-inter fw-600 fs-16 ">Total User Point</p>
						<p className="font-inter fw-600" style={{ fontSize: 22 }}>
							{formatRp(totals.total)}
						</p>
						<div
							className="progress"
							role="progressbar"
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
							style={{ height: 10 }}
						>
							<div className="progress-bar bg-warning" style={{ width: "50%" }}></div>
						</div>
						<div className="d-flex justify-content-between mt-3">
							<p className="font-inter fw-400 fs-16 ">Average</p>
							<p className="font-inter fw-400 fs-16 text-warning">+{totals.avg}</p>
						</div>
					</div>
				</div>
				<div className="col-4">
					<div className="card p-4">
						<p className="font-inter fw-600 fs-16 ">Total PT Point</p>
						<p className="font-inter fw-600" style={{ fontSize: 22 }}>
							{formatRp(totals.total)}
						</p>
						<div
							className="progress"
							role="progressbar"
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
							style={{ height: 10 }}
						>
							<div className="progress-bar bg-primary" style={{ width: "50%" }}></div>
						</div>
						<div className="d-flex justify-content-between mt-3">
							<p className="font-inter fw-400 fs-16 ">Average</p>
							<p className="font-inter fw-400 fs-16 text-primary">+{totals.avg}</p>
						</div>
					</div>
				</div>
			</div>
			<form
				className="d-flex mt-4"
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
				<button className="btn btn-primary d-flex me-2" type="submit">
					<FilterCircle className="m-1 me-2" />
					Filter
				</button>
				<button className="btn btn-success w-100" type="button" onClick={exportExcel}>
					<p className="m-0 fs-14">Export Excel</p>
				</button>
			</form>
			<div className="d-flex align-items-center mt-3">
				<div className="font-inter fw-400 fs-16">Show</div>
				<input
					type="number"
					className="mx-3 form-control"
					style={{ width: "7%" }}
					min={1}
					value={entries}
					onChange={(e) => setEntries(Number(e.target.value) || 1)}
				/>
				<div className="font-inter fw-400 fs-16">entries</div>
			</div>
			<div className="card p-4">
				<table className="table table-borderless bg-white rounded mt-3 fs-14 text-center">
					<thead>
						<tr className="border-bottom">
							<th scope="col">Name</th>
							<th scope="col">Referral</th>
							<th scope="col">Achievement</th>
							<th scope="col">Reward</th>
							<th scope="col">Total</th>
						</tr>
					</thead>
					<tbody>
						{shown.map((row) => (
							<tr key={row.id}>
								<td>{row.name}</td>
								<td>{row.referral}</td>
								<td>{row.achievement}</td>
								<td>{row.reward}</td>
								<td className="text-success">{row.total}</td>
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
	);
}
