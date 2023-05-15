let args = process.argv.slice(2);
//console.log("args: ", args);
for (item of args) {
  if (item >= 0 && isNaN(item) === false) { 
let time = 1000;
setTimeout(() => {
  process.stdout.write('\x07')
}, time * item);
  }
};
