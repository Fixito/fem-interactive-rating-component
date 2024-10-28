interface ThankYouCardProps {
  rating: number;
}

export default function ThankYouCard({ rating }: ThankYouCardProps) {
  return (
    <article className="max-w-[25.75rem] space-y-6 rounded-[0.9375rem] bg-[radial-gradient(#232A34,#181E27)] p-6 text-center">
      <div>
        <img
          src="/images/illustration-thank-you.svg"
          alt=""
          className="inline-block"
        />
      </div>
      <p className="inline-block rounded-full bg-subtle px-3 pt-1 text-brand">
        You selected {rating} out of 5
      </p>
      <div>
        <h2 className="text-heading-lg text-neutral">Thank you!</h2>
        <p className="text-body mt-2.5 text-subtle">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </article>
  );
}
