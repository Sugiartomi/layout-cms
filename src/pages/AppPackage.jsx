import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppPackageBuyModal from "../components/AppPackage/ModalBuyAppPackage";
import Layout from "../components/Reusble/Layout";
import useLocalData from "../hooks/useLocalData";
import { uid } from "../data/storage";

export default function AppPackage() {
	const navigate = useNavigate();
	const [packages, setPackages] = useLocalData("packages", {});
	const [, setPurchases] = useLocalData("purchases", []);
	const [, setPayments] = useLocalData("payments", []);
	const pkg = packages.appPackage || { price: 0, stock: 0 };
	const [qty, setQty] = useState(1);

	const handleBuy = () => {
		const quantity = Number(qty) || 0;
		if (quantity < 1 || quantity > (pkg.stock || 0)) {
			alert("Invalid quantity or insufficient stock.");
			return;
		}
		const amount = pkg.price * quantity;
		const invoice = `QT${Date.now()}`;
		const uniqueCode = Math.floor(100 + Math.random() * 900);
		const date = new Date().toISOString().slice(0, 10);
		const userName = "Admin Buyer";
		const purchaseId = uid("pur");
		const type = "App Package";

		setPackages((prev) => ({
			...prev,
			appPackage: {
				...prev.appPackage,
				stock: (prev.appPackage?.stock || 0) - quantity,
			},
		}));
		setPurchases((prev) => [
			{
				id: purchaseId,
				invoice,
				userName,
				type,
				qty: quantity,
				amount,
				uniqueCode,
				status: "Pending",
				date,
				proof: null,
			},
			...prev,
		]);
		setPayments((prev) => [
			{
				id: uid("pay"),
				invoice,
				name: userName,
				type,
				amount,
				status: "Pending",
				date,
				purchaseId,
			},
			...prev,
		]);
		navigate("/app-package/report");
	};

	return (
		<>
			<Layout>
				<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
					Package Purchase - App Package
				</div>
				<div className="row mt-5">
					<div className="col-5">
						<div className="card ps-4 h-100 gradient-blue">
							<div className="p-3">
								<div
									className="font-inter text-white"
									style={{ fontSize: 20, fontWeight: 400 }}
								>
									App Package
								</div>
								<div className="font-roboto text-white fs-48 fw-700">
									{(pkg.price || 0).toLocaleString("id-ID")}{" "}
									<span className="fs-16">IDR</span>
								</div>
								<div
									className="font-inter text-white fs-14 fw-400"
									style={{ marginTop: -10 }}
								>
									(Exclude PPN)
								</div>
								<div className="font-inter text-white mt-3 fs-14 fw-400">
									1. Capacity = IDR 100.000 per clicks
								</div>
								<div className="font-inter text-white fs-14 fw-400">
									2. 6 Basic Pairs
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100 d-flex justify-content-center">
							<div className="d-flex justify-content-center">
								<div className="d-flex">
									<div className="font-inter py-2 fs-16 fw-400">Quantity</div>
									<input
										type="number"
										className="form-control form-control-sm w-75 mx-3"
										min={1}
										max={pkg.stock || 0}
										value={qty}
										onChange={(e) => setQty(e.target.value)}
									/>
								</div>
								<div
									className="btn btn-success px-4"
									data-bs-toggle="modal"
									data-bs-target="#AppPackageBuyModal"
								>
									Buy
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
			<AppPackageBuyModal onConfirm={handleBuy} />
		</>
	);
}
