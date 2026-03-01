interface Section4Props {
  dressCodeParagraph: string;
}

export default function Section4({ dressCodeParagraph }: Section4Props) {
  return (
    <div className="container mx-auto mt-30 px-4">
      <h3 className="text-5xl mb-8">
        You're probably <br /> wondering...
      </h3>
      <div className="space-y-4">
        <div className="space-y-4">
          <h4 className="text-2xl">How do I get to the venue?</h4>
          <p>
            The venue is accessible by bus and car. You can find the exact
            address by searching "Willowblane Villas" on any online map. If you
            need a ride, include a note in your RSVP. Note: The venue is
            wheelchair accessible.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-2xl">What safety precautions are in place?</h4>
          <p>
            We've limited the number of guests for your safety and comfort.
            We're also requiring everyone to wear masks unless eating. If you're
            feeling unwell, please skip the ceremony; we totally understand and
            we can celebrate another time!
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-2xl">What is the dress code?</h4>
          <p>{dressCodeParagraph}</p>
        </div>
      </div>
    </div>
  );
}
