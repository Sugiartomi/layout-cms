import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Reusble/Layout";
import SupportCenterDeleteModal from "../components/SupportCenter/DeleteModal";
import useLocalData from "../hooks/useLocalData";
import img_sample from "../assets/img/browser-safari.png";

export default function SupportCenter() {
	const navigate = useNavigate();
	const [items, setItems] = useLocalData("supportContent", []);
	const [selectedId, setSelectedId] = useState(null);
	const [entries, setEntries] = useState(10);

	const shown = items.slice(0, entries || items.length);

	const deleteItem = () => {
		if (!selectedId) return;
		setItems((prev) => prev.filter((i) => i.id !== selectedId));
		setSelectedId(null);
	};

	return (
		<>
			<Layout>
				<div className="font-roboto fw-700 p-2" style={{ fontSize: 22 }}>
					Our Support Center
				</div>
				<div className="d-flex  mt-3 justify-content-between">
					<div className="d-flex align-items-center mt-3">
						<div className="font-inter fw-400 fs-16">Show</div>
						<input
							type="number"
							className="mx-3 form-control"
							style={{ width: "25%" }}
							min={1}
							value={entries}
							onChange={(e) => setEntries(Number(e.target.value) || 1)}
						/>
						<div className="font-inter fw-400 fs-16">entries</div>
					</div>
					<div
						className="btn btn-success mt-3"
						onClick={() => navigate("/support-center/add")}
					>
						+ Add
					</div>
				</div>
				<div className="card p-4 mt-4">
					<table className="table table-striped rounded fs-16">
						<thead>
							<tr className="text-center">
								<th scope="col" style={{ width: "25%" }}>
									Image
								</th>
								<th scope="col" style={{ width: "25%" }}>
									Title
								</th>
								<th scope="col" style={{ width: "25%" }}>
									Description
								</th>
								<th scope="col" style={{ width: "25%" }}>
									Status
								</th>
								<th scope="col" style={{ width: "25%" }}>
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{shown.map((item) => (
								<tr key={item.id} className="text-center align-middle">
									<td className="p-4">
										<img
											src={item.image || img_sample}
											className="img-fluid"
											alt={item.title || ""}
											style={{ maxHeight: 80 }}
										/>
									</td>
									<td>{item.title}</td>
									<td>{item.description || item.category || "-"}</td>
									<td>
										{item.status === "Published" || item.status === "Active"
											? "Show"
											: item.status || "Hide"}
									</td>
									<td>
										<div className="d-flex">
											<div
												className="btn btn-primary me-2"
												onClick={() =>
													navigate(`/support-center/add?id=${item.id}`)
												}
											>
												<p className="m-0 fs-14">Edit</p>
											</div>
											<div
												className="btn btn-danger"
												data-bs-toggle="modal"
												data-bs-target="#SupportCenterDeleteModal"
												onClick={() => setSelectedId(item.id)}
											>
												<p className="m-0 fs-14">Delete</p>
											</div>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="d-flex justify-content-between mt-4">
					<div className="font-inter fw-400 fs-12">
						Showing 1 to {shown.length} of {items.length} entries
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
			<SupportCenterDeleteModal onConfirm={deleteItem} />
		</>
	);
}
