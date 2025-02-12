import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	console.log(pathname);
	const [collapse, setCollapse] = useState(true);
	return (
		<>
			<div className="px-3 border-top">
				<div className="font-inter fw-600 fs-18 my-3" style={{ color: "#A9A9A9" }}>
					User Management
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => navigate("/dashboard")}
				>
					<p className={pathname === "/dashboard" ? "mb-0 text-primary fw-bold" : "mb-0"}>
						Dashboard
					</p>
				</div>
				<div
					className="font-inter fw-600 fs-16 text-muted my-3 pointer"
					onClick={() => navigate("/user-list")}
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
					onClick={() => navigate("/user-admin")}
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
					onClick={() => navigate("/role-permission")}
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
					onClick={() => navigate("/kyc-verification")}
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
					onClick={() => navigate("/kyc-video")}
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
					onClick={() => navigate("/refferal-point")}
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
					onClick={() => navigate("/achievement-point")}
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
					onClick={() => navigate("/reward-point")}
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
							onClick={() => navigate("/app-package")}
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
							onClick={() => navigate("/activation-key")}
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
							onClick={() => navigate("/crystal")}
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
					onClick={() => navigate("/purchase-history")}
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
					onClick={() => navigate("/point-cashout")}
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
					onClick={() => navigate("/payment-approval")}
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
					onClick={() => navigate("/promotion-banner")}
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
					onClick={() => navigate("/support-center")}
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
					onClick={() => navigate("/shareable-content")}
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
					onClick={() => navigate("/point-summary")}
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
					onClick={() => navigate("/company-omzet")}
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
					onClick={() => navigate("/user-omzet")}
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
					onClick={() => navigate("/setting")}
				>
					<p className={pathname === "/setting" ? "mb-0 text-primary fw-bold" : "mb-0"}>
						Setting
					</p>
				</div>
			</div>
		</>
	);
}
