import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const MAILCHIMP_API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;
    const MAILCHIMP_SERVER_PREFIX =
      process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX;

    if (
      !MAILCHIMP_API_KEY ||
      !MAILCHIMP_AUDIENCE_ID ||
      !MAILCHIMP_SERVER_PREFIX
    ) {
      return NextResponse.json(
        { error: "Mailchimp configuration missing" },
        { status: 500 }
      );
    }

    const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        tags: ["website-subscription"],
        merge_fields: {
          SOURCE: "Website Footer",
        },
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({
        message: "Successfully subscribed!",
        id: data.id,
      });
    } else {
      // Handle specific Mailchimp errors
      if (data.title === "Member Exists") {
        return NextResponse.json(
          {
            error: "Email already subscribed to our newsletter",
          },
          { status: 400 }
        );
      }

      return NextResponse.json(
        {
          error: data.detail || "Failed to subscribe",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
