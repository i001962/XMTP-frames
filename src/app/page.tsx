import { Metadata } from "next";
import Xmtp from "@/app/components/Xmtp";
import { NEXT_PUBLIC_URL } from "@/config";

const postUrl = `${NEXT_PUBLIC_URL}/api/roll`;

export async function generateMetadata(): Promise<Metadata> {
  const imageUrl = `${NEXT_PUBLIC_URL}/api/images/start`;
  return {
    title: "Guess the price of DEGEN in the next month",
    description: "Enter the increase or decrease % change for May. Closest to wins.",
    openGraph: {
      title: "Guess the price",
      images: [imageUrl],
    },
    other: {
      //open frames
      "of:version": "vNext",
      "of:accepts:farcaster": "vNext",
      "of:accepts:xmtp": "2024-02-01",
      "of:image": imageUrl,
      "of:post_url": postUrl,
      "of:input:text": "Enter integer between -99 & 10k",
      "of:button:1": "Guess % change",
      "of:button:1:action": "post",
      "of:button:1:target": postUrl,

      //frames
      "fc:frame": "vNext",
      "fc:frame:image": imageUrl,
      "fc:frame:post_url": postUrl,
      "fc:frame:input:text": "Enter integer between -99 & 10k",
      "fc:frame:button:1": "Guess % change",
      "fc:frame:button:1:action": "post",
      "fc:frame:button:1:target": postUrl,
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col text-center lg:p-16">
      <Xmtp />
    </main>
  );
}
