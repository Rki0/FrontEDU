export function MemberWithName({ name }) {
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
      <h1>{name}</h1>
      <dl>
        <dt>본명</dt>
        <dd>{members[name].birthOfName}</dd>
        <dt>출생지</dt>
        <dd>{members[name].placeOfBirth}</dd>
        <dt>나이</dt>
        <dd>{members[name].age}</dd>
      </dl>
    </section>
  );
}
