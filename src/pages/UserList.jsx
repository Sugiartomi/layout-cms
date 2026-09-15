import { FilterCircle } from "react-bootstrap-icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/Reusble/Layout";
import ModalDelete from "../components/UserList/ModalDelete";
import ModalResend from "../components/UserList/ModalResend";
import ModalSuspend from "../components/UserList/ModalSuspend";
import useLocalData from "../hooks/useLocalData";
import { useMemo, useState } from "react";

export default function UserList() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [users, setUsers] = useLocalData("users", []);
	const [query, setQuery] = useState(searchParams.get("q") || "");
	const [entries, setEntries] = useState(10);
	const [selectedId, setSelectedId] = useState(null);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return users;
		return users.filter((u) =>
			`${u.name} ${u.username} ${u.email} ${u.phone} ${u.status}`
				.toLowerCase()
				.includes(q)
		);
	}, [users, query]);

	const shown = filtered.slice(0, entries || filtered.length);

	const selected = users.find((u) => u.id === selectedId);

	const deleteUser = () => {
		if (!selectedId) return;
		setUsers((prev) => prev.filter((u) => u.id !== selectedId));
		setSelectedId(null);
	};

	const suspendUser = () => {
		if (!selectedId) return;
		setUsers((prev) =>
			prev.map((u) =>
				u.id === selectedId
					? { ...u, status: u.status === "Suspended" ? "Active" : "Suspended" }
					: u
			)
		);
		setSelectedId(null);
	};

	const resendUser = () => {
		if (!selected) return;
		alert(`Resend email sent to ${selected.email}`);
		setSelectedId(null);
	};

	return (
		<>
			<Layout>
				<div className="font-roboto fw-700 p-2" style={{ fontSize: 22 }}>
					User List
				</div>
				<form
					className="d-flex mt-3 flex-column flex-sm-row gap-2"
					style={{ maxWidth: 420, width: "100%" }}
					role="search"
					onSubmit={(e) => e.preventDefault()}
				>
					<input
						className="form-control me-2"
						type="search"
						placeholder="Search"
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
						style={{ width: 80 }}
						min={1}
						value={entries}
						onChange={(e) => setEntries(Number(e.target.value) || 1)}
					/>
					<div className="font-inter fw-400 fs-16">entries</div>
				</div>
				<div className="p-4 bg-white mt-3 rounded">
					<div className="table-responsive">
						<table className="table table-borderless bg-white rounded fs-16 font-inter">
							<thead>
								<tr className="border-bottom">
									<th scope="col">Name</th>
									<th scope="col">Username</th>
									<th scope="col">Email</th>
									<th scope="col">Phone</th>
									<th scope="col">Status</th>
									<th scope="col">Register Date</th>
									<th scope="col">Reffered By</th>
									<th scope="col" className="text-center">
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{shown.map((u) => (
									<tr key={u.id}>
										<td
											className="pointer"
											onClick={() =>
												navigate(`/user-list/account?id=${u.id}`)
											}
										>
											{u.name}
										</td>
										<td>{u.username}</td>
										<td>{u.email}</td>
										<td>{u.phone}</td>
										<td
											className={
												u.status === "Active" ? "text-success" : "text-warning"
											}
										>
											{u.status}
										</td>
										<td>{u.registerDate}</td>
										<td>{u.referredBy}</td>
										<td className="d-flex justify-content-end flex-wrap gap-1">
											<div
												className="btn btn-sm btn-outline-primary"
												onClick={() =>
													navigate(`/user-list/account?id=${u.id}`)
												}
											>
												<p className="p-0 m-0 fs-12"> Detail</p>
											</div>
											<div
												className="btn btn-sm btn-outline-danger"
												data-bs-toggle="modal"
												data-bs-target="#staticModalDelete"
												onClick={() => setSelectedId(u.id)}
											>
												<p className="p-0 m-0 fs-12"> Deleted</p>
											</div>
											<div
												className="btn btn-sm btn-outline-warning"
												data-bs-toggle="modal"
												data-bs-target="#staticModalSuspend"
												onClick={() => setSelectedId(u.id)}
											>
												<p className="p-0 m-0 fs-12"> Suspend</p>
											</div>
											<div
												className="btn btn-sm btn-outline-success"
												data-bs-toggle="modal"
												data-bs-target="#staticModalResend"
												onClick={() => setSelectedId(u.id)}
											>
												<p className="p-0 m-0 fs-12"> Resend</p>
											</div>
										</td>
									</tr>
								))}
								{shown.length === 0 && (
									<tr>
										<td colSpan={8} className="text-muted text-center">
											No users found
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</Layout>
			<ModalSuspend onConfirm={suspendUser} name={selected?.name} />
			<ModalDelete onConfirm={deleteUser} name={selected?.name} />
			<ModalResend onConfirm={resendUser} name={selected?.name} />
		</>
	);
}
