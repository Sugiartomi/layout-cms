import { useMemo, useState } from "react";
import { FilterCircle } from "react-bootstrap-icons";
import KYCVideoModal from "../components/KYCVideo/VideoModal";
import Layout from "../components/Reusble/Layout";
import useLocalData from "../hooks/useLocalData";

function statusClass(status) {
	if (status === "Approved") return "text-success";
	if (status === "Rejected") return "text-danger";
	return "text-warning";
}

export default function KYCVideo() {
	const [items, , patch] = useLocalData("kycVideos", []);
	const [users] = useLocalData("users", []);
	const [query, setQuery] = useState("");
	const [entries, setEntries] = useState(10);
	const [selectedId, setSelectedId] = useState(null);

	const enriched = useMemo(() => {
		return items.map((k) => {
			const user = users.find((u) => u.id === k.userId);
			return {
				...k,
				username: user?.username || k.username || "-",
				phone: user?.phone || k.phone || "-",
			};
		});
	}, [items, users]);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return enriched;
		return enriched.filter((k) =>
			`${k.name} ${k.username} ${k.email} ${k.phone} ${k.status}`
				.toLowerCase()
				.includes(q)
		);
	}, [enriched, query]);

	const shown = filtered.slice(0, entries || filtered.length);
	const selected = enriched.find((k) => k.id === selectedId) || null;

	const updateStatus = (status) => {
		if (!selectedId) return;
		patch((prev) =>
			prev.map((k) => (k.id === selectedId ? { ...k, status } : k))
		);
		setSelectedId(null);
	};

	return (
		<>
			<Layout>
				<div className="font-roboto fw-700 p-2" style={{ fontSize: 22 }}>
					KYC Verification
				</div>
				<form
					className="d-flex mt-3"
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
				<table className="table table-borderless bg-white rounded mt-3 fs-14">
					<thead>
						<tr className="border-bottom">
							<th scope="col">No</th>
							<th scope="col">Name</th>
							<th scope="col">Username</th>
							<th scope="col">Email</th>
							<th scope="col">Phone</th>
							<th scope="col">Status</th>
							<th scope="col">Register Date</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<div className="hr mt-3"></div>
					<tbody>
						{shown.map((k, i) => (
							<tr key={k.id}>
								<td>{i + 1}</td>
								<td
									className="pointer"
									data-bs-toggle="modal"
									data-bs-target="#KYCVideoModal"
									onClick={() => setSelectedId(k.id)}
								>
									{k.name}
								</td>
								<td>{k.username}</td>
								<td>{k.email}</td>
								<td>{k.phone}</td>
								<td className={statusClass(k.status)}>{k.status}</td>
								<td>{k.submittedAt}</td>
								<td>
									<div
										className="btn btn-sm btn-outline-primary"
										data-bs-toggle="modal"
										data-bs-target="#KYCVideoModal"
										onClick={() => setSelectedId(k.id)}
									>
										<p className="p-0 m-0 fs-12"> Detail</p>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="d-flex justify-content-between mt-4">
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
			<KYCVideoModal
				item={selected}
				onApprove={() => updateStatus("Approved")}
				onReject={() => updateStatus("Rejected")}
			/>
		</>
	);
}
