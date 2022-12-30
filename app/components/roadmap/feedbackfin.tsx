const FeedbackFin = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <button
        data-feedbackfin-button
        className="flex items-center bg-primary rounded-full px-6 h-12 text-white group"
      >
        Send feedback
      </button>
    </div>
  );
};

export default FeedbackFin;
