import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img_avatar from "../../assets/img/avatar.png";
import { resetDemo } from "../../data/initStorage";

export default function Sidebar({ onNavigate }) {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [collapse, setCollapse] = useState(true);

	const today = new Date().toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const go = (path) => {
		navigate(path);
		if (onNavigate) onNavigate();
	};

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
			<div className="px-3 border-top">
				<div className="font-inter fw-600 fs-18 my-3" style={{ color: "#A9A9A9" }}>
					User Management
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/dashboard")}
				>
					<p className={pathname === "/dashboard" ? "mb-0 text-primary fw-bold" : "mb-0"}>
						Dashboard
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/user-list")}
				>
					<p
						className={
							pathname === "/user-list" || pathname === "/user-list/account"
								? "mb-0 text-primary fw-bold"
								: "mb-0"
						}
					>
						User
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/user-admin")}
				>
					<p
						className={
							pathname === "/user-admin" || pathname === "/user-admin/account"
								? "mb-0 text-primary fw-bold"
								: "mb-0"
						}
					>
						User Admin
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/role-permission")}
				>
					<p
						className={
							pathname === "/role-permission" ? "mb-0 text-primary fw-bold" : "mb-0"
						}
					>
						Permission
					</p>
				</div>

				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/kyc-verification")}
				>
					<p
						className={
							pathname === "/kyc-verification" ? "mb-0 text-primary fw-bold" : "mb-0"
						}
					>
						Approval KYC Verification
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/kyc-video")}
				>
					<p className={pathname === "/kyc-video" ? "mb-0 text-primary fw-bold" : "mb-0"}>
						Approval KYC Video
					</p>
				</div>
				<hr className="my-4" />
			</div>
			<div className="px-3 mt-3">
				<div className="font-inter fw-600 fs-18 my-3" style={{ color: "#A9A9A9" }}>
					Master Data
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/refferal-point")}
				>
					<p
						className={
							pathname === "/refferal-point" ? "mb-0 text-primary fw-bold" : "mb-0"
						}
					>
						Refferal Point
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/achievement-point")}
				>
					<p
						className={
							pathname === "/achievement-point" ? "mb-0 text-primary fw-bold" : "mb-0"
						}
					>
						Achievement Point
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/reward-point")}
				>
					<p
						className={
							pathname === "/reward-point" ? "mb-0 text-primary fw-bold" : "mb-0"
						}
					>
						Reward
					</p>
				</div>
				<hr className="my-4" />
			</div>
			<div className="px-3 mt-3">
				<div className="font-inter fw-600 fs-18 my-3" style={{ color: "#A9A9A9" }}>
					Other
				</div>
				{collapse ? (
					<>
						<div
							className="font-inter fw-600 fs-16 text-muted my-3 pointer"
							onClick={() => setCollapse(false)}
						>
							<p
								className={
									pathname === "/app-package" ||
									pathname === "/activation-key" ||
									pathname === "/crystal"
										? "mb-0 text-primary fw-bold"
										: "mb-0"
								}
							>
								Package Purchase
							</p>
						</div>
						<div
							className="font-inter fw-600 fs-16 text-muted my-3 ms-3 pointer"
							onClick={() => go("/app-package")}
						>
							<p
								className={
									pathname === "/app-package"
										? "mb-0 text-primary fw-bold"
										: "mb-0"
								}
							>
								- App Package
							</p>
						</div>
						<div
							className="font-inter fw-600 fs-16 text-muted my-3 ms-3 pointer"
							onClick={() => go("/activation-key")}
						>
							<p
								className={
									pathname === "/activation-key"
										? "mb-0 text-primary fw-bold"
										: "mb-0"
								}
							>
								- Activation Key
							</p>
						</div>
						<div
							className="font-inter fw-600 fs-16 text-muted my-3 ms-3 pointer"
							onClick={() => go("/crystal")}
						>
							<p
								className={
									pathname === "/crystal" ? "mb-0 text-primary fw-bold" : "mb-0"
								}
							>
								- Crystal
							</p>
						</div>
					</>
				) : (
					<>
						<div
							className="font-inter fw-600 fs-16 text-muted my-3 pointer"
							onClick={() => setCollapse(true)}
						>
							<p
								className={
									pathname === "/app-package"
										? "mb-0 text-primary fw-bold"
										: "mb-0"
								}
							>
								Package Purchase
							</p>
						</div>
					</>
				)}

				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/purchase-history")}
				>
					<p
						className={
							pathname === "/purchase-history" ? "mb-0 text-primary fw-bold" : "mb-0"
						}
					>
						Package Purchase History
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/point-cashout")}
				>
					<p
						className={
							pathname === "/point-cashout" ? "mb-0 text-primary fw-bold" : "mb-0"
						}
					>
						Point Cashout Approval
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/payment-approval")}
				>
					<p
						className={
							pathname === "/payment-approval" ? "mb-0 text-primary fw-bold" : "mb-0"
						}
					>
						Payment Approval
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/promotion-banner")}
				>
					<p
						className={
							pathname === "/promotion-banner" ? "mb-0 text-primary fw-bold" : "mb-0"
						}
					>
						Promotion Banner
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/support-center")}
				>
					<p
						className={
							pathname === "/support-center" ? "mb-0 text-primary fw-bold" : "mb-0"
						}
					>
						Our Support Content
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/shareable-content")}
				>
					<p
						className={
							pathname === "/shareable-content" ? "mb-0 text-primary fw-bold" : "mb-0"
						}
					>
						Shareable Content
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/point-summary")}
				>
					<p
						className={
							pathname === "/point-summary" ? "mb-0 text-primary fw-bold" : "mb-0"
						}
					>
						Point Summary
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/company-omzet")}
				>
					<p
						className={
							pathname === "/company-omzet" ? "mb-0 text-primary fw-bold" : "mb-0"
						}
					>
						Company Omzet Report
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/user-omzet")}
				>
					<p
						className={
							pathname === "/user-omzet" ? "mb-0 text-primary fw-bold" : "mb-0"
						}
					>
						User Omzet Report
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => go("/setting")}
				>
					<p className={pathname === "/setting" ? "mb-0 text-primary fw-bold" : "mb-0"}>
						Setting
					</p>
				</div>

				{/* Mobile: profile + reset (hidden on desktop navbar already has these) */}
				<div className="d-lg-none border-top pt-3 mt-2 mb-4">
					<div className="font-inter fw-600 fs-18 my-3" style={{ color: "#A9A9A9" }}>
						Account
					</div>
					<div className="d-flex align-items-center mb-3">
						<img
							src={img_avatar}
							alt="avatar"
							className="rounded-circle border me-2"
							style={{ width: 40, height: 40 }}
						/>
						<div>
							<div className="font-inter fw-600 fs-16">Welcome</div>
							<div className="font-inter fw-400 fs-12 text-muted">{today}</div>
						</div>
					</div>
					<div
						className="font-inter fw-600 fs-16 text-muted my-3 pointer"
						onClick={() => go("/dashboard")}
					>
						<p className="mb-0">Profile / Dashboard</p>
					</div>
					<div
						className="font-inter fw-600 fs-16 text-danger my-3 pointer"
						onClick={handleReset}
					>
						<p className="mb-0">Reset Demo</p>
					</div>
				</div>
			</div>
		</>
	);
}
