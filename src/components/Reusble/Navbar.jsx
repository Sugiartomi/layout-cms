import { Bell } from "react-bootstrap-icons";
import img_logo from "../../logo.svg";
import img_bell from "../../assets/img/bell.png";
import img_arbitgo from "../../assets/img/arbitgo-1.png";
import img_avatar from "../../assets/img/avatar.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Notifications from "./Notification";

export default function Navbar() {
	const navigate = useNavigate();
	const [data, setData] = useState([
		// {
		// 	image: img_avatar,
		// 	message: "Kameshwaran S had shared a feedback with you.",
		// 	detailPage: "/",
		// },
		// {
		// 	image: img_avatar,
		// 	message: "Kameshwaran S had shared a feedback with you.",
		// 	detailPage: "/",
		// },
		{
			image: img_logo,
			message: "withdrawal request has been approved ( ID : UH75JGFDU ).",
			detailPage: "/profile",
			// receivedTime: "12h ago",
		},
		{
			image: img_avatar,
			message: (
				<p className="fs-16">
					Kameshwaran S had shared a <span style={{ color: "#7ac2fa" }}>feedback</span>{" "}
					with you.
				</p>
			),
			detailPage: "/",
		},
		{
			image: "https://imgs.search.brave.com/xoiuBYa9Hjew8o50pO9qYzhtwTNzS-8QuXGO6QoVWco/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYXZhdGFycy05/OS82Mi9hdmF0YXIt/MzcwLTQ1NjMyMi01/MTIucG5n",
			message: (
				<p className="fs-16">
					John Samuel had shared a <span style={{ color: "#7ac2fa" }}>feedback</span> with
					you.
				</p>
			),
			detailPage: "/",
		},
		{
			image: "https://imgs.search.brave.com/ptPTAGC-GhFAKBDHmplJ6fFH2jzWRRl6YjbYM5ipytw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5na2l0LmNvbS9w/bmcvZnVsbC8xMTUt/MTE1MDM0Ml91c2Vy/LWF2YXRhci1pY29u/LWljb25vcy1kZS1t/dWplcmVzLWEtY29s/b3IucG5n",
			message: (
				<p className="fs-16">
					Sarah Kameela had shared a <span style={{ color: "#7ac2fa" }}>feedback</span>{" "}
					with you.
				</p>
			),
			detailPage: "/",
		},
	]);
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-2 p-0 border-end">
						<div
							className="d-flex justify-content-center align-items-center"
							style={{ height: 80 }}
						>
							<img src={img_arbitgo} alt="" className="img-fluid w-75" />
						</div>
					</div>
					<div className="col p-0 border-start">
						<div className="d-flex justify-content-between align-items-center h-100">
							<div className="ms-3">
								<div className="font-inter fw-600 fs-18">Welcome</div>
								<div className="font-inter fw-400 fs-12">7th of August, 2023</div>
							</div>
							<div className="d-flex align-items-center">
								<form className="d-flex" role="search">
									<input
										className="form-control me-2"
										type="search"
										placeholder="Search"
										aria-label="Search"
									/>
								</form>
								<div className="mx-2 mt-2">
									<Notifications
										icon={img_bell}
										data={data}
										header={{
											title: "Notifications",
											option: {
												text: "View All",
												onClick: () => console.log("Clicked"),
											},
										}}
										markAsRead={(data) => {
											console.log(data);
										}}
									/>
								</div>

								<div className="d-flex justify-content-end me-4">
									<li className="nav-item dropdown  list-unstyled pointer">
										<img
											src={img_avatar}
											style={{ width: 35, height: 35 }}
											className="img-fluid p-1 rounded-circle border nav-link"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										/>
										<ul className="dropdown-menu  list-unstyled">
											{/* <li>
												<a
													className="dropdown-item pointer"
													onClick={() => navigate("/my-profile")}
												>
													Profil Sayaaaa
												</a>
											</li>
											<li>
												<a
													className="dropdown-item pointer"
													onClick={() => navigate("/security")}
												>
													Keamanan
												</a>
											</li>
											<li>
												<a
													className="dropdown-item pointer"
													onClick={() => navigate("/reference")}
												>
													Referensi
												</a>
											</li>
											<li>
												<a
													className="dropdown-item pointer"
													onClick={() => navigate("/reward")}
												>
													Reward
												</a>
											</li>
											<li>
												<hr className="dropdown-divider" />
											</li> */}
											<li>
												<a
													className="dropdown-item pointer"
													onClick={() => navigate("/")}
												>
													Logout
												</a>
											</li>
										</ul>
									</li>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
