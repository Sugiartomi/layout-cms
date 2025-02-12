import { useEffect, useState } from "react";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";

export default function RefferalPoint() {
	const [edit, setEdit] = useState(false);
	const [point, setPoint] = useState([
		{
			id: 1,
			name: "sponsor",
			point: 10,
		},
		{
			id: 2,
			name: 1,
			point: 5,
		},
		{
			id: 3,
			name: 2,
			point: 5,
		},
		{
			id: 4,
			name: 3,
			point: 5,
		},
		{
			id: 5,
			name: 4,
			point: 4,
		},
		{
			id: 6,
			name: 5,
			point: 3,
		},
		{
			id: 7,
			name: 6,
			point: 3,
		},
	]);
	const [sum, setSum] = useState(0);
	useEffect(() => {
		let total = 0;
		point.map((e) => {
			total += e.point;
		});
		setSum(total);
	}, []);
	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-2 pe-0 border-end">
						<Sidebar />
					</div>
					<div className="col p-4" style={{ backgroundColor: "#EDEDED" }}>
						<div className="d-flex justify-content-between">
							<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
								Refferal Point Management
							</div>
							{edit ? (
								<div className="font-roboto fw-700 ms-2 mt-2 fs-16 text-secondary mt-3 me-2 mb-2">
									Total Percentage : <span className="text-dark">{sum}%</span>
								</div>
							) : (
								<div
									className="btn btn-primary px-3 mt-2"
									onClick={() => setEdit(true)}
								>
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
									{point.map((e) => {
										return (
											<tr>
												<td>{e.name}</td>
												<td className="m-0 p-0">
													<input
														type="text"
														className="text-center w-100 border-0"
														style={{ height: "36px" }}
														placeholder={e.point}
														name={e.id}
													/>
												</td>
											</tr>
										);
									})}
								</tbody>
							) : (
								<tbody>
									{point.map((e) => {
										return (
											<tr>
												<td>{e.name}</td>
												<td>{e.point}</td>
											</tr>
										);
									})}
								</tbody>
							)}
						</table>
						{edit ? (
							<div className="d-flex justify-content-end font-roboto fw-700 mt-5">
								<div
									className="btn rounded bg-white px-4 me-3"
									onClick={() => setEdit(false)}
								>
									Back
								</div>
								<div
									className="btn btn-primary px-4"
									onClick={() => setEdit(false)}
								>
									Submit
								</div>
							</div>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</>
	);
}
