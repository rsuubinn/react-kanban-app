import { atom } from "recoil";

export const toDoState = atom({
  key: "toDos",
  default: ["a", "b", "c", "d", "e", "f"],
});