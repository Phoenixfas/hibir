import style from "../styles/Home.module.css"
import { IoSearchSharp } from "react-icons/io5";

export default function Search() {
  return (
    <div className={style.search}>
        <div className={style.search__inner}>
            <input type="text" placeholder="Where do you want to go?" />
            <button><IoSearchSharp /></button>
        </div>
    </div>
  )
}
