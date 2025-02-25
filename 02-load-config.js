const { GoogleSpreadSheet, GoogleSpreadsheet } = require ('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1joeX9ePy3TbAI2JKopqtHITF2TxoGH4t9FcpqueJlhw')

const run = async() => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log(doc.title)

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A3:B3')
        console.log(sheet.title)
        
        const mostrarPromocaoCell = sheet.getCell(2, 0)
        console.log(mostrarPromocaoCell.value)

        const textoCell = sheet.getCell(2, 1)
        console.log(textoCell.value)

    } catch (err) {
        console.log(err)
    }
}
run()