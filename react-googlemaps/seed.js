'use strict'
const db = require('./server/db')
const Marker = require('./server/marker')
const markers = [
  {
    title: 'Casablanca',
    contents: 'Casablanca is a port city and commercial hub in western Morocco, fronting the Atlantic Ocean. The city\'s French colonial legacy is seen in its downtown Mauresque architecture, a blend of Moorish style and European art deco. Standing partly over the water, the enormous Hassan II Mosque, completed in 1993, has a 210m minaret topped with lasers directed toward Mecca.',
    latitude: 33.5731,
    longitude: -7.5898,
    date: '2/11/20'
  },
  {
    title: 'Edinburgh',
    contents: 'Edinburgh is Scotland\'s compact, hilly capital. It has a medieval Old Town and elegant Georgian New Town with gardens and neoclassical buildings. Looming over the city is Edinburgh Castle, home to Scotland’s crown jewels and the Stone of Destiny, used in the coronation of Scottish rulers. Arthur’s Seat is an imposing peak in Holyrood Park with sweeping views, and Calton Hill is topped with monuments and memorials.',
    latitude: 55.9533,
    longitude: -3.1883,
    date: '3/1/20'
  },
  {
    title: 'Dubrovnik',
    contents: 'Dubrovnik is a city in southern Croatia fronting the Adriatic Sea. It\'s known for its distinctive Old Town, encircled with massive stone walls completed in the 16th century. Its well-preserved buildings range from baroque St. Blaise Church to Renaissance Sponza Palace and Gothic Rector’s Palace, now a history museum. Paved with limestone, the pedestrianized Stradun (or Placa) is lined with shops and restaurants.',
    latitude: 42.6507,
    longitude: 18.0944,
    date: '4/22/20'
  },
  {
    title: 'Istanbul',
    contents: 'Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here. In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot races, and Egyptian obelisks also remain. The iconic Byzantine Hagia Sophia features a soaring 6th-century dome and rare Christian mosaics.',
    latitude: 41.0082,
    longitude: 28.9784,
    date: '6/4/20'
  },
  {
    title: 'Copenhagen',
    contents: 'Copenhagen, Denmark’s capital, sits on the coastal islands of Zealand and Amager. It’s linked to Malmo in southern Sweden by the Öresund Bridge. Indre By, the city\'s historic center, contains Frederiksstaden, an 18th-century rococo district, home to the royal family’s Amalienborg Palace. Nearby is Christiansborg Palace and the Renaissance-era Rosenborg Castle, surrounded by gardens and home to the crown jewels.',
    latitude: 55.6761,
    longitude: 12.5683,
    date: '8/10/20'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(
    markers.map(marker => {
      return Marker.create(marker)
    })
  )
  console.log(`seeded ${markers.length} markers`)
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}
// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}
// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
