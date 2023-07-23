import { useState, useRef, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import postMessage from "../../api/post-data/postMessage";
import { LoadingButton } from "@mui/lab";
// import robot from '../../images/robot.png';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ModalWindow from "../../shared/common/ModalWindow";
import { useDispatch } from "react-redux";
import { UPDATE_BOOK_IMAGE_LOADING, UPDATE_SLIDER_IMAGES } from "../../store/imageControllerStore/imageControllerReducer";
import Cookies from "js-cookie";

const ChatUI = () => {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [command, setCommand] = useState<string>('');

  // const [pages, setPages] = useState<Array<any>>([]);

  // for store 

  const dispatch = useDispatch();

  // for modal window
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false)
  const [errorMessage, setErrorMessage] = useState<string>('');

  const messages = JSON.parse(sessionStorage.getItem('messages') ||
   `[{ "content": "Hello dear ${Cookies.get('username')}, welcome to your personalized tutoring program. I am Boston the Edubot, I will guide you to excel and be among the top 1% of students worldwide. My main focus is the Cambridge Academic math program, preparing you for IGCSE exams. Together we will be crafting examples around your interests for effective learning. Before we dig deep into exploring the world of mathematics, I'd like to conduct a quick quiz. This will help me understand your current level of mastery in Math and tailor my tutoring to your needs. Are you ready to start the quiz?", "role": "assistant" }]`);

  const messageBlockRef = useRef({scrollTo, scrollHeight: 0});

  const handleSend = () => {
    const pages: any[] = [];
    if (input.trim() !== "") {
      if(loading == false) {
        try {
          setLoading(true)
          messages.push({content: input, role: 'user'})
          sessionStorage.setItem('messages', JSON.stringify([...messages, {content: 'Loading...', role: 'assistant'}]))
          postMessage("https://bostonbackendengine-sc4x4pjhiq-uc.a.run.app/api/v1/boston/chatbot-reference", messages)
            .then((res : any) => {
              messageBlockRef.current.scrollTo(0, messageBlockRef.current.scrollHeight);
              if(res.length > 1) {
                const infoAboutBookPages : any = res.filter((item : any) => item.role == undefined || item.role === 'function');
                if(Boolean(infoAboutBookPages)) {
                  for(let i = 0; i < infoAboutBookPages.length; i++){
                    pages.push({label : infoAboutBookPages[0].content[0].docs[i].page, 
                      imgPath: `${infoAboutBookPages[1][i]}?auto=format&fit=crop&w=400&h=350`});
                  }
                }
              }
              const textMessageObj = res.filter((item : any) => item.role == 'assistant');
              const messageFromBot = {content: textMessageObj[0].content, role: textMessageObj[0].role};
              messages.push(messageFromBot)
              sessionStorage.setItem('messages', JSON.stringify(messages))
              setLoading(false);
              dispatch({type: UPDATE_BOOK_IMAGE_LOADING, payload: true})
              return new Promise((resolve) => {
                setTimeout(() => resolve('foo'), 500);
              });
            }).then(() => {
              dispatch({type: UPDATE_SLIDER_IMAGES, payload: pages})
              // TODO ---------------------
              // if(pages.length > 0) {
              //   sessionStorage.setItem('pages', JSON.stringify(pages))
              // }
              dispatch({type: UPDATE_BOOK_IMAGE_LOADING, payload: false})
            }).catch((err : any) => {
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
          setLoading(false);
          setOpenModal(true);
          setErrorMessage('Error !')
          setCommand("")
          setInput("");
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
    const pages: any[] = [];
    if (input.trim() !== "") {
      if(event.key == 'Enter' && loading == false){
        try {
          setLoading(true)
          messages.push({content: input, role: 'user'})
          sessionStorage.setItem('messages', JSON.stringify([...messages, {content: 'Loading...', role: 'assistant'}]))
          messageBlockRef?.current.scrollTo(0, messageBlockRef?.current.scrollHeight)
          postMessage("https://bostonbackendengine-sc4x4pjhiq-uc.a.run.app/api/v1/boston/chatbot-reference", messages)
            .then((res : any) => {
              messageBlockRef?.current.scrollTo(0, messageBlockRef?.current.scrollHeight)
              console.log('Data: ', res)
              if(res.length > 1) {
                const infoAboutBookPages = res.filter((item : any) => item.role == undefined || item.role === 'function');
                if(Boolean(infoAboutBookPages)) {
                  for(let i = 0; i < infoAboutBookPages.length; i++){
                    pages.push({label : infoAboutBookPages[0].content[0].docs[i].page, 
                      imgPath: `${infoAboutBookPages[1][i]}?auto=format&fit=crop&w=400&h=350`});
                  }
                }
              }
              const textMessageObj = res.filter((item : any) => item.role == 'assistant');
              const messageFromBot = {content: textMessageObj[0].content, role: textMessageObj[0].role};
              messages.push(messageFromBot)
              sessionStorage.setItem('messages', JSON.stringify(messages))
              setLoading(false);
              dispatch({type: UPDATE_BOOK_IMAGE_LOADING, payload: true})
              return new Promise((resolve) => {
                setTimeout(() => resolve('foo'), 500);
              });
            }).then(() => {
              dispatch({type: UPDATE_SLIDER_IMAGES, payload: pages})
              // TODO ---------------------
              // if(pages.length > 0) {
              //   sessionStorage.setItem('pages', JSON.stringify(pages))
              // }
              dispatch({type: UPDATE_BOOK_IMAGE_LOADING, payload: false})
            }).catch((err : any) => {
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
          setLoading(false);
          setOpenModal(true);
          setErrorMessage('Error !')
          setCommand("")
          setInput("");
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
      <Box ref={messageBlockRef} sx={{ flexGrow: 1, overflow: "auto" }}>
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

//1px solid var(--gray-200)

const Message = ({ message } : any) => {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        width: '100%'
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row" ,
          width: '100%'
          // alignItems: "center",
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            backgroundColor: "#FFF",
            width: '100%',
            textAlign: 'initial',
            display: 'flex',
            borderRadius : 0,
            borderBottom: '1px solid var(--gray-200)'
          }}
        > 
          <Typography sx={{minWidth: '85px', width: '85px', fontWeight: 'bold', wordWrap: 'break-word'}} 
          variant="body1">{message.role === "assistant" ? 'Boston' : Cookies.get('username')}</Typography>
          <Typography sx={{marginLeft: '20px'}} variant="body1">{message.content}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatUI;