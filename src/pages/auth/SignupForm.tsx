import { useAuthStore } from "@/store/useAuthStore";
import { SignupFormData } from "@/types/SignupFormData";
import { useState } from "react";
import { signupVerify } from "@/pages/auth/singupVarify";

function SignupForm() {
  const { signup, toggleModal, setMode } = useAuthStore();
  const [formData, setFormData] = useState<SignupFormData>({
    nickName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState({
    nickName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = signupVerify(formData);
    setErrors(newErrors);
    if (Object.values(newErrors).every((error) => error === "")) {
      alert("회원가입 성공");
      signup(formData.nickName, formData.email, formData.password);
      toggleModal();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 m-2">
        <div className="flex flex-col gap-1">
          {/* 닉네임 */}
          <label className="text-base">닉네임</label>
          <input
            id="nickName"
            name="nickName"
            onChange={handleChange}
            className="rounded-lg text-sm p-2 border focus:outline-none border-gray-300"
            placeholder="여행자"
          />
          {errors.nickName && (
            <p className="text-red-500 text-xs">{errors.nickName}</p>
          )}
          {/* 이메일 */}
          <label className="text-base">이메일</label>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            className="text-sm rounded-lg p-2 border focus:outline-none border-gray-300"
            placeholder="이메일을 입력해주세요"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
          {/* 비밀번호 */}
          <label className="text-base">비밀번호</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            className="rounded-lg text-sm p-2 border focus:outline-none border-gray-300"
            placeholder="⦁⦁⦁⦁⦁⦁⦁"
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password}</p>
          )}
          {/* 비밀번호 확인 */}
          <label className="text-base">비밀번호 확인</label>
          <input
            id="passwordConfirm"
            type="password"
            name="passwordConfirm"
            onChange={handleChange}
            className="text-sm rounded-lg p-2 border focus:outline-none border-gray-300"
            placeholder="⦁⦁⦁⦁⦁⦁⦁"
          />
          {errors.passwordConfirm && (
            <p className="text-red-500 text-xs">{errors.passwordConfirm}</p>
          )}
        </div>
        {/* 회원가입 버튼 */}
        <button
          type="submit"
          className="font-bold p-2 m-2 bg-yellow-200 rounded-2xl hover:bg-yellow-300"
        >
          가입하기
        </button>
        <div className="flex justify-center text-sm gap-1">
          <p>이미 계정이 있으신가요?</p>
          <button onClick={() => setMode("login")} className="">
            로그인
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;
