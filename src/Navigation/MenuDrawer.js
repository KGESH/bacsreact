import React from "react";
import { Link, useHistory } from "react-router-dom";
import { IconButton, List, ListItem, ListItemText, Drawer } from "@material-ui/core";
import hamburgerLogo from "../Bacs_Images/hamburger_menu.svg";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./MenuDrawer.css";
import { auth } from "../FireBase";


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    linkText: {
        textDecoration: `none`,
        color: `black`
    }
});

/***  Mobile NavBar Item Drawer  ***/
const MenuDrawer = ({MenuItems, isLoggedIn}) => {
    const classes = useStyles();
    const [state, setState] = useState({ top: false })
    const history = useHistory();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")) {
                return;
            }
        setState({ [anchor]: open })
    }

    const MenuDrawerList = anchor => (
        <div className={classes.list} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            <List component="nav">
                {MenuItems.map(({title, url}) => (
                    <Link to={url} key={title} className={classes.linkText}>
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                    </Link>
                ))}
                <div className="menu__login_wrapper">
                    {isLoggedIn ? (
                        <Link to="/" className={classes.linkText} onClick={() => {
                            auth.signOut();
                            history.push("/");
                        }}>
                            <ListItem button>
                                <ListItemText primary="로그아웃" />
                            </ListItem>
                        </Link>
                    ) : (
                        <Link to="/Login" className={classes.linkText}>
                            <ListItem button>
                                <ListItemText primary="로그인" />
                            </ListItem>
                        </Link>
                    )}

                    <Link to="/Cart" className={classes.linkText}>
                        <ListItem button>
                            <ListItemText primary="장바구니" />
                        </ListItem>
                    </Link>
                </div>
            </List>
        </div>
    )


    return (
        <>                
                <IconButton edge="start" aria-label="menu" onClick={toggleDrawer("top", true)}>
                    <img className="nav__menu_logo" src= {hamburgerLogo} alt="Menu"/>
                </IconButton>
                <Drawer anchor="top" open={state.top} onOpen={toggleDrawer("top", true)} onClose={toggleDrawer("top", false)}>
                    {MenuDrawerList("top")}
                </Drawer>
        </>
    )
}

export default MenuDrawer;