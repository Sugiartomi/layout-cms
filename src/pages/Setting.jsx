import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";
import img_ktp from "../assets/img/ktp.svg";
import img_people from "../assets/img/people-1.svg";
import { InfoCircleFill } from "react-bootstrap-icons";

export default function Setting() {
	const navigate = useNavigate();
	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-2 pe-0 border-end">
						<Sidebar />
					</div>
					<div className="col p-4" style={{ backgroundColor: "#EDEDED" }}>
						<div className="font-roboto fw-700 p-2" style={{ fontSize: 22 }}>
							Setting
						</div>
						<div className="card p-4 mt-4 font-inter fs-16">
							<div className="row">
								<div className="col-4">
									<div className="d-flex align-items-center h-100">
										<div className="fw-700">footer_address</div>
										<div className="ms-3 text-primary">
											<InfoCircleFill/>
										</div>
									</div>
								</div>
								<div className="col-8">
									<input type="text" className="form-control shadow-none" placeholder="neo solo lt19" />
								
								</div>
							</div>
							<div className="row mt-3">
								<div className="col-4">
									<div className="d-flex align-items-center h-100">
										<div className="fw-700">help_desk_email</div>
										<div className="ms-3 text-primary">
											<InfoCircleFill/>
										</div>
									</div>
								</div>
								<div className="col-8">
									<input type="text" className="form-control shadow-none" placeholder="helpdeskemail@gmail.com" />
								
								</div>
							</div>
							<div className="row mt-3">
								<div className="col-4">
									<div className="d-flex align-items-center h-100">
										<div className="fw-700">help_desk_phone_number</div>
										<div className="ms-3 text-primary">
											<InfoCircleFill/>
										</div>
									</div>
								</div>
								<div className="col-8">
									<input type="text" className="form-control shadow-none" placeholder="081234567890" />
								
								</div>
							</div>
							<div className="row mt-3">
								<div className="col-4">
									<div className="d-flex align-items-center h-100">
										<div className="fw-700">rekening</div>
										<div className="ms-3 text-primary">
											<InfoCircleFill/>
										</div>
									</div>
								</div>
								<div className="col-8">
									<input type="text" className="form-control shadow-none" placeholder="BCA a/n Arbitgo 8274658725" />
								
								</div>
							</div>
							<div className="row mt-3">
								<div className="col-4">
									<div className="d-flex align-items-center h-100">
										<div className="fw-700">convert_point</div>
										<div className="ms-3 text-primary">
											<InfoCircleFill/>
										</div>
									</div>
								</div>
								<div className="col-8">
									<input type="text" className="form-control shadow-none" placeholder="2" />
								
								</div>
							</div>
							<div className="row mt-3">
								<div className="col-4">
									<div className="d-flex align-items-center h-100">
										<div className="fw-700">logo</div>
										<div className="ms-3 text-primary">
											<InfoCircleFill/>
										</div>
									</div>
								</div>
								<div className="col-8">
									<input type="file" className="form-control shadow-none" />
								
								</div>
							</div>
							<div className="row mt-3">
								<div className="col-4">
									<div className="d-flex align-items-center h-100">
										<div className="fw-700">logo_footer</div>
										<div className="ms-3 text-primary">
											<InfoCircleFill/>
										</div>
									</div>
								</div>
								<div className="col-8">
									<input type="file" className="form-control shadow-none" />
								
								</div>
							</div>
							<div className="row mt-3">
								<div className="col-4">
									<div className="d-flex align-items-center h-100">
										<div className="fw-700">splash_screen_apk</div>
										<div className="ms-3 text-primary">
											<InfoCircleFill/>
										</div>
									</div>
								</div>
								<div className="col-8">
									<input type="file" className="form-control shadow-none" />
								
								</div>
							</div>
							<div className="row mt-3">
								<div className="col-4">
									<div className="d-flex align-items-center h-100">
										<div className="fw-700">color_dark</div>
										<div className="ms-3 text-primary">
											<InfoCircleFill/>
										</div>
									</div>
								</div>
								<div className="col-8">
									<input type="color" className="form-control shadow-none" style={{ width : "10%"}}/>
								
								</div>
							</div>
							<div className="row mt-3">
								<div className="col-4">
									<div className="d-flex align-items-center h-100">
										<div className="fw-700">color_light</div>
										<div className="ms-3 text-primary">
											<InfoCircleFill/>
										</div>
									</div>
								</div>
								<div className="col-8">
									<input type="color" className="form-control shadow-none" style={{ width : "10%"}}/>
								
								</div>
							</div>
						</div>
						<div className="btn mt-3" style={{ backgroundColor : "#2752E7", float : "right", width : "15%"}}><p className="mb-0 font-inter text-white">submit</p></div>
					</div>
				</div>
			</div>
		</>
	);
}
