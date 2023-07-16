// import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

// const ChatsPage = (props) => {
//         const chatProps = useMultiChatLogic(
//         '7e58dff3-8f36-4501-b6b0-d323f4b35059', 
//         props.user.username, props.user.secret
//         );
//     return (
//         <div style={{height: '100vh'}}>
//             <MultiChatSocket {...chatProps} />
//             <MultiChatWindow {...chatProps} style= {{height: '100%'}}/>
//         </div>
//     )
// };

import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
        return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow 
                projectId='7e58dff3-8f36-4501-b6b0-d323f4b35059'
                username = {props.user.username}
                secret= {props.user.secret}
                style= {{height: '100%'}}
            
            />
        </div>
    )
}

export default ChatsPage;