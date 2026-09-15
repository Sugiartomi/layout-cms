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
	return `Rp. ${Number(n || 0).toLocaleString("id-ID")}`;
}

export default function CompanyOmzet() {
	const [rows] = useLocalData("companyOmzet", []);
	const [query, setQuery] = useState("");
	const [entries, setEntries] = useState(10);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return rows;
		return rows.filter((r) =>
			`${r.period} ${r.omzet} ${r.ppn} ${r.net}`.toLowerCase().includes(q)
		);
	}, [rows, query]);

	const shown = filtered.slice(0, entries || filtered.length);

	const totals = useMemo(() => {
		return rows.reduce(
			(acc, r) => ({
				omzet: acc.omzet + Number(r.omzet || 0),
				ppn: acc.ppn + Number(r.ppn || 0),
				net: acc.net + Number(r.net || 0),
			}),
			{ omzet: 0, ppn: 0, net: 0 }
		);
	}, [rows]);

	const exportExcel = (e) => {
		e.preventDefault();
		downloadCsv("company-omzet.csv", ["period", "omzet", "ppn", "net"], filtered);
	};

	return (
		<Layout>
			<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
				Company Omzet Report
			</div>
			<div className="row mt-4">
				<div className="col-4">
					<div className="card p-4 h-100">
						<p className="font-inter fw-600 fs-16 ">Package Omzet</p>
						<p className="font-inter fw-600" style={{ fontSize: 22 }}>
							{formatRp(totals.omzet)}
						</p>
					</div>
				</div>
				<div className="col-4">
					<div className="card p-4 h-100">
						<p className="font-inter fw-600 fs-16 ">Ticket Omzet</p>
						<p className="font-inter fw-600" style={{ fontSize: 22 }}>
							{formatRp(totals.ppn)}
						</p>
					</div>
				</div>
				<div className="col-4">
					<div className="card p-4 h-100">
						<p className="font-inter fw-600 fs-16 ">Crystal Omzet</p>
						<p className="font-inter fw-600" style={{ fontSize: 22 }}>
							{formatRp(totals.net)}
						</p>
					</div>
				</div>
			</div>
			<form
				className="d-flex mt-5"
				style={{ width: "50%" }}
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
				<button className="btn btn-success fs-14 ms-2" type="button" onClick={exportExcel}>
					<p className="mb-0 fs-14" style={{ width: 80 }}>
						Export Excel
					</p>
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
			<div className="card p-4 mt-4">
				<table className="table table-borderless font-inter fs-16">
					<thead>
						<tr className="border-bottom">
							<th scope="col">Period</th>
							<th scope="col">
								<p className=" m-0">Omzet</p>
							</th>
							<th scope="col">
								<p className=" m-0">PPN</p>
							</th>
							<th scope="col">
								<p className=" m-0">Net</p>
							</th>
						</tr>
					</thead>
					<hr className="mt-1" />
					<tbody>
						{shown.map((row) => (
							<tr key={row.id}>
								<td>{row.period}</td>
								<td>{Number(row.omzet || 0).toLocaleString("id-ID")}</td>
								<td>{Number(row.ppn || 0).toLocaleString("id-ID")}</td>
								<td>{Number(row.net || 0).toLocaleString("id-ID")}</td>
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
