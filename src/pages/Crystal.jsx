import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Reusble/Layout";
import img_crystal from "../assets/img/crystal.png";
import CrystalBuyModal from "../components/Crystal/ModalBuyCrystal";
import useLocalData from "../hooks/useLocalData";
import { uid } from "../data/storage";

export default function Crystal() {
	const navigate = useNavigate();
	const [packages, setPackages] = useLocalData("packages", {});
	const [, setPurchases] = useLocalData("purchases", []);
	const [, setPayments] = useLocalData("payments", []);
	const pkg = packages.crystal || { price: 0, stock: 0 };
	const [qty, setQty] = useState(20);

	const handleBuy = () => {
		const quantity = Number(qty) || 0;
		if (quantity < 20 || quantity > (pkg.stock || 0)) {
			alert("Minimum 20 Crystal, or insufficient stock.");
			return;
		}
		const amount = pkg.price * quantity;
		const invoice = `QT${Date.now()}`;
		const uniqueCode = Math.floor(100 + Math.random() * 900);
		const date = new Date().toISOString().slice(0, 10);
		const userName = "Admin Buyer";
		const purchaseId = uid("pur");
		const type = "Crystal";

		setPackages((prev) => ({
			...prev,
			crystal: {
				...prev.crystal,
				stock: (prev.crystal?.stock || 0) - quantity,
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
		navigate("/crystal/report");
	};

	return (
		<>
			<Layout>
				<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
					Package Purchase - Crystal
				</div>
				<div className="row mt-5">
					<div className="col-5">
						<div className="card ps-4 gradient-grey h-100">
							<div className="p-3">
								<div className="d-flex align-items-center">
									<img
										src={img_crystal}
										className="img-fluid me-4 h-75"
										alt=""
									/>
									<div>
										<div
											className="font-inter text-dark"
											style={{ fontSize: 32, fontWeight: 400 }}
										>
											Crystal
										</div>
										<div className="font-inter text-dark my-2 fs-14 fw-400">
											1 Crystal hanya dapat dipakai satu kali, untuk
											mengurangi waktu cooldown 60 detik. (minimal
											pembelian 20 Crystal)
										</div>
										<div className="font-roboto text-dark fs-48 fw-700">
											{(pkg.price || 0).toLocaleString("id-ID")}{" "}
											<span className="fs-16">IDR</span>
										</div>
									</div>
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
										min={20}
										max={pkg.stock || 0}
										value={qty}
										onChange={(e) => setQty(e.target.value)}
									/>
								</div>
								<div
									className="btn btn-success px-4"
									data-bs-toggle="modal"
									data-bs-target="#CrystalBuyModal"
								>
									Buy
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
			<CrystalBuyModal onConfirm={handleBuy} />
		</>
	);
}
