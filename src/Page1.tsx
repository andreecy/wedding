export default function Page(props: any) {
    return (
        <>
            <div className="div">
                <div className="text-3xl font-bold underline">SAVE THE DATE</div>
                <div className="div-3" />
                <div className="div-4">
                    <div className="div-5">Alsa</div>
                    <div className="div-6">&</div>
                    <div className="div-7">Andree</div>
                </div>
                <div className="div-8">7 May 2022</div>
            </div>
            <style>
                {`
          .div {
            display: flex;
            flex-direction: column;
            max-width: 1080px;
            justify-content: flex-start;
            padding-top: 100px;
            padding-bottom: 100px;
            padding-right: 100px;
            padding-left: 100px;
            background-color: rgba(44, 52, 57, 1);
          }
          .div-2 {
            max-width: 334px;
            color: rgba(156, 161, 171, 1);
            font-size: 36px;
            letter-spacing: 10%;
            text-align: left;
            font-family: Montserrat, sans-serif;
            margin-left: auto;
            margin-right: auto;
          }
          .div-3 {
            display: flex;
            max-width: 880px;
            height: 400px;
            width: 880px;
            margin-top: 10px;
          }
          .div-4 {
            display: flex;
            flex-direction: column;
            max-width: 565px;
            justify-content: center;
            margin-top: 10px;
            padding-top: 50px;
            padding-bottom: 50px;
            padding-right: 50px;
            padding-left: 50px;
            margin-left: auto;
            margin-right: auto;
          }
          .div-5 {
            max-width: 330px;
            color: rgba(255, 255, 255, 1);
            font-size: 180px;
            letter-spacing: 0%;
            text-align: center;
            font-family: Allura, sans-serif;
            margin-left: auto;
            margin-right: auto;
          }
          .div-6 {
            max-width: 201px;
            color: rgba(255, 255, 255, 1);
            font-size: 288px;
            letter-spacing: 20%;
            text-align: center;
            font-family: Allura, sans-serif;
            margin-left: auto;
            margin-right: auto;
          }
          .div-7 {
            max-width: 465px;
            color: rgba(255, 255, 255, 1);
            font-size: 180px;
            letter-spacing: 0%;
            text-align: center;
            font-family: Allura, sans-serif;
            margin-left: auto;
            margin-right: auto;
          }
          .div-8 {
            max-width: 238px;
            margin-top: 10px;
            color: rgba(156, 161, 171, 1);
            font-size: 36px;
            letter-spacing: 10%;
            text-align: left;
            font-family: Montserrat, sans-serif;
            margin-left: auto;
            margin-right: auto;
          }
        `}
            </style>
        </>
    );
}  