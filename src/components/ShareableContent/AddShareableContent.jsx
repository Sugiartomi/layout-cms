import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../Reusble/Layout";
import useLocalData from "../../hooks/useLocalData";
import { uid } from "../../data/storage";

export default function AddShareableContent() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const editId = searchParams.get("id");
	const [items, setItems] = useLocalData("shareableContent", []);
	const [form, setForm] = useState({
		title: "",
		type: "Image",
		status: "Active",
		image: "",
	});

	useEffect(() => {
		if (!editId) return;
		const existing = items.find((i) => i.id === editId);
		if (existing) {
			setForm({
				title: existing.title || "",
				type: existing.type || "Image",
				status: existing.status || "Active",
				image: existing.image || "",
			});
		}
	}, [editId, items]);

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
			setForm((prev) => ({
				...prev,
				image: String(reader.result || ""),
				title: prev.title || file.name,
				type: "Image",
			}));
		};
		reader.readAsDataURL(file);
	};

	const onSubmit = () => {
		const updatedAt = new Date().toISOString().slice(0, 10);
		const title = form.title || "Shareable content";
		if (editId) {
			setItems((prev) =>
				prev.map((i) =>
					i.id === editId
						? {
								...i,
								title,
								type: form.type,
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
					id: uid("sh"),
					title,
					type: form.type || "Image",
					status: form.status,
					image: form.image,
					updatedAt,
				},
			]);
		}
		navigate("/shareable-content");
	};

	return (
		<Layout>
			<div className="font-roboto fw-700 ms-2 mt-2" style={{ fontSize: 22 }}>
				Shareable Content {editId ? "- Edit" : "- Add"}
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
							<p>Title</p>
							<input
								type="text"
								className="form-control w-75"
								value={form.title}
								onChange={onChange("title")}
							/>
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
							<p className="ms-3 text-danger fs-12 mt-1">
								Actuating this options will hide other files
							</p>
						</div>
						<div className="d-flex justify-content-end mt-5">
							<div
								className="btn btn-secondary px-3"
								onClick={() => navigate("/shareable-content")}
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
