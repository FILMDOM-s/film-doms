import anime from 'animejs'
import { useEffect } from 'react'

export const useAnime = () => {
  useEffect(() => {
    anime({
      targets: '.letter__part',
      translateY: {
        value: [-30, 0],
        duration: 900,
        delay: 1000,
        elasticity: 600,
        easing: 'easeOutElastic',
      },
      opacity: {
        value: [0, 1],
        duration: 300,
        easing: 'linear',
        delay: 1000,
      },
    })

    anime({
      targets: '.color-1',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeOutElastic',
      duration: 4000,
      delay: 1000,
      loop: false,
      direction: 'alternate',
    })

    anime({
      targets: '.color-3',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeOutElastic',
      duration: 4000,
      delay: 1200,
      loop: false,
      direction: 'alternate',
    })

    anime({
      targets: '.color-2',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeOutElastic',
      duration: 4000,
      delay: 1400,
      loop: false,
      direction: 'alternate',
    })

    setTimeout(() => {
      const filling = document.getElementsByTagName('path')

      for (let i = 0; i < filling.length; i++) {
        const element = filling[i]
        element.classList.remove('letter__layer')
      }
    }, 3000)
  }, [])
}
