import { useAuthStore } from "@/store/useAuthStore";
import { LoginFormData } from "@/types/SignupFormData";
import { useState } from "react";

export default function LoginForm() {
  const { login, setMode } = useAuthStore();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [errors, setError] = useState({
    email: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      errors.email = "이메일 또는 비밀번호를 입력해주세요";
      setError(errors);
    } else {
      console.log(formData.email, formData.password);
      login(formData.email, formData.password);
      alert("로그인 성공");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 m-2">
        <div className="flex flex-col gap-1">
          {/* 이메일 */}
          <label className="text-base">이메일</label>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            className="text-sm rounded-lg p-2 border focus:outline-none border-gray-300"
            placeholder="이메일을 입력해주세요"
          />

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
        </div>
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        {/* 회원가입 버튼 */}

        <button
          type="submit"
          className="font-bold p-2 m-2 bg-yellow-200 rounded-2xl hover:bg-yellow-300"
        >
          로그인
        </button>

        <div className="flex justify-center text-sm gap-1">
          <p>계정이 없으신가요?</p>
          <button onClick={() => setMode("signup")} className="text-blue-500">
            회원가입
          </button>
        </div>
      </div>
    </form>
  );
}
