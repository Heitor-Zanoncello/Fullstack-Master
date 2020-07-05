const { GoogleSpreadSheet, GoogleSpreadsheet } = require ('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1joeX9ePy3TbAI2JKopqtHITF2TxoGH4t9FcpqueJlhw')

const run = async() => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log(doc.title)
    } catch (err) {
        console.log(err)
    }
}
run()