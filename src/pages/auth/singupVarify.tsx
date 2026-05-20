import { SignupFormData } from "@/types/SignupFormData";

export function signupVerify(formData: SignupFormData) {
  const nicknameRegex = /^[a-zA-Z0-9가-힣]+$/;
  const emailRegex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegex =
    /^(?=.*[0-9]{4,})(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

  const errors = {
    nickName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  if (!nicknameRegex.test(formData.nickName)) {
    errors.nickName = "닉네임은 한글,영어만 사용 가능합니다.";
  }
  if (!emailRegex.test(formData.email)) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }
  if (!passwordRegex.test(formData.password)) {
    errors.password = "영문, 숫자, 특수문자 조합으로 8자 이상 입력해 주세요.";
  }
  if (formData.password !== formData.passwordConfirm) {
    errors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
  }
  return errors;
}
