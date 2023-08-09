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

export const mininuteState = atom({
  key: "mininuteState",
  default: 0,
});
export const minuteStateFunc = selector({
  key: "minuteStateFunc",
  get: ({ get }) => {
    const hour = get(mininuteState) / 60;
    return hour;
  },
  set: ({ set }, newVal) => {
    const minute = Number(newVal) * 60;
    set(mininuteState, minute);
  },
});

export const todoState = atom({
  key: "todoState",
  default: [
    { 이름: { Todo: "오늘의 할일1", info: "제대로 할수 있을지 모르겠다" } },
    { 이름: { Todo: "오늘의 할일2", info: "제대로 할수 있을지 모르겠다" } },
    { 이름: { Todo: "오늘의 할일3", info: "제대로 할수 있을지 모르겠다" } },
    { 이름: { Todo: "오늘의 할일4", info: "제대로 할수 있을지 모르겠다" } },
    { 이름: { Todo: "오늘의 할일5", info: "제대로 할수 있을지 모르겠다" } },
    { 이름: { Todo: "오늘의 할일6", info: "제대로 할수 있을지 모르겠다" } },
  ],
});
