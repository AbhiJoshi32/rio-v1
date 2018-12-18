import React, { Component } from 'react';
import firebase from 'firebase/app'
import 'firebase/database'

export default class Messages extends Component{
    constructor(props) {
        super(props);
        this.state = { messages: [] }; // <- set up react state
    }
    componentWillMount(){
        /* Create reference to messages in Firebase Database */
        let messagesRef = firebase.database().ref('queue');
        messagesRef.on('value', snapshot => {
            console.log(snapshot.val());
            if(snapshot.val() == null) this.setState({messages:[]});
          /* Update React state when message is added at Firebase Database */
          snapshot.forEach((childSnapshot) => {
            let message = { text: childSnapshot.val(), id: childSnapshot.key };
            this.setState({ messages: [message].concat(this.state.messages) });
            console.log(this.state.messages);
          });
        })
    }
    remove(id) {
        firebase.database().ref('queue').child(id).set(null);        
    }
    render() {
        return (
            <div className="container" style={{marginTop:'100px'}}>
                <ul>
                { /* Render the list of messages */
                this.state.messages.map( message => <li key={message.id}>{message.text.phone} {message.text.from} {message.text.to} {message.text.date} 
                <span className="fa fa-remove" onClick = {this.remove.bind(this,message.id)}></span></li> )
                } 
                </ul>
            </div>
        );
    }
}