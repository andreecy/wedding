import { useEffect, useState } from "react"

const audio = new Audio("./James_Arthur_Falling_Like_The_Stars.mp3")

const AudioPlayer = (props: any) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioCtx, setAudioCtx] = useState(new AudioContext())

  //handle props change
  useEffect(() => {
    if (props.isOpen) {
      play()
    }
  }, [props.isOpen])

  const createAudioContext = () => {
    let ctx = new AudioContext()
    let source = ctx.createMediaElementSource(audio)
    source.connect(ctx.destination)
    // audioCtx.resume().then(() => {
    //   console.log("Playback resumed successfully")
    // })
    audio.play()
    setIsPlaying(!audio.paused)
    setAudioCtx(ctx)
    // console.log(ctx)
  }

  const play = () => {
    // console.log(audioCtx)

    if (audioCtx.state == null || audioCtx.state == undefined) {
      createAudioContext()
      return
    } else {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
      setIsPlaying(!audio.paused)
    }
  }
  return (
    <>
      <div className="fixed block bottom-0 left-0">
        <button onClick={play}>
          <div className="text-gray-400 bg-gray-700 hover:bg-gray-500 hover:scale-110 transition ease-out m-1 w-[30px] h-[30px] rounded-full leading-[30px] text-center">
            {isPlaying ? (
              <i className="fas fa-pause text-md"></i>
            ) : (
              <i className="fas fa-play text-md"></i>
            )}
          </div>
        </button>
      </div>
    </>
  )
}

export default AudioPlayer
