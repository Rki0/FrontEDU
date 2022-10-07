export function MemberWithAge({ age }) {
  // 문제가 될거라고 생각했던 것?
  // members 내부에 있는 지수, 리사, 로제가 가지고 있는, age라는 key와
  // props로 받아온 age가 변수명이 같아서 걱정이에요...
  // 문제 없다!

  // props로 받아온 age가 사용되는 것은
  // 객체의 첫 번째 key에 접근할 때
  // members.age or members[age]

  // 지수, 리사, 로제 내부에 있는 age가 사용되는 것은
  // 객체의 첫 번째 key로 접근한 또 하나의 객체에서의 key에 접근할 때
  // members.age.age or members[age].age
  const members = {
    지수: {
      birthOfName: "김지수",
      age: 27,
      placeOfBirth: "군포시 산본동",
    },
    리사: {
      birthOfName: "라리사 마노반",
      age: 25,
      placeOfBirth: "태국 부리람 주",
    },
    로제: {
      birthOfName: "박채영",
      age: 25,
      placeOfBirth: "뉴질랜드 오클랜드",
    },
  };

  return (
    <section>
      <h1>{age}</h1>
      <dl>
        <dt>본명</dt>
        <dd>{members[age].birthOfName}</dd>
        <dt>출생지</dt>
        <dd>{members[age].placeOfBirth}</dd>
        <dt>나이</dt>
        <dd>{members[age].age}</dd>
      </dl>
    </section>
  );
}
