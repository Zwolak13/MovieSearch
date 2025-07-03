export default function Footer(){

    return(
        <footer className="bg-black/50 text-white text-center p-2 vhs-effect italic">
            {<p>© {new Date().getFullYear()} YAMSP - API by <a className="hover:text-[rgba(255,0,255,1)]" href="https://www.themoviedb.org">TMDB</a></p>}
            <p>Made by <a className="hover:text-[rgba(255,0,255,1)]" href="https://github.com/Zwolak13">@Zwolak13</a></p>
        </footer>
    )
}