import moment from "moment"
import { useEffect, useState } from "react"

const Countdown = () => {
  const [currentTime, setCurrentTime] = useState(moment())
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const eventTime = moment("2022-05-25T09:00:00")

  function update() {
    let duration: any

    setCurrentTime(moment())

    // get duration between two times
    duration = moment.duration(eventTime.diff(currentTime))

    // get updated duration
    duration = moment.duration(duration, "milliseconds")

    // if duration is >= 0
    if (duration.asSeconds() <= 0) {
      // hide the countdown element
    } else {
      setDays(parseInt(duration.asDays()))
      setHours(duration.hours())
      setMinutes(duration.minutes())
      setSeconds(duration.seconds())
    }
  }

  // useEffect(() => {
  //   update()
  // })

  return (
    <>
      <div className="flex flex-row justify-center mb-6">
        <div className="w-[50px]">
          <p className="text-white text-xl font-bold text-center">{days}</p>
          <p className="text-white text-xs text-center">Hari</p>
        </div>
        <div className="w-[50px]">
          <p className="text-white text-xl font-bold text-center">{hours}</p>
          <p className="text-white text-xs text-center">Jam</p>
        </div>
        <div className="w-[50px]">
          <p className="text-white text-xl font-bold text-center">{minutes}</p>
          <p className="text-white text-xs text-center">Menit</p>
        </div>
        <div className="w-[50px]">
          <p className="text-white text-xl font-bold text-center">{seconds}</p>
          <p className="text-white text-xs text-center">Detik</p>
        </div>
      </div>
    </>
  )
}

export default Countdown
