import { NextRequest, NextResponse } from "next/server";
import { getSSLHubRpcClient, Message } from "@farcaster/hub-nodejs";
import { NEXT_PUBLIC_URL, HUB_URL } from "@/config";


const postUrl = `${NEXT_PUBLIC_URL}`;

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const {
    untrustedData: { inputText },
    trustedData: { messageBytes },
  } = await req.json();

  const message = inputText || "no";
   const inputValue = parseInt(message);
   if (isNaN(inputValue) || inputValue < -99 || inputValue > 10000) {
    const imageUrl = `${NEXT_PUBLIC_URL}/api/images/invalid`;
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Guess The Price Change</title>
          <meta property="og:title" content="Invalid guess" />
          <meta property="og:image" content="${imageUrl}" />

          <meta name= "of:version" content="vNext"/>
          <meta name= "of:accepts:farcaster" content="vNext"/>
          <meta name= "of:accepts:xmtp" content="2024-02-01"/>
          <meta name= "of:post_url" content="${postUrl}" />
          <meta name= "of:image" content="${imageUrl}" />

          <meta name="fc:frame" content="vNext" />
          <meta name="fc:frame:post_url" content="${postUrl}" />
          <meta name="fc:frame:image" content="${imageUrl}" />

          <meta name="of:frame:button:1" content="source" />
          <meta name="of:frame:button:1:action" content="link" />
          <meta name="of:frame:button:1:target" content="start" />
      
          <meta name="fc:frame:button:1" content="source" />
          <meta name="fc:frame:button:1:action" content="link" />
          <meta name="fc:frame:button:1:target" content="start" />
      
          <meta name="of:button:2" content="source code" />
          <meta name="of:button:2:action" content="link" />
          <meta name="of:button:2:target" content="https://github.com/LeoFranklin015/XMTP-frames" />

          <meta name="fc:frame:button:2" content="source" />
          <meta name="fc:frame:button:2:action" content="link" />
          <meta name="fc:frame:button:2:target" content="https://github.com/LeoFranklin015/XMTP-frames" />
        </head>
        <body/>
      </html>`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  } else {
    const imageUrl = `${NEXT_PUBLIC_URL}/api/images/goodGuess`;
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Echo Says:</title>
          <meta property="og:title" content="Good guess" />
          <meta property="og:image" content="${imageUrl}" />

        
          <meta name= "of:version" content="vNext"/>
          <meta name= "of:accepts:farcaster" content="vNext"/>
          <meta name= "of:accepts:xmtp" content="2024-02-01"/>
          <meta name= "of:post_url" content="${postUrl}" />
          <meta name= "of:image" content="${imageUrl}" />

          <meta name="of:button:1" content="source code" />
          <meta name="of:button:1:action" content="link" />
          <meta name="of:button:1:target" content="https://github.com/LeoFranklin015/XMTP-frames" />


          <meta name="of:button:1" content="source code" />
          <meta name="of:button:1:action" content="link" />
          <meta name="of:button:1:target" content="https://github.com/LeoFranklin015/XMTP-frames" />

          <meta name="fc:frame:button:2" content="Start over" />
          <meta name="fc:frame:button:2:action" content="link" />
          <meta name="fc:frame:button:2:target" content="start" />
       
          <meta name="of:frame:button:2" content="Start over" />
          <meta name="of:frame:button:2:action" content="link" />
          <meta name="of:frame:button:2:target" content="start" />
       
          <meta name="fc:frame:button:1" content="source code" />
          <meta name="fc:frame:button:1:action" content="link" />
          <meta name="fc:frame:button:1:target" content="https://github.com/LeoFranklin015/XMTP-frames" />
        </head>
        <body/>
      </html>`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  }
}
// }
export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
