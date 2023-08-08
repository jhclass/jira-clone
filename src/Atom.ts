import { atom, selector } from "recoil";
export const textState = atom({
  key: "textState",
  default: "",
});

export const charCountState = selector({
  key: " carCountState",
  get: ({ get }: any) => {
    const text = get(textState);
    return text.length;
  },
});

//toggle boolean state
export const toggleBoolean = atom({
  key: "toggleBoolean",
  default: false,
});

export const changeToggleboolean = selector({
  key: "changeToggleboolean",
  get: ({ get }: any) => {
    const currentState = get(toggleBoolean);
    if (currentState) {
      return "빨간색입니다";
    } else {
      return "초록색입니다";
    }
  },
});

interface TodoItem {
  id: number;
  text: string;
  isCompleted: boolean;
}
export const todoListState = atom<TodoItem[]>({
  key: "todoListsTate",
  default: [],
});
