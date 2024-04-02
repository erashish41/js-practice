// for_in

const myObject = {
    js: 'javascript',
    rb: 'ruby',
    swift: "swift by apple"
}
for (const key in myObject) {
   console.log(myObject[key]);
}