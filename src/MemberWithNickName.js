export default function MemberWithNickName({ nickname }) {
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
      <h1>{nickname}</h1>
      <dl>
        <dt>본명</dt>
        <dd>{members[nickname].birthOfName}</dd>
        <dt>출생지</dt>
        <dd>{members[nickname].placeOfBirth}</dd>
        <dt>나이</dt>
        <dd>{members[nickname].age}</dd>
      </dl>
    </section>
  );
}
