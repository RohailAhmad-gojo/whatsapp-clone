import React, { useEffect, useState } from 'react'
import { Drawer, makeStyles } from '@material-ui/core'
import display from "../images/dp.webp"
import img from "../images/dp2.jpg"
import Info from "../images/dp6.jpg"

import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ScreenRotationIcon from '@material-ui/icons/ScreenRotation';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import AttachmentIcon from '@material-ui/icons/Attachment';
import MicIcon from '@material-ui/icons/Mic';
import FilterListIcon from '@material-ui/icons/FilterList';


const useStyles = makeStyles({
    sideBar:{
        
    },
    icons:{
        color:"#aebac1",
        margin:"0 12px",
        cursor:"pointer",
        fontSize:"1.8rem",
        '&:hover':{
            color:"gray"
          }
    },
    sidebarIcon:{
        color:"#aebac1",
        margin:"0 12px",
        cursor:"pointer",
        fontSize:"1.5rem",
        fontWeight:"100",
        '&:hover':{
            color:"gray",
          }
    },
    searchBarIcon:{
        color:"#aebac1",
        fontSize:"1.2rem",
    }

})

function Home() {
    const classes = useStyles()


    const [searchTerm, setSearchTerm] = useState('')
    const [user, setUser] = useState([]);
    const getUser = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
         setUser( await response.json()); 
    }

    useEffect(() =>{
        getUser();
    }, [])
  return (
    <div>
        sadfdsfsd
        <Drawer 
            borderRight={1}
            borderColor="red"
            className={classes.sideBar}
            variant='permanent' 
            anchor='left'
            >
            <div className='sidebar-container'>
                <div>
                    <div className='sidebar-head'>
                        <img src={display} alt="avatar"/>
                        <div className='sidebar-icon'>
                            <GroupAddIcon className={classes.icons}/>
                            <ScreenRotationIcon className={classes.icons}/>
                            <MessageIcon className={classes.icons}/>
                            <MoreVertIcon className={classes.icons}/>
                        </div>
                    </div>
                </div>
                <div className='search-bar'>
                    <div className='search-input'>
                        <span>
                            <SearchIcon className={classes.searchBarIcon}/>
                            <input placeholder='search or start a new chat' type='text' 
                            onChange={event => {
                                setSearchTerm(event.target.value)
                            ;}}/> 
                        </span>
                        <div className='search-icons'>
                            <FilterListIcon className={classes.icons}/>
                        </div>
                    </div>
                    
                </div>
                <div className='sidebar-user-container'>
                    {
                        user.filter((val) => {
                            if (searchTerm === ""){
                                return val
                            }else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                return val
                            }else if (val.username.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                return val
                            }
                        }).map((val, key) => {
                            return (
                                <>
                                    <div className='sidebar-user' key={key}>
                                        <div className="sidebar-user-img">
                                            <img src={img} alt="avatar"/>
                                        </div>
                                        <div className="sidebar-user-data">
                                            <h4>{val.name}</h4>
                                            <h5>{val.username}</h5>
                                        </div>
                                        <div className="sidebar-user-icons">
                                            <h5>{val.address.city}</h5>
                                            <ExpandMoreIcon className={classes.sidebarIcon}/>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </Drawer>
        <div className='navbar'>
            <div className='navbar-info'>
                <div className='navbar-info-image'>
                    <img src={Info} alt='avator'/>
                </div>
                <div className='navbar-info-text'>
                    <h4>Name of user</h4>
                    <h5>username</h5>
                </div>

            </div>
        </div>

        <div className='background'>
        </div>

        <div className='message-container'>
            <div className='message-icons'>
                <SentimentVerySatisfiedIcon className={classes.icons}/>
                <AttachmentIcon className={classes.icons}/>
            </div>
            <div className='message-text'>
                <input type="text" placeholder='Type a message'/>
            </div>
            <div className='message-record'>
                <MicIcon className={classes.icons}/>
            </div>
        </div>
    </div>
  )
}

export default Home