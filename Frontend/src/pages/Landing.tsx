import ChessBoard from "../assets/PMpDs83aQVeeoNw4nyNukw.webp";
import Pawn from "../assets/kisspng-chess-piece-king-chessboard-board-game-black-chess-5a8e3e9d105086.4309410015192715810668.png"
function Landing() {
    return (
        <div className="text-zinc-50 grid  md:grid-cols-2">
            <div className="order-1 md:order-2  pt-20  text-center bg--300 px-10 flex flex-col items-center h-[90vh]">
                <div className="text-4xl font-bold md:text-6xl ">
                    <div>
                        Play Chess Online
                    </div>
                    <div>
                        on the #1 Site!
                    </div>
                </div>
                <div className=" flex w-100 justify-between items-center mt-10">
                    <div className="flex">
                        <div className="font-bold ">18,184,935&nbsp;</div>
                        <div className="text-gray-400">Games Today</div>
                    </div>
                    <div className="flex">
                        <div className="font-bold ">148,018&nbsp;</div>
                        <div className="text-gray-400">Playing Now</div>
                    </div>
                </div>
                <div className="bg-[#81B64C] flex h-24 w-100  mt-10 py-3 px-5 rounded-xl gap-10">
                    <div className="overflow-hidden items-center ">
                        <img src={Pawn} className="h-[90%]"/>
                    </div>
                    <div className="flex flex-col justify-center gap-1 cursor-pointer ">
                        <div className="text-2xl font-bold text-left">
                            Play Online
                        </div>
                        <div>
                            Play with someone at your level!
                        </div>
                    </div>
                </div>
            </div>
            <div className="order-2 md:order-1  md:block px-10 h-[90vh] overflow-hidden md:pt-10">
            <img src={ChessBoard} className="w-full rounded-lg"/>
            </div>
        </div>
    );
}

export default Landing