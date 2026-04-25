function asBlockquote(text) {
  return String(text ?? '')
    .split(/\r?\n/)
    .map((line) => `> ${line}`)
    .join('\n');
}

function foldableCallout(title, body, type = 'note', collapsed = true) {
  const marker = collapsed ? '-' : '+';
  const heading = `> [!${type}]${marker} ${String(title ?? '').trim() || '标题'}`;
  const trimmedBody = String(body ?? '').trim();

  if (!trimmedBody) {
    return heading;
  }

  return `${heading}\n${asBlockquote(trimmedBody)}`;
}

module.exports = {
  foldableCallout,
  qaEntry(question, answer, type = 'note') {
    return foldableCallout(question, answer, type, true);
  },
};
