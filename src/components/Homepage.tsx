import Top from "./Top"
import Body from "./Body"

export default function Homepage(){

    return (
        <>
                <Top keyword={keyword} setKeyword={setKeyword}/>
                <Body />
        </>
    )
}