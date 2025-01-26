
import { FaLinkedin, FaGithub, FaInstagram, FaCode } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <footer className="py-6">
      <div className="flex items-center gap-6 text-2xl justify-center text-white">
        <a
          href="https://www.linkedin.com/in/shalini-singh-a56a87258/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/shalini1008"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/shalini_10080/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/Shalini70856041"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://leetcode.com/u/letsdoit8/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <FaCode />
        </a>
        {/* <a
          href="https://codeforces.com/profile/shalini_x_code"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Codeforces"
        >
          <FaCode />
        </a> */}
      </div>
    </footer>
  );
}

export default Navbar;
