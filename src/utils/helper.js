/**
 * @dev create a herf link to navigate
 * @param {*} artname is the name of art or nft
 * @param {*} id is the navigatealbe id
 */
export const createURL = (artname, id) => {
  artname = artname.replaceAll(/[#/]+/g, "");
  return `${artname} ${id}`.split(" ").join("-");
};

/**
 * @dev trim large texts and add ... at the end
 * @param {*} text is the text to be trimmed
 * @param {*} limit is the number of characters to be trimmed
 */
export const textOverflow = (text, limit) => {
  if (text && text.length > limit) {
    text = text.slice(0, limit) + "...";
  }
  return text;
};

/**
 * @dev reads the extension of the file and tells if it is video or image
 * @param {string} file is the name of file
 * @return image or video else i dont know if the file is not video or image
 */
export function whatIsFileType(file) {
  if (!file) return "could not read the file extension";
  if (
    /\.(jpg|jpeg|png|gif|tiff|tif|heif|heic|svg|svgz|ai)$/.test(
      String(file).toLowerCase()
    )
  )
    return "image";

  if (/\.(mp4|ogg|webm|mov)$/.test(file.toLowerCase())) return "video";

  return "i dont know";
}

export const CURRENCY = "MATIC";
