function Modal () {
  return (<>
    <div className="w-screen h-screen fixed inset-0 bg-black/50 flex items-center justify-center">
        <div className="w-[500px] min-h-[30%] bg-white relative rounded-md drop-shadow-xl p-5">
                 <div name="EncabezadoModal" className="flex items-center justify-center mb-5 pb-5 border-[#0099ff] border-b" >
                    <h3 className="text-base font-medium text-[#0099ff]">Encabezado</h3>
                 </div>
                 <button className="absolute top-5 right-5 w-7 h-7 bg-none cursor-pointer rounded text-red-500 transition duration-300 ease-in-out hover:bg-gray-700">
                 </button>
        </div>
    </div></>)
}

export default Modal
