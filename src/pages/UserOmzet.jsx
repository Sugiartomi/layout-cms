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

export default function UserOmzet() {
	const [rows] = useLocalData("userOmzet", []);
	const [query, setQuery] = useState("");
	const [entries, setEntries] = useState(10);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return rows;
		return rows.filter((r) =>
			`${r.name} ${r.omzet} ${r.transactions}`.toLowerCase().includes(q)
		);
	}, [rows, query]);

	const shown = filtered.slice(0, entries || filtered.length);

	const exportExcel = (e) => {
		e.preventDefault();
		downloadCsv("user-omzet.csv", ["name", "omzet", "transactions"], filtered);
	};

	return (
		<Layout>
			<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
				User Omzet Report
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
							<th scope="col">Name</th>
							<th scope="col ">
								<p className=" m-0 text-center">Total Point</p>
							</th>
							<th scope="col ">
								<p className=" m-0 text-center">BV Direct</p>
							</th>
							<th scope="col ">
								<p className=" m-0 text-center">BV Network</p>
							</th>
							<th scope="col text-end">
								<p className=" m-0 text-end">BV Peringkat</p>
							</th>
						</tr>
					</thead>
					<hr className="mt-1" />
					<tbody>
						{shown.map((row) => (
							<tr key={row.id}>
								<td>{row.name}</td>
								<td className="text-center ">
									{Number(row.omzet || 0).toLocaleString("id-ID")}
								</td>
								<td className="text-center ">{row.transactions}</td>
								<td className="text-center ">{row.transactions}</td>
								<td className="text-end">
									{Number(row.omzet || 0).toLocaleString("id-ID")}
								</td>
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
