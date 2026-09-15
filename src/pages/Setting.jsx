import { useEffect, useState } from "react";
import { InfoCircleFill } from "react-bootstrap-icons";
import Layout from "../components/Reusble/Layout";
import useLocalData from "../hooks/useLocalData";

const defaultSettings = {
	companyName: "Arbitgo",
	bankName: "BCA",
	bankAccount: "1234567890",
	bankHolder: "Arbitgo Inc",
	email: "support@arbitgo.com",
	phone: "+1 800 555 0000",
	address: "100 Market Street, San Francisco, CA",
	convertPoint: "2",
	colorDark: "#000000",
	colorLight: "#ffffff",
	logo: "",
	logoFooter: "",
	splashScreen: "",
};

export default function Setting() {
	const [settings, save] = useLocalData("settings", defaultSettings);
	const [form, setForm] = useState(() => ({ ...defaultSettings, ...settings }));

	useEffect(() => {
		setForm((prev) => ({ ...defaultSettings, ...prev, ...settings }));
	}, [settings]);

	const onChange = (field) => (e) => {
		setForm((prev) => ({ ...prev, [field]: e.target.value }));
	};

	const onFile = (field) => (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			setForm((prev) => ({ ...prev, [field]: String(reader.result || "") }));
		};
		reader.readAsDataURL(file);
	};

	const rekeningValue =
		form.rekening ??
		`${form.bankName || ""} a/n ${form.bankHolder || ""} ${form.bankAccount || ""}`.trim();

	const onRekeningChange = (e) => {
		setForm((prev) => ({ ...prev, rekening: e.target.value }));
	};

	const onSubmit = () => {
		const rekening = rekeningValue;
		const match = rekening.match(/^(\S+)\s+a\/n\s+(.+?)\s+(\S+)$/i);
		save({
			...settings,
			...form,
			companyName: form.companyName || settings.companyName || "Arbitgo",
			address: form.address,
			email: form.email,
			phone: form.phone,
			rekening,
			bankName: match ? match[1] : form.bankName,
			bankHolder: match ? match[2] : form.bankHolder,
			bankAccount: match ? match[3] : form.bankAccount,
		});
		alert("Settings saved");
	};

	return (
		<Layout>
			<div className="font-roboto fw-700 p-2" style={{ fontSize: 22 }}>
				Setting
			</div>
			<div className="card p-4 mt-4 font-inter fs-16">
				<div className="row">
					<div className="col-4">
						<div className="d-flex align-items-center h-100">
							<div className="fw-700">footer_address</div>
							<div className="ms-3 text-primary">
								<InfoCircleFill />
							</div>
						</div>
					</div>
					<div className="col-8">
						<input
							type="text"
							className="form-control shadow-none"
							placeholder="neo solo lt19"
							value={form.address || ""}
							onChange={onChange("address")}
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-4">
						<div className="d-flex align-items-center h-100">
							<div className="fw-700">help_desk_email</div>
							<div className="ms-3 text-primary">
								<InfoCircleFill />
							</div>
						</div>
					</div>
					<div className="col-8">
						<input
							type="text"
							className="form-control shadow-none"
							placeholder="helpdeskemail@gmail.com"
							value={form.email || ""}
							onChange={onChange("email")}
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-4">
						<div className="d-flex align-items-center h-100">
							<div className="fw-700">help_desk_phone_number</div>
							<div className="ms-3 text-primary">
								<InfoCircleFill />
							</div>
						</div>
					</div>
					<div className="col-8">
						<input
							type="text"
							className="form-control shadow-none"
							placeholder="081234567890"
							value={form.phone || ""}
							onChange={onChange("phone")}
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-4">
						<div className="d-flex align-items-center h-100">
							<div className="fw-700">rekening</div>
							<div className="ms-3 text-primary">
								<InfoCircleFill />
							</div>
						</div>
					</div>
					<div className="col-8">
						<input
							type="text"
							className="form-control shadow-none"
							placeholder="BCA a/n Arbitgo 8274658725"
							value={rekeningValue}
							onChange={onRekeningChange}
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-4">
						<div className="d-flex align-items-center h-100">
							<div className="fw-700">convert_point</div>
							<div className="ms-3 text-primary">
								<InfoCircleFill />
							</div>
						</div>
					</div>
					<div className="col-8">
						<input
							type="text"
							className="form-control shadow-none"
							placeholder="2"
							value={form.convertPoint || ""}
							onChange={onChange("convertPoint")}
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-4">
						<div className="d-flex align-items-center h-100">
							<div className="fw-700">logo</div>
							<div className="ms-3 text-primary">
								<InfoCircleFill />
							</div>
						</div>
					</div>
					<div className="col-8">
						<input
							type="file"
							className="form-control shadow-none"
							onChange={onFile("logo")}
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-4">
						<div className="d-flex align-items-center h-100">
							<div className="fw-700">logo_footer</div>
							<div className="ms-3 text-primary">
								<InfoCircleFill />
							</div>
						</div>
					</div>
					<div className="col-8">
						<input
							type="file"
							className="form-control shadow-none"
							onChange={onFile("logoFooter")}
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-4">
						<div className="d-flex align-items-center h-100">
							<div className="fw-700">splash_screen_apk</div>
							<div className="ms-3 text-primary">
								<InfoCircleFill />
							</div>
						</div>
					</div>
					<div className="col-8">
						<input
							type="file"
							className="form-control shadow-none"
							onChange={onFile("splashScreen")}
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-4">
						<div className="d-flex align-items-center h-100">
							<div className="fw-700">color_dark</div>
							<div className="ms-3 text-primary">
								<InfoCircleFill />
							</div>
						</div>
					</div>
					<div className="col-8">
						<input
							type="color"
							className="form-control shadow-none"
							style={{ width: "10%" }}
							value={form.colorDark || "#000000"}
							onChange={onChange("colorDark")}
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-4">
						<div className="d-flex align-items-center h-100">
							<div className="fw-700">color_light</div>
							<div className="ms-3 text-primary">
								<InfoCircleFill />
							</div>
						</div>
					</div>
					<div className="col-8">
						<input
							type="color"
							className="form-control shadow-none"
							style={{ width: "10%" }}
							value={form.colorLight || "#ffffff"}
							onChange={onChange("colorLight")}
						/>
					</div>
				</div>
			</div>
			<div
				className="btn mt-3"
				style={{ backgroundColor: "#2752E7", float: "right", width: "15%" }}
				onClick={onSubmit}
			>
				<p className="mb-0 font-inter text-white">submit</p>
			</div>
		</Layout>
	);
}
