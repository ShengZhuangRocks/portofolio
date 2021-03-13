import styled from "styled-components";
import Link from "next/link";

const M = styled.div`
  padding-left: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  text-align: center;
`;

const More = ({ link }) => (
  <Link href={`/${link}`}>
    <M>...</M>
  </Link>
);

export default More;
