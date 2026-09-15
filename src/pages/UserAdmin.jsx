import { FilterCircle } from "react-bootstrap-icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/Reusble/Layout";
import ModalDelete from "../components/UserAdmin/ModalDelete";
import ModalResend from "../components/UserAdmin/ModalResend";
import ModalSuspend from "../components/UserAdmin/ModalSuspend";
import useLocalData from "../hooks/useLocalData";
import { useMemo, useState } from "react";

export default function UserAdmin() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [admins, setAdmins] = useLocalData("admins", []);
	const [query, setQuery] = useState(searchParams.get("q") || "");
	const [entries, setEntries] = useState(10);
	const [selectedId, setSelectedId] = useState(null);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return admins;
		return admins.filter((a) =>
			`${a.name} ${a.username} ${a.email} ${a.phone} ${a.status} ${a.role || ""}`
				.toLowerCase()
				.includes(q)
		);
	}, [admins, query]);

	const shown = filtered.slice(0, entries || filtered.length);

	const selected = admins.find((a) => a.id === selectedId);

	const deleteAdmin = () => {
		if (!selectedId) return;
		setAdmins((prev) => prev.filter((a) => a.id !== selectedId));
		setSelectedId(null);
	};

	const suspendAdmin = () => {
		if (!selectedId) return;
		setAdmins((prev) =>
			prev.map((a) =>
				a.id === selectedId
					? { ...a, status: a.status === "Suspended" ? "Active" : "Suspended" }
					: a
			)
		);
		setSelectedId(null);
	};

	const resendAdmin = () => {
		if (!selected) return;
		alert(`Resend email sent to ${selected.email}`);
		setSelectedId(null);
	};

	return (
		<>
			<Layout>
				<div className="font-roboto fw-700 p-2" style={{ fontSize: 22 }}>
					User Admin
				</div>
				<div className="d-flex mt-3 justify-content-between flex-column flex-sm-row gap-2">
					<form
						className="d-flex"
						style={{ maxWidth: 420, width: "100%" }}
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
					<div className="btn btn-success" onClick={() => navigate("/add-admin")}>
						+ Add
					</div>
				</div>
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
				<div className="p-4 rounded mt-3 bg-white">
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
								{shown.map((a) => (
									<tr key={a.id}>
										<td
											className="pointer"
											onClick={() =>
												navigate(`/user-admin/account?id=${a.id}`)
											}
										>
											{a.name}
										</td>
										<td>{a.username}</td>
										<td>{a.email}</td>
										<td>{a.phone}</td>
										<td
											className={
												a.status === "Active" ? "text-success" : "text-warning"
											}
										>
											{a.status}
										</td>
										<td>{a.registerDate}</td>
										<td>{a.referredBy}</td>
										<td className="d-flex justify-content-end flex-wrap gap-1">
											<div
												className="btn btn-sm btn-outline-primary"
												onClick={() =>
													navigate(`/user-admin/account?id=${a.id}`)
												}
											>
												<p className="p-0 m-0 fs-12"> Detail</p>
											</div>
											<div
												className="btn btn-sm btn-outline-danger"
												data-bs-toggle="modal"
												data-bs-target="#staticModalDelete"
												onClick={() => setSelectedId(a.id)}
											>
												<p className="p-0 m-0 fs-12"> Deleted</p>
											</div>
											<div
												className="btn btn-sm btn-outline-warning"
												data-bs-toggle="modal"
												data-bs-target="#staticModalSuspend"
												onClick={() => setSelectedId(a.id)}
											>
												<p className="p-0 m-0 fs-12"> Suspend</p>
											</div>
											<div
												className="btn btn-sm btn-outline-success"
												data-bs-toggle="modal"
												data-bs-target="#staticModalResend"
												onClick={() => setSelectedId(a.id)}
											>
												<p className="p-0 m-0 fs-12"> Resend</p>
											</div>
										</td>
									</tr>
								))}
								{shown.length === 0 && (
									<tr>
										<td colSpan={8} className="text-muted text-center">
											No admins found
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</Layout>
			<ModalSuspend onConfirm={suspendAdmin} name={selected?.name} />
			<ModalDelete onConfirm={deleteAdmin} name={selected?.name} />
			<ModalResend onConfirm={resendAdmin} name={selected?.name} />
		</>
	);
}
