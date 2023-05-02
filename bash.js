//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline

  if (cmd === 'pwd') {
    const currentDir = process.cwd();
    console.log(currentDir);
  } else {
    console.log('error' + cmd);
  }

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});