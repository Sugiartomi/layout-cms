import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";
import img_ktp from "../assets/img/ktp.svg";
import img_people from "../assets/img/people-1.svg";

export default function UserListDetail() {
	const navigate = useNavigate();
	const [tab, setTab] = useState("home");
	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-2 pe-0 border-end">
						<Sidebar />
					</div>
					<div className="col p-4" style={{ backgroundColor: "#EDEDED" }}>
						<div className="font-roboto fw-700 p-2" style={{ fontSize: 22 }}>
							User Detail
						</div>
						<div className="card p-4 mt-4">
							<div className="d-flex ">
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
											? "font-roboto fw-700  px-2 fs-18 pointer border-bottom border-3 border-primary"
											: "font-roboto fw-700  px-2 fs-18 pointer"
									}
									onClick={() => setTab("profile")}
								>
									Profile
								</div>
							</div>
							{tab === "home" ? (
								<>
									<div className="row mt-5">
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
										<div className="col  font-inter fw-400 fs-16">
											<p>Thya Septiani</p>
											<p>Lato_Lato</p>
											<p>latolato@gmail.com</p>
											<p>081234567890</p>
											<p className="text-success">Active</p>
										</div>
									</div>
									<div className="d-flex mt-4">
										<div className="btn btn-primary px-4">
											<p
												className="p-0 m-0 font-inter fs-18"
												onClick={() => navigate("/user-list")}
											>
												Kembali
											</p>
										</div>
									</div>
								</>
							) : (
								<>
									<img src={img_people} alt="" className="img-fluid w-25 ms-4 mt-5" />
									<img
										src={img_ktp}
										alt=""
										className="img-fluid w-50 ms-3 mt-3"
									/>
									<div className="row ms-4 mt-3">
										<div className="col-2">
											<p className="font-inter fs-16">
												ID Card <span className="text-danger">*</span>
											</p>
											<p className="font-inter fs-16">
												ID Number <span className="text-danger">*</span>
											</p>
											<p className="font-inter fs-16">
												Expired Date <span className="text-danger">*</span>
											</p>
										</div>
										<div className="col">
											<p className="font-inter fs-16">KTP</p>
											<p className="font-inter fs-16">1212123665895654552</p>
											<p className="font-inter fs-16">25-25-2022</p>
										</div>
									</div>
									<div className="d-flex ms-4 mt-4">
										<div className="btn btn-primary px-4">
											<p
												className="p-0 m-0 font-inter fs-18"
												onClick={() => navigate("/user-list")}
											>
												Kembali
											</p>
										</div>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
