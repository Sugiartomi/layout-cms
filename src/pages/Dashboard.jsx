import { Bell } from "react-bootstrap-icons";
import img_arbitgo from "../assets/img/arbitgo-1.png";
import img_avatar from "../assets/img/avatar.png";
import img_lock from "../assets/img/lock.svg";
import img_people from "../assets/img/people-dashboard.svg";
import img_share from "../assets/img/share.svg";
import img_chart from "../assets/img/chart.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";
import AreaChart from "../components/Dashboard/AreaChart";
import { forwardRef, useState } from "react";
import PieChart from "../components/Dashboard/PieChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function Dashboard() {
	const navigate = useNavigate();
	const [chart, setChart] = useState("assets");
	const arr = [
		{
			name: "Ahmad",
			total: "5.000.000",
			escrow: 4,
			status: "Waiting",
			action: "Approved",
		},
		{
			name: "Arief",
			total: "75.000.000",
			escrow: 5,
			status: "Success",
			action: "Done",
		},
		{
			name: "Tora",
			total: "6.000.000",
			escrow: 3,
			status: "Success",
			action: "Done",
		},
		{
			name: "Rihad",
			total: "8.000.000",
			escrow: 4,
			status: "Success",
			action: "Done",
		},
		{
			name: "Sena",
			total: "45.000.000",
			escrow: 5,
			status: "Success",
			action: "Done",
		},
		{
			name: "Agus",
			total: "5.000.000",
			escrow: 3,
			status: "Success",
			action: "Done",
		},
		{
			name: "Hidayat",
			total: "3.500.000",
			escrow: 9,
			status: "Success",
			action: "Done",
		},
		{
			name: "Fadli",
			total: "11.500.000",
			escrow: 7,
			status: "Success",
			action: "Done",
		},
	];
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const BtnStartDate = forwardRef(({ value, onClick }, ref) => (
		<button className="btn btn-sm w-100" onClick={onClick} ref={ref}>
			<p className="mb-0 fs-16 text-start">{value}</p>
		</button>
	));
	const BtnEndDate = forwardRef(({ value, onClick }, ref) => (
		<button className="btn btn-sm w-100" onClick={onClick} ref={ref}>
			<p className="mb-0 fs-16 text-start">{value}</p>
		</button>
	));
	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-2 pe-0 border-end">
						<Sidebar />
					</div>
					<div className="col p-4 font-inter" style={{ backgroundColor: "#EDEDED" }}>
						<div className="font-roboto fw-700 p-2" style={{ fontSize: 22 }}>
							Dashboard
						</div>
						<div className="row">
							<div className="col-3">
								<div className="card h-100 p-3">
									<div className="row">
										<div className="col-8">
											<div className="font-roboto fw-700 fs-18 text-secondary">
												Total KYC Verif
											</div>
											<div className="font-roboto fw-700 fs-18 mt-2">
												2545
											</div>
										</div>
										<div className="col-4">
											<img src={img_lock} className="img-fluid" alt="" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-3">
								<div className="card h-100 p-3">
									<div className="row">
										<div className="col-8">
											<div className="font-roboto fw-700 fs-18 text-secondary">
												Total KYC Video
											</div>
											<div className="font-roboto fw-700 fs-18 mt-2">147</div>
										</div>
										<div className="col-4">
											<img src={img_people} className="img-fluid" alt="" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-3">
								<div className="card h-100 p-3">
									<div className="row">
										<div className="col-8">
											<div className="font-roboto fw-700 fs-18 text-secondary">
												Total Package
											</div>
											<div className="font-roboto fw-700 fs-18 mt-2">200</div>
										</div>
										<div className="col-4">
											<img src={img_share} className="img-fluid" alt="" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-3">
								<div className="card h-100 p-3">
									<div className="row">
										<div className="col-8">
											<div className="font-roboto fw-700 fs-18 text-secondary">
												Pending KYC
											</div>
											<div className="font-roboto fw-700 fs-18 mt-2">25</div>
										</div>
										<div className="col-4">
											<img src={img_chart} className="img-fluid" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-8">
								<div className="card h-100 p-3">
									{chart === "assets" ? (
										<div className="d-flex">
											<div
												className="btn btn-sm text-white"
												style={{ backgroundColor: "#0052D9" }}
											>
												Assets Analytics
											</div>
											<div
												className="btn btn-sm ms-3"
												style={{ backgroundColor: "#FFFFFF" }}
												onClick={() => setChart("market")}
											>
												Market Analytics
											</div>
										</div>
									) : (
										<div className="d-flex">
											<div
												className="btn btn-sm"
												style={{ backgroundColor: "#FFFFFF" }}
												onClick={() => setChart("assets")}
											>
												Assets Analytics
											</div>
											<div
												className="btn btn-sm text-white ms-3"
												style={{ backgroundColor: "#0052D9" }}
											>
												Market Analytics
											</div>
										</div>
									)}
									<div className="mt-4">
										<AreaChart />
									</div>
								</div>
							</div>
							<div className="col-4">
								<div className="card h-100 p-3">
									<div className="font-roboto fw-600 fs-16">
										Total Transaction
									</div>
									<div
										className="font-roboto mt-1 fw-600"
										style={{ fontSize: 32 }}
									>
										1,255,749
									</div>
									<div className="mt-5" style={{ display: "absolute" }}>
										<PieChart />
									</div>
								</div>
							</div>
						</div>
						<div className="row font-inter fw-400 fs-14 mt-5">
							<div className="col-4 ms-2" style={{ backgroundColor: "#FFFFFF" }}>
								<div className="d-flex" style={{ backgroundColor: "#FFFFFF" }}>
									<DatePicker
										selected={startDate}
										dateFormat="dd/MM/yyyy"
										onChange={(date) => setStartDate(date)}
										customInput={<BtnStartDate />}
									/>
									<DatePicker
										selected={endDate}
										dateFormat="dd/MM/yyyy"
										onChange={(date) => setEndDate(date)}
										customInput={<BtnEndDate />}
									/>
								</div>
							</div>
							<div className="col-2">
								<select
									className="form-select form-select-sm border-0 rounded-0 shadow-none"
									style={{ backgroundColor: "#FFFFFF" }}
									aria-label="Default select example"
								>
									<option
										selected
										disabled
										className="fs-14 font-secondary d-none"
									>
										Select Escrow
									</option>
									<option value="1">INDODAX</option>
									<option value="2">OKX</option>
									<option value="3">HUOBI</option>
									<option value="4">DEXID</option>
									<option value="5">BINANCE</option>
								</select>
							</div>
							<div className="col-2">
								<select
									class="form-select form-select-sm border-0 rounded-0 shadow-none"
									style={{ backgroundColor: "#FFFFFF" }}
									aria-label="Default select example"
								>
									<option
										selected
										disabled
										className="fs-14 font-secondary d-none"
									>
										Select Status
									</option>
									<option value="1">INDODAX</option>
									<option value="2">OKX</option>
									<option value="3">HUOBI</option>
									<option value="4">DEXID</option>
									<option value="5">BINANCE</option>
								</select>
							</div>
							<div className="col">
								<form className="d-flex" role="search">
									<input
										className="form-control form-control-sm me-2 shadow-none"
										type="search"
										placeholder="Search TxID"
										aria-label="Search"
									/>
									<button
										className="btn btn-sm btn-outline-primary"
										id="test123"
										type="submit"
									>
										Cari
									</button>
								</form>
							</div>
						</div>
						<div className="card mt-3 p-3">
							<table class="table table-bordered fs-16 text-center align-middle">
								<thead>
									<tr>
										<th scope="col">No</th>
										<th scope="col">User</th>
										<th scope="col">Asset</th>
										<th scope="col">Total</th>
										<th scope="col">Escrow</th>
										<th scope="col">Status</th>
										<th scope="col">Countdown</th>
										<th scope="col">Action</th>
									</tr>
								</thead>
								<tbody>
									{arr.map((e, i) => {
										return (
											<tr>
												<td>{i + 1}</td>
												<td>{e.name}</td>
												<td>IDR</td>
												<td>{e.total}</td>
												<td>{e.escrow}</td>
												<td>
													<div
														className="btn bnt-sm rounded text-white w-100"
														style={
															e.status === "Waiting"
																? { backgroundColor: "#F4B946" }
																: { backgroundColor: "#20CB6F" }
														}
													>
														<p className="mb-0 fs-14">{e.status}</p>
													</div>
												</td>
												<td>48 H</td>
												<td>
													<div
														className="btn bnt-sm rounded text-white w-100"
														style={
															e.action === "Approved"
																? { backgroundColor: "#0052D9" }
																: { backgroundColor: "#A6A6A6" }
														}
													>
														<p className="mb-0 fs-14">{e.action}</p>
													</div>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
							<div className="d-flex justify-content-between align-items-center mt-4">
								<div className="fs-14">A total of 100 items of data</div>
								<nav aria-label="...">
									<ul class="pagination pagination-sm">
										<li class="page-item disabled">
											<a class="page-link">Previous</a>
										</li>
										<li class="page-item">
											<a class="page-link" href="#">
												1
											</a>
										</li>
										<li class="page-item active" aria-current="page">
											<a class="page-link" href="#">
												2
											</a>
										</li>
										<li class="page-item">
											<a class="page-link" href="#">
												3
											</a>
										</li>
										<li class="page-item">
											<a class="page-link" href="#">
												...
											</a>
										</li>
										<li class="page-item">
											<a class="page-link" href="#">
												10
											</a>
										</li>
										<li class="page-item">
											<a class="page-link" href="#">
												20
											</a>
										</li>
										<li class="page-item">
											<a class="page-link" href="#">
												30
											</a>
										</li>
										<li class="page-item">
											<a class="page-link" href="#">
												Next
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
