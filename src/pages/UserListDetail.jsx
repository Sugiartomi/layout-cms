import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/Reusble/Layout";
import img_ktp from "../assets/img/ktp.svg";
import img_people from "../assets/img/people-1.svg";
import { getItem } from "../data/storage";

export default function UserListDetail() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [tab, setTab] = useState("home");
	const users = getItem("users", []);
	const user = users.find((u) => u.id === searchParams.get("id")) || users[0];

	if (!user) {
		return (
			<Layout>
				<div className="p-4">User not found</div>
				<button className="btn btn-primary" onClick={() => navigate("/user-list")}>
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
				<div className="d-flex">
					<div
						className={
							tab === "home"
								? "font-roboto fw-700 me-3 px-2 fs-18 pointer border-bottom border-3 border-primary"
								: "font-roboto fw-700 me-3 px-2 fs-18 pointer"
						}
						onClick={() => setTab("home")}
					>
						Home
					</div>
					<div
						className={
							tab === "profile"
								? "font-roboto fw-700 px-2 fs-18 pointer border-bottom border-3 border-primary"
								: "font-roboto fw-700 px-2 fs-18 pointer"
						}
						onClick={() => setTab("profile")}
					>
						Profile
					</div>
				</div>
				{tab === "home" ? (
					<>
						<div className="row mt-5">
							<div className="col-12 col-md-3 font-inter fw-400 fs-16">
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
								<p>{user.name}</p>
								<p>{user.username}</p>
								<p>{user.email}</p>
								<p>{user.phone}</p>
								<p className={user.status === "Active" ? "text-success" : "text-warning"}>
									{user.status}
								</p>
							</div>
						</div>
						<div className="d-flex mt-4">
							<div className="btn btn-primary px-4" onClick={() => navigate("/user-list")}>
								<p className="p-0 m-0 font-inter fs-18">Kembali</p>
							</div>
						</div>
					</>
				) : (
					<>
						<img src={img_people} alt="" className="img-fluid w-25 ms-4 mt-5" />
						<img src={img_ktp} alt="" className="img-fluid w-50 ms-3 mt-3" />
						<div className="row ms-4 mt-3">
							<div className="col-12 col-md-3">
								<p className="font-inter fs-16">
									ID Card <span className="text-danger">*</span>
								</p>
								<p className="font-inter fs-16">
									ID Number <span className="text-danger">*</span>
								</p>
								<p className="font-inter fs-16">
									Expired Date <span className="text-danger">*</span>
								</p>
								<p className="font-inter fs-16">City</p>
								<p className="font-inter fs-16">Country</p>
								<p className="font-inter fs-16">Emergency</p>
							</div>
							<div className="col">
								<p className="font-inter fs-16">KTP</p>
								<p className="font-inter fs-16">{user.idNumber}</p>
								<p className="font-inter fs-16">25-12-2030</p>
								<p className="font-inter fs-16">{user.city}</p>
								<p className="font-inter fs-16">{user.country}</p>
								<p className="font-inter fs-16">
									{user.emergencyContact} ({user.emergencyPhone})
								</p>
							</div>
						</div>
						<div className="d-flex ms-4 mt-4">
							<div className="btn btn-primary px-4" onClick={() => navigate("/user-list")}>
								<p className="p-0 m-0 font-inter fs-18">Kembali</p>
							</div>
						</div>
					</>
				)}
			</div>
		</Layout>
	);
}
