import AuthPageLayout from "@features/auth/components/AuthPageLayout";

export default function Signup() {
  return (
    <AuthPageLayout
      title="회원가입"
      description="이미 회원이신가요?"
      linkText="로그인"
    >
      <label htmlFor="id">
        아이디
        <input id="id" />
      </label>
      <label htmlFor="pw">
        비밀번호
        <input id="pw" />
      </label>
      <label htmlFor="id">
        아이디
        <input id="id" />
      </label>
      <label htmlFor="pw">
        비밀번호
        <input id="pw" />
      </label>
      <label htmlFor="id">
        아이디
        <input id="id" />
      </label>
    </AuthPageLayout>
  );
}
