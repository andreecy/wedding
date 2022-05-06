import { useEffect, useState } from "react"
import queryString from "query-string"
import Countdown from "./Countdown"
import Nav from "./Nav"
import Page from "./Page"
import AudioPlayer from "./AudioPlayer"

//scroll animation observer
const callback = function (entries: any) {
  entries.forEach((entry: any) => {
    // console.log(entry)

    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100")
      entry.target.classList.remove("opacity-0")
      entry.target.classList.remove("translate-y-3")
    } else {
      // entry.target.classList.add("opacity-0")
      // entry.target.classList.remove("opacity-100")
      // entry.target.classList.add("translate-y-3")
    }
  })
}

const observer = new IntersectionObserver(callback)

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [popupKadoIsOpen, setPopupKadoIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [nominal, setNominal] = useState("")
  const [media, setMedia] = useState("BCA")

  // update once
  useEffect(() => {
    // console.log("update once")
    const targets = document.querySelectorAll(".show-scroll")

    targets.forEach(function (target) {
      target.classList.add("transition")
      target.classList.add("ease-in-out")
      target.classList.add("delay-500")
      target.classList.add("opacity-0")
      target.classList.add("translate-y-3")
      observer.observe(target)
    })
  }, [isOpen])

  const { to } = queryString.parse(location.search)

  const sumbitConfirm = (e: any) => {
    e.preventDefault()
    // console.log(name, nominal, media)
    const phoneNumber = "+6285156531464"
    let message = `Hai, Saya ${name} telah mengirimkan kamu kado digital ${nominal} melalui ${media}.`
    // url encode message
    message = encodeURIComponent(message)
    const url = `https://wa.me/${phoneNumber}?text=${message}`
    // console.log(url)
    // open url in new tab
    window.open(url, "_blank")
  }

  return (
    <>
      <Nav />
      <AudioPlayer isOpen={isOpen} />

      {!isOpen && (
        <div className="fixed block w-full h-full p-2 bg-gray-800">
          <div className="flex flex-row justify-center">
            <div className="basis-full lg:basis-1/3">
              <div className="flex flex-col bg-white p-4 rounded-2xl mx-auto my-10 shadow-xl">
                <p className="text-center">Undangan Pernikahan</p>
                <p className="text-center text-5xl font-bold font-title my-10">
                  Andree & Alsa
                </p>
                <p className="text-center mb-4">❤ Rabu, 25 Mei 2022 ❤</p>

                <hr />

                <div className="my-4">
                  <p className="text-center text-sm">Kepada Yth.</p>
                  <p className="text-center  text-xl font-bold my-4">{to}</p>
                </div>

                <button
                  className="self-center border-gray-500 border-solid border-2 hover:bg-gray-500 hover:text-white p-2 rounded-full"
                  onClick={() => setIsOpen(true)}
                >
                  Buka Undangan
                </button>
                <div className="self-center w-[30px] h-[30px] text-center leading-[30px] my-2">
                  <i className="fas fa-arrow-up text-gray-500 text-2xl animate-bounce"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {popupKadoIsOpen && (
        <div className="fixed block w-full h-full p-2 bg-gray-800">
          <div className="flex flex-row justify-center">
            <div className="basis-full lg:basis-1/3">
              <div className="flex flex-col bg-white p-4 rounded-2xl mx-auto my-10 shadow-xl">
                <p className="text-center font-bold mb-4">Kado Digital</p>
                <p className="text-center mb-4">
                  Kami menerima kado pernikahan dalam bentuk digital melalui
                  tombol dibawah ini:
                </p>

                <div className="rounded-md bg-gray-300 p-4 m-2">
                  <p className="text-center">
                    <img src="bca.png" alt="" className="inline h-[40px] mb-2" />
                  </p>
                  <p className="text-center mb-2">7790382638</p>
                  <div className="flex flex-row">
                    <div className="flex-1 bg-white rounded-md p-2">7790382638</div>
                    <button
                      onClick={(e) => copyToClipboard(e, "7790382638")}
                      className="bg-slate-600 rounded-md p-2 font-bold text-white">
                      COPY
                    </button>
                  </div>
                </div>

                <div className="rounded-md bg-gray-300 p-4 m-2">
                  <p className="text-center">
                    <img src="bri.png" alt="" className="inline h-[40px] mb-2" />
                  </p>
                  <p className="text-center mb-2">005701057003503</p>
                  <div className="flex flex-row">
                    <div className="flex-1 bg-white rounded-md p-2">005701057003503</div>
                    <button
                      onClick={(e) => copyToClipboard(e, "005701057003503")}
                      className="bg-slate-600 rounded-md p-2 font-bold text-white">
                      COPY
                    </button>
                  </div>
                </div>

                <p className="mb-6"></p>

                <p className="text-center font-bold mb-4">Konfirmasi</p>
                <div className="rounded-md bg-gray-300 p-4 m-2">
                  <div className="mb-2">
                    <p>Nama</p>
                    <input
                      type="text"
                      className="p-2 rounded-md ml-1"
                      onChange={(e) => {
                        setName(e.target.value)
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <p>Nominal</p>
                    <input
                      type="number"
                      className="p-2 rounded-md ml-1"
                      onChange={(e) => {
                        setNominal(e.target.value)
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <p>Media</p>
                    {/* select options */}
                    <select
                      className="p-2 rounded-md ml-1"
                      onChange={(e) => {
                        setMedia(e.target.value)
                      }}
                    >
                      <option value="BCA">BCA</option>
                      <option value="BRI">BRI</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <button
                      onClick={(e) => sumbitConfirm(e)}
                      className="bg-slate-600 rounded-md p-2 font-bold text-white">
                      Konfirmasi
                    </button>
                  </div>

                </div>
              </div>
            </div>
            {/* button close */}
            <button
              onClick={(e) => {
                e.preventDefault()
                setPopupKadoIsOpen(false)
              }}
              className="w-[30px] h-[30px] text-center leading-[30px] my-2">
              <i className="fas fa-close text-white text-2xl"></i>
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <>
          <Page id="cover">
            <p className="text-gray-500 font-semibold text-center mt-4">
              The Wedding
            </p>
            <div className="my-10">
              <p className="text-white text-center text-8xl font-title">
                Andree
              </p>
              <p className="text-white text-center text-8xl font-title">&</p>
              <p className="text-white text-center text-8xl font-title">Alsa</p>
            </div>
            <p className="text-gray-500 font-semibold text-center mb-6">
              25 May 2022
            </p>
          </Page>

          <Page>
            <p></p>
            <p className="text-white font-bold text-center mt-[100px] mb-4 show-scroll">
              Assalamu’alaikum Warahmatullahi Wabarakaatuh
            </p>
            <p className="text-white text-center text-sm show-scroll">
              Dengan memohon rahmat dan ridho Allah SWT kami bermaksud
              menyelenggarakan pernikahan putra putri kami:
            </p>

            <div className="flex flex-row mt-[150px]">
              <div className="flex-1">
                <p className="font-title text-white text-4xl text-center show-scroll">
                  Andree Christian Yulianto
                </p>
                <p className="text-white text-center text-sm my-4 show-scroll">
                  Putra dari <br />
                  Bpk Agung Kadarjanto <br />
                  & <br />
                  Ibu Susmi Puryati
                </p>
              </div>
              <div className="flex-1">
                <p className="font-title text-white text-4xl text-center show-scroll">
                  Alsa Permata Yuniarti
                </p>
                <p className="text-white text-center text-sm my-4 show-scroll">
                  Putri dari <br />
                  Alm. Bpk Amir Mubarok <br />
                  & <br />
                  Almh. Ibu Sujiati
                </p>
              </div>
            </div>
          </Page>

          <Page id="date">
            <p className="text-white text-center font-bold mb-20 show-scroll">
              Detail Acara
            </p>

            <div className="flex flex-row">
              <div className="flex-1 show-scroll">
                <p className="text-white text-center font-bold mb-2">
                  Akad Nikah
                </p>
                <p className="text-white text-center text-sm">
                  Kamis, 24 Februari 2022 <br /> 08.00 s/d selesai
                </p>
                <p className="text-white text-center text-sm mt-6">
                  Kantor Urusan Agama
                </p>
                <p className="text-white text-center text-sm mt-2">
                  Kedunggalar, Ngawi
                </p>
              </div>
              <div className="flex-1 show-scroll">
                <p className="text-white text-center font-bold mb-2">
                  Resepsi Pernikahan
                </p>
                <p className="text-white text-center text-sm">
                  Rabu, 25 Mei 2022 <br /> 10.00 s/d selesai
                </p>
                <p className="text-white text-center text-sm mt-6">
                  Kediaman Mempelai Pria
                </p>
                <p className="text-white text-center text-sm mt-2">
                  Dungus, Karangasri, Ngawi
                </p>
              </div>
            </div>
            <div className="my-40"></div>

            <Countdown />

            <p className="text-white text-center text-sm mb-4 show-scroll">
              Menuju hari istimewa kami
            </p>
            <p className="text-white text-center text-sm show-scroll">
              Kami berharap Bapak/Ibu/Saudara/i menjadi bagian dari hari
              istimewa kami
            </p>
          </Page>

          <Page id="location">
            <p className="text-white text-center font-bold mb-20 show-scroll">
              Lokasi Acara
            </p>

            <div className="flex justify-center show-scroll">
              {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9409.874635571721!2d111.3607724769919!3d-7.424805722551735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf8c263ef5a000cd!2zN8KwMjUnMzEuMCJTIDExMcKwMjEnMzMuMiJF!5e0!3m2!1sen!2sid!4v1645570302626!5m2!1sen!2sid"
            width="280"
            height="450"
            loading="lazy"
          ></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5692205188043!2d111.44951725073727!3d-7.40206810910382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb1f93659657f6acf!2zN8KwMjQnMDcuNSJTIDExMcKwMjcnMDIuNSJF!5e0!3m2!1sen!2sid!4v1648372638564!5m2!1sen!2sid"
                width="280"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </Page>

          <Page>
            <div className="flex flex-col h-full justify-center">
              <div>
                <p className="text-white text-right text-sm show-scroll">
                  Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
                  pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                  cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
                  antaramu rasa kasih dan sayang. Sungguh, pada yang demikian
                  itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.
                </p>
                <p className="text-white text-right text-sm font-bold my-2 show-scroll">
                  QS. Ar-Rum : 21
                </p>
              </div>
            </div>
          </Page>

          <Page id="end">
            <img
              src="photo.jpg"
              alt="wedding"
              className="rounded-2xl shadow-md hover:shadow-xl show-scroll"
            />
            <p className="mb-10"></p>

            {/* <p className="text-white text-center font-bold">Kado Digital</p>
        <p className="text-white text-center text-sm my-4">Kami menerima kado pernikahan dalam bentuk digital</p>
        <div className='flex justify-center'>
          <a href="#" className="bg-gray-600 p-3 rounded-lg inline-block text-white font-bold hover:shadow-md hover:bg-gray-500">KIRIM KADO</a>
        </div> */}

            <div className="mt-20">
              <p className="text-white text-center text-sm mb-4 show-scroll">
                Atas Doa dan Restu dari Bapak/Ibu/Saudara/i kami ucapkan banyak
                terima kasih
              </p>
              <p className="text-white text-center text-sm mb-4 show-scroll">
                Kami yang berbahagia,
              </p>
              <p className="text-white text-center font-title text-5xl show-scroll">
                Andree & Alsa
              </p>
            </div>
          </Page>

          <Page>
            <p className="text-white text-center font-bold mb-20">
              Kado Digital
            </p>
            <p className="text-white text-center text-sm mb-4">
              Kami menerima kado pernikahan dalam bentuk digital melalui tombol
              dibawah ini
            </p>
            <p className="text-center">
              <button
                className="bg-gray-600 hover:bg-gray-500 text-white font-bold rounded-md p-2"
                onClick={(e) => {
                  e.preventDefault()
                  setPopupKadoIsOpen(true)
                }}
              >
                Kirim Kado
              </button>
            </p>
          </Page>

          <Page>
            <p className="text-white text-center font-bold mb-20">Informasi</p>
            <p className="text-white text-center text-sm">
              Guna mencegah penyebaran Covid-19, diharapkan bagi tamu undangan
              untuk mematuhi Protokol Kesehatan
            </p>
            <div className="my-6">
              <img src="protokol.png" alt="Prokes" />
              <p className="text-white text-center text-xs">
                Memakai Masker - Cuci Tangan - Menjaga Jarak
              </p>
            </div>
          </Page>
        </>
      )}
    </>
  )
}

export default App

function copyToClipboard(e: any, text: string) {
  e.preventDefault()
  const cb = navigator.clipboard
  cb.writeText(text).then(() => {
    console.log("Copied to clipboard")
  })
}
