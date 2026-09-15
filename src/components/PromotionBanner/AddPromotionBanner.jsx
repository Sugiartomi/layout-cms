import { useEffect, useState } from "react";
import { InfoCircleFill } from "react-bootstrap-icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../Reusble/Layout";
import useLocalData from "../../hooks/useLocalData";
import { uid } from "../../data/storage";

export default function AddPromotionBanner() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const editId = searchParams.get("id");
	const [banners, setBanners] = useLocalData("banners", []);
	const [form, setForm] = useState({
		title: "",
		status: "Active",
		startDate: "",
		endDate: "",
		image: "",
	});

	useEffect(() => {
		if (!editId) return;
		const existing = banners.find((b) => b.id === editId);
		if (existing) {
			setForm({
				title: existing.title || "",
				status: existing.status || "Active",
				startDate: existing.startDate || "",
				endDate: existing.endDate || "",
				image: existing.image || "",
			});
		}
	}, [editId, banners]);

	const onChange = (field) => (e) => {
		const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
		if (field === "status") {
			setForm((prev) => ({ ...prev, status: value ? "Active" : "Inactive" }));
			return;
		}
		setForm((prev) => ({ ...prev, [field]: value }));
	};

	const onFile = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			setForm((prev) => ({ ...prev, image: String(reader.result || "") }));
		};
		reader.readAsDataURL(file);
	};

	const onSubmit = () => {
		if (!form.title) {
			alert("Please fill title / type");
			return;
		}
		if (editId) {
			setBanners((prev) =>
				prev.map((b) =>
					b.id === editId
						? {
								...b,
								title: form.title,
								status: form.status,
								startDate: form.startDate,
								endDate: form.endDate,
								image: form.image,
						  }
						: b
				)
			);
		} else {
			setBanners((prev) => [
				...prev,
				{
					id: uid("ban"),
					title: form.title,
					status: form.status,
					startDate: form.startDate || new Date().toISOString().slice(0, 10),
					endDate: form.endDate || new Date().toISOString().slice(0, 10),
					image: form.image,
				},
			]);
		}
		navigate("/promotion-banner");
	};

	return (
		<Layout>
			<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
				Promotion Banner {editId ? "- Edit" : "-Add"}
			</div>
			<div className="row mt-3">
				<div className="col">
					<div className="card p-4 font-inter">
						<div className="d-flex justify-content-between">
							<p>
								Images <span className="text-danger">*</span>
							</p>
							<input type="file" className="form-control w-75" onChange={onFile} />
						</div>
						<div className="d-flex justify-content-between mt-3">
							<p>
								Type <span className="text-danger">*</span>
							</p>
							<select
								className="form-select w-75"
								aria-label="Default select example"
								value={
									["Carousel", "New Year Promo", "Referral Bonus", "Centre Image"].includes(
										form.title
									)
										? form.title
										: form.title
										? "__custom__"
										: ""
								}
								onChange={(e) => {
									const v = e.target.value;
									if (v === "__custom__") return;
									setForm((prev) => ({ ...prev, title: v }));
								}}
							>
								<option value="">Open this select menu</option>
								<option value="Carousel">Carousel</option>
								<option value="New Year Promo">New Year Promo</option>
								<option value="Referral Bonus">Referral Bonus</option>
								<option value="Centre Image">Centre Image</option>
								{form.title &&
									![
										"Carousel",
										"New Year Promo",
										"Referral Bonus",
										"Centre Image",
									].includes(form.title) && (
										<option value="__custom__">{form.title}</option>
									)}
							</select>
						</div>
						<div className="d-flex mt-3">
							<p className="me-5">
								Show <span className="text-danger">*</span>
							</p>
							<div className="form-check form-switch ms-5">
								<input
									className="form-check-input  border border-secondary border-2"
									type="checkbox"
									role="switch"
									id="flexSwitchCheckChecked"
									checked={form.status === "Active"}
									onChange={onChange("status")}
								/>
							</div>
						</div>
						<div className="d-flex justify-content-end mt-5">
							<div
								className="btn btn-secondary px-3"
								onClick={() => navigate("/promotion-banner")}
							>
								Back
							</div>
							<div className="btn btn-primary px-3 ms-2" onClick={onSubmit}>
								Submit
							</div>
						</div>
					</div>
				</div>
				<div className="col-5">
					<div
						className="card p-3 border-0 text-primary"
						style={{ backgroundColor: "#DEEBFF" }}
					>
						<div className="row">
							<div className="col-2 text-center">
								<InfoCircleFill className="text-center" style={{ fontSize: 22 }} />
							</div>
							<div className="col">
								<div className="font-inter fw-600 text-dark">Info</div>
								<ul className="font-inter fw-400 fs-14">
									<li>
										<a>Only jpg, jpeg and png images are acceted</a>
									</li>
									<li>
										<a>Maximum file size 5 Mb</a>
									</li>
									<li>
										<a>Suggested image centre image - 1000x600</a>
									</li>
									<li>
										<a>Carousel - 400x200</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
