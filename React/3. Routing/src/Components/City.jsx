import { useParams } from "react-router";

export default function City() {
  const params = useParams();
  return (
    <>
      <h3>This is my city - {params.city}</h3>
    </>
  );
}
