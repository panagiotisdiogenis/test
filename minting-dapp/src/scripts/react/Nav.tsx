export default function Nav () {
    return (
        <div className="nav">
          <div className="left">
            <a href="/"><img id="logoNav" src="/build/images/mainGif.gif" alt="Logo" /></a>
            <div className="links">
              <a href="/">HOME</a>
              <a href="/">VAULT</a>
              <a href="/">PALOOZA</a>
            </div>
          </div>
          <div className="right">
            <a className="icon"><img src="/build/images/opensea.svg" /></a>
            <a className="icon"><img src="/build/images/medium.svg" /></a>
            <a className="icon"><img src="/build/images/twitter.svg" /></a>
            <a className="icon"><img src="/build/images/github.svg" /></a>
          </div>
        </div>
    )
}