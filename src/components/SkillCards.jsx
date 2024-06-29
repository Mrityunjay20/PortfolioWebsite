export default function SkillCards({Value, ValueLogo, Heading, Spacing}){
    return(
        <div className={`${Spacing} p-4`}>
            <div className="w-full h-max bg-slate-950 rounded-xl lg:py-3 p-4">
                <div>
                    <h1 className="text-white mx-auto my-4 text-2xl w-max font-semibold uppercase text-center">{Heading}</h1>
                </div>
                <div>
                    <ul className="text-[#4cd8f7] w-full mx-auto my-2 flex flex-row justify-center text-base font-mono leading-10 space-x-4 overflow-x-auto">
                        {Value.map((item, index) => (
                            <li className="flex flex-col items-center min-w-[120px] p-2" key={index}>
                                <img className='hover:scale-110 w-full max-w-xs p-4 rounded-lg mx-auto duration-300' src={ValueLogo[index]} /> 
                                <h1 className="text-center mt-2">{item}</h1>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
