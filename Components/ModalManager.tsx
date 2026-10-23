"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../app/redux/store";
import { closeModal } from "../app/redux/modalSlice";
import LoginModal from "./LoginModal";

export default function ModalManager() {
  const isOpen = useSelector(
    (state: RootState) => state.modal.isOpen
  );

  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <LoginModal onClose={() => dispatch(closeModal())} />
  );
}