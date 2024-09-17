import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalProps {
  isOpen: boolean;
}
const initialState = {
  isOpen: false,
};

const ModalPayload = createSlice({
  name: 'ModalPayload',
  initialState,
  reducers: {
    setIsOpen: (state: ModalProps, action: PayloadAction<ModalProps>) => {
      const newState = Object.assign(state, action.payload);
      return newState;
    },
  },
});

export const ModalPayloadAction = ModalPayload.actions;
export default ModalPayload.reducer;
