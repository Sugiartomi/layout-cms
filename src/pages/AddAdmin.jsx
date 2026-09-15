import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Reusble/Layout";
import useLocalData from "../hooks/useLocalData";
import { uid } from "../data/storage";

function todayRegisterDate() {
	const d = new Date();
	const day = String(d.getDate()).padStart(2, "0");
	const month = String(d.getMonth() + 1).padStart(2, "0");
	const year = d.getFullYear();
	return `${day}-${month}-${year}`;
}

export default function AddAdmin() {
	const navigate = useNavigate();
	const [, setAdmins] = useLocalData("admins", []);
	const [form, setForm] = useState({
		name: "",
		username: "",
		email: "",
		phone: "",
		role: "",
	});

	const onChange = (field) => (e) => {
		setForm((prev) => ({ ...prev, [field]: e.target.value }));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (!form.name || !form.username || !form.email || !form.phone || !form.role) {
			alert("Please fill all required fields");
			return;
		}
		setAdmins((prev) => [
			...prev,
			{
				id: uid("admin"),
				name: form.name,
				username: form.username,
				email: form.email,
				phone: form.phone,
				role: form.role,
				status: "Active",
				registerDate: todayRegisterDate(),
				referredBy: "System",
			},
		]);
		navigate("/user-admin");
	};

	return (
		<Layout>
			<div className="font-roboto fw-700 p-2" style={{ fontSize: 22 }}>
				User Admin - Add
			</div>
			<div className="card w-50 p-4">
				<form onSubmit={onSubmit}>
					<div className="row">
						<div className="col-5">
							<p className="font-inter fs-16 fw-400">
								Fullname <span className="text-danger">*</span>
							</p>
						</div>
						<div className="col">
							<input
								type="text"
								className="form-control form-control-sm"
								style={{ backgroundColor: "#EBECF0" }}
								value={form.name}
								onChange={onChange("name")}
							/>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-5">
							<p className="font-inter fs-16 fw-400">
								Username <span className="text-danger">*</span>
							</p>
						</div>
						<div className="col">
							<input
								type="text"
								className="form-control form-control-sm"
								style={{ backgroundColor: "#EBECF0" }}
								value={form.username}
								onChange={onChange("username")}
							/>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-5">
							<p className="font-inter fs-16 fw-400">
								Email <span className="text-danger">*</span>
							</p>
						</div>
						<div className="col">
							<input
								type="text"
								className="form-control form-control-sm"
								style={{ backgroundColor: "#EBECF0" }}
								value={form.email}
								onChange={onChange("email")}
							/>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-5">
							<p className="font-inter fs-16 fw-400">
								Phone <span className="text-danger">*</span>
							</p>
						</div>
						<div className="col">
							<input
								type="text"
								className="form-control form-control-sm"
								style={{ backgroundColor: "#EBECF0" }}
								value={form.phone}
								onChange={onChange("phone")}
							/>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-5">
							<p className="font-inter fs-16 fw-400">
								Role <span className="text-danger">*</span>
							</p>
						</div>
						<div className="col">
							<select
								className="form-select form-select-sm"
								aria-label="Default select example"
								style={{ backgroundColor: "#EBECF0" }}
								value={form.role}
								onChange={onChange("role")}
							>
								<option value="" disabled className="fs-14">
									-- Choose --
								</option>
								<option value="Admin">Admin</option>
								<option value="Super Admin">Super Admin</option>
								<option value="Owner">Owner</option>
							</select>
						</div>
					</div>
					<div className="d-flex justify-content-end mt-4">
						<button
							type="button"
							className="btn btn-outline-secondary"
							onClick={() => navigate("/user-admin")}
						>
							Kembali
						</button>
						<button type="submit" className="btn btn-primary ms-3">
							submit
						</button>
					</div>
				</form>
			</div>
		</Layout>
	);
}
