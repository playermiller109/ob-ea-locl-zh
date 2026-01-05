const fs = require('fs')
const LZString = require('lz-string')

const cnPath = 'personal/zh.ts'
const jsParent = 'D:/Obv/Ember/.obsidian/plugins/obsidian-excalidraw-plugin'

let cont = fs.readFileSync(cnPath, 'utf8')
cont = 'x ='+cont.split('export default')[1]
const compressed = LZString.compressToBase64(cont)

let mainJs = fs.readFileSync(jsParent+'/main.js', 'utf8')
mainJs = mainJs.replace(
  /const PLUGIN_LANGUAGES\s*=\s*(\{.*)/,
  (m, p1)=> m.replace(p1, `{"zh-cn": "${compressed}"};`)
)
fs.writeFileSync(jsParent+'/main1.js', mainJs)