import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const wss=new WebSocketServer({port:8080});

const gameManager=new GameManager();

wss.on("connection",function(socket){
    gameManager.addUser(socket)
    socket.on('close',function(){
        gameManager.removeUser(socket);
    })
})