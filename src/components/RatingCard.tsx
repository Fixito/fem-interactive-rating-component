interface RatingCardProps {
  onSubmit: (rating: number) => void;
}

export default function RatingCard({ onSubmit }: RatingCardProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const rating = Number(formData.get("rating"));
    if (!rating) return;
    onSubmit(rating);
  };

  return (
    <article className="max-w-[25.75rem] rounded-[0.9375rem] bg-[radial-gradient(#232A34,#181E27)] p-6">
      <div className="grid aspect-square h-10 place-items-center rounded-full bg-subtle">
        <img src="/images/icon-star.svg" alt="" />
      </div>
      <h2 className="text-heading-lg mt-4 text-neutral">How did we do ?</h2>
      <p className="text-body mt-2.5 text-subtle">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="mt-6 flex gap-[1.0625rem]">
          {[1, 2, 3, 4, 5].map((rating) => (
            <label
              key={rating}
              className="text-rating grid aspect-square h-[2.625rem] cursor-pointer place-items-center rounded-full bg-subtle text-subtle hover:bg-brand hover:text-subtle-hovered has-[:checked]:bg-subtle-hovered has-[:focus]:bg-brand has-[:checked]:text-subtle-hovered has-[:focus]:text-subtle-hovered"
            >
              <input
                type="radio"
                name="rating"
                value={rating}
                className="sr-only"
              />
              {rating}
            </label>
          ))}
        </div>
        <button className="text-heading-md w-full rounded-full bg-brand py-3.5 text-brand-inverse hover:bg-brand-hovered focus:bg-subtle-hovered focus:text-subtle-hovered">
          Submit
        </button>
      </form>
    </article>
  );
}
