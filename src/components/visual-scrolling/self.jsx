
import './self.css'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function VisualScrolling() {

    useEffect(() => {
        const sections = document.querySelectorAll('section')

        sections.forEach(section => {
            gsap.fromTo(section, {
                backgroundPositionY: `-${window.innerHeight / 2}px`
            }, {
                backgroundPositionY: `${window.innerHeight / 2}px`,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    scrub: true
                }
            })
        })
    }, [])

    return (
        <div className="visual-container">
            <section>
                <span>1</span>
            </section>
            <section>
                <span>2</span>
            </section>
            <section>
                <span>3</span>
            </section>
            <section>
                <span>4</span>
            </section>
        </div>
    )
}