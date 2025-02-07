import ChessBoard from "../assets/PMpDs83aQVeeoNw4nyNukw.webp";
function Landing() {
    return (
        <div className="grid md:grid-cols-2 gap-4 p-4 pt-10">

            <div className="order-1 md:order-2 bg-green-400 text-white p-4 pt-12 h-[90vh]  rounded-lg shadow-md">
                <div>
                    <h1 className="text-[4vw] font-bold text-center leading-tight tracking-wide">Play Chess Online</h1>
                    <h1 className="text-[4vw] font-bold text-center leading-tight"> on the #1 Site!</h1>
                </div>
                <div className="bg-red-300 flex justify-between item-center mt-[2vw] ">
                    <div className="flex">
                        <h2 className="text-white font-bold ">18,171,168&nbsp;</h2>
                        <h2 className="text-gray-500">Games Today</h2>
                    </div>
                    <div className="flex">
                        <h2 className="text-white font-bold ">226,817&nbsp;</h2>
                        <h2 className="text-gray-500">Playing Now</h2>
                    </div>
                </div>
            </div>
            <div className="order-2 md:order-1  w-full h-full  flex justify-center">
                <img src={ChessBoard} alt="chessboard" className="h-[40vw] rounded-lg" />
            </div>
        </div>
    );
}

export default Landing