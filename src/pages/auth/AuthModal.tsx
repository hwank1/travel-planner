import SignupForm from "./SignupForm";
import { useAuthStore } from "@/store/useAuthStore";
import LoginForm from "./LoginForm";

function AuthModal() {
  const { isModalOpen, mode, toggleModal } = useAuthStore();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0  bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white flex flex-col rounded-2xl p-8 h-[600px] w-[500px]">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">
            {mode === "login" ? "로그인" : "회원가입"}
          </p>
          <button type="button" onClick={toggleModal}>
            ⨯
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          {mode === "login" ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
}
export default AuthModal;
