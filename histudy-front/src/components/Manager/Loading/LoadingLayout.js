import LoadingLottie from "../../LoadingLottie";

export default function LoadingLayout({ results, children }) {
  return (
    <>
      {results.some((result) => result.isLoading) ? (
        <LoadingLottie />
      ) : (
        <>{children}</>
      )}
    </>
  );
}
