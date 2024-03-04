import { getConversationById } from "@/app/actions/getConversationById"
import { getMessages } from "@/app/actions/getMessages";
import { EmptyState } from "@/app/components/EmptyState";

import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Form } from "./components/Form";

interface IParams {
    conversationId: string
}

const ConversationId = async ({ params }: { params: IParams }) => {
    const conversation = await getConversationById(params.conversationId);
    const messages = await getMessages(params.conversationId);

    if (!conversation) {
        return (
            <div className="h-full bg-white rounded-xl shadow-inner shadow-purple-middle">
                <div className="h-full flex flex-cols">
                    <EmptyState />
                </div>
            </div>
        )
    }

    return (
        <div className="h-full w-full bg-white lg:rounded-xl shadow-inner shadow-purple-middle lg:py-1 lg:px-1">
            <div className="h-full flex flex-col">
                <Header conversation={conversation} />
                <Body initialMessages={messages}/>
                <Form />
            </div>
        </div>
    )
}

export default ConversationId