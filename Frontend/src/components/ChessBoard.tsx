import { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../pages/Game";

function ChessBoard({board,socket}:{
    board:({
            square: Square;
            type: PieceSymbol;
            color: Color;
        } | null)[][];
        socket:WebSocket
}) {
    const [from , setFrom]=useState<null|Square>(null);
    const [to , setTo]=useState<null|Square>(null);
  return (
    <div className="text-zinc-50 w-full ">{
        board.map((row,i)=>{
            return <div key={i} className="flex">
                {row.map((square,j)=>{
                    return <div onClick={()=>{
                        if(!from){
                            setFrom(square?.square??null);

                        }else{
                            setTo(square?.square??null);
                            socket.send(JSON.stringify({
                                type:MOVE,
                                payload:{
                                    from,
                                    to
                                }
                            }))
                        }
                    }} key={j} className={`w-1/9 aspect-square ${(i+j)%2===0?"bg-[#EBECD0]":"bg-[#739552]"}`}>
                        <div className="w-full h-full flex justify-center items-center">
                        {square?square.type:""}
                        </div>
                    </div>
                })}
            </div>
        })
    }</div>
  )
}

export default ChessBoard