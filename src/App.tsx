import Page from './Page';

function App() {
  return (
    <>
      <Page>
        <p className="text-gray-500 font-semibold text-center mt-4">SAVE THE DATE</p>
        <div className="my-20">
          <p className="text-white text-center text-8xl font-title">Alsa</p>
          <p className="text-white text-center text-8xl font-title">&</p>
          <p className="text-white text-center text-8xl font-title">Andree</p>
        </div>
        <p className="text-gray-500 font-semibold text-center">7 May 2022</p>
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
            <p className="text-white text-center text-sm">Sabtu, 7 Mei 2022 <br /> 09.00 s/d 22.00 WIB</p>
            <p className="text-white text-center text-sm mt-6">Kediaman Mempelai Wanita</p>
            <p className="text-white text-center text-sm mt-2">Jambe, Gemarang, Kedunggalar, Ngawi</p>
          </div>
          <div className='flex-1'>
            <p className="text-white text-center font-bold mb-2">Resepsi Pernikahan</p>
            <p className="text-white text-center text-sm">Sabtu, 7 Mei 2022 <br /> 09.00 s/d 22.00 WIB</p>
            <p className="text-white text-center text-sm mt-6">Kediaman Mempelai Wanita</p>
            <p className="text-white text-center text-sm mt-2">Jambe, Gemarang, Kedunggalar, Ngawi</p>
          </div>
        </div>
        <div className="my-40"></div>

        <div className="flex flex-row justify-center mb-6">
          <div className="w-[50px]">
            <p className="text-white text-xl font-bold text-center">30</p>
            <p className="text-white text-xs text-center">Hari</p>
          </div>
          <div className="w-[50px]">
            <p className="text-white text-xl font-bold text-center">24</p>
            <p className="text-white text-xs text-center">Jam</p>
          </div>
          <div className="w-[50px]">
            <p className="text-white text-xl font-bold text-center">30</p>
            <p className="text-white text-xs text-center">Menit</p>
          </div>
          <div className="w-[50px]">
            <p className="text-white text-xl font-bold text-center">30</p>
            <p className="text-white text-xs text-center">Detik</p>
          </div>
        </div>

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
        <img src="photo.jpg" alt="photo" className='rounded-2xl shadow-md hover:shadow-xl'/>
        <p className='mb-10'></p>

        <p className="text-white text-center font-bold">Kado Digital</p>
        <p className="text-white text-center text-sm my-4">Kami menerima kado pernikahan dalam bentuk digital</p>
        <div className='flex justify-center'>
          <a href="#" className="bg-gray-600 p-3 rounded-lg inline-block text-white font-bold hover:shadow-md hover:bg-gray-500">KIRIM KADO</a>
        </div>

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

export default App;
