import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';



class World extends React.Component {
    render(){
        return <h1 className={styles.styles} >World</h1>
    }
}
ReactDOM.render(<h1>World</h1>, document.getElementById('world'));