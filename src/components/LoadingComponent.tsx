import { Spinner } from "@nextui-org/react";

const LoadingComponent = ({ label }: { label?: string }) => {
  return (
    <div className="fixed inset-0 justify-center items-center">
      <Spinner
        label={label || "Loading..."}
        color="secondary"
        labelColor="secondary"
      />
    </div>
  );
};
export default LoadingComponent;
