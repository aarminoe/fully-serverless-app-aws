import React from "react";
import { Card } from "@mui/material";

function Home() {

    return(
        <Card className="home-page">
            <h1 className="welcome-title-home">Welcome!</h1>
            
            <div className="splash-message">
                Safe Space is a a completely anonymous blog board. Feel free to share anything you would like! You may find other bloggers you can relate to. Please be kind and enjoy yourself, this is a safe space!
            </div>
        </Card>
    )
}

export default Home;