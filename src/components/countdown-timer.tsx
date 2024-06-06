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
  const children = ({ remainingTime }: { remainingTime: number }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds

    return (
      <span className='text-4xl font-bold'>{`${minutes}:${formattedSeconds}`}</span>
    )
  }

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
      {({ remainingTime }) => children({ remainingTime })}
    </CountdownCircleTimer>
  )
}
