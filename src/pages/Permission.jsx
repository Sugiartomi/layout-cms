import { useEffect, useState } from "react";
import Layout from "../components/Reusble/Layout";
import useLocalData from "../hooks/useLocalData";

const EMPTY_FLAGS = { all: false, create: false, edit: false, delete: false, view: false };

const FEATURE_ORDER = [
	"Dashboard",
	"User",
	"User Admin",
	"Permission",
	"Approval KYC Verification",
	"Approval KYC Video",
	"Package Purchase",
	"Package Purchase History",
	"Payment Approval",
	"Promotion Banner",
	"Our Support Contact",
	"Shareable Content",
	"Point Summary",
	"Company Owner Report",
	"Setting",
	"KYC",
	"Payment",
];

function featuresForRole(rolePerms) {
	const keys = Object.keys(rolePerms || {});
	const ordered = FEATURE_ORDER.filter((k) => keys.includes(k));
	const extras = keys.filter((k) => !FEATURE_ORDER.includes(k));
	return [...ordered, ...extras];
}

export default function Permission() {
	const [permissions, setPermissions] = useLocalData("permissions", {});
	const [role, setRole] = useState("");
	const [draft, setDraft] = useState({});

	useEffect(() => {
		if (!role) {
			setDraft({});
			return;
		}
		setDraft({ ...(permissions[role] || {}) });
	}, [role, permissions]);

	const features = featuresForRole(draft);

	const toggleFlag = (feature, flag) => {
		setDraft((prev) => {
			const current = { ...EMPTY_FLAGS, ...(prev[feature] || {}) };
			if (flag === "all") {
				const nextAll = !current.all;
				return {
					...prev,
					[feature]: {
						all: nextAll,
						create: nextAll,
						edit: nextAll,
						delete: nextAll,
						view: nextAll,
					},
				};
			}
			const next = { ...current, [flag]: !current[flag] };
			next.all = next.create && next.edit && next.delete && next.view;
			return { ...prev, [feature]: next };
		});
	};

	const onSubmit = () => {
		if (!role) {
			alert("Please choose a role");
			return;
		}
		setPermissions((prev) => ({
			...prev,
			[role]: draft,
		}));
		alert("Permissions saved");
	};

	return (
		<Layout>
			<div className="font-roboto fw-700 p-2" style={{ fontSize: 22 }}>
				Permission Management
			</div>
			<select
				className="form-select form-select-sm w-25"
				aria-label="Default select example"
				value={role}
				onChange={(e) => setRole(e.target.value)}
			>
				<option value="" disabled className="fs-14">
					-- Choose --
				</option>
				<option value="Admin">Admin</option>
				<option value="Super Admin">Super Admin</option>
				<option value="Owner">Owner</option>
			</select>
			<div className="font-roboto fw-700 mt-5 p-2" style={{ fontSize: 22 }}>
				User Management
			</div>
			<div className="card p-4">
				<table className="table table-borderless font-inter fs-16">
					<thead>
						<tr className="border-bottom">
							<th scope="col">Features</th>
							<th scope="col text-center" style={{ width: "15%" }}>
								<p className="text-center m-0">All</p>
							</th>
							<th scope="col text-center" style={{ width: "15%" }}>
								<p className="text-center m-0">Create</p>
							</th>
							<th scope="col text-center" style={{ width: "15%" }}>
								<p className="text-center m-0">Edit</p>
							</th>
							<th scope="col text-center" style={{ width: "15%" }}>
								<p className="text-center m-0">Delete</p>
							</th>
							<th scope="col text-center" style={{ width: "15%" }}>
								<p className="text-center m-0">View</p>
							</th>
						</tr>
					</thead>
					<hr className="mt-1" />
					<tbody>
						{!role && (
							<tr>
								<td colSpan={6} className="text-muted text-center">
									Select a role to manage permissions
								</td>
							</tr>
						)}
						{features.map((title) => {
							const flags = { ...EMPTY_FLAGS, ...(draft[title] || {}) };
							return (
								<tr key={title}>
									<td>{title}</td>
									{["all", "create", "edit", "delete", "view"].map((flag) => (
										<td key={flag}>
											<div className="d-flex justify-content-center">
												<input
													className="form-check-input mt-0"
													type="checkbox"
													checked={!!flags[flag]}
													onChange={() => toggleFlag(title, flag)}
												/>
											</div>
										</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
				<div className="d-flex justify-content-end mt-4">
					<div className="btn btn-primary px-4" onClick={onSubmit}>
						Submit
					</div>
				</div>
			</div>
		</Layout>
	);
}
