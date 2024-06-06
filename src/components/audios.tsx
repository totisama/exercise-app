import { type RefObject } from 'react'

export const Audios = ({
  audioRef,
  audioRefCD,
  audioRefFinish,
}: {
  audioRef: RefObject<HTMLAudioElement>
  audioRefCD: RefObject<HTMLAudioElement>
  audioRefFinish: RefObject<HTMLAudioElement>
}) => {
  return (
    <>
      <audio
        loop
        preload='true'
        src='https://eu-central-1-shared-euc1-02.graphassets.com/clwue0h040dro07w1cfgacud6/clx3fncopxv4h06w4fsxxjs5o?_gl=1*1airq03*_gcl_au*MTg0MTkzMTMzMy4xNzE2ODgzOTY2*_ga*MTY4OTgwNDc1MC4xNzE2ODgzOTY2*_ga_G6FYGSYGZ4*MTcxNzY4NzU2MS4xOC4xLjE3MTc2ODkxMjcuNjAuMC4w'
        ref={audioRef}
      />
      <audio
        preload='true'
        src='https://eu-central-1-shared-euc1-02.graphassets.com/clwue0h040dro07w1cfgacud6/clx3gykfejger07us9jhoaxgr?_gl=1*1xc4hkp*_gcl_au*MTg0MTkzMTMzMy4xNzE2ODgzOTY2*_ga*MTY4OTgwNDc1MC4xNzE2ODgzOTY2*_ga_G6FYGSYGZ4*MTcxNzY5MTE1Ni4xOS4xLjE3MTc2OTExNjEuNTUuMC4w'
        ref={audioRefCD}
      />
      <audio
        preload='true'
        src='https://eu-central-1-shared-euc1-02.graphassets.com/clwue0h040dro07w1cfgacud6/clx3hq5om13pa06w4fx1zutwn?_gl=1*1b08hdr*_gcl_au*MTg0MTkzMTMzMy4xNzE2ODgzOTY2*_ga*MTY4OTgwNDc1MC4xNzE2ODgzOTY2*_ga_G6FYGSYGZ4*MTcxNzY5MTE1Ni4xOS4xLjE3MTc2OTI0NDUuNTYuMC4w'
        ref={audioRefFinish}
      />
    </>
  )
}
