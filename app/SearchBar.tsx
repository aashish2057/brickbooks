import { useState, useEffect } from "react"
import { Results, Sets } from "./types"

export default function SearchBar ({results = [], renderItem, onChange}: Results<Sets>) {

    const [showResults, setShowResults] = useState(false)

    useEffect(() => {
        if(results.length > 0 && !showResults) setShowResults(true);

        if(results.length <= 0) setShowResults(false)
    }, [results]);

    return (
        <div className="grid pt-32 place-items-center">
            <div className="relative">
                <div className="flex text-4xl">
                    <input 
                        className="rounded-lg fle h-14 w-96 bg-neutral-900 outline" 
                        type="text" 
                        onChange={onChange}
                    />
                </div>

                {showResults && (<div className="absolute mt-1 w-full p-2 bg-neutral-900 shadow-lg rounded-bl rounded-br max-h-56 overflow-y-auto">
                    {results.map((item, index) => {
                        return (
                            <div key={index}className="cursor-pointer p-2">
                            {renderItem(item)}
                            </div>
                        )
                    })}
                </div>)}
            </div>
      </div>
    )
};