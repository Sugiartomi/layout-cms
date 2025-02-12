import { FilterCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Reusble/Navbar";
import Sidebar from "../components/Reusble/Sidebar";
import ModalDelete from "../components/UserAdmin/ModalDelete";
import ModalResend from "../components/UserAdmin/ModalResend";
import ModalSuspend from "../components/UserAdmin/ModalSuspend";
import img_sample from "../assets/img/browser-safari.png";
import BannerDeleteModal from "../components/PromotionBanner/DeleteModal";
import ShareableDeleteModal from "../components/ShareableContent/DeleteModal";

export default function ShareableContent() {
	const navigate = useNavigate();
	const looping = ["1", "1", "1", "1"];
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
							Shareable Content
						</div>
						<div className="d-flex  mt-3 justify-content-between">
							<div className="d-flex align-items-center mt-3">
								<div className="font-inter fw-400 fs-16">Show</div>
								<input
									type="number"
									className="mx-3 form-control"
									style={{ width: "25%" }}
								/>
								<div className="font-inter fw-400 fs-16">entries</div>
							</div>
							<div
								className="btn btn-success mt-3"
								onClick={() => navigate("/shareable-content/add")}
							>
								+ Add
							</div>
						</div>
						<div className="card p-4 mt-4">
							<table className="table table-striped rounded fs-16">
								<thead>
									<tr className="text-center">
										<th scope="col" style={{ width: "40%" }}>
											Image
										</th>
										<th scope="col" style={{ width: "25%" }}>
											Status
										</th>
										<th scope="col" style={{ width: "25%" }}>
											Action
										</th>
									</tr>
								</thead>
								<tbody>
									{looping.map((e) => {
										return (
											<tr className="text-center align-middle">
												<td className="p-4">
													<img
														src={img_sample}
														className="img-fluid"
														alt=""
													/>
												</td>
												<td>Hide</td>
												<td>
													<div className="d-flex justify-content-center">
														<div className="btn btn-primary me-2">
															<p className="m-0 fs-14">Edit</p>
														</div>
														<div
															className="btn btn-danger"
															data-bs-toggle="modal"
															data-bs-target="#ShareableDeleteModal"
														>
															<p className="m-0 fs-14">Delete</p>
														</div>
													</div>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
						<div className="d-flex justify-content-between mt-4">
							<div className="font-inter fw-400 fs-12">
								Showing 1 to 1 of 1 entries
							</div>
							<nav aria-label="...">
								<ul class="pagination pagination-sm">
									<li class="page-item disabled">
										<span class="page-link">Previous</span>
									</li>
									<li class="page-item active">
										<a class="page-link" href="#">
											1
										</a>
									</li>
									<li class="page-item" aria-current="page">
										<span class="page-link">2</span>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">
											3
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
			<ShareableDeleteModal />
		</>
	);
}
