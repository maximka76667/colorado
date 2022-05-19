import { createSlice } from "@reduxjs/toolkit";
import chroma, { mix } from "chroma-js";
import { RootState } from "../../app/store";

interface colorState {
  color: string,
  darker: string,
  brighter: string,
  mix: string,
}

const initialState: colorState = {
  color: "#f00",
  darker: "#000",
  brighter: "#fff",
  mix: "#aaf"
}

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    change: (state, action) => {
      const color = chroma(action.payload);

      const darker = color.darken(0.5).toString();
      const brighter = color.brighten(0.5).toString();

      state.color = color.hex();
      state.darker = darker;
      state.brighter = brighter;
      state.mix = mix(brighter, darker).toString()
    }
  }
})

export const { change } = colorSlice.actions;

export const selectColors = (state: RootState) => state.color;

export default colorSlice.reducer;