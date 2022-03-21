const versionRegEx = /\/auxin\/01\/config "v[0-9]+\.[0-9]+\.[0-9]+.*"/g;
const preVersionTextRegEx = /\/auxin\/01\/config "v/g;
const ANSI_RESET = "\u001B[0m";
const ANSI_BLACK_BOLD = "\u001B[1;29m";
const ANSI_GREEN = "\u001B[32m";
const ANSI_WHITE = "\u001B[37m";
// see additional colors here: https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html

const findVersionLine = (contents) => contents.match(versionRegEx)[0];
const findPreVersionText = (contents) => contents.match(preVersionTextRegEx)[0];
const outputChangesTo = (contents) => {
  const comment = [
    "[GREEN]✔[RESET] outputting changes to [BLACK_BOLD]./scenes/MosaikHeer.scn[RESET]",
    "",
    "[WHITE]---",
    contents.split("\n")[1881],
    "---[RESET]",
    "",
  ]
  .join("\n")
  .replace(/\[GREEN\]/g, ANSI_GREEN)
  .replace(/\[WHITE\]/g, ANSI_WHITE)
  .replace(/\[BLACK_BOLD\]/g, ANSI_BLACK_BOLD)
  .replace(/\[RESET\]/g, ANSI_RESET);
  console.log(comment);
};

const readVersion = function (contents) {
  const versionLine = findVersionLine(contents);
  const preVersionText = findPreVersionText(versionLine);
  const version = versionLine.replace(preVersionText, "").replace('"', "");
  return version;
};
;
const writeVersion = function (contents, version) {
  const oldVersion = readVersion(contents);
  const oldVersionLine = findVersionLine(contents);
  const newVersionLine = oldVersionLine.replace(oldVersion, version);
  const newContents = contents.replace(oldVersionLine, newVersionLine);
  outputChangesTo(newContents);
  return newContents;
};

module.exports = {
  readVersion,
  writeVersion
};
