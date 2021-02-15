

export default {
  write: textForCopy => navigator.clipboard.writeText(textForCopy)
    .then(() => {

    }).catch(() => {

    }),
};
