export default function SearchBar () {
    return (
        <div className="w-[19.5rem] flex justify-between">
        <input 
        className="bg-[var(--base-varient)] h-[1.9rem] w-[15rem] rounded-sm text-[dark gray] pl-[0.5rem]" 
        type="text" 
        placeholder="Type here"/>
        <button 
        type="submit" 
        className="bg-[var(--accent-color)] text-[aliceBlue] cursor-pointer w-[4rem] h-[1.9rem] rounded-[5px]"
        >Search</button>
        </div>
    )
}