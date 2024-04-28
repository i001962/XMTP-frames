export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000"
    : "https://xmtp-frames-qxumeiitx-i001962s-projects.vercel.app/";

export const HUB_URL = "hub-grpc.pinata.cloud";
