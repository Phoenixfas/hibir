import style from "../styles/Home.module.css"
import { IoSearchSharp } from "react-icons/io5";

export default function Search() {
  return (
    <div className={style.search}>
        <div className={style.search__inner}>
            <input type="text" placeholder="Keywords" />
            <select name="" id="">
                <option value="">Destination</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="sa">South America</option>
            </select>
            <select name="" id="">
              <option value="">Duration</option>
              <option value="1">1 day</option>
              <option value="2">2 days</option>
              <option value="3">3 days</option>
              <option value="4">4 days</option>
              <option value="5">5 days</option>
              <option value="6">6 days</option>
            </select>
            <button>Search</button>
        </div>
    </div>
  )
}
