import React from 'react';
import classes from "./main.module.css"
import Card from '../../../UI/card/Card';

const Main = (props) => {
    return ( 
        <div className={classes.mainContainer}>
            <main>
                <Card title="پرتخفیف ترین ها" id="1" />
                <Card title="پرفروش ترین ها" id="2" />
                <Card title="جدیدترین ها" id="3" />
            </main>
        </div>
     );
}
 
export default Main;