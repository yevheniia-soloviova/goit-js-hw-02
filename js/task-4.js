function formatString(string, maxLength = 40) {
  let stringLength = string.split("");

  if (stringLength.length > maxLength) {
    stringLength.length = maxLength;
    return stringLength.join("") + "...";
  } else if (
    (stringLength.length = maxLength || stringLength.length < maxLength)
  ) {
    return stringLength.join("");
  }
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// 'Vestibulum facilisis, purus ne...'
