// const data = (await Deno.readTextFile("./wordle.txt")).split("\n");
const response = await fetch(
  "https://raw.githubusercontent.com/wkj9893/Wordle-Word-Finder/main/wordle.txt",
);
const data = (await response.text()).split("\n");

const good = prompt("Good letters:") ?? "";
const bad = new Set(prompt("Bad letters:"));
const placed = prompt("Placed Letters:") ?? "     ";

for (const d of data) {
  if (find(d)) {
    console.log(d);
  }
}

function find(s: string): boolean {
  for (const c of good) {
    if (s.indexOf(c) == -1) {
      return false;
    }
  }
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (bad.has(c) || (placed[i] !== " " && placed[i] !== c)) {
      return false;
    }
  }
  return true;
}
