import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/Reusble/Layout";
import { getItem } from "../data/storage";

export default function UserAdminDetail() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const admins = getItem("admins", []);
	const admin = admins.find((a) => a.id === searchParams.get("id")) || admins[0];

	if (!admin) {
		return (
			<Layout>
				<div className="p-4">Admin not found</div>
				<button className="btn btn-primary" onClick={() => navigate("/user-admin")}>
					Kembali
				</button>
			</Layout>
		);
	}

	return (
		<Layout>
			<div className="font-roboto fw-700 p-2" style={{ fontSize: 22 }}>
				User Detail
			</div>
			<div className="card p-4 mt-4">
				<div className="row mt-3">
					<div className="col-2 font-inter fw-400 fs-16">
						<p>
							Nama <span className="text-danger">*</span>
						</p>
						<p>
							Username <span className="text-danger">*</span>
						</p>
						<p>
							Email <span className="text-danger">*</span>
						</p>
						<p>
							Phone <span className="text-danger">*</span>
						</p>
						<p>
							Status <span className="text-danger">*</span>
						</p>
					</div>
					<div className="col font-inter fw-400 fs-16">
						<p className="text-secondary">{admin.name}</p>
						<p className="text-secondary">{admin.username}</p>
						<p className="text-secondary">{admin.email}</p>
						<p className="text-secondary">{admin.phone}</p>
						<p
							className={
								admin.status === "Active" ? "text-success" : "text-warning"
							}
						>
							{admin.status}
						</p>
					</div>
				</div>
				<div className="d-flex mt-4">
					<div
						className="btn btn-primary px-4"
						onClick={() => navigate("/user-admin")}
					>
						<p className="p-0 m-0 font-inter fs-18">Kembali</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}
