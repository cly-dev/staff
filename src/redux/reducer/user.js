export default function UserReducer(state={},action){
    const {type,data}=action;
    switch(type){
        case 'add':return data;
        case 'clear':return '';
        default:return '';
    }
}