import Image from 'next/image'
import style from '../styles/Hero.module.css'
import { useEffect, useState } from 'react'

export default function Hero() {
    const [active, setActive] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (active === 2) {
                setActive(0)
            } else {
                setActive(active + 1)
            }
        }, 5000)
        return () => clearInterval(interval)
    }, [active])

  return (
    <div className={style.hero}>
        {active === 0 && <div className={style.hero__inner}>
            <Image src="/images/home/hero.JPG" alt="hero" width={1920} height={1080} quality={100} />
            <div className={style.hero__content}>
                <h1>Embark on Unforgettable Journeys</h1>
            </div>
        </div>}
        {active === 1 && <div className={style.hero__inner}>
            <Image src="/images/home/hero2.JPG" alt="hero" width={1920} height={1080} quality={100} />
            <div className={style.hero__content}>
                <h1>Adventure Awaits: Uncover Hidden Gems Across the Globe.</h1>
            </div>
        </div>}
        {active === 2 && <div className={style.hero__inner}>
            <Image src="/images/home/hero3.JPG" alt="hero" width={1920} height={1080} quality={100} />
            <div className={style.hero__content}>
                <h1>Unleash Your Wanderlust: Let the Adventure Begin!</h1>
            </div>
        </div>}
    </div>
  )
}
