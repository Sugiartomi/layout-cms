import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../Reusble/Layout";
import useLocalData from "../../hooks/useLocalData";
import { uid } from "../../data/storage";

export default function AddSupportCenter() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const editId = searchParams.get("id");
	const [items, setItems] = useLocalData("supportContent", []);
	const [form, setForm] = useState({
		title: "",
		description: "",
		category: "Guide",
		status: "Published",
		image: "",
	});

	useEffect(() => {
		if (!editId) return;
		const existing = items.find((i) => i.id === editId);
		if (existing) {
			setForm({
				title: existing.title || "",
				description: existing.description || existing.category || "",
				category: existing.category || "Guide",
				status: existing.status || "Published",
				image: existing.image || "",
			});
		}
	}, [editId, items]);

	const onChange = (field) => (e) => {
		const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
		if (field === "status") {
			setForm((prev) => ({
				...prev,
				status: value ? "Published" : "Draft",
			}));
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
			alert("Please fill title");
			return;
		}
		const updatedAt = new Date().toISOString().slice(0, 10);
		if (editId) {
			setItems((prev) =>
				prev.map((i) =>
					i.id === editId
						? {
								...i,
								title: form.title,
								description: form.description,
								category: form.category || form.description,
								status: form.status,
								image: form.image,
								updatedAt,
						  }
						: i
				)
			);
		} else {
			setItems((prev) => [
				...prev,
				{
					id: uid("sup"),
					title: form.title,
					description: form.description,
					category: form.category || form.description || "Guide",
					status: form.status,
					image: form.image,
					updatedAt,
				},
			]);
		}
		navigate("/support-center");
	};

	return (
		<Layout>
			<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
				Our Support Center {editId ? "- Edit" : "- Add"}
			</div>
			<div className="row mt-3">
				<div className="col-7">
					<div className="card p-4 font-inter">
						<div className="d-flex justify-content-between">
							<p>
								Images <span className="text-danger">*</span>
							</p>
							<input type="file" className="form-control w-75" onChange={onFile} />
						</div>
						<div className="d-flex justify-content-between mt-3">
							<p>
								Title <span className="text-danger">*</span>
							</p>
							<input
								type="text"
								className="form-control w-75"
								value={form.title}
								onChange={onChange("title")}
							/>
						</div>
						<div className="d-flex justify-content-between mt-3">
							<p>
								Description <span className="text-danger">*</span>
							</p>
							<textarea
								type="text"
								className="form-control w-75"
								value={form.description}
								onChange={onChange("description")}
							/>
						</div>
						<div className="d-flex mt-3">
							<p className="me-5">
								Show <span className="text-danger">*</span>
							</p>
							<div className="form-check form-switch ms-5">
								<input
									className="form-check-input border border-secondary border-2"
									type="checkbox"
									role="switch"
									id="flexSwitchCheckChecked"
									checked={
										form.status === "Published" || form.status === "Active"
									}
									onChange={onChange("status")}
								/>
							</div>
						</div>
						<div className="d-flex justify-content-end mt-5">
							<div
								className="btn btn-secondary px-3"
								onClick={() => navigate("/support-center")}
							>
								Back
							</div>
							<div className="btn btn-primary px-3 ms-2" onClick={onSubmit}>
								Submit
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
