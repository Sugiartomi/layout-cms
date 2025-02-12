import "./assets/css/index.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import UserListDetail from "./pages/UserListDetail";
import UserAdmin from "./pages/UserAdmin";
import UserAdminDetail from "./pages/UserAdminDetail";
import AddAdmin from "./pages/AddAdmin";
import Permission from "./pages/Permission";
import KYCVerification from "./pages/KYCVerification";
import KYCVideo from "./pages/KYCVideo";
import RefferalPoint from "./pages/RefferalPoint";
import AchievementPoint from "./pages/AchievementPoint";
import RewardPoint from "./pages/RewardPoint";
import AppPackage from "./pages/AppPackage";
import Crystal from "./pages/Crystal";
import ActivationKey from "./pages/ActivationKey";
import PurchaseReportAppPackage from "./components/AppPackage/PurchaseReportAppPackage";
import PurchaseReportCrystal from "./components/Crystal/PurchaseReportCrystal";
import PurchaseReportActivationKey from "./components/ActivationKey/PurchaseReportCrystal";
import PurchaseHistory from "./pages/PurchaseHistory";
import PointCashout from "./pages/PointCashout";
import PaymentApproval from "./pages/PaymentApproval";
import PromotionBanner from "./pages/PromotionBanner";
import AddPromotionBanner from "./components/PromotionBanner/AddPromotionBanner";
import SupportCenter from "./pages/SupportCenter";
import AddSupportCenter from "./components/SupportCenter/AddSupportCenter";
import ShareableContent from "./pages/ShareableContent";
import AddShareableContent from "./components/ShareableContent/AddShareableContent";
import PointSummary from "./pages/PointSummary";
import CompanyOmzet from "./pages/CompanyOmzet";
import UserOmzet from "./pages/UserOmzet";
import Setting from "./pages/Setting";


function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/user-list" element={<UserList />} />
				<Route path="/user-list/account" element={<UserListDetail />} />
				<Route path="/user-admin" element={<UserAdmin />} />
				<Route path="/user-admin/account" element={<UserAdminDetail />} />
				<Route path="/add-admin" element={<AddAdmin />} />
				<Route path="/role-permission" element={<Permission />} />
				<Route path="/kyc-verification" element={<KYCVerification />} />
				<Route path="/kyc-video" element={<KYCVideo />} />
				<Route path="/refferal-point" element={<RefferalPoint />} />
				<Route path="/achievement-point" element={<AchievementPoint />} />
				<Route path="/reward-point" element={<RewardPoint />} />
				<Route path="/app-package" element={<AppPackage />} />
				<Route path="/app-package/report" element={<PurchaseReportAppPackage />} />
				<Route path="/crystal" element={<Crystal />} />
				<Route path="/crystal/report" element={<PurchaseReportCrystal />} />
				<Route path="/activation-key" element={<ActivationKey />} />
				<Route path="/activation-key/report" element={<PurchaseReportActivationKey />} />
				<Route path="/purchase-history" element={<PurchaseHistory />} />
				<Route path="/point-cashout" element={<PointCashout />} />
				<Route path="/payment-approval" element={<PaymentApproval />} />
				<Route path="/promotion-banner" element={<PromotionBanner />} />
				<Route path="/promotion-banner/add" element={<AddPromotionBanner />} />
				<Route path="/support-center" element={<SupportCenter />} />
				<Route path="/support-center/add" element={<AddSupportCenter />} />
				<Route path="/shareable-content" element={<ShareableContent />} />
				<Route path="/shareable-content/add" element={<AddShareableContent />} />
				<Route path="/point-summary" element={<PointSummary />} />
				<Route path="/company-omzet" element={<CompanyOmzet />} />
				<Route path="/user-omzet" element={<UserOmzet />} />
				<Route path="/setting" element={<Setting />} />
			</Routes>
		</div>
	);
}

export default App;
