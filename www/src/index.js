import init, { group_by_key } from 'group_by'
console.log('-------------- Module ------------')
init().then((_) => {
    console.log('-------------- WASM loaded ------------')
    console.log(group_by_key())
})