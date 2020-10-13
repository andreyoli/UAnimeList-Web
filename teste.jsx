export const cropString = (string, length, message) => {
  if (string != null) {
    const cropedString = `${string.substr(0, length)}...`
    return cropedString
  } else {
    return message
  }
}