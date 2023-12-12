import Image from "next/image";
import style from "../styles/Home.module.css"
import { TfiLocationPin } from "react-icons/tfi";
import Link from "next/link";

export default function PopularDst() {
  return (
    <div className={style.pd}>
        <div className={style.pd__text}>
            <div className={style.pd__title}>
                <TfiLocationPin />
                <h2>Popular Destinations</h2>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aliquam quam quo laudantium numquam ipsam consectetur neque earum, ea iure. Dolorum, aspernatur ipsa hic ullam dignissimos nobis repudiandae rem similique!</p>
        </div>

        <div className={style.pd__list}>
            <div className={style.pd__item}>
                <Image src={"https://picsum.photos/800"} alt="tour" width={800} height={600} quality={100} />
                <div className={style.pd__item__inner}>
                    <div className={style.pd__item__text}>
                        <h3><TfiLocationPin /> Africa</h3>
                        <p>7 Tours</p>
                    </div>
                    <Link href="/"> View Tours </Link>
                </div>
            </div>
            <div className={style.pd__item}>
                <Image src={"https://picsum.photos/801"} alt="tour" width={800} height={600} quality={100} />
                <div className={style.pd__item__inner}>
                    <div className={style.pd__item__text}>
                        <h3><TfiLocationPin /> Asia</h3>
                        <p>12 Tours</p>
                    </div>
                    <Link href="/"> View Tours </Link>
                </div>
            </div>
            <div className={style.pd__item}>
                <Image src={"https://picsum.photos/802"} alt="tour" width={800} height={600} quality={100} />
                <div className={style.pd__item__inner}>
                    <div className={style.pd__item__text}>
                        <h3><TfiLocationPin /> South America</h3>
                        <p>3 Tours</p>
                    </div>
                    <Link href="/"> View Tours </Link>
                </div>
            </div>
            <div className={style.pd__item}>
                <Image src={"https://picsum.photos/803"} alt="tour" width={800} height={600} quality={100} />
                <div className={style.pd__item__inner}>
                    <div className={style.pd__item__text}>
                        <h3><TfiLocationPin /> Europe</h3>
                        <p>5 Tours</p>
                    </div>
                    <Link href="/"> View Tours </Link>
                </div>
            </div>
            <div className={style.pd__item}>
                <Image src={"https://picsum.photos/804"} alt="tour" width={800} height={600} quality={100} />
                <div className={style.pd__item__inner}>
                    <div className={style.pd__item__text}>
                        <h3><TfiLocationPin /> America</h3>
                        <p>4 Tours</p>
                    </div>
                    <Link href="/"> View Tours </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
