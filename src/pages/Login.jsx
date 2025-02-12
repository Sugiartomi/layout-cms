import { useNavigate } from "react-router-dom";
import img_arbitgo from "../assets/img/arbitgo-1.png";

export default function Login() {
	const navigate = useNavigate();
	return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <div className="d-flex justify-content-center">
              <img src={img_arbitgo} alt="" className="img-fluid w-75" />
            </div>
            <div
              className="font-roboto fw-700 mt-3 text-center"
              style={{ fontSize: 22 }}
            >
              Back Office Owner
            </div>
            <form className="mt-3">
              <div className="form-floating form-floating-sm mb-3">
                <input
                  type="email"
                  className="form-control form-control-sm shadow-none ps-4"
                  id="floatingInput"
                  placeholder=" "
                />
                <label
                  htmlFor="floatingInput"
                  className="text-secondary opacity-75 px-4 fs-16"
                >
                  Email
                </label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control form-control-sm shadow-none ps-4"
                  id="floatingPassword"
                  placeholder=" "
                />
                <label className="text-secondary opacity-75 fs-16 px-4">
                  Password
                </label>
              </div>

              <div
                className="font-inter text-primary text-center py-4"
                style={{ fontSize: 14, fontWeight: 600 }}
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </div>
              <div
                className="font-inter text-danger text-center py-4"
                style={{ fontSize: 14, fontWeight: 600 }}
              >
                Click "Login" this is dummy page
              </div>
              <div className="d-grid">
                <button
                  className="btn btn-login text-white py-2"
                  type="submit"
                  style={{ backgroundColor: "#2752E7" }}
                >
                  <div
                    className="font-inter"
                    style={{ fontWeight: 600 }}
                    onClick={() => navigate("/dashboard")}
                  >
                    Login
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
