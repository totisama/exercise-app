'use client'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export const CountdownTimer = ({
  time,
  isPlaying = true,
  onFinish,
}: {
  time: number
  isPlaying: boolean
  onFinish: () => void
}) => {
  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={time}
      colors={['#32a852', '#e6e620', '#db2525']}
      colorsTime={[time, time - time / 3, time - (time / 3) * 2, 0]}
      isSmoothColorTransition={false}
      onComplete={() => {
        onFinish()
        return { shouldRepeat: true, delay: 0 }
      }}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  )
}
