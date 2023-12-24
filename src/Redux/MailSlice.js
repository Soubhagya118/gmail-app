import { createSlice } from "@reduxjs/toolkit";

const selectmsgData = localStorage.getItem('selectmsg')!= null?JSON.parse(localStorage.getItem('selectmsg')):null;

const sentList2 = localStorage.getItem('sentMails') != [] ? JSON.parse(localStorage.getItem('sentMails')) : [];

const inboxList = localStorage.getItem('inboxDetails') != [] ? JSON.parse(localStorage.getItem('inboxDetails')) : [];
const eachinbox = localStorage.getItem('eachInbox')!= null?JSON.parse(localStorage.getItem('eachInbox')):null

const MailSlice= createSlice({
    name:'mail',
    initialState:{
        sendMessageIsOpen:false,
        sentMailList:sentList2,
        inboxDetails:inboxList,
        eachInboxMessage:eachinbox,
        selectedMessage:selectmsgData,
    },
    reducers:{
        openSendMessage:(state) => {
            state.sendMessageIsOpen=true;
        },
        closeSendMessage:(state) => {
            state.sendMessageIsOpen=false
        },
        openMessage:(state,action)=>{

            state.selectedMessage=action.payload;
            localStorage.setItem('selectmsg', JSON.stringify(state.selectedMessage))

        },
        openInboxMessage:(state,action)=>{

            state.eachInboxMessage=action.payload;
            localStorage.setItem('eachInbox', JSON.stringify(state.eachInboxMessage))

        },
        sentMailListReducer:(state,action)=>{

            state.sentMailList=[...action.payload];
            localStorage.setItem('sentMails', JSON.stringify(state.sentMailList))
            
        }
        ,
        inboxDataReducer:(state,action)=>{
            state.inboxDetails=[...action.payload];
            localStorage.setItem('inboxDetails', JSON.stringify(state.inboxDetails))

        }
    }
});


export const {openSendMessage, closeSendMessage,openMessage,inboxDataReducer,openInboxMessage, sentMailListReducer} = MailSlice.actions;

export default MailSlice.reducer;