module.exports = function () {
    const currentDir = process.cwd();
    console.log(currentDir);
    process.stdout.write('\nprompt > ');
}
