import { NextRequest, NextResponse } from "next/server";

// Discord 웹훅 알림 함수
async function sendDiscordNotification(name: string, phone: string, inquiry: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("Discord webhook URL is not configured");
    throw new Error("Discord webhook URL is not configured");
  }

  const now = new Date();
  const koreaTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
  const formattedDate = koreaTime.toISOString().replace('T', ' ').substring(0, 19);

  const embed = {
    title: "새로운 상담 신청이 접수되었습니다!",
    color: 0xFFB300,
    fields: [
      {
        name: "이름",
        value: name,
        inline: true
      },
      {
        name: "연락처",
        value: phone,
        inline: true
      },
      {
        name: "문의내용",
        value: inquiry || "없음",
        inline: false
      },
      {
        name: "접수시간",
        value: formattedDate,
        inline: false
      }
    ],
    footer: {
      text: "힐스테이트 문수로 센트럴"
    },
    timestamp: new Date().toISOString()
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "힐스테이트 문수로 센트럴",
      embeds: [embed]
    }),
  });

  if (!response.ok) {
    throw new Error(`Discord webhook failed: ${response.status}`);
  }
}

// POST: 상담 신청 → Discord 알림 직접 전송
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, inquiry } = body;

    // 유효성 검사
    if (!name || !phone) {
      return NextResponse.json(
        { error: "이름과 전화번호는 필수입니다." },
        { status: 400 }
      );
    }

    // Discord 알림 직접 전송
    await sendDiscordNotification(name, phone, inquiry || "");

    return NextResponse.json(
      { message: "상담 신청이 완료되었습니다." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error sending inquiry:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
