import { useState, useRef, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import postMessage from "../../api/post-data/postMessage";
import { LoadingButton } from "@mui/lab";
import robot from '../../images/robot.png';

const messages = [
  { id: Math.random()*2 , text: "Hello dear Student, welcome to your personalized tutoring program. Our team consists of world class tutors who will guide you to excel and be among the top 1% of students worldwide. Our main focus will be the Cambridge Academic program, preparing you for IGCSE exams.", sender: "assistant" },  { id: Math.random()*2 , text: "Hello dear Student, welcome to your personalized tutoring program. Our team consists of world class tutors who will guide you to excel and be among the top 1% of students worldwide. Our main focus will be the Cambridge Academic program, preparing you for IGCSE exams.", sender: "assistant" },
  { id: Math.random()*2 , text: "Hello dear Student, welcome to your personalized tutoring program. Our team consists of world class tutors who will guide you to excel and be among the top 1% of students worldwide. Our main focus will be the Cambridge Academic program, preparing you for IGCSE exams.", sender: "assistant" },
  { id: Math.random()*2 , text: "Hello dear Student, welcome to your personalized tutoring program. Our team consists of world class tutors who will guide you to excel and be among the top 1% of students worldwide. Our main focus will be the Cambridge Academic program, preparing you for IGCSE exams.", sender: "assistant" },
  { id: Math.random()*2 , text: "Hello dear Student, welcome to your personalized tutoring program. Our team consists of world class tutors who will guide you to excel and be among the top 1% of students worldwide. Our main focus will be the Cambridge Academic program, preparing you for IGCSE exams.", sender: "assistant" },
  { id: Math.random()*2 , text: "Hello dear Student, welcome to your personalized tutoring program. Our team consists of world class tutors who will guide you to excel and be among the top 1% of students worldwide. Our main focus will be the Cambridge Academic program, preparing you for IGCSE exams.", sender: "assistant" },
  { id: Math.random()*2 , text: "Hello dear Student, welcome to your personalized tutoring program. Our team consists of world class tutors who will guide you to excel and be among the top 1% of students worldwide. Our main focus will be the Cambridge Academic program, preparing you for IGCSE exams.", sender: "assistant" },
  { id: Math.random()*2 , text: "Hello dear Student, welcome to your personalized tutoring program. Our team consists of world class tutors who will guide you to excel and be among the top 1% of students worldwide. Our main focus will be the Cambridge Academic program, preparing you for IGCSE exams.", sender: "assistant" },
  { id: Math.random()*2 , text: "Hello dear Student, welcome to your personalized tutoring program. Our team consists of world class tutors who will guide you to excel and be among the top 1% of students worldwide. Our main focus will be the Cambridge Academic program, preparing you for IGCSE exams.", sender: "assistant" },
  { id: Math.random()*2 , text: "Hello dear Student, welcome to your personalized tutoring program. Our team consists of world class tutors who will guide you to excel and be among the top 1% of students worldwide. Our main focus will be the Cambridge Academic program, preparing you for IGCSE exams.", sender: "assistant" },
  { id: Math.random()*2 , text: "Hello dear Student, welcome to your personalized tutoring program. Our team consists of world class tutors who will guide you to excel and be among the top 1% of students worldwide. Our main focus will be the Cambridge Academic program, preparing you for IGCSE exams.", sender: "assistant" },

];

const ChatUI = () => {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const messageBlockRef = useRef({});

  const handleSend = () => {
    if (input.trim() !== "") {
      setLoading(true)
      messages.push({id: (Math.random()*3), text: input, sender: 'user'})
      postMessage("https://bostonbackendengine-sc4x4pjhiq-uc.a.run.app/api/v1/boston/chatbot-reference", input)
        .then((res) => {
          messageBlockRef.current.scrollTo(0, messageBlockRef.current.scrollHeight)
          const textMessageObj = res.filter((item : any) => item.role == 'assistant');
          const messageFromBot = {id: (Math.random()*2), text: textMessageObj[0].content, sender: textMessageObj[0].role};
          messages.push(messageFromBot)
          setLoading(false);
        })
      setInput("");
    }
  };

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (input.trim() !== "") {
      // messageBlockRef.current.scrollTo({top: messageBlockRef.current.scrollHeight})
      if(event.key == 'Enter'){
        setLoading(true)
        messages.push({id: (Math.random()*3), text: input, sender: 'user'})
        postMessage("https://bostonbackendengine-sc4x4pjhiq-uc.a.run.app/api/v1/boston/chatbot-reference", input)
          .then((res) => {
            messageBlockRef?.current.scrollTo(0, messageBlockRef?.current.scrollHeight)
            console.log('Data: ', res)
            const textMessageObj = res.filter((item : any) => item.role == 'assistant');
            const messageFromBot = {id: (Math.random()*2), text: textMessageObj[0].content, sender: textMessageObj[0].role};
            messages.push(messageFromBot)
            setLoading(false);
          })
        setInput("");
      }
    }
  }

  useEffect(() => {
      messageBlockRef.current.scrollTo({top: messageBlockRef.current.scrollHeight, behavior: 'smooth'})
  }, [messageBlockRef.current.scrollHeight])

  return (
    <Box
      sx={{
        height: "83vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "grey.200",
      }}
    >
      <Box ref={messageBlockRef} sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </Box>
      <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              size="small"
              fullWidth
              placeholder="Type a message"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
              onKeyUp={handleKeyDown}
              disabled={loading ? true : false}
            />
          </Grid>
          <Grid item xs={2}>
            <LoadingButton
              fullWidth
              color="primary"
              variant="contained"
              loading={loading}
              endIcon={<SendIcon />}
              onClick={handleSend}
            >
              Send
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Message = ({ message }) => {
  const isBot = message.sender === "assistant";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isBot ? "row" : "row-reverse",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: isBot ? "primary.main" : "secondary.main"}}
          src={isBot ? robot : ""}>
          {isBot ? "B" : "U"}
        </Avatar>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            ml: isBot ? 1 : 0,
            mr: isBot ? 0 : 1,
            backgroundColor: isBot ? "primary.light" : "#FFF",
            borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
          }}
        >
          <Typography variant="body1">{message.text}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatUI;