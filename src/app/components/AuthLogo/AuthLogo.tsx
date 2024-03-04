import { titanOneFont } from "@/app/fonts"

export const AuthLogo = () => {
    return (
        <div className="w-full mt-4">
            <div className={titanOneFont.className}>
                <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full relative flex justify-center items-center">
                        <div className="absolute w-4 h-4 bg-red origin-[50%_31px] rotate-0  -translate-y-[150%] rounded-[30%70%70%30%/30%30%70%70%]"></div>
                        <div className="absolute w-4 h-4 bg-blue-middle origin-[50%_31px] rotate-[60deg] -translate-y-[150%] rounded-[71%29%70%30%/46%65%35%54%]"></div>
                        <div className="absolute w-4 h-4 bg-orange-light origin-[50%_31px] rotate-[120deg] -translate-y-[150%] rounded-[86%14%86%35%/35%59%41%65%]"></div>
                        <div className="absolute w-4 h-4 bg-purple-middle origin-[50%_31px] rotate-[180deg] -translate-y-[150%] rounded-[26%74%45%55%/53%63%37%47%]"></div>
                        <div className="absolute w-4 h-4 bg-orange-dark origin-[50%_31px] rotate-[240deg] -translate-y-[150%] rounded-[71%29%44%56%/26%63%37%74%]"></div>
                        <div className="absolute w-4 h-4 bg-green-middle origin-[50%_31px] rotate-[300deg]  -translate-y-[150%] rounded-[26%74%19%81%/69%49%51%31%]"></div>
                        <div className="w-4 h-4 bg-blue-light rounded-full"></div>
                    </div>
                    <div className="flex items-center">
                        <span className="text-purple-middle uppercase text-4xl block">Chatty</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
 