import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Footer() {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "") {
            setMsg("Please enter your email address");
        } else {
            setMsg(`Thank you! We will send you updates on ${email}`);
            setEmail("");
        }
    }

  return (
    <div className="footer">
        <div className="footer__col">
            <Image src="/full.png" alt="logo" width={500} height={500}/>
        </div>
        <div className="footer__col">
            <h3>Company</h3>
            <ul>
                <li><Link href={"/"}>About</Link></li>
                <li><Link href={"/"}>Blog</Link></li>
                <li><Link href={"/"}>Jobs</Link></li>
                <li><Link href={"/"}>Press</Link></li>
            </ul>
        </div>
        <div className="footer__col">
            <h3>Community</h3>
            <ul>
                <li><Link href={"/"}>Help</Link></li>
                <li><Link href={"/"}>Forum</Link></li>
                <li><Link href={"/"}>Guidelines</Link></li>
                <li><Link href={"/"}>Plugins</Link></li>
            </ul>
        </div>
        <div className="footer__col">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter to get updates on our latest offers!</p>
            {msg && <p><span>{msg}</span></p>}
            <input type="email" required placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={handleSubmit}>Subscribe</button>
        </div>
    </div>
  )
}
