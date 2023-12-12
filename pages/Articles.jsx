import Image from "next/image"
import style from "../styles/Home.module.css"
import { LuClock4 } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";

export default function Articles() {
  return (
    <div className={style.articles}>
        <div className={style.articles__con}>
            <h2><FaRegLightbulb /> Travel Articles</h2>
            <div className={style.articles__list}>
                <div className={style.article__item}>
                    <Image src={"https://picsum.photos/900"} alt="article" width={900} height={600} quality={100} />
                    <div className={style.article__text}>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p><LuClock4 />July 12, 2024</p>
                    </div>
                </div>
                <div className={style.article__item}>
                    <Image src={"https://picsum.photos/901"} alt="article" width={900} height={600} quality={100} />
                    <div className={style.article__text}>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p><LuClock4 />July 12, 2024</p>
                    </div>
                </div>
                <div className={style.article__item}>
                    <Image src={"https://picsum.photos/902"} alt="article" width={900} height={600} quality={100} />
                    <div className={style.article__text}>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p><LuClock4 />July 12, 2024</p>
                    </div>
                </div>
                <div className={style.article__item}>
                    <Image src={"https://picsum.photos/903"} alt="article" width={900} height={600} quality={100} />
                    <div className={style.article__text}>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p><LuClock4 />July 12, 2024</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
