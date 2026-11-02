
import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const monthlyPriceId = process.env.STRIPE_MONTHLY_PRICE_ID;
    const yearlyPriceId = process.env.STRIPE_YEARLY_PRICE_ID;

    if (!secretKey || !monthlyPriceId || !yearlyPriceId) {
      return NextResponse.json(
        { error: "Stripe environment variables are missing." },
        { status: 500 }
      );
    }

    const stripe = new Stripe(secretKey);

    // Find out which plan the customer selected.
    const { plan } = await request.json();

    if (plan !== "monthly" && plan !== "yearly") {
      return NextResponse.json(
        { error: "Invalid subscription plan." },
        { status: 400 }
      );
    }

    // Match the plan to its Stripe price.
    const priceId =
      plan === "yearly" ? yearlyPriceId : monthlyPriceId;

    // Create a Stripe-hosted checkout session.
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      subscription_data:
        plan === "yearly"
          ? { trial_period_days: 7 }
          : undefined,
      success_url: `${new URL(request.url).origin}/settings?checkout=success`,
      cancel_url: `${new URL(request.url).origin}/choose-plan`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    return NextResponse.json(
      { error: "Unable to create checkout session." },
      { status: 500 }
    );
  }
}
