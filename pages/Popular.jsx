import Image from "next/image"
import style from "../styles/Home.module.css"
import Link from "next/link"

export default function Popular() {
  return (
    <div className={style.popular}>
        <h2>Popular Destinations</h2>
        <div className={style.popular__con}>
            <div className={style.popular__item}>
                <Image src="/images/home/savanna.JPG" alt="popular destination" width={800} height={500} quality={100} />
                <h3>Lorem ipsum dolor sit amet.</h3>
                <div className={style.popular__content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe qui quisquam eligendi aut consectetur aperiam, officia quod suscipit, a facilis neque ea cupiditate quia sint. Maiores ut nemo eligendi perferendis?</p>
                    <br />
                    <span><p><b>$500</b></p> <Link href={"/"}>More</Link></span>
                </div>
            </div>
            <div className={style.popular__item}>
                <Image src="/images/home/savanna.JPG" alt="popular destination" width={800} height={500} quality={100} />
                <h3>Lorem ipsum dolor sit amet.</h3>
                <div className={style.popular__content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe qui quisquam eligendi aut consectetur aperiam, officia quod suscipit, a facilis neque ea cupiditate quia sint. Maiores ut nemo eligendi perferendis?</p>
                    <br />
                    <span><p><b>$500</b></p> <Link href={"/"}>More</Link></span>
                </div>
            </div>
            <div className={style.popular__item}>
                <Image src="/images/home/savanna.JPG" alt="popular destination" width={800} height={500} quality={100} />
                <h3>Lorem ipsum dolor sit amet.</h3>
                <div className={style.popular__content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe qui quisquam eligendi aut consectetur aperiam, officia quod suscipit, a facilis neque ea cupiditate quia sint. Maiores ut nemo eligendi perferendis?</p>
                    <br />
                    <span><p><b>$500</b></p> <Link href={"/"}>More</Link></span>
                </div>
            </div>
        </div>
    </div>
  )
}
