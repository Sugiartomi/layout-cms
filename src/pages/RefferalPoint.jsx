import { useEffect, useState } from "react";
import Layout from "../components/Reusble/Layout";
import useLocalData from "../hooks/useLocalData";

export default function RefferalPoint() {
	const [point, save] = useLocalData("referralPoints", []);
	const [edit, setEdit] = useState(false);
	const [draft, setDraft] = useState([]);
	const [sum, setSum] = useState(0);

	useEffect(() => {
		const source = edit ? draft : point;
		const total = source.reduce((acc, e) => acc + Number(e.point || 0), 0);
		setSum(total);
	}, [point, draft, edit]);

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
			prev.map((e) =>
				e.id === id ? { ...e, point: Number(value) || 0, percent: Number(value) || 0 } : e
			)
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
					Refferal Point Management
				</div>
				{edit ? (
					<div className="font-roboto fw-700 ms-2 mt-2 fs-16 text-secondary mt-3 me-2 mb-2">
						Total Percentage : <span className="text-dark">{sum}%</span>
					</div>
				) : (
					<div className="btn btn-primary px-3 mt-2" onClick={startEdit}>
						<p className="p-0 m-0 font-inter fw-600 fs-18">Edit</p>
					</div>
				)}
			</div>
			<table className="table table-bordered mt-4 bg-white font-inter fw-400 fs-16 text-center">
				<thead style={{ fontSize: 18 }}>
					<tr className="fw-bold">
						<th scope="col" style={{ width: "50%" }}>
							Refferal
						</th>
						<th scope="col">Point (%)</th>
					</tr>
				</thead>
				{edit ? (
					<tbody>
						{rows.map((e) => (
							<tr key={e.id}>
								<td>{e.level || e.name}</td>
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
						{rows.map((e) => (
							<tr key={e.id}>
								<td>{e.level || e.name}</td>
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
