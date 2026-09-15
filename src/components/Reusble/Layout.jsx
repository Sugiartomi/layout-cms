import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children, contentClassName = "p-4" }) {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<>
			<Navbar onMenuToggle={() => setMobileOpen((v) => !v)} />
			<div className="container-fluid px-0">
				<div className="row g-0">
					{/* Desktop sidebar */}
					<div className="col-lg-2 pe-0 border-end d-none d-lg-block">
						<Sidebar />
					</div>

					{/* Mobile off-canvas sidebar */}
					{mobileOpen && (
						<>
							<div className="sidebar-panel sidebar-open d-lg-none">
								<Sidebar onNavigate={() => setMobileOpen(false)} />
							</div>
							<div
								className="sidebar-backdrop d-lg-none"
								onClick={() => setMobileOpen(false)}
							/>
						</>
					)}

					<div
						className={`col-12 col-lg-10 ${contentClassName} main-content-panel`}
						style={{
							backgroundColor: "#EDEDED",
							minHeight: "calc(100vh - 80px)",
						}}
					>
						{children}
					</div>
				</div>
			</div>
		</>
	);
}
