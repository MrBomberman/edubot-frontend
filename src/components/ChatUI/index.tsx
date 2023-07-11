import { useState, useRef, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Avatar,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import postMessage from "../../api/post-data/postMessage";
import { LoadingButton } from "@mui/lab";
import robot from '../../images/robot.png';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ModalWindow from "../../shared/common/ModalWindow";

const ChatUI = () => {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [command, setCommand] = useState<string>('');

  // for modal window
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false)
  const [errorMessage, setErrorMessage] = useState<string>('');

  const messages = JSON.parse(sessionStorage.getItem('messages') || `[{ "id": ${Math.random()*2}, "content": "Hello dear Student, welcome to your personalized tutoring program. Our team consists of world class tutors who will guide you to excel and be among the top 1% of students worldwide. Our main focus will be the Cambridge Academic program, preparing you for IGCSE exams.", "role": "assistant" }]`);

  const messageBlockRef = useRef({scrollTo, scrollHeight: 0});

  const handleSend = () => {
    if (input.trim() !== "") {
      if(loading == false) {
        try {
          setLoading(true)
          if(Boolean(messages[0].id)) {
            messages.pop();
          }
          messages.push({content: input, role: 'user'})
          // messages.push({id: (Math.random()*3), content: 'Loading...', role: 'assistant'})
          sessionStorage.setItem('messages', JSON.stringify(messages))
          postMessage("https://bostonbackendengine-sc4x4pjhiq-uc.a.run.app/api/v1/boston/chatbot-reference", messages)
            .then((res) => {
              messageBlockRef.current.scrollTo(0, messageBlockRef.current.scrollHeight)
              const textMessageObj = res.filter((item : any) => item.role == 'assistant');
              const messageFromBot = {content: textMessageObj[0].content, role: textMessageObj[0].role};
              // messages.pop();
              messages.push(messageFromBot)
              sessionStorage.setItem('messages', JSON.stringify(messages))
              setLoading(false);
            }).catch((err) => {
              messages.pop();
              sessionStorage.setItem('messages', JSON.stringify(messages))
              setLoading(false);
              setOpenModal(true)
              setErrorMessage(err.message)
            })
          setCommand("")
          setInput("");
        } catch(e) {
          console.log(e)
        }
      }
    }
  };

  const handleSelectChange = (event : SelectChangeEvent) => {
    setCommand(event.target.value)
    setInput(event.target.value)
  }

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  const handleKeyUP = (event: any) => {
    if (input.trim() !== "") {
      if(event.key == 'Enter' && loading == false){
        try {
          setLoading(true)
          if(Boolean(messages[0].id)) {
            messages.pop();
          }
          messages.push({content: input, role: 'user'})
          // messages.push({id: (Math.random()*3), content: 'Loading...', role: 'assistant'})
          sessionStorage.setItem('messages', JSON.stringify(messages))
          messageBlockRef?.current.scrollTo(0, messageBlockRef?.current.scrollHeight)
          postMessage("https://bostonbackendengine-sc4x4pjhiq-uc.a.run.app/api/v1/boston/chatbot-reference", messages)
            .then((res) => {
              messageBlockRef?.current.scrollTo(0, messageBlockRef?.current.scrollHeight)
              console.log('Data: ', res)
              const textMessageObj = res.filter((item : any) => item.role == 'assistant');
              const messageFromBot = {content: textMessageObj[0].content, role: textMessageObj[0].role};
              // messages.pop();
              messages.push(messageFromBot)
              sessionStorage.setItem('messages', JSON.stringify(messages))
              setLoading(false);
            }).catch((err) => {
              messages.pop();
              sessionStorage.setItem('messages', JSON.stringify(messages))
              setLoading(false);
              setOpenModal(true);
              setErrorMessage(err.message)
            })
          setCommand("")
          setInput("");
        } catch(e){
          console.log(e)
        }
      }
    }
  }

  useEffect(() => {
      messageBlockRef.current.scrollTo({top: messageBlockRef.current.scrollHeight, behavior: 'smooth'})
  }, [messageBlockRef.current.scrollHeight, loading])

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
        {messages.map((message: any) => (
          <Message key={(Math.random()*3)} message={message} />
        ))}
      </Box>
      <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={0} sx={{alignItems: 'center'}}>
          <Grid item xs={12} md={8}>
            <TextField
              size="small"
              fullWidth
              autoFocus
              placeholder="Type a message"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
              onKeyUp={handleKeyUP}
            />
          </Grid>
          <Grid item sm={2} md={2}>
          <FormControl sx={{ minWidth: 100 }} size="small">
          <InputLabel id="demo-select-small-label">Command</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={command}
                label="Command"
                // sx=s
                onChange={handleSelectChange}
              >
                <MenuItem value="">
                  <em>Command</em>
                </MenuItem>
                <MenuItem value={'/quiz'}>/quiz</MenuItem>
                {/* <MenuItem value={20}></MenuItem> */}
                {/* <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
            </FormControl>
          </Grid>
          <Grid item xs sm={10} md={2}>
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
      <ModalWindow openModal={openModal} handleClose={handleClose} textTitle={errorMessage}
      buttonElem={<Button onClick={handleClose} color="error" variant="contained">Close</Button>}/>
    </Box>
  );
};

const Message = ({ message } : any) => {
  const isBot = message.role === "assistant";

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
          <Typography variant="body1">{message.content}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatUI;