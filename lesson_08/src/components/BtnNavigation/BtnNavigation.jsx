import React from "react";
import { useNavigate } from "react-router-dom";

export default function BtnNavigation({ title, path }) {
  const navigation = useNavigate();

  const handleClick = () => navigation(path);

  return <button onClick={handleClick}>{title}</button>;
}