const { create } = require("ipfs-http-client");
const auth =
  "Basic " +
  Buffer.from(
    process.env.REACT_APP_INFURA_IPFS_PROJECT_ID +
      ":" +
      process.env.REACT_APP_INFURA_IPFS_PROJECT_SECRET
  ).toString("base64");
export const client = create({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
  apiPath: "/api/v0",
  headers: {
    authorization: auth,
  },
});

export const uploadMetadataToIPFS = async ({
  nftTitle = "",
  description = "",
  imageURI = "",
}) => {
  try {
    const metadata = JSON.stringify(
      {
        name: `${/[^.]*/.exec(nftTitle)[0]}`,
        description: description,
        image: `${imageURI}`,
      },
      null,
      "\t"
    );
    const metadataRes = await addToIPFS("metadata.json", metadata);
    const METADATA_IPFS_URI = `${metadataRes.cid.toString()}/metadata.json`;

    return METADATA_IPFS_URI;
  } catch (error) {
    throw error;
  }
};

export const uploadNftToIPFS = async (imageName, imageContent) => {
  try {
    const uploadRes = await addToIPFS(imageName, imageContent);
    const IMAGE_URI = `ipfs://${uploadRes.cid.toString()}/${imageName}`;
    return IMAGE_URI;
  } catch (err) {
    throw err;
  }
};

async function addToIPFS(fileName, content) {
  try {
    let res = await client.add(
      {
        path: `/${fileName}`,
        content: content,
      },
      {
        wrapWithDirectory: true,
        progress: (len) => console.log("Uploading to ipfs..." + len),
      }
    );
    return res;
  } catch (error) {
    throw error;
  }
}
