import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import { IKImage } from "imagekitio-react";
import { useAuth } from "@clerk/clerk-react";

const ChatPage = () => {
  const path = useLocation().pathname;
  const chatId = path.split("/").pop();
  const { getToken } = useAuth();

  const { isPending, error, data } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: async () => {
      try {
        const token = await getToken();
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('Chat data loaded for chatId:', chatId, result);
        return result;
      } catch (err) {
        console.error('Error loading chat:', chatId, err);
        throw err;
      }
    },
    enabled: !!chatId && chatId !== '',
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });

  console.log(data);

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          {isPending
            ? "Loading..."
            : error
            ? "Something went wrong!"
            : data?.history?.map((message, i) => (
                <div
                  key={`${data._id}-${i}`}
                  className={
                    message.role === "user" ? "message user" : "message"
                  }
                >
                  {message.img && (
                    <IKImage
                      urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                      path={message.img}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        display: "block"
                      }}
                      transformation={[{ quality: 80, format: "webp" }]}
                      loading="lazy"
                      lqip={{ active: true, quality: 20 }}
                    />
                  )}
                  <Markdown>{message.parts?.[0]?.text || ""}</Markdown>
                </div>
              ))}

          {data && <NewPrompt data={data}/>}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;