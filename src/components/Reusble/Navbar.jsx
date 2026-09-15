import img_logo from "../../logo.svg";
import img_bell from "../../assets/img/bell.png";
import img_arbitgo from "../../assets/img/arbitgo-1.png";
import img_avatar from "../../assets/img/avatar.png";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import Notifications from "./Notification";
import useLocalData from "../../hooks/useLocalData";
import { List, ArrowCounterclockwise } from "react-bootstrap-icons";
import { resetDemo } from "../../data/initStorage";

export default function Navbar({ onMenuToggle }) {
	const navigate = useNavigate();
	const [notifications, setNotifications] = useLocalData("notifications", []);
	const [search, setSearch] = useState("");

	const data = useMemo(
		() =>
			notifications.map((n) => ({
				image: n.id === "notif_1" ? img_logo : img_avatar,
				message: <p className="fs-16 mb-0">{n.message}</p>,
				detailPage: n.detailPage || "/dashboard",
			})),
		[notifications]
	);

	const today = new Date().toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const handleReset = () => {
		if (
			window.confirm(
				"Reset demo? Local storage will be cleared and the intro bumper will play again."
			)
		) {
			resetDemo();
		}
	};

	return (
		<>
			<div className="container-fluid px-0">
				<div className="row g-0">
					<div className="col-lg-2 p-0 border-end d-none d-lg-block">
						<div
							className="d-flex justify-content-center align-items-center"
							style={{ height: 80 }}
						>
							<img
								src={img_arbitgo}
								alt="Arbitgo"
								className="img-fluid w-75 pointer"
								onClick={() => navigate("/dashboard")}
							/>
						</div>
					</div>
					<div className="col-12 col-lg-10 p-0 border-start">
						{/* Desktop navbar */}
						<div
							className="d-none d-lg-flex justify-content-between align-items-center h-100 px-0"
							style={{ minHeight: 80 }}
						>
							<div className="ms-3">
								<div className="font-inter fw-600 fs-18">Welcome</div>
								<div className="font-inter fw-400 fs-12">{today}</div>
							</div>
							<div className="d-flex align-items-center">
								<button
									type="button"
									className="btn btn-sm btn-outline-secondary me-2 d-flex align-items-center"
									title="Reset demo data & replay bumper"
									onClick={handleReset}
								>
									<ArrowCounterclockwise className="me-1" />
									Reset Demo
								</button>
								<form
									className="d-flex"
									role="search"
									onSubmit={(e) => {
										e.preventDefault();
										if (search.trim()) {
											navigate(
												`/user-list?q=${encodeURIComponent(search.trim())}`
											);
										}
									}}
								>
									<input
										className="form-control me-2"
										type="search"
										placeholder="Search"
										aria-label="Search"
										value={search}
										onChange={(e) => setSearch(e.target.value)}
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
												onClick: () => navigate("/dashboard"),
											},
										}}
										markAsRead={(item) => {
											setNotifications((prev) =>
												prev.map((n) =>
													n.message === item?.message ||
													(typeof item?.message === "object" &&
														n.message.includes("feedback"))
														? { ...n, read: true }
														: n
												)
											);
										}}
									/>
								</div>
								<div className="d-flex justify-content-end me-4">
									<li className="nav-item dropdown list-unstyled pointer">
										<img
											src={img_avatar}
											style={{ width: 35, height: 35 }}
											className="img-fluid p-1 rounded-circle border nav-link"
											data-bs-toggle="dropdown"
											aria-expanded="false"
											alt="avatar"
										/>
										<ul className="dropdown-menu dropdown-menu-end list-unstyled">
											<li>
												<a
													className="dropdown-item pointer"
													onClick={() => navigate("/dashboard")}
												>
													Dashboard
												</a>
											</li>
											<li>
												<a
													className="dropdown-item pointer"
													onClick={handleReset}
												>
													Reset Demo
												</a>
											</li>
										</ul>
									</li>
								</div>
							</div>
						</div>

						{/* Mobile navbar: burger · logo · bell only */}
						<div
							className="d-flex d-lg-none justify-content-between align-items-center px-2"
							style={{ minHeight: 64 }}
						>
							<div className="d-flex align-items-center">
								<button
									type="button"
									className="btn btn-sm me-2 border"
									aria-label="Open menu"
									onClick={onMenuToggle}
								>
									<List size={20} />
								</button>
								<img
									src={img_arbitgo}
									alt="Arbitgo"
									className="img-fluid pointer"
									style={{ height: 32, maxWidth: 140, objectFit: "contain" }}
									onClick={() => navigate("/dashboard")}
								/>
							</div>
							<div className="d-flex align-items-center ag-notif-mobile">
								<Notifications
									icon={img_bell}
									data={data}
									width="100%"
									header={{
										title: "Notifications",
										option: {
											text: "View All",
											onClick: () => navigate("/dashboard"),
										},
									}}
									markAsRead={(item) => {
										setNotifications((prev) =>
											prev.map((n) =>
												n.message === item?.message ||
												(typeof item?.message === "object" &&
													n.message.includes("feedback"))
													? { ...n, read: true }
													: n
											)
										);
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
