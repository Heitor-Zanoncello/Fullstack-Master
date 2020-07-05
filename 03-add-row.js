const { GoogleSpreadSheet, GoogleSpreadsheet } = require ('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1joeX9ePy3TbAI2JKopqtHITF2TxoGH4t9FcpqueJlhw')

const run = async() => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]    
        //Nome	Email	Whatsapp	Cupom	Promo
        await sheet.addRow({
            Nome: 'Heitor Z.N',
            Email: 'heizanoncello@gmail.com',
            Whatsapp: '11 951536476',
            Cupom: 'aaa111',
            Promo: 'bbb222'
        })    

    } catch (err) {
        console.log(err)
    }
}
run()
