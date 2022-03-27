import { useEffect } from "react"
import queryString from "query-string"
import Countdown from "./Countdown"
import Nav from "./Nav"
import Page from "./Page"

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
  // update once
  useEffect(() => {
    console.log("update once")
    const targets = document.querySelectorAll(".show-scroll")

    targets.forEach(function (target) {
      target.classList.add("transition")
      target.classList.add("ease-in-out")
      target.classList.add("delay-500")
      target.classList.add("opacity-0")
      target.classList.add("translate-y-3")
      observer.observe(target)
    })
  }, [])

  const { to } = queryString.parse(location.search)

  return (
    <>
      <Nav />
      <Page id="cover">
        <p className="text-gray-500 font-semibold text-center mt-4 show-scroll">
          The Wedding
        </p>
        <div className="my-10">
          <p className="text-white text-center text-8xl font-title show-scroll">
            Alsa
          </p>
          <p className="text-white text-center text-8xl font-title show-scroll">
            &
          </p>
          <p className="text-white text-center text-8xl font-title show-scroll">
            Andree
          </p>
        </div>
        <p className="text-gray-500 font-semibold text-center show-scroll mb-6">
          25 May 2022
        </p>
        <div className="bg-white/10 hover:shadow-lg rounded-lg my-5 p-4 show-scroll">
          <p className="text-center text-gray-300">Kepada Yth.</p>
          <p className="text-center text-gray-300 text-xl font-bold my-4">
            {to}
          </p>
          <p className="text-gray-300 text-center text-xs">
            Mohon maaf jika ada kesalahan penulisan nama/gelar
          </p>
        </div>
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
              Alsa Permata Yuniarti
            </p>
            <p className="text-white text-center text-sm my-4 show-scroll">
              Putri dari <br />
              Alm. Bpk Amir Mubarok <br />
              & <br />
              Almh. Ibu Sujiati
            </p>
          </div>
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
        </div>
      </Page>

      <Page id="date">
        <p className="text-white text-center font-bold mb-20 show-scroll">
          Detail Acara
        </p>

        <div className="flex flex-row">
          <div className="flex-1 show-scroll">
            <p className="text-white text-center font-bold mb-2">Akad Nikah</p>
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
          Kami berharap Bapak/Ibu/Saudara/i menjadi bagian dari hari istimewa
          kami
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
              antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
              benar-benar terdapat tanda-tanda bagi kaum yang berpikir.
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
            Alsa & Andree
          </p>
        </div>
      </Page>
    </>
  )
}

export default App
