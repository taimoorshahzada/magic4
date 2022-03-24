import Head from 'next/head'

export default function Heads() {
  return (
      <Head>
        <title>Magic4u Eventos | Empresa organizadora de eventos y gestión de talento</title>
            <meta
              name="description"
              content="Magic4u es una agencia de eventos y management 360 capaz de hacer algo distinto e innovador en el sector, basándose en la creatividad, ambición, innovación, talento, cercanía, cariño y exclusividad"
            />
            <link rel="icon" href="/favicon.png" />
            <script src="/jquery.min.js"></script>
            <script src="/global.js"></script>
            {/* <script src="/gsap.min.js"></script> */}
            {/* <script src="/locomotive-scroll.min.js"></script>
            <link href="/nicole-nero-photography.webflow.e659089d1.min.css" rel="stylesheet" type="text/css"/> */}
      </Head>
  )
}