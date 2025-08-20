import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./dashboardPage.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { useState, useEffect } from "react";

const DashboardPage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const { getToken } = useAuth();
  const [showHint, setShowHint] = useState(false);
  const [isImageAnalysis, setIsImageAnalysis] = useState(false);

  // Check URL parameter to show hint when coming from sidebar
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get('showHint') === 'true') {
      setShowHint(true);
      // Clean up the URL parameter after showing the hint
      navigate('/dashboard', { replace: true });
    }
  }, [location.search, navigate]);

  const handleAnalyzeImages = async () => {
    // Create new chat with pre-typed message
    const predefinedText = "I want help with analyzing an image";
    
    try {
      // Mark as image analysis to trigger file selector after navigation
      setIsImageAnalysis(true);
      // Create the chat first
      const chatId = await mutation.mutateAsync(predefinedText);
      // Navigation will be handled by the mutation's onSuccess
    } catch (error) {
      console.error('Error creating chat for image analysis:', error);
      setIsImageAnalysis(false);
    }
  };

  const handleCodeHelp = async () => {
    // Create new chat with pre-typed message for code help
    const predefinedText = "Help me with my code";
    
    try {
      // Create the chat with code help message
      const chatId = await mutation.mutateAsync(predefinedText);
      // Navigation will be handled by the mutation's onSuccess (no special trigger needed)
    } catch (error) {
      console.error('Error creating chat for code help:', error);
    }
  };

  const mutation = useMutation({
    mutationFn: async (text) => {
      const token = await getToken();
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ text }),
      }).then((res) => res.json());
    },
    onSuccess: (id) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["userChats"] });
      
      // Navigate with state to trigger file selector for image analysis
      if (isImageAnalysis) {
        navigate(`/dashboard/chats/${id}`, { state: { triggerFileSelector: true } });
        setIsImageAnalysis(false); // Reset the flag
      } else {
        navigate(`/dashboard/chats/${id}`);
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;

    mutation.mutate(text);
  };
  return (
    <div className="dashboardPage">
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>CASCA AI</h1>
        </div>
        <div className="options">
          <div className="option" onClick={() => setShowHint(true)}>
            <img src="/chat.png" alt="" />
            <span>Create a New Chat</span>
          </div>
          <div className="option" onClick={handleAnalyzeImages}>
            <img src="/image.png" alt="" />
            <span>Analyze Images</span>
          </div>
          <div className="option" onClick={handleCodeHelp}>
            <img src="/code.png" alt="" />
            <span>Help with Code</span>
          </div>
        </div>
      </div>
      {/* Helpful hint with arrow - only shows when Create a New Chat is clicked */}
      {showHint && (
        <div className="hint">
          <div className="arrow">↓</div>
          <span>Start typing here to create a new chat!</span>
        </div>
      )}
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" placeholder="Ask me anything..." />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;