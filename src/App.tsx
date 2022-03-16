import moment from 'moment';
import { useEffect, useState } from 'react';
import Page from './Page';
import { HomeOutline, LocationOutline } from 'react-ionicons'

function App() {
  return (
    <>
      <Nav/>
      <Page>
        <p className="text-gray-500 font-semibold text-center mt-4">SAVE THE DATE</p>
        <div className="my-20">
          <p className="text-white text-center text-8xl font-title">Alsa</p>
          <p className="text-white text-center text-8xl font-title">&</p>
          <p className="text-white text-center text-8xl font-title">Andree</p>
        </div>
        <p className="text-gray-500 font-semibold text-center">25 May 2022</p>
      </Page>

      <Page>
        <p></p>
        <p className="text-white font-bold text-center mt-[100px] mb-4">Assalamu’alaikum Warahmatullahi Wabarakaatuh</p>
        <p className="text-white text-center text-sm">Dengan memohon rahmat dan ridho Allah SWT kami bermaksud menyelenggarakan pernikahan putra putri kami:</p>

        <div className="flex flex-row mt-[150px]">
          <div className='flex-1'>
            <p className="font-title text-white text-3xl text-center">Alsa Permata Yuniarti</p>
            <p className="text-white text-center text-sm my-4">
              Putri dari <br />
              Alm. Bpk Amir Mubarok <br />
              & <br />
              Almh. Ibu Sujiati
            </p>
          </div>
          <div className='flex-1'>
            <p className="font-title text-white text-3xl text-center">Andree Christian Yulianto</p>
            <p className="text-white text-center text-sm my-4">
              Putra dari <br />
              Bpk Agung Kadarjanto <br />
              & <br />
              Ibu Susmi Puryati
            </p>
          </div>
        </div>
      </Page>

      <Page>
        <p className="text-white text-center font-bold mb-20">Detail Acara</p>

        <div className="flex flex-row">
          <div className='flex-1'>
            <p className="text-white text-center font-bold mb-2">Akad Nikah</p>
            <p className="text-white text-center text-sm">Kamis, 24 Februari 2022 <br /> 08.00 s/d selesai</p>
            <p className="text-white text-center text-sm mt-6">Kantor Urusan Agama</p>
            <p className="text-white text-center text-sm mt-2">Kedunggalar, Ngawi</p>
          </div>
          <div className='flex-1'>
            <p className="text-white text-center font-bold mb-2">Resepsi Pernikahan</p>
            <p className="text-white text-center text-sm">Rabu, 25 Mei 2022 <br /> 09.00 s/d selesai</p>
            <p className="text-white text-center text-sm mt-6">Kediaman Mempelai Wanita</p>
            <p className="text-white text-center text-sm mt-2">Jambe, Gemarang, Kedunggalar, Ngawi</p>
          </div>
        </div>
        <div className="my-40"></div>



        <Countdown />

        <p className="text-white text-center text-sm mb-4">Menuju hari istimewa kami</p>
        <p className="text-white text-center text-sm">Kami berharap Bapak/Ibu/Saudara/i menjadi bagian dari hari istimewa kami</p>
      </Page>

      <Page>
        <p className="text-white text-center font-bold mb-20">Lokasi Acara</p>

        <div className="flex justify-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9409.874635571721!2d111.3607724769919!3d-7.424805722551735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf8c263ef5a000cd!2zN8KwMjUnMzEuMCJTIDExMcKwMjEnMzMuMiJF!5e0!3m2!1sen!2sid!4v1645570302626!5m2!1sen!2sid"
            width="280" height="450" loading="lazy"></iframe>
        </div>
      </Page>

      <Page>
        <div className="flex flex-col h-full justify-center">
          <div>
            <p className="text-white text-right text-sm">
              Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.
            </p>
            <p className="text-white text-right text-sm font-bold my-2">QS. Ar-Rum : 21</p>
          </div>
        </div>
      </Page>

      <Page>
        <img src="photo.jpg" alt="wedding" className='rounded-2xl shadow-md hover:shadow-xl' />
        <p className='mb-10'></p>

        {/* <p className="text-white text-center font-bold">Kado Digital</p>
        <p className="text-white text-center text-sm my-4">Kami menerima kado pernikahan dalam bentuk digital</p>
        <div className='flex justify-center'>
          <a href="#" className="bg-gray-600 p-3 rounded-lg inline-block text-white font-bold hover:shadow-md hover:bg-gray-500">KIRIM KADO</a>
        </div> */}

        <div className="mt-20">
          <p className="text-white text-center text-sm mb-4">
            Atas Doa dan Restu dari Bapak/Ibu/Saudara/i kami ucapkan banyak terima kasih
          </p>
          <p className="text-white text-center text-sm mb-4">
            Kami yang berbahagia,
          </p>
          <p className="text-white text-center font-title text-5xl">
            Alsa & Andree
          </p>
        </div>
      </Page>
    </>
  );
}

const Countdown = () => {
  const [currentTime, setCurrentTime] = useState(moment())
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const eventTime = moment("2022-05-25T09:00:00");

  function update() {
      var duration: any

      setCurrentTime(moment());

      // get duration between two times
      duration = moment.duration(eventTime.diff(currentTime));

      // get updated duration
      duration = moment.duration(duration, 'milliseconds');

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

  useEffect(() => {
    
    update();
  })

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


const Nav = () => {
  return (
    <div className="fixed block bottom-0 left-0 right-0 p-2">
      <div className="flex flex-row justify-center">
        <div className="basis-full lg:basis-1/3 flex flex-row justify-center">

		<div className="bg-gray-500 m-1 p-2 w-[50px] h-[50px] rounded-xl lh-[50px]">
			<HomeOutline/>
		</div>

		<div className="bg-gray-500 m-1 p-2 w-[50px] h-[50px] rounded-xl lh-[50px]">
		  	<LocationOutline/>
		</div>
		
		<div className="bg-gray-500 m-1 p-2 w-[50px] h-[50px] rounded-xl lh-[50px]">
		  img
		</div>

		<div className="bg-gray-500 m-1 p-2 w-[50px] h-[50px] rounded-xl lh-[50px]">
		  img
		</div>
	</div>
      </div>
    </div>
  )
}

export default App;
