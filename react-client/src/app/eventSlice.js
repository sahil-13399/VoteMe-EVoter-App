import { createSlice } from '@reduxjs/toolkit';

export const eventSlice = createSlice({
    name : 'eventId',
    initialState : {
        eventId : ""
    },
    reducers : {
        selectEventId : (state,action) => {
            state.eventId = action.payload;
        }
    }
});

export const {selectEventId} = eventSlice.actions;

export const selectEventId = (state) => state.eventId.selectEventId;

export default eventSlice.reducer;