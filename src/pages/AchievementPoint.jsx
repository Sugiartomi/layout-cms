import { useState } from "react";
import { StarFill } from "react-bootstrap-icons";
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

export default function AchievementPoint() {
	const [point, save] = useLocalData("achievementPoints", []);
	const [edit, setEdit] = useState(false);
	const [draft, setDraft] = useState([]);

	const startEdit = () => {
		setDraft(point.map((e) => ({ ...e })));
		setEdit(true);
	};

	const cancelEdit = () => {
		setDraft([]);
		setEdit(false);
	};

	const handleChange = (id, value) => {
		setDraft((prev) =>
			prev.map((e) => (e.id === id ? { ...e, point: Number(value) || 0 } : e))
		);
	};

	const submit = () => {
		save(draft);
		setEdit(false);
		setDraft([]);
	};

	const rows = edit ? draft : point;

	return (
		<Layout>
			<div className="d-flex justify-content-between">
				<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
					Achievement Point Management
				</div>
				{edit ? (
					""
				) : (
					<div className="btn btn-primary px-3" onClick={startEdit}>
						<p className="p-0 m-0 font-inter fw-600 fs-18">Edit</p>
					</div>
				)}
			</div>
			<table className="table table-bordered mt-4 bg-white font-inter fw-400 fs-16 text-center">
				<thead style={{ fontSize: 18 }}>
					<tr className="fw-bold">
						<th scope="col" style={{ width: "50%" }}>
							Achievement
						</th>
						<th scope="col">Achievement Point</th>
					</tr>
				</thead>
				{edit ? (
					<tbody>
						{rows.map((e, i) => (
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
										onChange={(ev) => handleChange(e.id, ev.target.value)}
									/>
								</td>
							</tr>
						))}
					</tbody>
				) : (
					<tbody>
						{rows.map((e, i) => (
							<tr key={e.id}>
								<td>
									<Stars count={i + 1} />
								</td>
								<td>{e.point}</td>
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
		</Layout>
	);
}
