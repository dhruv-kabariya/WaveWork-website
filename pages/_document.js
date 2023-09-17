import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      <body>
      <Script 
          id={"structured-data"}
          key={"structured-data"} 
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Service",
            "name": "WaveWork Services",
            "description": "Connect with nearby service providers and accomplish tasks efficiently.",
            "website": "https://wavework.in",
            "openingHours": "Mo-Su 09:00-19:00",
            "provider": {
              "@type": "Organization",
              "name": "WaveWork",
              "sameAs": [
                "https://wavework.in",
                "https://www.linkedin.com/company/wavework-in",
                "https://play.google.com/store/apps/details?id=com.acutelabs.repair_man"
              ],
            },
            "hasMenu": [
              {
                "@type": "Service",
                "name": "Electrician",
                "description": "We provide a wide range of electrical services, from minor repairs to complete rewiring."
              },
              {
                "@type": "Service",
                "name": "Driver",
                "description": "We provide reliable and affordable driver services for all occasions."
              },
              {
                "@type": "Service",
                "name": "Gardener",
                "description": "We offer a full range of gardening services, including lawn care, tree trimming, and landscaping."
              },
              {
                "@type": "Service",
                "name": "Lock",
                "description": "We provide a wide range of locksmith services, including lock repair, lock replacement, and key cutting."
              },
              {
                "@type": "Service",
                "name": "Painter",
                "description": "Our painters can handle all of your painting needs, from interior painting to exterior painting."
              },
              {
                "@type": "Service",
                "name": "Construction",
                "description": "We offer a wide range of construction services, from home remodeling to commercial construction."
              },
              {
                "@type": "Service",
                "name": "Cook",
                "description": "We provide professional cooking services for all types of events, from small gatherings to large weddings."
              },
              {
                "@type": "Service",
                "name": "Beautician",
                "description": "Our beauticians offer a wide range of services, including hair styling, facials, and waxing."
              },
              {
                "@type": "Service",
                "name": "Salon stylish",
                "description": "Our salon stylists can help you achieve the perfect look for any occasion."
              },
              {
                "@type": "Service",
                "name": "Hair care",
                "description": "We offer a wide range of hair care services, from haircuts to hair coloring."
              },
              {
                "@type": "Service",
                "name": "Massage",
                "description": "Our massage therapists offer a variety of massage techniques to help you relax and rejuvenate."
              },
              {
                "@type": "Service",
                "name": "Waxing",
                "description": "We offer a variety of waxing services for both men and women."
              },
              {
                "@type": "Service",
                "name": "Manicure",
                "description": "Our manicurists will give you beautiful and well-groomed nails."
              },
              {
                "@type": "Service",
                "name": "Pedicure",
                "description": "Our pedicurists will pamper your feet and leave them feeling soft and smooth."
              },
              {
                "@type": "Service",
                "name": "Facial",
                "description": "Our facials will cleanse, exfoliate, and hydrate your skin for a radiant complexion."
              },
              {
                "@type": "Service",
                "name": "Photographer",
                "description": "Our photographers capture your special moments and memories."
              },
              {
                "@type": "Service",
                "name": "Video graphy",
                "description": "Our videographers create high-quality videos to document your special events."
              },
              {
                "@type": "Service",
                "name": "Event organiser",
                "description": "Our event organizers help you plan and execute your perfect event."
              },
              {
                "@type": "Service",
                "name": "Decorator",
                "description": "Our decorators will transform your space into a beautiful and inviting event venue."
              },
              {
                "@type": "Service",
                "name": "Mechanic",
                "description": "Our mechanics provide a wide range of automotive services, from oil changes to engine repairs."
              },
              {
                "@type": "Service",
                "name": "Car mechanic",
                "description": "Our car mechanics specialize in repairing and servicing cars."
              },
              {
                "@type": "Service",
                "name": "Bike mechanic",
                "description": "Our bike mechanics specialize in repairing and servicing motorcycles and bicycles."
              },
              {
                "@type": "Service",
                "name": "AC Service",
                "description": "We provide installation, repair, and maintenance services for all types of air conditioners."
              },
              {
                "@type": "Service",
                "name": "Washing Machine Service",
                "description": "We provide repair and maintenance services for all types of washing machines."
              },
              {
                "@type": "Service",
                "name": "Fridge Service",
                "description": "We provide repair and maintenance services for all types of refrigerators."
              },
              {
                "@type": "Service",
                "name": "Sofa Cleaner",
                "description": "We provide professional sofa cleaning services."
              },
              {
                "@type": "Service",
                "name": "Pest Control",
                "description": "We provide effective and affordable pest control services for homes and businesses."
              },
              {
                "@type": "Service",
                "name": "Water Purifier",
                "description": "We provide installation, repair, and maintenance services for water purifiers."
              },
              {
                "@type": "Service",
                "name": "Geyser Service",
                "description": "We provide repair and maintenance services for all types of geysers."
              },
              {
                "@type": "Service",
                "name": "Cleaner",
                "description": "We provide professional cleaning services for homes and businesses."
              },
              {
                "@type": "Service",
                "name": "Table Repair",
                "description": "We provide repair services for all types of tables."
              },
              {
                "@type": "Service",
                "name": "Chair Repair",
                "description": "We provide repair services for all types of chairs."
              },
              {
                "@type": "Service",
                "name": "Furniture Repair",
                "description": "We provide repair services for all types of furniture."
              },
              {
                "@type": "Service",
                "name": "TV Service",
                "description": "We provide repair and maintenance services for all types of TVs."
              },
              {
                "@type": "Service",
                "name": "Computer Service",
                "description": "We provide repair and maintenance services for all types of computers."
              },
              {
                "@type": "Service",
                "name": "CCTV Service",
                "description": "We provide installation, repair, and maintenance services for CCTV systems."
              },
              {
                "@type": "Service",
                "name": "Key Lock",
                "description": "We provide repair and replacement services for key locks."
              },
              {
                "@type": "Service",
                "name": "Door Lock",
                "description": "We provide repair and replacement services for door locks."
              },
              {
                "@type": "Service",
                "name": "Makeup Artist",
                "description": "We provide professional makeup services for all occasions."
              },
              {
                "@type": "Service",
                "name": "Mehndi Artist",
                "description": "We provide professional mehndi services for all occasions."
              },
              {
                "@type": "Service",
                "name": "Plumber",
                "description": "We provide plumbing services for all types of plumbing problems."
              },
              {
                "@type": "Service",
                "name": "Carpenter",
                "description": "We provide carpentry services for all types of carpentry work."
              },
              {
                "@type": "Service",
                "name": "Blacksmith",
                "description": "We provide blacksmithing services for all types of blacksmithing work."
              },
              {
                "@type": "Service",
                "name": "Handyman",
                "description": "We provide handyman services for a variety of tasks."
              },
              {
                "@type": "Service",
                "name": "RO Service",
                "description": "We provide installation, repair, and maintenance services for RO water purifiers."
              },
              {
                "@type": "Service",
                "name": "Microwave Service",
                "description": "We provide repair and maintenance services for all types of microwaves."
              }
            ]
          })}}
        />
        <Main />
        <NextScript />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
      </body>
    </Html>
  )
}
