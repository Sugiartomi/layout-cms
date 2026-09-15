import { useMemo, useState } from "react";
import { FilterCircle, StarFill } from "react-bootstrap-icons";
import Layout from "../components/Reusble/Layout";
import useLocalData from "../hooks/useLocalData";

function Stars({ count }) {
	return (
		<div className="text-warning">
			{Array.from({ length: count }, (_, i) => (
				<StarFill key={i} />
			))}
		</div>
	);
}

export default function RewardPoint() {
	const [point, save] = useLocalData("rewards", []);
	const [edit, setEdit] = useState(false);
	const [draft, setDraft] = useState([]);
	const [query, setQuery] = useState("");
	const [selectedId, setSelectedId] = useState(null);

	const startEdit = () => {
		setDraft(point.map((e) => ({ ...e })));
		setEdit(true);
	};

	const cancelEdit = () => {
		setDraft([]);
		setEdit(false);
	};

	const handleChange = (id, field, value) => {
		setDraft((prev) =>
			prev.map((e) => {
				if (e.id !== id) return e;
				if (field === "point") return { ...e, point: Number(value) || 0 };
				return { ...e, description: value, desc: value };
			})
		);
	};

	const submit = () => {
		save(draft);
		setEdit(false);
		setDraft([]);
	};

	const deleteReward = (id = selectedId) => {
		if (!id) return;
		const next = (edit ? draft : point).filter((e) => e.id !== id);
		if (edit) {
			setDraft(next);
		} else {
			save(next);
		}
		setSelectedId(null);
	};

	const rows = edit ? draft : point;

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return rows;
		return rows.filter((e) =>
			`${e.title || ""} ${e.point} ${e.description || e.desc || ""}`
				.toLowerCase()
				.includes(q)
		);
	}, [rows, query]);

	return (
		<>
			<Layout>
				<div className="d-flex justify-content-between">
					<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
						{edit ? (
							<>
								Reward - <span className="fw-400">edit</span>
							</>
						) : (
							"Reward"
						)}
					</div>
				</div>
				<div className="d-flex  mt-3 justify-content-between">
					<form
						className="d-flex"
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
					{!edit ? (
						<div className="btn btn-primary px-3WWS" onClick={startEdit}>
							<p className="p-0 m-0 font-inter fw-600 fs-18">Edit</p>
						</div>
					) : (
						""
					)}
				</div>
				<table className="table table-bordered mt-4 bg-white font-inter fw-400 fs-16 text-center">
					<thead style={{ fontSize: 18 }}>
						<tr className="fw-bold">
							<th scope="col">Achievement</th>
							<th scope="col">Reward</th>
							<th scope="col">Description</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					{edit ? (
						<tbody>
							{filtered.map((e, i) => (
								<tr key={e.id}>
									<td>
										<Stars count={i + 1} />
									</td>
									<td className="m-0 p-0">
										<input
											type="text"
											className="text-center w-100 border-0"
											style={{ height: "36px" }}
											value={e.point}
											name={e.id}
											onChange={(ev) =>
												handleChange(e.id, "point", ev.target.value)
											}
										/>
									</td>
									<td className="m-0 p-0">
										<input
											type="text"
											className="text-center w-100 border-0"
											style={{ height: "36px" }}
											value={e.description || e.desc || ""}
											name={e.id}
											onChange={(ev) =>
												handleChange(e.id, "description", ev.target.value)
											}
										/>
									</td>
									<td>
										<div
											className="btn btn-danger btn-sm"
											onClick={() => deleteReward(e.id)}
										>
											<p className="p-0 m-0 text-white fs-12">Delete</p>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					) : (
						<tbody>
							{filtered.map((e, i) => (
								<tr key={e.id}>
									<td>
										<Stars count={i + 1} />
									</td>
									<td>{e.point}</td>
									<td>{e.description || e.desc}</td>
									<td>
										<div
											className="btn btn-danger btn-sm"
											data-bs-toggle="modal"
											data-bs-target="#staticModalDelete"
											onClick={() => setSelectedId(e.id)}
										>
											<p className="p-0 m-0 text-white fs-12">Delete</p>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					)}
				</table>
				{edit ? (
					<div className="d-flex justify-content-end font-roboto fw-700 mt-5">
						<div className="btn rounded bg-white px-4 me-3" onClick={cancelEdit}>
							Back
						</div>
						<div className="btn btn-primary px-4" onClick={submit}>
							Submit
						</div>
					</div>
				) : (
					""
				)}
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
			<div
				className="modal fade"
				id="staticModalDelete"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="staticModalDeleteLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered font-inter">
					<div className="modal-content">
						<div className="modal-header bg-danger">
							<h1
								className="modal-title fs-5 text-white fw-bold"
								id="staticModalDeleteLabel"
							>
								Delete
							</h1>
							<div
								className="text-white fw-bold me-1 border rounded px-2"
								type="button"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								X
							</div>
						</div>
						<div className="modal-body fs-16">Are you sure want to delete?</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn border rounded"
								data-bs-dismiss="modal"
							>
								No
							</button>
							<button
								type="button"
								className="btn btn-danger text-white fw-bold"
								data-bs-dismiss="modal"
								onClick={deleteReward}
							>
								Yes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
