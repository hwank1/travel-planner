import { useModalStore } from "@/store/useAuthStore";
import SignupForm from "./SignupForm";
import { useAuthStore } from "@/store/useAuthStore";

function AuthModal() {
  const { isModalOpen } = useAuthStore();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-[500px]">
        <SignupForm />
      </div>
    </div>
  );
}
export default AuthModal;
