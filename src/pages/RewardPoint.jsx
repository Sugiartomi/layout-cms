import { useEffect, useState } from "react";
import { FilterCircle, SkipStart, StarFill } from "react-bootstrap-icons";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";

export default function RewardPoint() {
	const [edit, setEdit] = useState(false);
	const [point, setPoint] = useState([
		{
			id: 1,
			name: (
				<div className="text-warning">
					<StarFill />
				</div>
			),
			point: 500,
			desc: "Hadiah tambahin poin 100.000",
		},
		{
			id: 2,
			name: (
				<div className="text-warning">
					<StarFill />
					<StarFill />
				</div>
			),
			point: 500,
			desc: "Hadiah tambahin poin 200.000",
		},
		{
			id: 3,
			name: (
				<div className="text-warning">
					<StarFill />
					<StarFill />
					<StarFill />
				</div>
			),
			point: 1500,
			desc: "Hadiah tambahin poin 300.000",
		},
		{
			id: 4,
			name: (
				<div className="text-warning">
					<StarFill />
					<StarFill />
					<StarFill />
					<StarFill />
				</div>
			),
			point: 2000,
			desc: "Hadiah tambahin poin 400.000",
		},
		{
			id: 5,
			name: (
				<div className="text-warning">
					<StarFill />
					<StarFill />
					<StarFill />
					<StarFill />
					<StarFill />
				</div>
			),
			point: 2000,
			desc: "Hadiah tambahin poin 500.000",
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
							<form className="d-flex" style={{ width: "30%" }} role="search">
								<input
									className="form-control me-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button className="btn btn-primary d-flex" type="submit">
									<FilterCircle className="m-1 me-2" />
									Filter
								</button>
							</form>
							{!edit ? (
								<div
									className="btn btn-primary px-3WWS"
									onClick={() => setEdit(true)}
								>
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
												<td className="m-0 p-0">
													<input
														type="text"
														className="text-center w-100 border-0"
														style={{ height: "36px" }}
														placeholder={e.desc}
														name={e.id}
													/>
												</td>
												<td>
													<div className="btn btn-danger btn-sm">
														<p className="p-0 m-0 text-white fs-12">
															Delete
														</p>
													</div>
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
												<td>{e.desc}</td>
												<td>
													<div className="btn btn-danger btn-sm"  data-bs-toggle="modal" data-bs-target="#staticModalDelete">
														<p className="p-0 m-0 text-white fs-12">
															Delete
														</p>
													</div>
												</td>
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
						<div className="d-flex justify-content-between mt-5">
							<div className="font-inter fw-400 fs-12">
								Showing 1 to 1 of 1 entries
							</div>
							<nav aria-label="...">
								<ul class="pagination pagination-sm">
									<li class="page-item disabled">
										<span class="page-link">Previous</span>
									</li>
									<li class="page-item active">
										<a class="page-link" href="#">
											1
										</a>
									</li>
									<li class="page-item" aria-current="page">
										<span class="page-link">2</span>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">
											3
										</a>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">
											Next
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<>
			
				<div
					class="modal fade"
					id="staticModalDelete"
					data-bs-backdrop="static"
					data-bs-keyboard="false"
					tabindex="-1"
					aria-labelledby="staticModalDeleteLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered font-inter">
						<div class="modal-content">
							<div class="modal-header bg-danger">
								<h1
									class="modal-title fs-5 text-white fw-bold"
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
							<div class="modal-body fs-16">
							Are you sure want to delete?
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn border rounded"
									data-bs-dismiss="modal"
								>
									No
								</button>
								<button type="button" class="btn btn-danger text-white fw-bold">
									Yes
								</button>
							</div>
						</div>
					</div>
				</div>
			
		</>
		</>
	);
}
