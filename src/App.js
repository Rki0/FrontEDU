// export와 export default의 차이
// export
// MemberWithName이 너무 길어서 Name이라는 이름으로 바꿀래
import { MemberWithName as Name } from "./MemberWithName";
// export default
// MemberWithNickName이 너무 길어서 NickName이라는 이름으로 바꿀래
import NickName from "./MemberWithNickName";

import { MemberWithAge } from "./MemberWithAge";

// MemberWithName과 MemberWithNickName은 완전히 같은 로직
// 유일한 차이는 props로 전달하는 이름뿐.

export default function Group() {
  return (
    <div>
      <h1>MemberWithName</h1>
      <Name name="지수" />
      <Name name="리사" />
      <Name name="로제" />

      <h1>MemberWithNickName 1</h1>
      <NickName nickname="지수" />
      <NickName nickname="리사" />
      <NickName nickname="로제" />

      <h1>MemberWithNickName 2</h1>
      {/* 컴포넌트는 위에서 아래 순서로 화면에 보여진다. */}
      {/* 이런걸 더 세부적이고, 화려하게 조절할 수 있는게 CSS */}
      <NickName nickname="로제" />
      <NickName nickname="지수" />
      <NickName nickname="리사" />

      <h1>MemberWithAge</h1>
      {/* age는 컴포넌트 내부에서 이미 존재하는 key 값인데 문제가 없나요? */}
      {/* 문제 없습니다. 사용되는 단계가 다르기 때문이에요 */}
      <MemberWithAge age="지수" />
      <MemberWithAge age="리사" />
      <MemberWithAge age="로제" />
    </div>
  );
}
