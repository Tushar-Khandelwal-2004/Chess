import { useEffect, useState } from "react";
import ChessBoard from "../components/ChessBoard"
import Loader from "../components/Loader";
import { useSocket } from "../hooks/useSocket"
import { Chess } from "chess.js";
//Move
export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";


function Game() {
  const socket = useSocket();
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());

  useEffect(() => {
    if (!socket) {
      return;
    }
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      switch (message.type) {
        case INIT_GAME:
          setChess(new Chess());
          setBoard(chess.board());
          break;
        case MOVE:
          const move = message.payload;
          chess.move(move);
          setBoard(chess.board());

          break;
        case GAME_OVER:

      }

    }
  }, [socket]);
  if (!socket) {
    return <Loader />
  }
  return (
    <div className="py-10 px-20 text-white grid md:grid-cols-2">
      <div className="flex justify-center w-full md:col-span-1">
        <ChessBoard soocket={socket} board={board} />
      </div>

      <div className="md:col-span-1 w-full mt-10 md:mt-0 flex justify-center items-center">
        <div onClick={() => {
          socket.send(JSON.stringify({
            type: INIT_GAME,

          }))
        }} className="bg-[#81B64C] flex justify-center items-center h-24 w-8/9 py-3 px-5 rounded-xl cursor-pointer ">
          <div className="text-5xl font-bold">Play</div>
        </div>
      </div>
    </div>
  )
}

export default Game